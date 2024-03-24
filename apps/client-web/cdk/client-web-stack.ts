#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import "source-map-support/register";

export class ClientWebStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const bucket = new s3.Bucket(this, "StaticSiteBucket", {
            websiteIndexDocument: "index.html",
            websiteErrorDocument: "error.html",
            publicReadAccess: true,
            // removalPolicy: cdk.RemovalPolicy.DESTROY,
        });

        new s3deploy.BucketDeployment(this, "MyDeployment", {
            sources: [s3deploy.Source.asset("./build/")],
            destinationBucket: bucket,
        });

        new cloudfront.Distribution(
            this,
            "SiteDistribution",
            {
                defaultBehavior: {
                    origin: new origins.S3Origin(bucket),
                    viewerProtocolPolicy:
                        cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
                },
                // domainNames: [ configData.subDomain+'.' +  configData.domain],
                // certificate: certificate,
            }
        );
    }
}

const app = new cdk.App();
new ClientWebStack(app, "HiveMind-Client-Web-Stack", {
    env: {
        account: process.env.AWS_ACCOUNT_NUMBER,
        region: process.env.AWS_REGION,
    },
});

#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as origins from "aws-cdk-lib/aws-cloudfront-origins";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";
import "source-map-support/register";

export class ClientWebStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const siteBucket = new s3.Bucket(this, "StaticSiteBucket", {
            websiteIndexDocument: 'index.html',
            websiteErrorDocument: 'index.html',
            publicReadAccess: true,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            autoDeleteObjects: true,
            blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
            accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL,
        });

        const cloudfrontOAI = new cloudfront.OriginAccessIdentity(this, 'cloudfront-OAI', {
            comment: `OAI for ${siteBucket.bucketName}`,
        });

        siteBucket.addToResourcePolicy(
            new iam.PolicyStatement({
                actions: ['s3:GetObject'],
                resources: [siteBucket.arnForObjects('*')],
                principals: [
                    new iam.AnyPrincipal()
                ],
            }),
        );

        const distribution = new cloudfront.Distribution(this, 'SiteDistribution', {
            defaultRootObject: 'index.html',
            minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
            errorResponses: [
                {
                    httpStatus: 403,
                    responseHttpStatus: 403,
                    responsePagePath: '/error.html',
                    ttl: cdk.Duration.minutes(30),
                },
            ],
            defaultBehavior: {
                origin: new origins.S3Origin(siteBucket, {
                    originAccessIdentity: cloudfrontOAI,
                }),
                compress: true,
                allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
        });

        new s3deploy.BucketDeployment(this, 'DeployWithInvalidation', {
            sources: [s3deploy.Source.asset('./build/')],
            exclude: ['cdk/*', 'cdk.out/*', 'node_modules', 'package-lock.json', 'yarn.lock'],
            destinationBucket: siteBucket,
            distribution,
            distributionPaths: ['/*'],
        });
    }
}

const app = new cdk.App();
new ClientWebStack(app, "HiveMind-Client-Web-Stack", {
    env: {
        account: process.env.AWS_ACCOUNT_NUMBER,
        region: process.env.AWS_REGION,
    },
});

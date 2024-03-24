#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import 'source-map-support/register';

export class ClientWebStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      new cdk.aws_s3.Bucket(this, 'StaticSiteBucket', {
      });
    }
  }

const app = new cdk.App();
new ClientWebStack(app, 'HiveMind-Client-Web-Stack', {
  env: { account: process.env.AWS_ACCOUNT_NUMBER, region: process.env.AWS_REGION },
});
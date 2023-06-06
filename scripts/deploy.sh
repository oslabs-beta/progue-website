echo "Processing deploy.sh"
    # Set EB BUCKET as env variable
    EB_BUCKET=elasticbeanstalk-us-east-1-506029946825
    # Set the default region for aws cli
    aws configure set default.region us-east-1
    # Log in to ECR
    eval $(aws ecr get-login --no-include-email --region us-east-1)
    # Build docker image based on our production Dockerfile
    docker build -t kafkapraag/splash .
    # tag the image with the GitHub SHA
    docker tag kafkapraag/splash:latest public.ecr.aws/v8w6v4z1/splash:$GITHUB_SHA
    # Push built image to ECS
    docker push public.ecr.aws/v8w6v4z1/splash:$GITHUB_SHA
    # Use the linux sed command to replace the text '<VERSION>' in our Dockerrun file with the GitHub SHA key
    sed -i='' "s/<VERSION>/$GITHUB_SHA/" Dockerrun.aws.json
    # Zip up our codebase, along with modified Dockerrun and our .ebextensions directory
    zip -r splash-prod-deploy.zip Dockerrun.aws.json .ebextensions
    # Upload zip file to s3 bucket
    aws s3 cp splash-prod-deploy.zip s3://$EB_BUCKET/splash-prod-deploy.zip
    # Create a new application version with new Dockerrun
    aws elasticbeanstalk create-application-version --application-name "kafkaPRAAG splash" --version-label $GITHUB_SHA --source-bundle S3Bucket=$EB_BUCKET,S3Key=splash-prod-deploy.zip
    # Update environment to use new version number
    aws elasticbeanstalk update-environment --environment-name KafkaPRAAGsplash-env --version-label $GITHUB_SHA
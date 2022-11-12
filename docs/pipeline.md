### CICD

#### GitHub

commit and push code to the GitHub repository which is linked to the CircleCI platform will triggers the CircleCI platform

#### CircleCI

CircleCI use the `/udagram/udagram-api/.circleci/config.yml` file which tells the service what has to be done.

-   **Frontend**: Runs the `build` script given in the `package.json` file. Then uses AWS CLI to upload assets to S3.
-   **Server**: build, exports all environment variables from CircleCI configuration to a `.env` file, archive to a zipfile Then uses AWS CLI to upload archive to S3.

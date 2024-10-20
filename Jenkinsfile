pipeline {
    agent any
    options { disableConcurrentBuilds() }
    parameters {
        string(name: 'APP', defaultValue: 'moson-cloud-web', description: 'Application name.')
        choice(name: 'ENVIRONMENT', choices: ['dev', 'staging', 'production'], description: 'Select target environment.')
        booleanParam(name: 'RUN_SONARQUBE_ANALYSIS', defaultValue: false, description: 'Run SonarQube analysis?')
        booleanParam(name: "CLEAN", defaultValue: false, description: 'Clear build directory?')
    }
    environment {
        NODE_HOME = "/usr/local/bin/node"
        PATH = "${NODE_HOME}/bin:${PATH}"
        DEPLOY_BASE_PATH = '/var/www/html'
        DEPLOY_PATH = "${DEPLOY_BASE_PATH}/${APP}/${params.ENVIRONMENT}"
    }
    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Clean Workspace') {
            when { expression { params.CLEAN } }
            steps {
                sh 'rm -rf build/ || true'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('SonarQube Analysis') {
            when { expression { params.RUN_SONARQUBE_ANALYSIS } }
            steps {
                withSonarQubeEnv('SonarQube-Dev') {
                    sh 'npm run sonar-scanner -Dsonar.projectKey=${APP} -Dsonar.projectName=${APP} -Dsonar.projectVersion=1.0'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                        echo "Deploying React app to ${DEPLOY_PATH}"
                        # Ensure the directory exists
                        mkdir -p ${DEPLOY_PATH}

                        # Clear out the existing deployment
                        rm -rf ${DEPLOY_PATH}/*

                        # Copy the new build files to the deployment path
                        cp -r build/* ${DEPLOY_PATH}/

                        echo "Deployment complete to ${DEPLOY_PATH}."
                    '''
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline execution complete'
        }
    }
}

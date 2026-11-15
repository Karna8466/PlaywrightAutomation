
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        // 1. Checkout code from GitHub
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // 2. Verify Node.js and npm
        stage('Verify Node and npm') {
            steps {
                withEnv(['PATH+NODE=C:\\Program Files\\nodejs']) {
                    bat 'node --version'
                    bat 'npm --version'
                }
            }
        }

        // 3. Install project dependencies
        stage('Install Dependencies') {
            steps {
                withEnv(['PATH+NODE=C:\\Program Files\\nodejs']) {
                    bat 'npm ci'
                }
            }
        }

        // 4. Install Chromium browser
        stage('Install Playwright Browsers') {
            steps {
                withEnv(['PATH+NODE=C:\\Program Files\\nodejs']) {
                    bat 'npx playwright install chromium'
                }
            }
        }

        // 5. Execute Playwright tests
        stage('Run Playwright Tests') {
            steps {
                withEnv(['PATH+NODE=C:\\Program Files\\nodejs']) {
                    withCredentials([
                        usernamePassword(
                            credentialsId: 'amazon-login',
                            usernameVariable: 'EMAIL',
                            passwordVariable: 'PASSWORD'
                        )
                    ]) {
                        bat 'npx playwright test'
                    }
                }
            }
        }
    }

    post {

        // Archive reports and failure attachments
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright automation executed successfully!'
        }

        failure {
            echo 'Playwright execution failed. Check Console Output and test artifacts.'
        }

    }
}

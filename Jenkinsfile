
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install and Run Playwright') {
            steps {
                withEnv(['PATH+NODE=C:\\Program Files\\nodejs']) {

                    bat 'node --version'
                    bat 'npm --version'

                    bat 'npm ci'

                    bat 'npx playwright install chromium'

                    bat 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**',
                allowEmptyArchive: true
            )
        }

        success {
            echo 'Playwright tests executed successfully!'
        }

        failure {
            echo 'Playwright execution failed. Check console output.'
        }
    }
}

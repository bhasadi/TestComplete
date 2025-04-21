pipeline {
    agent any

    tools {
        nodejs "node"  // Ensure Node.js is installed in Jenkins
        allure "Allure"  // The name you assigned in the Global Tool Configuration
    }

    environment {
        TEST_RESULTS_DIR = "allure-results"
        ALLURE_REPORT_DIR = "allure-report"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies, including Allure and testing framework (Mocha)
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    // Run tests (adjust for your test framework, e.g., Mocha, Jest)
                    sh 'mocha --reporter mocha-allure-reporter'
                }
            }
        }

        stage('Generate Allure Report') {
            steps {
                script {
                    // Generate Allure report
                    sh 'allure generate $TEST_RESULTS_DIR --output $ALLURE_REPORT_DIR --clean'
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: '$ALLURE_REPORT_DIR']],
                    reportBuildPolicy: 'ALWAYS'
                ])
            }
        }
    }
}

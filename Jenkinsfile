pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/jeyakirthikavjk-bit/employee-management-.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Install Serve') {
            steps {
                bat 'npm install -g serve'
            }
        }

        stage('Run React App') {
            steps {
                bat 'npx --yes serve -s dist -l 3000'
            }
        }
    }

    post {
        success {
            echo 'React application built and served successfully!'
        }

        failure {
            echo 'React application build or serve failed!'
        }
    }
}
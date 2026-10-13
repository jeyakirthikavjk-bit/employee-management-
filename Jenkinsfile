pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
    }
    stage('install dependencies'){
        steps{
            bat 'npm install'
        }
    }
    stage('Build'){
        steps{
            bat 'npm run build'
        }
    }

}
post{
    success{
        echo 'Build completed successfully!'
    }
    failure{
        echo 'Build failed!'
    }
}
}
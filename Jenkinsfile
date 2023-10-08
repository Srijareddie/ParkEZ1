pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/yourusername/yourrepository.git']]])
            }
        }

        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }

        stage('Build and Deploy Backend') {
            steps {
                sh 'cd backend && pip install -r requirements.txt && python main.py'
            }
        }

        stage('Database Migration') {
            steps {
                sh 'cd backend && alembic upgrade head'
            }
        }

        stage('Open Application') {
            steps {
                script {
                    sh 'xdg-open http://your-ec2-instance-ip:your-frontend-port'
                }
            }
        }
    }
}


    post {
        success {
            echo 'Build and deployment were successful!'
        }
        failure {
            echo 'Build or deployment failed.'
            }
         }
 }


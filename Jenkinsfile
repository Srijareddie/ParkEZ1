pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Srijareddie/PE.git']]])
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
                    sh 'xdg-open http://3.145.189.4:3000'
                }
            }
        }

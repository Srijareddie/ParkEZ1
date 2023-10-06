    pipeline {
    agent any
    
    stages {
        stage('Setup Node.js') {
    steps {
        sh 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && "$NVM_DIR/nvm.sh"'
        sh 'nvm install node'
        sh 'npm install -g npm'  // Update npm
    }
}
stage('Update npm') {
    steps {
        sh 'npm install -g npm@latest'
    }
}

        stage('Checkout Frontend') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Srijareddie/PE.git']]])
                }
            }
        }
        
        stage('Build Frontend') {
            steps {
                sh 'cd frontend && npm install && npm run build'
            }
        }
        
        stage('Checkout Backend') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: 'main']], userRemoteConfigs: [[url: 'https://github.com/Srijareddie/PE.git']]])
                }
            }
        }
        
        stage('Database Migration') {
            steps {
                sh 'python backend/manage.py migrate'  // Run database migrations
            }
        }
        
        stage('Database Seed') {
            steps {
                sh 'python backend/manage.py seed'  // Seed the database with initial data
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

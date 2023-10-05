pipeline
{

   agent {
  label 'DevServer'
}
   tools{
    nodejs 'node'
   }
    stages
    {
      stage('Install and Build Frontend') {
            steps {
                dir('frontend') {  // Change directory to 'frontend'
                    sh 'npm install'
                    sh '''
                        unset CI
                        npm run build
                    '''
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'cp -r frontend/build/* /home/ec2-user/parkez/dev/frontend/'
            }
        }

        stage('Deploy Backend') {
            steps {
                sh 'cp -r backend/* /home/ec2-user/parkez/dev/backend/'
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

pipeline {
    agent any
    environment {
        registry = 'sevgulnl/snl-mean-books'
        HOME = '.'
    }
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:16'
                }
            }
            steps {
                sh 'npm install'
                //sh 'npm run build'
                //sh 'echo build will be implemented'
            }
        }
        stage('Test') {
            //agent {
            //    docker {
            //        image 'node:16'
            //    }
            //}
            steps {
                //sh 'npm run test'
                sh 'echo test will be implemented'
            }
        }
        stage('Publish') {
            environment {   registryCredential = 'dockerhub'  }
            steps {
                script {
                    //sh 'docker stop $(docker ps -aqf "name=sevgulnl/snl-vue") && docker container prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'
                    //sh 'docker image prune -f -v $(docker ps -aqf "name=sevgulnl/snl-vue")'

                    def appimage = docker.build registry + ":$BUILD_NUMBER"
                    docker.withRegistry( '', registryCredential ) {
                        appimage.push()
                        appimage.push('latest')
                    }

                    sh 'docker container rm mean-books --force'
                    sh 'docker run -dp 3000:3000 --name mean-books sevgulnl/snl-mean-books'
                }
            }
        }
    //stage('Run') {
    //   steps {
    //        script {
    //            sh 'docker run -d -p 2200:80 --rm --name etic-draft sevgulnl/react-etic-draft'
    //        }
    //    }
    //}
    }
}

pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/arsalanahmad123/learning-CICD'
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build || echo "No build script"'
            }
        }
    }
}

node {
    env.NODEJS_HOME = "${tool 'Node 9.2.0'}"
    // on linux / mac
    env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
    // on windows
    env.PATH="${env.NODEJS_HOME};${env.PATH}"
    sh 'npm --version'
    
    stage('DL') {
      checkout scm
      sh 'npm install'
    }

    stage('Test') {
      sh 'npm test'
    }
}

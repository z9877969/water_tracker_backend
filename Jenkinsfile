@Library('jenkins-common')_
 
node("nodejs"){
    stage('Load credentials') {
        withCredentials([
            string(credentialsId: 'goit_jenkins_build_bot_api_key', variable: 'telegramNotifyChannelBotApiToken'),
            string(credentialsId: 'goit_jenkins_build_chat_id', variable: 'telegramNotifyChannelChatId'),

            //add ssh credential for student-backend server
            string(credentialsId: 'ssh_user_host_for_stud-backend_server', variable: 'sshUserAndHost')
        ]) {
                env.telegramNotifyChannelBotApiToken = telegramNotifyChannelBotApiToken;
                env.telegramNotifyChannelChatId = telegramNotifyChannelChatId;
            
                env.sshUserAndHost = sshUserAndHost;

                env.githubUrl = 'git@github.com:goitProjects/water_traker_backend.git'; 
        }
    }
    
    stage('Setup texts') {
        def buildUrl = env.RUN_DISPLAY_URL;
        
        env.startBuildText = java.net.URLEncoder.encode("Build *${JOB_NAME}* started\n[Go to build](${buildUrl})", "UTF-8");
        env.successBuildText = java.net.URLEncoder.encode("Build *${JOB_NAME}* finished SUCCESS.\nTime: TIME\n[Go to build](${buildUrl})", "UTF-8");
        env.failedBuildText = java.net.URLEncoder.encode("Build *${JOB_NAME}* FAILED.\nTime: TIME\n[Go to build](${buildUrl})", "UTF-8");
    }
    
    stage('Pre Build Notify') {
        //Send message to channel
        sendTelegramChannelMessage(
            env.telegramNotifyChannelBotApiToken,
            env.telegramNotifyChannelChatId,
            env.startBuildText
        );

    }
    
    stage('Clone Git Repo') {
        catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
            git branch: 'main', credentialsId: 'pasha-goitacad-ssh', url: env.githubUrl
        }
    }
        
    stage('Build'){
        def success = 'SUCCESS'.equals(currentBuild.currentResult);

        if (success) {
            catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                sh "npm i"
            }
        }
    }
    
    stage('Deploy') {
         def success = 'SUCCESS'.equals(currentBuild.currentResult);

        if (success) {
            catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                //sent files to  slimmom-backend.goit.global
                sh "scp -r ./* ${env.sshUserAndHost}:/root/water-traker_backend"
            }
        }
    }

    stage('Post Build Notify') {
        def success = 'SUCCESS'.equals(currentBuild.currentResult);
        def previousBuildSuccess = true;
        if (currentBuild.previousBuild != null && !'SUCCESS'.equals(currentBuild.previousBuild.currentResult)) {
            previousBuildSuccess = false;
        }
        
        def message = '';
        if (success) {
            message = env.successBuildText;
        } else {
            message = env.failedBuildText;
        }
        
        //Calculate time
        def durationSeconds = (int) (currentBuild.duration / 1000);
        def durationMinutes = (int) (durationSeconds / 60);
        durationSeconds -= durationMinutes * 60;
        
        message = message.replace('TIME', "${durationMinutes} min ${durationSeconds} sec");
        
        //Send message to global notify channel
        sendTelegramChannelMessage(
            env.telegramNotifyChannelBotApiToken,
            env.telegramNotifyChannelChatId,
            message
        )
        
    }
}
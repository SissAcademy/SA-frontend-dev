#!/bin/bash
openssl aes-256-cbc -K $encrypted_5f0e76b6d918_key -iv $encrypted_5f0e76b6d918_iv -in deploy_rsa.enc -out /tmp/deploy_rsa -d
eval "$(ssh-agent -s)" # Start ssh-agent cache
chmod 600 /tmp/deploy_rsa # Allow read access to the private key
ssh-add /tmp/deploy_rsa # Add the private key to SSH
q
ssh -o "StrictHostKeyChecking no" $DEPLOY_USER@$FRONTEND_SERVER <<EOF
  cd SA-frontend-dev/
  git checkout -- .
  git checkout deploy
  git pull
  npm install
  npm restart;
EOF
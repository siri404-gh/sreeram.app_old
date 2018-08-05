const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'https://sonarcloud.io',
  token: process.env.SONAR_TOKEN,
  options: {
    'sonar.organization': 'sreerampr-github',
    'sonar.exclusions': 'mycache'
  },
}, () => console.log('Sonar Analysis done'));

# Netpresenter Viewer 2
### Webviewer for Netpresenter
Designed for the Electrotechnische Vereeniging.

## Setup (local/testing)
- Clone repo `$ git clone https://github.com/danielkappelle/netpresenter-viewer-2`
- Install node packages (inside root directory) `$ npm install`
- Install bower packages (in `/client`)
`$ bower install`
- Install node packages (in `/client`)
`$ npm install`
- (If you don't have grunt-cli installed) `# install -g grunt-cli`
- Run grunt (in `/client`) `$ grunt`
- Run server (from root directory) `$ node server/server.js`

## Deployment
- Install PM2 locally and on remote
- Edit `ecosystem.json` to match the host, user, path, etc
- Make sure everything is commited and pushed
- (first time only: `$ pm2 deploy development|production setup`)
- Deploy: `$ pm2 deploy development|production`

## TODO
- ~~Verify netpresenter URL~~
- ~~Change settings~~
- ~~Automatically update~~
- ~~Change to Node.js~~
- ~~Setup GRUNT~~
- Accept YouTube videos

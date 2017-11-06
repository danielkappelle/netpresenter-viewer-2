# Netpresenter Viewer 2
### Webviewer for Netpresenter
This is a webviewer for Netpresenter, used at TU Delft (Delft University of Technology). The reason is that the available Netpresenter software runs only on Windows machines (i386/x64) and we needed it to run on a Raspberry Pi (ARM).

Although it is intended for use by the Electrotechnische Vereeniging (ETV), it can be used to view any channel. Use the settings button in the lower right corner to choose a channel. The default channel can be changed as well by changing `$scope.channels = ['ETV_computers'];` on line 8 of `client/js/controller.js`.

An example is running on [netpresenter.etv.tudelft.nl](https://netpresenter.etv.tudelft.nl).

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

Test

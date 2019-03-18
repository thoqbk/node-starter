const chai = require('chai');
const expect = require('chai').expect;
const _ = require('lodash');

chai.use(require('chai-http'));

let app = null; // Our app
var agent = null;

describe('Test user API', function() {
    this.timeout(5000); // How long to wait for a response (ms)
    
    before(async function() {
        app = await require('../app.js')();
        agent = chai.request.agent(app);
    });
    
    after(async function() {
        await agent.close();
    });

    it('simple test here', async function() {
        let response = await agent.get('/api/users/who-am-i');
        expect(response.body.success).to.equal(true);
    });
});

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
 
    core.notice('This is a message printed from core.notice');

    console.log('This one comes from console.log');
}

run();
const { Module } = require("module");

class myclass
{
    constructor()
    {
        console.log('constrcutor called');

    }
    add(arg1,arg2)
    {
        return arg1+arg2;
    }
}
module.exports = myclass;

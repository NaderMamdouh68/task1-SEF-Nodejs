const yargs = require('yargs');
const opirations = require('./functions');


yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        id: {
            describe: 'ID',
            demandOption: true,
            type: 'number'
        },
        fname: {
            describe: 'First name',
            demandOption: true,
            type: 'string'
        },
        lname: {
            describe: 'Last name',
            demandOption: true,
            type: 'string'
        },
        age: {
            describe: 'Age',
            demandOption: true,
            type: 'number'
        },
        city: {
            describe: 'City',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        try {
            opirations.Add(argv.id, argv.fname, argv.lname, argv.age, argv.city);
        } catch (e) {
            console.log('Error: ' + e.message);
        }
        console.log('User added!');
    }
});

yargs.command({
    command: 'add ten',
    describe: 'Add ten users',
    handler: () => {
        try {
            opirations.AddTen();
        } catch (e) {
            console.log('Error: ' + e.message);
        }
        console.log('Ten users added!');
    }
});

yargs.command({
    command: 'delete',
    describe: 'Delete a user',
    builder: {
        id: {
            describe: 'ID',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        try {
            opirations.Remove(argv.id);
        } catch (e) {
            console.log('Error: ' + e.message);
        }
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a user',
    handler: (argv) => {
        try {
            opirations.Read(argv.id);
        } catch (e) {
            console.log('Error: ' + e.message);
        }
    }
});

yargs.command({
    command: 'list',
    describe: 'List fnames and ages and cities of all users',
    handler: () => {
        try {
            opirations.List();
        } catch (e) {
            console.log('Error: ' + e.message);
        }
    }
});




yargs.parse();
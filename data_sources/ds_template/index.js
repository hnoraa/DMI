const net = require('net');
const config = require('./config.json');
const tcp = new net.createServer();
const pkg = require('../package.json');

// set up listener
tcp.listen(config.port, () => {
    console.log(`TCP Server listening on ${config.port}`);
});

tcp.on('connection', (socket) => {
    console.log('Client connection established');

    // send message to the client
    //socket.write('DMI TCP Service is listening');

    // receive data from client
    socket.on('data', (chunk) => {
        // post to API
        console.log(`Client sent: ${chunk.toString()}`);

        switch(chunk.toString().toLowerCase()) {
            case 'read':
                socket.write('READ returned...');
                break;
            case 'info':
                socket.write(JSON.stringify(pkg));
                break;
            case 'version':
                socket.write(config.version);
                break;
            case 'time':
                socket.write((new Date().getTime()));
                break;
            default:
                socket.write('command not found!');
                break;
        }
    });

    // client disconnect
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    // on error
    socket.on('error', (err) => {
        console.error(`Error: ${err}`);
    });
});
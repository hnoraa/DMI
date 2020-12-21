const net = require('net');

const config = require('./config.json');

/*
const tcp = new net.createServer();

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
            default:
                socket.write('empty message...');
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
*/
const tcp = new net.Socket();

// connect to the server
tcp.connect({ port: config.port, host: config.host }, () => {
    // write to a server
    tcp.write('test');
});

// on data received
tcp.on('data', (chunk) => {
    console.log(`Data received from the server: ${chunk.toString()}.`);
    tcp.end();
});

tcp.on('end', () => {
    console.log('Requested an end to the TCP connection');
});
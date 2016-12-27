/**
 * socket service
 * @stone
 * GNU Licensed
 */

'use strict';

const io = require('socket.io-client');
class SocketService {
    constructor (hostname, port) {
        this.socket = io.connect(`http://${hostname}:${port}`);
    }
    register (action, data) {
        this.socket.emit('register_action', { action : action, data : data });
    }
    apply (action, callback) {
        this.socket.on(action, data => {
            callback(data);
        });
    }
}

module.exports = SocketService;

module.exports = function (io) {
    io.on('connection', function (socket) {
        console.log('socket connection')

        io.emit('server', "abc in file");
    
        socket.on('SEND_MSG', function (data) {
            console.log('client sent:' + data)
        })
    })


}
module.exports = function (RED) {
    "use strict";
    function Pipe1Node(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            msg.payload.total = msg.payload.total>0?msg.payload.total:msg.payload.amount;
            msg.payload.steps.push('Pipe 1 apply Tax: '+msg.payload.tax +' to: ' +msg.payload.total +' = '+msg.payload.total*msg.payload.tax);
            msg.payload.total = msg.payload.total*msg.payload.tax;
            node.send(msg);
        });
    }
    RED.nodes.registerType("pipe1", Pipe1Node);
};

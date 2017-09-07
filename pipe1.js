module.exports = function (RED) {
    "use strict";
    function Pipe1Node(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            var tax = msg.tax;
            node.send(msg);
        });
    }
    RED.nodes.registerType("pipe1", Pipe1Node);
};

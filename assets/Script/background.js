cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
   update: function (dt) {
    this.node.y -= 1;
    if(this.node.y == -926){
        this.node.y = 28;
    }
    },
});

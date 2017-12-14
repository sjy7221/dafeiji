var diji = require('')

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {

    },


 update: function (dt) {
    this.node.y+=10;
  if(this.node.y > 700){
    this.node.destroy();
  }
   },
});

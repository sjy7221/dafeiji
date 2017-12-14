
var com = require('label');  
cc.Class({
    extends: cc.Component,

    properties: {
      a:0, 
      speed:50,
    },
    
    // use this for initialization
    onLoad: function () {
    },

    setSpeed:function(sen){
      this.speed = sen;
    },

    update: function (dt) {
      // this.node.y-=  parseInt(Math.random()*10);
      this.node.y-= this.speed+0.5;
           if(this.node.y < -400){
      this.node.destroy();
           }
      },
      onCollisionEnter: function (other, self) {
      this.a += 1;
      
      other.node.destroy();
     
     var label =  cc.director.getScene().getChildByName('Canvas').getChildByName('int').getComponent(cc.Label);
    
    label.string = parseInt(label.string) + 2; 
      var anim = self.node.getComponent(cc.Animation);
    if(this.a == 1){
      anim.play();
    }
      // anim.play();
      
    //  this.node.destroy();


    },
    over:function(){
    this.node.destroy();
    }
});

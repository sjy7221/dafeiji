cc.Class({
    extends: cc.Component,

    properties: {
      a:0, 

    },

    // use this for initialization
    onLoad: function () {

    },

  
    update: function (dt) {
      // this.node.y-=  parseInt(Math.random()*10);
      this.node.y-= 1.2;
           if(this.node.y < -400){
      this.node.destroy();
           }
      },
      onCollisionEnter: function (other, self) {
      this.a += 1;
      other.node.destroy();
     
      var anim = self.node.getComponent(cc.Animation);
    if(this.a == 12){
        var label =  cc.director.getScene().getChildByName('Canvas').getChildByName('int').getComponent(cc.Label);
        
        label.string = parseInt(label.string) + 10; 
      anim.play();
    }
      // anim.play();
      
    //  this.node.destroy();


    },
    over:function(){
    this.node.destroy();
    }
});

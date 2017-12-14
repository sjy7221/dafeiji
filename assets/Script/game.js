cc.Class({
    extends: cc.Component,

    properties: {
      feiji:cc.Node,
      zhidan:cc.Prefab,
        diji:cc.Prefab,
        zfeiji:cc.Prefab,
        dfeiji:cc.Prefab,
    },

    // use this for initialization
    onLoad: function () {
        
    var manager = cc.director.getCollisionManager();
    manager.enabled = true;
        this.schedule(function() {
            let enemy = null;
         
                enemy = cc.instantiate(this.zhidan);
                enemy.parent =  cc.find('Canvas'); 
                enemy.x = this.feiji.x;
                enemy.y = this.feiji.y;
      
              
         
            enemy.parent =  cc.find('Canvas'); 
            enemy.x = this.feiji.x;
            enemy.y = this.feiji.y+10;
      
          
          // 将生成的敌人加入节点树
        }, .2);
        // var node = cc.instantiate(this.zhidan);
        var self = this;
        this.feiji.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
        if(this.x <= -182){
            this.x = -182;
        }else if(this.x >= 182){
            this.x = 182;
        }
        if(this.y>= 361 ){
            this.y = 361;
        }else if(this.y <= -361){
            this.y = -361;
        }
    
        }, this.feiji);
        this.schedule(function(){
            this.obob();
          
        },.8);
        this.schedule(function(){
          
            this.zhongfeiji();
        },3);
        this.schedule(function(){
            
              this.dafeiji();
          },8)
        // this.obob();
    //    this.parent = cc.find('Canvas/background');
    },


    update: function (dt) {
        // this.diji.y -=20;
       },

       obob:function(){
           var diji = null;
           var l =10;
           let b =  Math.random()*5; 
        
            diji = cc.instantiate(this.diji);
            
            diji.getComponent('diji').setSpeed(b)
            diji.parent = cc.find('Canvas');
            diji.x = 170 - parseInt(Math.random()*320);
            diji.y = 500;
     
       },
       
       zhongfeiji:function(){
        var diji = null;
        var l =10;
        let b =  Math.random()*5; 
     
         diji = cc.instantiate(this.zfeiji);
         
         diji.getComponent('zdiji').setSpeed(b)
         diji.parent = cc.find('Canvas');
         diji.x = 160 - parseInt(Math.random()*320);
         diji.y = 500;
  
    },
    dafeiji:function(){
        var diji = null;
        var l =10;
        let b =  Math.random()*5; 
     
        diji = cc.instantiate(this.dfeiji);
        diji.getComponent();
       
         diji.parent = cc.find('Canvas');
         diji.x = 150 - parseInt(Math.random()*320);
         diji.y = 500;
    }
});

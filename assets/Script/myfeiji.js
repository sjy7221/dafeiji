cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {

    },

    onCollisionEnter: function (other, self) {

       self.node.destroy();
       var label =  cc.director.getScene().getChildByName('Canvas').getChildByName('int').getComponent(cc.Label);
       cc.sys.localStorage.setItem('label', label.string);
              cc.director.loadScene('over');
  
      }
});

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.circleRoot=new cc.Node();
        this.circleRoot.parent=this.node

        this.createMainCircle()
    },
    createMainCircle(){
        this.Const=require("Const");
        this.ec=require("EntireCircle");

        var arr=new Array(24).fill(15)
        var cfg1=this.ec.createCfg(this.Const.JieQi,arr);
        cfg1.innerRadius=280
        
        var node=require("EntireCircle").createCircle(cfg1);
        node.parent=this.circleRoot;
        node.rotation=360/24*9


        var arr2=new Array(12).fill(30)
        var cfg2=this.ec.createCfg(this.Const.DiZhi,arr2);
        cfg2.radius=280;
        
        var node=require("EntireCircle").createCircle(cfg2);
        node.rotation=90-360/24
        node.parent=this.circleRoot;
    }

    // update (dt) {},
});

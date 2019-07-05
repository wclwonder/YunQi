"use strict";
cc._RF.push(module, '5cff3/UrwxN1I9V/EYmGBG7', 'EntireCircle');
// Common/EntireCircle.js

"use strict";

var EntireCircle = {
        spineIndex: 1, //跟我画选择的动画
        needUpdate: function needUpdate() {},

        //创建默认的
        createCfg: function createCfg(names, datas) {
                var cfg = {};
                cfg.radius = 370;

                cfg.names = names;
                cfg.datas = datas;
                cfg.reverse = true;

                cfg.innerRadius = cfg.radius * 0.6;

                return cfg;
        },
        createCircle: function createCircle(cfg) {
                var node = new cc.Node();

                var a1 = 0;
                var a2 = 1;
                var r1 = cfg.radius;
                var r2 = cfg.innerRadius;
                var sep = 2 * Math.PI / cfg.datas.length;
                if (cfg.reverse) {
                        sep = -sep;
                }

                for (var i = 0; i < cfg.datas.length; ++i) {
                        this.drawSector(node, a1, a1 + sep, r1, r2, cfg.names[i]);
                        a1 += sep;
                }

                return node;
        },
        drawSector: function drawSector(parent, a1, a2, r1, r2, name) {
                var node = new cc.Node();
                var com = node.addComponent(cc.Graphics);
                node.parent = parent;

                com.strokeColor = cc.Color.BLACK;
                com.lineWidth = 2;

                com.moveTo(r1 * Math.cos(a1), r1 * Math.sin(a1));
                com.lineTo(r2 * Math.cos(a1), r2 * Math.sin(a1));
                com.arc(0, 0, r1, a1, a2, true);
                com.arc(0, 0, r2, a1, a2, true);

                com.moveTo(r1 * Math.cos(a2), r1 * Math.sin(a2));
                com.lineTo(r2 * Math.cos(a2), r2 * Math.sin(a2));

                com.stroke();

                var label = this.createLabel(node, name);

                var ma = (a1 + a2) / 2;
                label.rotation = -ma * 180 / Math.PI + 90;

                var rlabel = r1 * 0.9;
                label.setPosition(rlabel * Math.cos(ma), rlabel * Math.sin(ma));
        },
        createLabel: function createLabel(parent, name) {
                var node = new cc.Node();
                node.parent = parent;
                var com = node.addComponent(cc.Label);
                com.string = name;

                com.fontSize = 25;
                node.color = cc.Color.BLACK;

                return node;
        },

        load: function load() {}
};
EntireCircle.load();

module.exports = EntireCircle;

cc._RF.pop();
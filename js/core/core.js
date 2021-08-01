let vm = new Vue({
    el: '#container',
    data: {
        gameW: 1000,  // 游戏所在div的宽度
        gameH: 800,   // 游戏所在div的高度
        mapW: 120,     // 游戏地图每一格的宽度像素
        modelUrl: 'img/material/terrain', // 模型文件位置
        model: {
            normalFloor: {
                file: "floor.png", // 模型图片名
                fileX: 1,          // 使用的那块是横向第几个
                fileY: 1,        // 使用的那块是纵向第几个
                fileLength: 8,     // 宽度上有多少个方块，通过这个来计算截取
            }
        },
        map: {
            
        },
        player: {
            placeX: 1,
            placeY: 1,
            file: 'img/material/people/main.png',
            playerStatus: 1,
            playerAniStatus: 2,
            isMove: true,
            time: 0,
        }
    },
    methods: {
        // TODO 这个初始化地图应该可以有更多的选项
        /**
         * 创建地图
         * @param {String} name 地图名字
         * @param {Number} width 地图宽度（格子数量）
         * @param {Number} height 地图高度（格子数量）
         * @param {Object} model 地图每一格的材质
         */
        createMap(name, width, height, model) {
            // 数据正确性判断
            if(arguments.length != 4) {
                throw '请传入正确数量的参数！';
            }
            if(this.map[name]) {
                throw '请不要创建一个已经存在的地图！如果需要修改该地图信息，请调用updateMap()'
            }
            if(!(typeof (model) == 'object' && Object.prototype.toString.call(model).toLowerCase() == "[object object]")) {
                throw '请传入Object的model属性，它应该有file、fileX、fileY、fileLength四个值。您可以通过createModel方法来创建属性，然后在this.data.model里找到它。'
            }
            // 创建地图
            let map = [];
            for(let i = 0; i < width*height; i++) {
                map.push({
                    placeX: (i % width) + 1,
                    placeY: Math.floor(i / width) + 1,
                    model: model,
                    isMove: true,
                })
            }
            // this.map[name] = map;
            Vue.set(this.map, name, map);
            // this.$forceUpdate();
        },
        // TODO
        updateMap() {
            return ;
        },
        // TODO
        createModel() {
            return ;
        },
        // TODO 缺少障碍物检测
        playerMove(direction, time) {
            // 只有在可移动的情况下才能移动
            if(this.player.isMove) {
                this.player.time = time;
                this.player.isMove = false;
                if(direction == 'left') {
                    this.player.playerStatus = 2;
                    this.player.placeX--;
                    console.log('开始往左走');
                }
                else if(direction == 'right') {
                    this.player.playerStatus = 3;
                    this.player.placeX++;
                    console.log('开始往右走');
                }
                else if(direction == 'up') {
                    this.player.playerStatus = 4;
                    this.player.placeY--;
                    console.log('开始往上走');
                }
                else if(direction == 'down') {
                    this.player.playerStatus = 1;
                    this.player.placeY++;
                    console.log('开始往下走');
                }
                // else {
                //     throw '请输入正确的方向！正确的输入应该为left, right, up和down四个中的一个'
                // }
                let that = this;
                setTimeout(() => {
                    that.player.playerAniStatus = 1;
                }, time/4);
                setTimeout(() => {
                    that.player.playerAniStatus = 2;
                }, time*2/4);
                setTimeout(() => {
                    that.player.playerAniStatus = 3;
                }, time*3/4);
                setTimeout(() => {
                    that.player.playerAniStatus = 2;
                    that.player.isMove = true;
                    console.log('走完了')
                }, time);
            }
        }
    },
    mounted() {
        let that = this;
        this.createMap('test', 10, 10, this.model.normalFloor);
        window.onkeydown = function(e) {
            if(e.keyCode == 37) {
                that.playerMove('left', 300);
            }
            if(e.keyCode == 38) {
                that.playerMove('up', 300);
            }
            if(e.keyCode == 39) {
                that.playerMove('right', 300);
            }
            if(e.keyCode == 40) {
                that.playerMove('down', 300);
            }
        }

    }
})
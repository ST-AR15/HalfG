let vm = new Vue({
    el: '#container',
    data: {
        blankWidth: 9,   // 没个方块的宽高,单位vmin
        character: {
            placeX: 15,        // 角色的X坐标
            placeY: 15,        // 角色的Y坐标
            model: "main.png", // 角色的贴图文件名（这些图片都在img/material/people里）
        },
        map: [  // map是地形
            {
                placeX: 1,  // 贴图的X坐标
                placeY: 1,  // 贴图的Y坐标
                model: {    // 模型信息
                    file: "floor.png",  // 模型文件（这些图片都在img/material/terrain里）
                    fileX: 3,  // 贴图横向第几块
                    fileY: 13,  // 贴图纵向第几块
                    fileMaxLength: 16, // 贴图长的那边有多少个图。通过这个来截取
                },
                isMove: true, // 角色是否可以移动在这里（只考虑地图。因为如果这里放了别的东西阻止移动会写在那个地方）
                // Fun 传入角色在这块上可以触发的函数
            },
            {
                placeX: 2,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 4,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
            {
                placeX: 3,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 3,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
            {
                placeX: 4,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 4,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
            {
                placeX: 5,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 3,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
            {
                placeX: 6,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 4,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
            {
                placeX: 7,
                placeY: 1,
                model: {
                    file: "floor.png",
                    fileX: 3,
                    fileY: 13,
                    fileMaxLength: 16,
                },
            },
        ],
        interactive: [ // interactive是可交互地点，这些地方的地形不能移动
            {
                placeX: 1,
                placeY: 1,
                model: {
                    file: "people/WuQing.png", // 模型文件（这些图片都在img/material里，可能会在不同文件夹)
                    fileX: 1,
                    fileY: 1,
                },
                Fun: "",  // 交互后执行的函数
            }
        ],
    },
    methods: {

    }
})
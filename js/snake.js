class Snake {
    constructor(map, food) {
        this.data = [{
                x: 6,
                y: 4,
                color: "green"
            },
            {
                x: 5,
                y: 4,
                color: "white"
            },
            {
                x: 4,
                y: 4,
                color: "white"
            },
            {
                x: 3,
                y: 4,
                color: "white"
            },
            {
                x: 2,
                y: 4,
                color: "white"
            }
        ]
        this.map = map
        this.food = food
        this.direction = "right"
        this.map.setData(this.data)
    }
    //移动
    move() {
        let i =this.data.length-1
        this.lastData = {
            x:this.data[i].x,
            y:this.data[i].y,
            color:this.data[i].color
        }
        //让后面每一格到前一格位置
        for(i;i>0;i--){
            this.data[i].x = this.data[i-1].x
            this.data[i].y = this.data[i-1].y
        }
        //根据方向移动
        switch (this.direction) {
            case "left":
                this.data[0].x--
                break;
            case "right":
                this.data[0].x++ 
                break;
            case "top":
                this.data[0].y--
                break;
            case "bottom":
                this.data[0].y++ 
                break;
        }
    }
    //改变方向
    changeDir(dir){
        //如果正在左右移动，只能修改为上下移动
        if(this.direction==="left"||this.direction==="right"){
            if(dir==="left"||dir==="right"){
                return false
            }
        }else{
            //如果正在上下移动 只能修改为左右移动
            if(dir==="top"||dir==="bottom"){
                return false
            }
        }
        this.direction = dir
        return true
    }
    //吃食物变大
    eatFood(){
        this.data.push(this.lastData)
    }
}
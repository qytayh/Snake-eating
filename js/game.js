class Game{
    constructor(ele,rect){
        this.map = new Map(ele,rect)
        this.food = new Food(this.map)
        this.snake = new Snake(this.map,this.food)
        this.map.render()
        this.timer = 0;
        this.interval = 200;
        this.keyDown = this.keyDown.bind(this)
        this.control()
    }
    //控制移动
    move(){
        this.stop()
        this.timer = setInterval(()=>{
            this.snake.move() //蛇移动
            this.map.clearData()
            this.map.setData(this.snake.data)
            this.map.setData(this.food.data)
            this.map.render()
        },this.interval)
    }
    start(){
        if(this.timer) return
        this.move()
    }
    stop(){
        clearInterval(this.timer)
    }
    //是否结束
    isOver(){

    }
    //游戏结束
    over(){

    }
    keyDown({keyCode}){
        switch(keyCode){
            case 37:
                this.snake.changeDir("left");
                break;
            case 38:
                this.snake.changeDir("top");
                break;
            case 39:
                this.snake.changeDir("right");
                break;
            case 40:
                this.snake.changeDir("bottom");
                break;
        }
    }
    //控制器
    control(){
        if(this.toControl){
            this.toControl()
            return
        }
        window.addEventListener("keydown",this.keyDown)
    }
    //用户自己添加控制
    addControl(fn){
        fn.call(this)
        window.removeEventListener("keydown",this.keyDown)
    }

    
}
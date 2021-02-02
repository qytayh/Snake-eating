class Game {
    constructor(ele, rect) {
        this.map = new Map(ele, rect)
        this.food = new Food(this.map)
        this.snake = new Snake(this.map, this.food)
        this.map.render()
        this.timer = 0;
        this.grade = 0
        this.interval = 200;
        this.pause=false
        this.keyDown = this.keyDown.bind(this)
        this.control()
    }
    //控制移动
    move() {
        this.stop()
        this.timer = setInterval(() => {
            this.snake.move() //蛇移动
            this.map.clearData()
            if (this.isEat()) {
                this.grade++
                this.changeGrade(this.grade);
                this.snake.eatFood();
                this.food.create();
                this.interval = this.interval * .9
                this.stop();
                this.start();
            }
            if(this.isOver()){
                this.over()
                return
            }
            this.map.setData(this.snake.data)
            this.map.setData(this.food.data)
            this.map.render()
        }, this.interval)
    }
    //判断是否吃到事物
    isEat() {
        return (this.snake.data[0].x === this.food.data.x) && (this.snake.data[0].y === this.food.data.y)
    }
    start() {
        this.move()
    }
    stop() {
        clearInterval(this.timer)
    }
    setStatues(){
        if(this.pause){
            this.pause=false
            this.start()
        }else{
            this.pause=true
            this.stop()
        }
    }
    //是否结束
    isOver() {
        if(this.pause) return true
       //判断是否出界
        if (this.snake.data[0].x < 0 || this.snake.data[0].x >= this.map.cells ||
            this.snake.data[0].y < 0 ||
            this.snake.data[0].y >= this.map.rows) {
            return true;
        }
        //判断是否撞到自己
        for(let i=1;i<this.snake.data.length;i++){
            if(this.snake.data[0].x===this.snake.data[i].x&&
                this.snake.data[0].y===this.snake.data[i].y){
                    return true
                }
        }
        return false
    }
    //游戏结束
    //0 中间停止  
    over() {
        this.stop()
    }
    keyDown({keyCode}) {
        switch (keyCode) {
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
    control() {
        if (this.toControl) {
            this.toControl()
            return
        }
        window.addEventListener("keydown", this.keyDown)
    }
    //用户自己添加控制
    addControl(fn) {
        fn.call(this)
        window.removeEventListener("keydown", this.keyDown)
    }
    //分数改变
    changeGrade(grade) {
        this.grade = grade
        document.querySelector('.grade').innerHTML = `分数：${this.grade}`
    }
}
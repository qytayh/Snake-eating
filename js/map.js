class Map{
    constructor(ele,rect=10){
        this.ele = ele
        this.rect = rect
        this.data = []
        this.rows = Math.ceil(Map.gerStyle(ele,"height")/rect) //向上取整
        this.cells = Math.ceil(Map.gerStyle(ele,"width")/rect)
        Map.setStyle(ele,"height",this.rows*rect)
        Map.setStyle(ele,"width",this.cells*rect)
    }
    static gerStyle(el,attr){
        return parseFloat(getComputedStyle(el)[attr])
    }
    static setStyle(el,attr,val){
        el.style[attr]=val+'px'
    }
    setData(newData){
        this.data = this.data.concat(newData)
        this.render()
    }
    clearData(){
        this.data.length = 0;
    }
    include({x,y}){
        return this.data.some(item=>{
            item.x==x&&item.y
        })
        // return !!this.data.find(item=>{  取反再取反 转boolean型
        //     item.x==x&&item.y
        // })
    }
    render(){
        this.ele.innerHTML = this.data.map(item =>{
            return `
                    <span style="position:absolute;
                    left:${item.x*this.rect}px;
                    top:${item.y*this.rect}px;
                    width:${this.rect}px;
                    height:${this.rect}px;
                    background:${item.color};"></span>
            `
        }).join("")
    }
}
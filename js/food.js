class Food{
    constructor(map,colors=["red","blue","yellow","pink"]){
        this.map=map
        this.colors=colors
        this.data = null
        this.create()
    }
    create() {
        let x = Math.floor(Math.random()*this.map.cells)
        let y = Math.floor(Math.random()*this.map.rows)
        let color = this.colors[parseInt(Math.random(this.colors.length))]
        this.data = {x,y,color}
        if(this.map.include(this.data)){
            this.create()
        }else{
            this.map.setData(this.data)
        }
    }
}
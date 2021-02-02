class Food{
    constructor(cells=10,rows=10,colors=["red","blue","yellow","pink"]){
        this.cells=cells
        this.rows=rows
        this.colors=colors
        this.data = null
        this.create()
    }
    create() {
        let x = Math.floor(Math.random()*this.cells)
        let y = Math.floor(Math.random()*this.rows)
        let color = this.colors[parseInt(Math.random()*this.colors.length)]
        this.data = {x,y,color}
    }
}
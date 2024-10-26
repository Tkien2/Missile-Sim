const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

export class Shape{
    constructor(x, y, color, vx, vy){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.color = color
    }
    ConstantMotion(angle, speed){
        angle = Math.PI/180*angle //Js nhận góc đơn vị radian
        this.y -= Math.cos(angle)*speed //Kề = cos(a)*Huyền
        this.x += Math.sin(angle)*speed //Đối = sin(a)*Huyền
    }
}
// Tính kế thừa đó :)
export class Rect extends Shape{
    constructor(x, y, width, height, color){
        super(x, y, color, 0, 0)
        this.width = width
        this.height = height
    }
    createRect(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
export class Circle extends Shape{
    constructor(x, y, r, color){
        super(x, y, color, 0, 0)
        this.r= r
    }
    createCircle(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
    }
}
export class World{
    constructor(){
        this.g = 0.5
    }
}

export class Uranium235 extends Circle{
    constructor(x, y){
        super(x, y, 15, "lightBlue")
    }
}
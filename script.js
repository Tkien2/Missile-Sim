const canvas = document.getElementById("screen")
const ctx = canvas.getContext("2d")

class Shape{
    constructor(x, y, color, vx, vy, speed){
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.color = color
        this.angle = 0
        this.speed = speed
    }
    ConstantMotion(){
        const a = Math.PI/180*this.angle //degree -> rad
        this.y -= Math.cos(a)*this.speed
        this.x += Math.sin(a)*this.speed
        if(this.angle>180){
            this.angle = (this.angle-360)
        }
    }
}
class Rect extends Shape{
    constructor(x, y, width, height, color){
        super(x, y, color, 0, 0, 0)
        this.width = width
        this.height = height
    }
    createRect(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
class Circle extends Shape{
    constructor(x, y, r, color){
        super(x, y, color, 0, 0, 0)
        this.r= r
    }
    createCircle(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fillStyle = this.color
        ctx.fill()
        this.ConstantMotion()
    }
    isCollidedRect(objectName){ //Rectangle only
        let distance = Math.abs(objectName.x - this.x)
        if (distance <= objectName.width + this.r){
            return true
        }
        else{
            return false
        }
    }
    isCollidedCircle(objectName){
        let distance = Math.sqrt(Math.pow((this.x - objectName.x), 2) + Math.pow((this.y - objectName.y),2))
        if(distance <= this.r + objectName.r){
            return true
        }
        else{
            return false
        }
    }
}
class Missile extends Circle{
    constructor(x, y){
        super(x, y, 10, "blue")
    }
    HomingAlgorithm(target, constantAngle){
        let d = Math.sqrt(Math.pow((this.x - target.x), 2) + Math.pow((this.y - target.y),2))
        let x = Math.abs(this.x - target.x)
        let y = Math.abs(this.y - target.y)
        let a = Math.acos((Math.pow(d,2)+Math.pow(y,2)-Math.pow(x,2))/(2*d*y)) * (180/Math.PI)
        if(this.y - target.y < 0){
            a = 180 - a
        }
        if(target.x - this.x  < 0){
            a = -a
        }
        document.querySelector(".angle").innerHTML = `a: ${Math.round(a*100)/100}`
        this.angle = a*2
    }
}
class Target extends Circle{
    constructor(x, y){
        super(x, y, 10, "red")
    }
}
const button = document.getElementById("run")
button.addEventListener("click", run)
let isRunning = false
let distance
function drawDistance(obj1, obj2){
    ctx.moveTo(obj1.x, obj1.y)
    ctx.lineTo(obj2.x, obj2.y)
    ctx.stroke();
    distance = Math.sqrt(Math.pow((obj1.x - obj2.x), 2) + Math.pow((obj1.y - obj2.y),2))
    document.querySelector(".distance").innerHTML = `Distance: ${Math.round(distance*100)/100}`
}


let missile1 = new Missile(200, 600)
let jetFighter = new Target(800, 300)
jetFighter.createCircle()
jetFighter.speed = 5
jetFighter.angle = -100
missile1.createCircle()
missile1.speed = 4
missile1.angle = 0
// Frame update
function update(){
    if(isRunning && !missile1.isCollidedCircle(jetFighter)){
        // Code here
        ctx.clearRect(0,0, canvas.width, canvas.height) //clear
        jetFighter.createCircle()
        missile1.createCircle()
        missile1.HomingAlgorithm(jetFighter, 20)
        jetFighter.angle += (Math.random()-0.5)*30 //Máy bay bay ngẫu nhiên
        drawDistance(missile1, jetFighter)
        requestAnimationFrame(update)
        console.log(missile1.isCollidedCircle(jetFighter))
    }
    else if(missile1.isCollidedCircle(jetFighter)){
        button.style.backgroundColor="rgb(138, 206, 240)"
        button.style.color="rgb(12, 98, 150)"
        isRunning = false
        alert("Hit!")
    }
}
// run
function run(){
    isRunning = !isRunning
    if(isRunning){
        button.style.backgroundColor="rgb(120, 245, 187)"
        button.style.color="rgb(29, 107, 71)"
    }
    else{
        button.style.backgroundColor="rgb(138, 206, 240)"
        button.style.color="rgb(12, 98, 150)"
    }
    update()
}


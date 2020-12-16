class Dustbin{

    constructor(x,y){


        this.x=x
        this.y=y
        this.dustbinwidth=200
        this.dustbinheight=100
        this.wallthickness=20
        this.angle=0
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.wallthickness,{isStatic:true})
        this.leftwallBody=Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        Matter.Body.setAngle(this.leftwallBody,this.angle)

        this.rightwallBody=Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.wallthickness,this.dustbinheight,{isStatic:true})
        Matter.Body.setAngle(this.rightwallBody,-1*this.Angle)
        World.add(world,this.bottomBody)
        World.add(world,this.leftwallBody)
        World.add(world,this.rightwallBody)
    }

    display(){

        var posbottom=this.bottomBody.position;
        var posleft=this.leftwallBody.position;
        var posright=this.rightwallBody.position;

    push()
    translate(posleft.x,posleft.y);
    rectMode(CENTER)
    angleMode(RADIANTS)
    rotate(this.angle)
    strokeWeight(3);
    fill(255,0,255)
    rect(0,0,this.wallthickness,this.dustbinheight)
    pop()

    push()
    translate(posright.x,posright.y);
    rectMode(CENTER)
    angleMode(RADIANTS)
    rotate(-1*this.angle)
    strokeWeight(3);
    fill(255,0,255)
    rect(0,0,this.wallthickness,this.dustbinheight)
    pop()

    push()
    translate(posbottom.x,posbottom.y);
    rectMode(CENTER)
    angleMode(RADIANTS)
    strokeWeight(3);
    fill(255,0,255)
    rect(0,0,this.dustbinwidth,this.dustbinheight)
    pop()


    }
}
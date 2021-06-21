class slingShot{
    constructor(bodyA,pointB){
    var options={
        bodyA:bodyA,
        pointB:pointB,
        stifness:0.4,
        length:10
    }

    this.pointB=pointB;
    this.sling=Constraint.create(options);
     World.add(world,this.sling);
    }

    display(){
        strokeWeight(4);
        var pointA=this.sling.bodyA.poistion;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
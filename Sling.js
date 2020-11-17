class Sling {
    constructor(bodyA,bodyB){
        var option={
            bodyA : bodyA,
            bodyB : bodyB,
            length : 10,
            stiffness : 0.5
        }
        this.sling=Matter.Constraint.create(option);
        World.add(world,this.sling);
    }
    display(){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.bodyB.position;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
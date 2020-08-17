class Chain {
    constructor(bodyA,pointB,offsetX,offsetY){
    this.offsetX =offsetX;
    this.offsetY =offsetY;
        var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.05,
       
        
    }
    this.rope=Constraint.create(options);
    
    World.add(world,this.rope)
    }
    display(){
        var posA = this.rope.bodyA.position
        var posB = this.rope.pointB.position
        strokeWeight(30)
        var Anchor1x = posA.x;
        var Anchor1y = posA.y;
        var Anchor2x = posB.x;
        var Anchor2y = posB.y;
        stroke("red")
        line(Anchor1x, Anchor1y, Anchor2x, Anchor2y)
    }
}
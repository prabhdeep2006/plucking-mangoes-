class Launcher {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.launch=Constraint.create(options);
        this.pointB=pointB;
        
        World.add(world,this.launch);
    }
    
    
        fly() {
        this.launch.bodyA = null;


    }
        attach() {
            this.launch.bodyA=body;
        }
    display(){
        if(this.launch.bodyA){
            var c=this.launch.bodyA.position;
            var d=this.pointB;
            push();
            strokeWeight(4);
            stroke("brown");
            line(c.x,c.y,d.x,d.y);
            pop();
        }
    }
}
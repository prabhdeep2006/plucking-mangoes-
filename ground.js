class Ground {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        

        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var z=this.body.position;
        push();
        rectMode(CENTER);
        rect(z.x,z.y,this.width,this.height);
        pop();
    }
}
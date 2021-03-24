class Tree {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.img=loadImage("Plucking mangoes/tree.png");
        World.add(world,this.body);
    }
    display(){
        var c=this.body.position;
        push();
        imageMode(CENTER);
        image(this.img,c.x,c.y,this.width,this.height);
        pop();
    }
     


}
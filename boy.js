class Boy {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image2=loadImage("Plucking mangoes/boy.png");
        World.add(world,this.body);
    }
    display(){
       push();
       imageMode(CENTER);
       image(this.image2,this.body.position.x,this.body.position.y,this.width,this.height);
       pop();
    }
}

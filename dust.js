class Bin{
    constructor(x,y,width,height){
       this.gara = Bodies.rectangle(x,y,width,height,{isStatic:true});

       this.franxx = height;
       this.darling = width;

       this.image = loadImage("dustbingreen.png");

       World.add(world,this.gara)
    }
    hiro(){
        var pos = this.gara.position;
        
        push();
        imageMode(CENTER);
        translate(pos.x,pos.y);
       // image(this.image,0,0,this.darling,this.franxx);
        pop();
    }
}
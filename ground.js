class Ground{
    constructor(){
        this.terra = Bodies.rectangle(400,365,800,30,{isStatic: true,friction:1});
        World.add(world,this.terra);
    }
    earth(){
        rectMode(CENTER);
        
        fill("brown");

        rect(400,365,800,30);
    }
}

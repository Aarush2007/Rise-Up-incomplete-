class Obstacle {
    constructor(x,y,width,height){
        var options = {
            'density':0.3,
            'friction':0.5,
            'isStatic':false,
            'restitution': 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);
    }
}
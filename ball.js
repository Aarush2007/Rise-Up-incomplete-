class Ball {
    constructor(){
        var options = {
            'restitution': 1,
            'friction': 0.8,
            'density': 0.5
        }
        this.body = Bodies.circle(250,windowHeight-200,30,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255);
        ellipse(0,0,30,30);
        pop();
    }
}
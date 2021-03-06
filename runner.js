class Runner{
    constructor(){
         var options = {
            'restitution':2.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(200,120,60,60);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("ball.png");
        World.add(world, this.body);
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
  
}
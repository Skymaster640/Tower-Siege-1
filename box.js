class Box{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();

        rotate(angle);
        rectMode(CENTER);

        fill (random (50,255),random(50,255),random(50,255));
        strokeWeight(4);
        stroke("black");

        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
}
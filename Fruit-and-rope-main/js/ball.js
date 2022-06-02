class Ball {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r


        this.melonImage = loadImage("../Fruit-and-rope-main/melon.png")
        var ballOptions = {
            isStatic: false,
            restitution: 0.04,
            friction: 1,
            density: 1,
        }
        this.ball = Bodies.circle(x, y, r, ballOptions)
        World.add(world, this.ball)



    }
    display() {
        var pos = this.ball.position
        var angle = this.ball.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)

        

        pop()

    }

}
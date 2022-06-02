class Ground {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        var groundOptions ={ 
            isStatic : true
        }
        this.ground = Bodies.rectangle(x, y, w, h,groundOptions)
        World.add(world, this.ground)

    }
    display() {
        var pos = this.ground.position
        var angle = this.ground.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0, 0, this.w, this.h)
        pop()

    }

}
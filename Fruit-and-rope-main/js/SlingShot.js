class Slingshot {
    constructor(bodyA, pointB) {

        this.bodyA = bodyA
        this.pointB = pointB

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 50,
            stiffness: 0.01,

        }


        this.Slingshot = Constraint.create(options)


        World.add(world, this.Slingshot)

    }
    fly() {
        this.Slingshot.bodyA = null


    }


    attach(body) {
        this.Slingshot.bodyA = body

    }

    display() {

        if (this.Slingshot.bodyA) {
            stroke("white")
            var pointA = this.Slingshot.bodyA.position;
            var pointB = this.pointB;

            //WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
            push()
            stroke("white")
            strokeWeight(2)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()

        }




    }



}



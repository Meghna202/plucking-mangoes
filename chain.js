class Chain{
    constructor(bodyA, pointB) {
        var options={
              bodyA:bodyA,
              pointB:pointB,
              stiffness:0.08,
              length:80
            }
        this.bodyA = bodyA;
        this.pointB = pointB;
        console.log(this.bodyA);
        // console.log(this.pointB);
        this.chain=Constraint.create(options);
        World.add(world, this.chain);
      }

      fly(){
        this.chain.bodyA=null;
      }

    display(){
      
      strokeWeight(4);

      if(this.chain.bodyA) { 
        line (this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
      }
    }

    

    attach(body){
      this.chain.bodyA=body;
  }

}    

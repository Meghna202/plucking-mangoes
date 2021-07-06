class Tree
{
	constructor(x,y,width,height)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
		this.image=loadImage("tree.png")
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.image);

	}
	display()
	{	
			push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
			//strokeWeight(4);
			fill(128,128,128)
			imageMode(CENTER);
			image(this.image, 0, 0,this.w, this.h);
			pop()
			
	}

}
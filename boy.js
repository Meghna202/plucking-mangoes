class Boy
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
		this.image=loadImage("boy.png")
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.image);
	

	}
	display()
	{
			push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image, this.x, this.y,this.w, this.h);
			pop()
			
	}

}
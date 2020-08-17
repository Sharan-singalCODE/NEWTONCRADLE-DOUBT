class Bob{
	constructor(x,y,r)	{
			var options={
				isStatic:false,
				restitution:1.3,
				friction:0.5,
				density:1.2
	
				
				}
			this.x=x;
			this.y=y;
		
			this.body=Bodies.circle(this.x, this.y, r, options)
			this.r=r;
			World.add(world, this.body);
	
		}
		display()
		{
				
				var bobpos=this.body.position;		
				var angle=this.body.angle
				push()
				translate(bobpos.x, bobpos.y);
				rotate(angle)
				rectMode(CENTER)
				strokeWeight(3);
				fill(255,0,255)
				ellipseMode(RADIUS)
				ellipse(0,0,this.r, this.r);
				pop()
				
		}
	}
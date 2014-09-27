function World(){
	this.world = new b2World(
	      new b2Vec2(0, 10)    //gravity
	   ,  true                 //allow sleep
	);
	this.CreateBorder()
	this.CreateBarrier()
	return this.world;
}

World.prototype.CreateBorder = function(){
    var bodyDef = new b2BodyDef;
    //create ground
    bodyDef.type = b2Body.b2_staticBody;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(35, 2);
    bodyDef.density = 0;
    bodyDef.friction = 1;
    bodyDef.position.Set(10, 400 / 30 + 1.8);
    var ground_floor = this.world.CreateBody(bodyDef)
	ground_floor.SetUserData("ground floor");
	ground_floor.CreateFixture(fixDef);
    bodyDef.position.Set(10, -1.8);
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);
    fixDef.shape.SetAsBox(2, 14);
    bodyDef.position.Set(-1.8, 13);
	this.world.CreateBody(bodyDef).CreateFixture(fixDef);
    bodyDef.position.Set(41.8, 13);
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);
}

World.prototype.CreateBarrier = function(){
    var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(0.125, 6);
    bodyDef.position.Set(15, 13);
    bodyDef.angle = 80 * Math.PI / 180
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

    bodyDef.type= b2Body.b2_dynamicBody

    fixDef.shape.SetAsBox(0.1, 1);
    bodyDef.position.Set(32, 13);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(0.1, 1);
    bodyDef.position.Set(34, 13);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(2, 0.1);
    bodyDef.position.Set(33, 11);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(0.1, 1);
    bodyDef.position.Set(32.5, 10);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(0.1, 1);
    bodyDef.position.Set(33.5, 10);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);
    
    fixDef.shape.SetAsBox(2, 0.1);
    bodyDef.position.Set(33, 9);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);

	fixDef.shape = new b2CircleShape(
	    0.5
	);
    bodyDef.position.Set(33, 8.7);
    bodyDef.angle =  0
    this.world.CreateBody(bodyDef).CreateFixture(fixDef);



}

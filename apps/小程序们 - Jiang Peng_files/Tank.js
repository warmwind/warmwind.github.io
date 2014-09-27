function Tank(world, size){
	this.world = world;
	baseSize = size;
	this.body = this.CreateBody();
	this.head = this.CreateHead();
	this.left_wheel = this.CreateWheel(35)
    this.middle_wheel = this.CreateWheel(0)
    this.right_wheel = this.CreateWheel(-35)
    this.left_motor = this.CreateMotor(this.left_wheel)
    this.middle_motor = this.CreateMotor(this.middle_wheel)
    this.right_motor = this.CreateMotor(this.right_wheel)
    this.left_motor_added=this.world.CreateJoint(this.left_motor);
 	this.middle_motor_added=this.world.CreateJoint(this.middle_motor);
	this.right_motor_added=this.world.CreateJoint(this.right_motor);
    this.gun = this.CreateGun();
	this.gun_joint = null;
	this.gun_joint_def=null;
	this.InitJoint();
}

Tank.prototype.InitJoint = function(){
    joint = new b2WeldJointDef;
    var car_body_position = this.body.GetPosition()
    joint.Initialize(this.body, this.head, new b2Vec2(car_body_position.x - 50/baseSize, car_body_position.y));
    this.world.CreateJoint(joint)

    var joint = new b2RevoluteJointDef;
    var joint_point = new b2Vec2(this.head.GetWorldCenter().x + 25/baseSize, this.head.GetWorldCenter().y)
	joint.Initialize(this.gun, this.head, joint_point);
    joint.enableLimit = true;
    
    joint.referenceAngle = 20 * Math.PI / 180
	this.gun_joint_def= joint
	this.gun_joint = this.world.CreateJoint(joint)

	
}

Tank.prototype.CreateBody = function(){
	var bodyDef = new b2BodyDef();
    bodyDef.position.Set(250/baseSize, 379/baseSize);

    bodyDef.type = b2Body.b2_dynamicBody

    var body = this.world.CreateBody(bodyDef)
    fixDef.filter.groupIndex = 1;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(50/baseSize, 10/baseSize);

    body.CreateFixture(fixDef);
    return body;
}

Tank.prototype.CreateHead = function(){
	 var bodyDef = new b2BodyDef();
     bodyDef.position.Set(240/baseSize, 360/baseSize);
     bodyDef.type = b2Body.b2_dynamicBody

     var head = this.world.CreateBody(bodyDef)
     fixDef.filter.groupIndex = -2;
     fixDef.shape = new b2PolygonShape;
     fixDef.shape.SetAsBox(30/baseSize, 8/baseSize);
  
     head.CreateFixture(fixDef);

     return head;
 }

Tank.prototype.CreateWheel = function(xpos){
	var wheel_def = new b2BodyDef;
    wheel_def.type = b2Body.b2_dynamicBody;
    fixDef.shape = new b2CircleShape(
        10.5/baseSize
    );
    fixDef.friction = 4

	wheel_def.position.Set(this.body.GetWorldCenter().x + xpos/baseSize, this.body.GetWorldCenter().y + 0.1);
	var wheel=this.world.CreateBody(wheel_def);
	wheel.CreateFixture(fixDef);
	return wheel;
}

Tank.prototype.CreateMotor = function(wheel){
    var motor = new b2RevoluteJointDef;
		motor.enableMotor=true;
		motor.maxMotorTorque=10;
		motor.Initialize(this.body, wheel, wheel.GetWorldCenter());
		return motor;
}

Tank.prototype.CreateGun = function(){
	var bodyDef = new b2BodyDef();
    bodyDef.position.Set(this.head.GetWorldCenter().x + 55/baseSize, this.head.GetWorldCenter().y);
    bodyDef.type = b2Body.b2_dynamicBody

    var gun = this.world.CreateBody(bodyDef)
    fixDef.filter.groupIndex = -2;
    fixDef.shape = new b2PolygonShape;
    fixDef.shape.SetAsBox(30/baseSize, 3/baseSize);
          
    gun.CreateFixture(fixDef);

    return gun;
}

Tank.prototype.Run = function(speed){
	this.right_motor_added.SetMotorSpeed(speed);
    this.middle_motor_added.SetMotorSpeed(speed);
    this.left_motor_added.SetMotorSpeed(speed);
}

Tank.prototype.Stop = function(){
	this.Run(0)
}

Tank.prototype.RaiseGun = function(){
    var new_angle = this.gun_joint_def.referenceAngle +  15 * Math.PI / 180
    if(new_angle >= Math.PI / 2){
      new_angle = Math.PI / 2
    }
	this.SetGunAngle(new_angle)
}

Tank.prototype.LowerGun = function(){
	var new_angle = this.gun_joint_def.referenceAngle -  15 * Math.PI / 180
    if(new_angle <= 0){
      new_angle = 0
    }
    this.SetGunAngle(new_angle)
}

Tank.prototype.SetGunAngle = function(angle){
    this.gun_joint_def.referenceAngle = angle;
    this.world.DestroyJoint(this.gun_joint)
    this.gun_joint = this.world.CreateJoint(this.gun_joint_def);
	
}

Tank.prototype.CreateBullet = function(){
	var bulletDef = new b2BodyDef;
	bulletDef.userData = "bullet";
	bulletDef.type = b2Body.b2_dynamicBody;
	bulletDef.bullet=true;
	fixDef.shape = new b2CircleShape(
	    4/baseSize
	);
	fixDef.friction = 4
	fixDef.density = 2
	fixDef.filter.groupIndex = 1;
	var gun_joint_position = this.gun_joint.GetAnchorA()
	bulletDef.position = new b2Vec2(2 * this.gun.GetPosition().x - gun_joint_position.x,  2 * this.gun.GetPosition().y -  gun_joint_position.y);
	var bullet=this.world.CreateBody(bulletDef);
	bullet.CreateFixture(fixDef);

	bullet.ApplyImpulse(new b2Vec2(2 * (this.gun.GetPosition().x - gun_joint_position.x), 2 * (this.gun.GetPosition().y - gun_joint_position.y)), gun_joint_position)
}

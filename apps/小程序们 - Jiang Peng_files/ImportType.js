var b2Vec2 = Box2D.Common.Math.b2Vec2
   ,b2AABB = Box2D.Collision.b2AABB
   ,b2BodyDef = Box2D.Dynamics.b2BodyDef
   ,b2Body = Box2D.Dynamics.b2Body
   ,b2FixtureDef = Box2D.Dynamics.b2FixtureDef
   ,b2Fixture = Box2D.Dynamics.b2Fixture
   ,b2World = Box2D.Dynamics.b2World
   ,b2MassData = Box2D.Collision.Shapes.b2MassData
   ,b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
   ,b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
   ,b2DebugDraw = Box2D.Dynamics.b2DebugDraw
   ,b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef
   ,b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef
   ,b2LineJointDef = Box2D.Dynamics.Joints.b2LineJointDef
   ,b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef
   ,b2Mat22 = Box2D.Common.Math.b2Mat22
   ,b2Transform = Box2D.Common.Math.b2Transform
   ;


   var fixDef = new b2FixtureDef;
   fixDef.density = 1.0;
   fixDef.friction = 0.5;
   fixDef.restitution = 0.2;

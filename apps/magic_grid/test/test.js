function makeurl(){var t=QUnit.current_testEnvironment,e=t.url||"http://example.com/search",n=t.q||"a search test";return e+"?q="+encodeURIComponent(n)}test("module without setup/teardown (default)",function(){expect(1),ok(!0)}),test("expect in test",3,function(){ok(!0),ok(!0),ok(!0)}),test("expect in test",1,function(){ok(!0)}),module("setup test",{setup:function(){ok(!0)}}),test("module with setup",function(){expect(2),ok(!0)});var state;module("setup/teardown test",{setup:function(){state=!0,ok(!0)},teardown:function(){ok(!0)}}),test("module with setup/teardown",function(){expect(3),ok(!0)}),module("setup/teardown test 2"),test("module without setup/teardown",function(){expect(1),ok(!0)}),"undefined"!=typeof setTimeout&&(state="fail",module("teardown and stop",{teardown:function(){equal(state,"done","Test teardown.")}}),test("teardown must be called after test ended",function(){expect(1),stop(),setTimeout(function(){state="done",start()},13)}),module("async setup test",{setup:function(){stop(),setTimeout(function(){ok(!0),start()},500)}}),asyncTest("module with async setup",function(){expect(2),ok(!0),start()}),module("async teardown test",{teardown:function(){stop(),setTimeout(function(){ok(!0),start()},500)}}),asyncTest("module with async teardown",function(){expect(2),ok(!0),start()}),module("asyncTest"),asyncTest("asyncTest",function(){expect(2),ok(!0),setTimeout(function(){state="done",ok(!0),start()},13)}),asyncTest("asyncTest",2,function(){ok(!0),setTimeout(function(){state="done",ok(!0),start()},13)})),module("save scope",{setup:function(){this.foo="bar"},teardown:function(){deepEqual(this.foo,"bar")}}),test("scope check",function(){expect(2),deepEqual(this.foo,"bar")}),module("simple testEnvironment setup",{foo:"bar",bugid:"#5311"}),test("scope check",function(){deepEqual(this.foo,"bar")}),test("modify testEnvironment",function(){this.foo="hamster"}),test("testEnvironment reset for next test",function(){deepEqual(this.foo,"bar")}),module("testEnvironment with object",{options:{recipe:"soup",ingredients:["hamster","onions"]}}),test("scope check",function(){deepEqual(this.options,{recipe:"soup",ingredients:["hamster","onions"]})}),test("modify testEnvironment",function(){this.options.ingredients.push("carrots")}),test("testEnvironment reset for next test",function(){deepEqual(this.options,{recipe:"soup",ingredients:["hamster","onions","carrots"]},"Is this a bug or a feature? Could do a deep copy")}),module("testEnvironment tests"),test("makeurl working",function(){equal(QUnit.current_testEnvironment,this,"The current testEnvironment is global"),equal(makeurl(),"http://example.com/search?q=a%20search%20test","makeurl returns a default url if nothing specified in the testEnvironment")}),module("testEnvironment with makeurl settings",{url:"http://google.com/",q:"another_search_test"}),test("makeurl working with settings from testEnvironment",function(){equal(makeurl(),"http://google.com/?q=another_search_test","rather than passing arguments, we use test metadata to form the url")}),test("each test can extend the module testEnvironment",{q:"hamstersoup"},function(){equal(makeurl(),"http://google.com/?q=hamstersoup","url from module, q from test")}),module("jsDump"),test("jsDump output",function(){equals(QUnit.jsDump.parse([1,2]),"[\n  1,\n  2\n]"),equals(QUnit.jsDump.parse({top:5,left:0}),'{\n  "top": 5,\n  "left": 0\n}'),"undefined"!=typeof document&&document.getElementById("qunit-header")&&(equals(QUnit.jsDump.parse(document.getElementById("qunit-header")),'<h1 id="qunit-header"></h1>'),equals(QUnit.jsDump.parse(document.getElementsByTagName("h1")),'[\n  <h1 id="qunit-header"></h1>\n]'))}),module("assertions"),test("raises",function(){function t(){throw"Errored!"}function e(){throw new TypeError("Type!")}function n(){throw{message:"Custom!"}}raises(t,"Errored!","throwing string"),raises(e,"Type!","throwing TypeError instance"),raises(n,"Custom!","throwing custom object")}),"undefined"!=typeof document&&(module("fixture"),test("setup",function(){document.getElementById("qunit-fixture").innerHTML="foobar"}),test("basics",function(){equal(document.getElementById("qunit-fixture").innerHTML,"test markup","automatically reset")})),module("custom assertions"),function(){function t(t,e,n){var o=t%2;QUnit.push(o==e,o,e,n)}test("mod2",function(){t(2,0,"2 % 2 == 0"),t(3,1,"3 % 2 == 1")})}(),function(){function t(){ok(!1,"reset should not modify test status")}var e=QUnit.reset;module("reset"),test("reset runs assertions",function(){QUnit.reset=function(){t(),e.apply(this,arguments)}}),test("reset runs assertions2",function(){QUnit.reset=e})}();
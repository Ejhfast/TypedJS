var TypedJS = {
  possible:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`1234567890-=~!@#$%^&*()_+[]\{}|;':\",./<>?",
  test_cases:200,
  random_array_max_length:10,
  typeOf:function(o){
  	var type = typeof o;
  	if (type !== 'object'){
  	  if(type === 'string'){
  	    if (o.length === 1) return 'char';
  	  }
  		return type;
  	} 
  	else if (Object.prototype.toString.call(o) === '[object Array]'){
  		return 'array';
  	} 
  	else if (o === null){
  		return 'null';
  	}
  	else {
  		return 'object';
  	}
  },
  gen_string:function(len){
      var text = "";
      for( var i=0; i < len; i++ )
          text += TypedJS.possible.charAt(Math.floor(Math.random() * TypedJS.possible.length));
      return text;
  },
  gen_char:function(){
    return TypedJS.gen_string(1).charAt(0);
  },
  gen_input_primative:function(obj){
    if (typeof(obj) === "string"){
      switch (obj){
        case "number":
          return Math.round(Math.random()*100);
        case "string":
          return TypedJS.gen_string(10);
        case "boolean":
          if(Math.random()*10 < 5)
            return true;
          else
            return false;
        case "char":
          return TypedJS.gen_char();
        default:
          return obj;
      }
    }
    else{
      throw "Bad Input Type: "+TypedJS.typeOf(obj)+" -- this shouldn't happen.";
    }
  },
  walk_object:function(obj){
    if(typeof(obj) === "object"){
      if(obj["array"] != undefined){
        var x = obj["array"], new_part = [],
            ran = Math.random()*TypedJS.random_array_max_length;
        for (var i = 1; i < ran; i++){
          new_part.push(TypedJS.walk_object(x));
        }
        return new_part;
      }
      else if(obj["or"] != undefined){
        var x = obj["or"], select = Math.floor(obj["or"].length * Math.random());
        return TypedJS.walk_object(obj["or"][select]);
      }
      else{
        var new_o;
        if (TypedJS.typeOf(obj) === "array") new_o = [];
        else new_o = {};
        for (i in obj){
          new_o[i] = TypedJS.walk_object(obj[i]);
        }
        return new_o;
      }
    }
    else{
      return TypedJS.gen_input_primative(obj);
    }
  },
  check_type:function(r,e){
    var match = r === e;
    if(e["or"] != undefined){
      for(var i in e["or"]){
        if(r === e["or"][i]) match = true;
      }
    }
    else if(e["array"] != undefined){
      if(r === "array") match = true;
    }
    return match;
  },
  run_test:function(object,func,exp_typ,func_name){
    var fail_count = 0;
    for( var i = 0; i < TypedJS.test_cases; i++){
      var happy_sig = TypedJS.walk_object(object);
      try{
        var res = func.apply(this,(happy_sig));
        var ret_typ = TypedJS.typeOf(res);
        if(!TypedJS.check_type(ret_typ,exp_typ)){
          throw "Type Error: " + func_name + ": " + "Expected \"" + exp_typ + "\" but returned \"" + ret_typ +"\"";
        }
      }
      catch(e){
        console.log(e + " on input: " + JSON.stringify(happy_sig));
        fail_count = fail_count + 1;
      }
    }
  return fail_count;  
  },
  go:function(testcases){
    var fail_count = 0;
    var func_fail = [];
    if(testcases && testcases.length > 0){
      var total_cases = testcases.length * TypedJS.test_cases;
      for(var i in testcases){
        var test = testcases[i];
        var testcase = TypedJS.run_test(test.args, test.func, test.ret, test.func_name);
        fail_count = fail_count + testcase;
        if(testcase > 0){
          func_fail.push(test.func_name);
        }
      }
      console.log("Ran " + total_cases + " cases. Failed " + fail_count + ".");
      console.log("Functions which failed >1 test case: " + JSON.stringify(func_fail));
    }
    else{
      console.log("Please define TypedJS.test.");
    }
  },
  run_tests:function(){
    function comp_func(func){
      var pieces = func.split(".");
      var curr_obj;
      for(var i = 0; i < pieces.length; i++){
        if(i === 0){
          curr_obj = window[pieces[0]];
        }
        else curr_obj = curr_obj[pieces[i]]
      }
      curr_obj.name = func;
      return curr_obj;
    }
    var scripts = $('script');
    scripts.each(function(i,el){
      $.get(el.src, function(data){
        var types = [];
        lines = data.split("\n");
        for(var i = 0; i < lines.length; i++){
          if(lines[i].replace(" ",'').replace(' ','').indexOf("//+") == 0){
            types.push(lines[i]);
          }
        }
        if(types.length > 0){
          var suite = [];
          for(var i = 0; i < types.length; i++){
            var base = JSON.parse(typedjs_parser.parse(types[i]));
            base["func_name"] = base["func"];
            base["func"] = comp_func(base["func"]);
            base["ret"] = base["args"].splice(base["args"].length - 1, 1)[0];
            suite.push(base);
          }
          console.log("Running on " + el.src);
          TypedJS.go(suite);
        }
      });
    });
  }
}
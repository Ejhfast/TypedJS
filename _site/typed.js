var TypedJS = {
  possible:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`1234567890-=~!@#$%^&*()_+[]\{}|;':\",./<>?",
  test_cases:300,
  random_array_max_length:10,
  typeOf:function(o){
  	var type = typeof o;
  	if (type !== 'object'){
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
  check_type:function(obj,exp){
    if(exp === undefined || obj === undefined){
      return false;
    }
    if(exp["or"] != undefined){
      var tmp = false;      
      for(i in exp["or"]){
        tmp = tmp || TypedJS.check_type(obj, exp["or"][i]);
      }
      return tmp;
    }
    else{
      var top = TypedJS.typeOf(obj);
      if(top === "array"){
        if(TypedJS.typeOf(exp) === "array"){
          var tmp = true;
          for(var i = 0; i < obj.length; i++){
            tmp = tmp && TypedJS.check_type(obj[i], exp[i])
          }
          return tmp;
        }
        else if(exp["array"] != undefined){
          var tmp = true;
          for(var i = 0; i < obj.length; i++){
            tmp = tmp && TypedJS.check_type(obj[i], exp["array"])
          }
          return tmp;
        }
        else{
          return false;
        }
      }
      else if(top === "object"){
        var tmp = true;
        for(i in obj){
          tmp = tmp && TypedJS.check_type(obj[i],exp[i]);
        }
        return tmp;
      }
      else{
        return top === exp;
      }
    }
  },
  run_test:function(object,func,exp_typ,func_name,redefine){
      var fail_count = 0;
      for( var i = 0; i < TypedJS.test_cases; i++){
        var happy_sig = TypedJS.walk_object(object);
        try{
          var res = func.apply(this,(happy_sig));
          if(!redefine){
            if(!TypedJS.check_type(res,exp_typ)){
              throw "Type Error: " + func_name + ": " + "Expected " + JSON.stringify(exp_typ) + " but returned " + JSON.stringify(res) + " on input: " + JSON.stringify(happy_sig);
            }
          }
        }
        catch(e){
          console.log(e);
          fail_count = fail_count + 1;
        }
      }
    return fail_count;  
  },
  go:function(testcases,redefine){
    var fail_count = 0;
    var func_fail = [], func_pass = [];
    if(testcases && testcases.length > 0){
      var total_cases = testcases.length * TypedJS.test_cases;
      for(var i in testcases){
        var test = testcases[i];
        var testcase = TypedJS.run_test(test.args, test.func, test.ret, test.func_name, redefine);
        fail_count = fail_count + testcase;
        if(testcase > 0){
          func_fail.push(test.func_name);
        }
        else{
          func_pass.push(test.func_name);
        }
      }
      console.log("Ran " + total_cases + " cases. Failed " + fail_count + ".");
      console.log("Functions which failed >1 test case: " + JSON.stringify(func_fail));
    }
    else{
      console.log("Please define TypedJS.test.");
    }
    return [func_fail,func_pass];
  },
  run_tests_on_string:function(str,redefine,json){
    var types = [],
        lines = str.split("\n");
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
        base["ret"] = base["args"].splice(base["args"].length - 1, 1)[0];
        if(redefine) TypedJS.redefine(base["func_name"],base["args"],base["ret"]);
        base["func"] = TypedJS.comp_func(base["func"]);
        suite.push(base);
      }
      return TypedJS.go(suite, redefine);
    }
  },
  comp_func:function(func){
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
  },
  run_tests:function(redefine){
    if(redefine === undefined){
      redefine = false;
    }
    var scripts = $('script');
    scripts.each(function(i,el){
      $.get(el.src, function(data){
        TypedJS.run_tests_on_string(data,redefine);
      });
    });
  },
  // Checking types at runtime
  redefine:function(f_name, arg_types, ret_type){
    function wrap(f){
      return function(){      
        try{
          if(arg_types != undefined){                    
            for(i in arguments){
              if(!TypedJS.check_type(arguments[i],arg_types[i])){
                throw "Type Error: Expected " + arg_types[i] + " but given " + JSON.stringify(arguments[i]);
              }
            }
          }
          if(ret_type != undefined){
            var ret = f.apply(this, arguments);
            if(!TypedJS.check_type(ret,ret_type)){
              throw "Type Error: " + f_name + ": Expected " + JSON.stringify(ret_type) + " but returned " + JSON.stringify(ret) + " on input args: " + JSON.stringify(arguments);
            }
            return ret;
          }
          return f.apply(this, arguments);
        }
        catch(e){
          console.log(e); // Do something more interesting here...
          throw e;
        }
      }
    };
    if(window[f_name] === undefined){
      var parts = f_name.split('.');
      var e_str = "window";
      for(i in parts){
        e_str = e_str + "[\"" + parts[i] + "\"]";
      }
      console.log(e_str);
      if(eval(e_str) === undefined){
        throw "Function " + f_name + " does not exist."
      }
      else{
        console.log("wrapping...");
        console.log(arg_types);
        e_str = e_str + "=wrap("+e_str+")";
        console.log(e_str);
        return eval(e_str);
      }
    }
    else{
      window[f_name] = wrap(window[f_name]);
      return window[f_name];
    }
  }
}




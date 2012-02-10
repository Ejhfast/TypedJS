
//+ add_all :: [Number] -> Number 

function add_all(num_arr){
  var count = num_arr[0]; // Error, could be nil
  for(i = 1; i < num_arr.length; i++){
    count = num_arr[i];
  }
  return count;
};

//+ my_prop :: {name:String, valid:Boolean} -> Boolean

function my_prop(obj){
  if(obj.valid === true){
    return "true"; // Error, we are 
  }                // returning a string here
  else{
    return obj.valid;
  }
};

//+ fullname :: {first:String, last:String} -> String
function fullname(obj){
  return obj.first + " " + obj.last;
}

//+ join_char :: String -> String -> String
function join_char(c1,c2){
  return c1;
}

//+ test_obj :: {name:String, email:String} -> {name:String, email:String}
function test_obj(o){
  return o;
}

//+ test_or :: {name:String, email:String} -> {name:String, email:String} | Boolean
function test_or(o){
  if(Math.round(Math.random())===0){
    return {name:"Etan",email:"ok"};
  }
  else{
    return true; //true;
  }
};

//+ test_arr :: String | Number -> String -> [String | Number]
function test_arr(s1,s2){
  return [s1,s2];
}

MyObj = {
  //+ MyObj.test_fun :: Number -> Number -> Number
  test_fun:function(num1, num2){
    return num1 + num2;
  }
}

//+ add_tos :: Number -> Number -> String

function add_tos(n1,n2){
  return (n1 + n2) + "";
}
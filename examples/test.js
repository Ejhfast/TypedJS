//+ add_all :: [Number] -> Number 

function add_all(num_arr){
  var count = num_arr[0]; // Error, could be nil
  for(i = 1; i < num_arr.length; i++){
    count = count + num_arr[i];
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

//+ char_first :: Char -> Char -> Char
function char_first(c1,c2){
  return c1;
}

// Demo the or (|) operator
//+ maybe_char :: Char -> Char -> Char | Boolean

function mayby_char(trig,c2){
  if(trig) return c1;
  return false;
}


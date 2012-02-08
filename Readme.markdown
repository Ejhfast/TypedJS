## TypedJS

Basic, automatic JavaScript testing. Requires jQuery. This is just a start. TypedJS will soon provide more complex forms of program specification, and analysis. The goal: safe, correct JavaScript.

(Warning: In need of some refactoring).

### Usage

First, annotate your javascript functions with Haskell-like type signatures:

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
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
### License 

Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)

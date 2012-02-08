## TypedJS

Basic, automatic JavaScript testing. Requires jQuery. This is just a start. TypedJS will soon provide more complex forms of program specification, and analysis. The goal: safe, correct JavaScript.

(Warning: In need of some refactoring).

### Usage

First, annotate your javascript functions with Haskell-like type signatures:

    //+ my_func :: Number -> String -> [Number]
    
    function my_func(myint, mystring){
      ...
      return myarray;
    };
    
    //+ name_getter :: Number -> {nm:String, cts:[{nm:String, nbr:Number}]} -> String
    
    function name_getter(num,obj){
      return obj.cts[num].nm;
    };
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
### License 

Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)

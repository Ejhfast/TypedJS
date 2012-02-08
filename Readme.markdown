## TypedJS

Automatic JavaScript testing. Requires jQuery. In need of some refactoring.

### Usage

First, annotate your javascript functions with Haskell-like syntax:

    //+ my_func :: Number -> String -> [Number]
    
    function my_func(myint, mystring){
      ...
      return myarray;
    };
    
    //+ name_getter :: {name:String, contacts:[{name:String, number:Number}]} -> String
    function name_getter(obj)
      return obj.name;
    };
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
### License 

Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)

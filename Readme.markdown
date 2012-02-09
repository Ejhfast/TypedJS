## TypedJS

Basic, automatic JavaScript testing. Requires jQuery. This is just a start. TypedJS will soon provide more complex forms of program specification, and analysis. The goal: safe, correct JavaScript.

(Warning: In need of some refactoring).

### Usage

First, annotate your javascript functions with Haskell-like type signatures:

    //+ char_first :: Char -> Char -> Char
    
    function char_first(c1,c2){
      return c1;
    }

    //+ my_prop :: {name:String, valid:Boolean} -> Boolean

    function my_prop(obj){
      if(obj.valid === true){
        return "true"; // Error, we are 
      }                // returning a string here
      else{
        return obj.valid;
      }
    };
    
    // We can do objects, too:
    
    MyObj = {
      //+ MyObj.test_fun :: Number -> Number -> Number
      test_fun:function(num1, num2){
        return num1 + num2;
      }
    }
  
Then load your JavaScript file in a browser window and run:

    TypedJS.run_tests()
    
If you want to instrument your annotated functions to dynamically detect type violations, run:

    TypedJS.run_tests(true)
    
### MIT License 

Copyright (C) 2012 Taazr Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

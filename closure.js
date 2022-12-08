var alert=require('alert');
function init() //function1-outer/parent
{
    var name = 'Chrome'; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function,body of the child function
    }
    displayName();// inner/closure/child function
  }
  init();
  //displayName();-- outer function call will not achieve the purpose of closure
  //purpose of closure is to call multiple inner functions by just one outer function call
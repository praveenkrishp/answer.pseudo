function getOutput(nm) //function declaration, formal parameter
{
  var name = nm; //saving parameter to a local variable  function(result)
  var number;
  function getRandon(callback) //  function to get random number
  {
      var num = Math.random() * (15 - 6) + 6;  //getting random number between 6 and 15
  }; 
  getRandom(function(result) //function call with wait
  {
    number=result;  //result obtained
    return {data : name+' '+num}; //return in json format
  });
};

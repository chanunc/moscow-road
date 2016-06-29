contract Example {

  uint public value;

  function Example(){
    // constructor
    value = 0;
  }

  function setValue(uint val){
    value = val;
  }
}

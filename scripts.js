function doSomethingCool() {
  //  alert('WARNING!');

  // var x = "warning via var";

  // special objects like Math
  // methods and properties
  // var x = Math.random() * 10;
  // var y = Math.floor(x);
  // alert(y);

  // Document object
  // more methods and properties
  // concatenation
  // var name = document.querySelector('#name').value;
  // alert(name + ' Is Cool');

  var div = document.querySelector('.child');
  var p = document.createElement('p');
  var adj = document.querySelector('#adj').value;
  var noun = document.querySelector('#noun').value;
  var noun2 = document.querySelector('#noun2').value;
  p.textContent =
    "It's important to be " +
    adj +
    " when you're out in the woods. You'll want to pack plenty of " +
    noun +
    ' incase you get hungry, along with your binoculars, a sketch book, and a bag for collecting plenty of ' +
    noun2;
  div.appendChild(p);
}

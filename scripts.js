function doSomethingCool() {
  //  alert('WARNING!');

  // var x = "warning via var";

  // special objects like Math
  // methods and properties
  // var x = Math.random() * 10;
  // var y = Math.floor(x);
  // alert(y);

  // var name = document.querySelector('#name').value;
  // alert(name + ' Is Cool');

  var div = document.querySelector('.child');
  var p = document.createElement('p');
  var name = document.querySelector('#name').value;
  p.textContent = name;
  div.appendChild(p);
}

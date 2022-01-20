function validateForm() {
  var w = document.forms["myForm"]["fname"].value;
  var x = document.forms["myForm"]["lname"].value;
  var y = document.forms["myForm"]["email"].value;
  var z = document.forms["myForm"]["pass"].value;
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (w == "") {
    document.getElementsByClassName("image1")[0].style.display="inline";
    document.getElementsByClassName("e1")[0].innerHTML="First Name cannot be empty";
    document.getElementsByClassName("e1")[0].style.display="inline";
    return false;
  }
  if (x == "") {
    document.getElementsByClassName("image2")[0].style.display="inline";
    document.getElementsByClassName("e2")[0].innerHTML="Last Name cannot be empty";
    document.getElementsByClassName("e2")[0].style.display="inline";
    return false;
  }
  if (y == "") {
    document.getElementsByClassName("image3")[0].style.display="inline";
    document.getElementsByClassName("e3")[0].innerHTML="Email cannot be empty";
    document.getElementsByClassName("e3")[0].style.display="inline";
    return false;
  }
  if(!(y.match(validRegex)))
  {
    document.getElementsByClassName("image3")[0].style.display="inline";
    document.getElementsByClassName("e3")[0].innerHTML="Looks like this is not an email";
    document.getElementsByClassName("e3")[0].style.display="inline";
    return false;
  }
  if (z == "") {
    document.getElementsByClassName("image4")[0].style.display="inline";
    document.getElementsByClassName("e4")[0].innerHTML="Password cannot be empty";
    document.getElementsByClassName("e4")[0].style.display="inline";
    return false;
  }
}

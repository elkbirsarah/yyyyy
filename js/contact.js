  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC08BVIC3PtMYLpmM9_4ShCkmfbJekrdfM",
    authDomain: "myproject-e6e20.firebaseapp.com",
    databaseURL: "https://myproject-e6e20.firebaseio.com",
    projectId: "myproject-e6e20",
    storageBucket: "myproject-e6e20.appspot.com",
    messagingSenderId: "264690751047"
  };

  firebase.initializeApp(config);
  

document.getElementById('contact-Form').addEventListener('submit', submitform);
function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  
  
    function submitForm(e){
      e.preventDefault();
     var mail = getInputVal('email');
     var name = getInputVal('name');
   // console.log("the name is:"+username+'the password is:'+password );
  saveMessage(mail, name);
  console.log(name)
  
  document.getElementById("contact-Form").reset();
    
  }
  var messagesRef = firebase.database().ref('messages');
  
  function saveMessage( mail, name){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name:name,
        mail:mail
        });
      }

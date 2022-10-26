const firebaseConfig = {
    apiKey: "AIzaSyADD3l5OcT1xTMDZK3RTPcvtLQu9UdHKAY",
    authDomain: "iwsf22.firebaseapp.com",
    projectId: "iwsf22",
    storageBucket: "iwsf22.appspot.com",
    messagingSenderId: "500765246913",
    appId: "1:500765246913:web:5e3e4eb923aa5d813c9b40",
    measurementId: "G-GLTF3LJY1J"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



var IWSF22db = firebase.database().ref("IWSF22");

document.getElementById("IWSF22").addEventListener("submit", SendForm);

function SendForm(event){
event.preventDefault();

var name = getElementVal("name");
var email = getElementVal("email");
var username = getElementVal("username");
var password = getElementVal("password");
var socialmedia = getElementVal("socialmedia");
var socialmedia1 = getElementVal("socialmedia1");
var file = getElementVal("file");

console.log(name,email,username,password);

savedata(name, email, username, password, socialmedia,socialmedia1, file);
}

const savedata = (name, email, username, password, socialmedia, socialmedia1, file) => {
var IWSF22= IWSF22db.push();
IWSF22.set({
    name: name,
    email: email,
    username: username,
    password: password,
    socialmedia: socialmedia,
    socialmedia1: socialmedia1,
    file: file,
});
};

const getElementVal = (id) => {
return document.getElementById(id).value;

}

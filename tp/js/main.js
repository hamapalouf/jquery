


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCipjB3LMBN7qhBafwooiR0wXGd2KOcKk",
    authDomain: "project-web-1e4a6.firebaseapp.com",
    databaseURL: "https://project-web-1e4a6.firebaseio.com",
    projectId: "project-web-1e4a6",
    storageBucket: "",
    messagingSenderId: "604232205606",
    appId: "1:604232205606:web:63bc304b1eb3bd15"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);











var pix= document.getElementById('sel1');
var area=document.getElementById('comment');
var fs=document.getElementById('sel2');
var x=document.getElementById("comment").style;

function bold(){
if	(x.fontWeight==("bold"))
{x.fontWeight=("normal");}
else{x.fontWeight=("bold");}
}

function italic(){
if	(x.fontStyle==("italic"))
{x.fontStyle=("normal");}
else{
x.fontStyle=("italic");
}
}

function under (){
if	(x.textDecoration==("underline"))
	{x.textDecoration=("none");}
else {
	x.textDecoration=("underline");
}
}

function pixel() {
	x.fontSize=pix.value;
}


function fam() 

{
	x.fontFamily=fs.value;
}






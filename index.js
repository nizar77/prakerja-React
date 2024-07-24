let a=10
let b =5

let area = a*b
console.log(area);


const bilPrima = ((number)=>{
    if(number <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;

})

var timeDisplay = document.getElementById("time");


function refreshTime() {
  var dateString = new Date().toLocaleString("id-ID", {timeZone: "Asia/Jakarta"});
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

setInterval(refreshTime, 1000);

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  let c =(valNum-32)/1.8;
  document.getElementById("ceclcius").innerHTML=c.toFixed(2);
}


function checkEmail(){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById('email');
    var message1 = document.getElementById('message1');
    var goodColor = "#0C6";
    var badColor = "#FF9B37";
    if(email.value != validRegex){
        email.style.backgroundColor = badColor;
      
  message1.style.color = badColor;
        message1.innerHTML = "invalid email format!"
    }
}

function check(){
   
    var telepon = document.getElementById('telepon');
    var message = document.getElementById('message');
   var goodColor = "#0C6";
    var badColor = "#FF9B37";
  
    if(telepon.value.length!=12){
       
        telepon.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "required 12 digits, match requested format!"
    }   
}

// function myChange() {
//     document.body.style.backgroundColor = "red";
//     document.body.style.color="white";
//   }
		

const colors = ["#7b68ee", "#eb3dae", "#f7ce51", "#5bc5fa"];
let colorNumber = 0;
const button = document.querySelector(".myChange");

// Functions
const changeColor = () => {
  document.body.style.backgroundColor = colors[colorNumber];
  colorNumber < colors.length - 1 ? colorNumber++ : (colorNumber = 0);
};

// Event Listeners
button.addEventListener("click", changeColor);

function toast(){
    alert('data berhasil dikirim')
}

// jamm

options = {
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric'
  };
  const clock = () => dateTime.innerText=new Intl.DateTimeFormat('id-ID', options).format(new Date())
  clock()
  setInterval(clock, 1000);

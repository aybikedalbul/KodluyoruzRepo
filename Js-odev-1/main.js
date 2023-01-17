let myname= prompt("Lütfen isminizi giriniz!")

if(myname.length < 1){
    alert("Lütfen isminizi giriniz!")
    window.location.reload()
}else {
    let change = document.getElementById("myName").innerHTML = `${myname}`
}

function addZero(value){
    if(value< 10) {
        value = "0" + value
        return value;
    }
}

function showTime(){
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    var date = new Date();
    let saat = addZero(date.getHours());
    let dakika = addZero(date.getMinutes());
    let saniye = addZero(date.getSeconds());
    let day = weekday[date.getDay()];
    let time = `${saat} : ${dakika} : ${saniye} - ${day}`
    document.getElementById("myClock").innerHTML = time; 
}

setInterval(showTime,1000);



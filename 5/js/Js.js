const hours = new Date().getHours();
if(hours < 10){
    document.getElementById('date').innerHTML = "Good morning"
}else if (hours < 13){
    document.getElementById('date').innerHTML = "Good day"
}
else if (hours < 15){
    document.getElementById('date').innerHTML = "Good Afternoon"
}
else if (hours < 18){
    document.getElementById('date').innerHTML = "Good Evening"

}else {
    document.getElementById('date').innerHTML = "Good Night"

}
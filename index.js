function setTime(){
  const d = new Date() ;
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours  = d.getHours() ;
  const srotate = (seconds * 6) - 90 ;
  const mrotate = (minutes * 6) + (seconds * 0.1) - 90 ;
  const hrotate = (hours * 30)  + (minutes * 0.5 ) - 90 ;
  console.log(hours);
  console.log(minutes);
  console.log(seconds);
  document.querySelector(".second").style.transform = "rotate(" + srotate + "deg)"
  document.querySelector(".minute").style.transform = "rotate(" + mrotate + "deg)"
  document.querySelector(".hour").style.transform = "rotate(" + hrotate + "deg)"
}

setInterval(setTime , 1000 ) ;

setTime() ;

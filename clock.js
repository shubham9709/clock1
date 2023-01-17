const hour= document.getElementById('hr');
const minute= document.getElementById('min');
const second= document.getElementById('sec');



setInterval(()=>{
  let d = new Date();
  let htime= d.getHours()*30;
  let mtime= d.getMinutes()*6;
  let stime= d.getSeconds()*6;

  hour.style.transform= `rotateZ(${(htime)+(mtime/12)}deg)`;
  minute.style.transform= `rotateZ(${mtime}deg)`;
  second.style.transform= `rotateZ(${stime}deg)`;
},1000);

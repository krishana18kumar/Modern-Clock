let dateE1 = document.querySelector(".date");
let dayE1 = document.querySelector(".day");
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let ss = document.querySelector("#ss");

const deg = 6;
setInterval(() => {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thrusday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let d = new Date();
  let hh = d.getHours();
  let mm = d.getMinutes();
  let sc = d.getSeconds();

  var day = weekday[d.getDay()];
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  dateE1.innerHTML = date + "/" + month + "/" + year;
  dayE1.innerHTML = day;
  hr.innerHTML = hh + " : ";
  mn.innerHTML = mm + " :";
  ss.innerHTML = sc + " ";
});

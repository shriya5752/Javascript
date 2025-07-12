let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

let newDate_1=new Date(2025,6,12)//month starts with 0
let newDate_2=new Date("2025-07-12")//month starts with 1
let newDate_3=new Date("07-12-2025")
// console.log(newDate.toDateString());

let myTimeStamp=Date.now()//current timestamp in ms
console.log(myTimeStamp);

console.log(newDate_1.getTime())//converts date obj to myTimeStamp(ms)
console.log(Math.floor(Date.now()/1000));



 







let day = "Fri"

let isWeekDay = (day == "Mon") || (day == "Tue") || (day == "Wed") || (day == "Thr") || (day == "Fri")

let isWeekend = (day == "Sat") || (day == "Sun") 

if(isWeekDay == true){
    console.log(`${day} is week day`)
} 
else if (isWeekend == true){
    console.log(`${day} is  weekend day`)
}
else {
   console.log(`${day} value is not valid`) 
}

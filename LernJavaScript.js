// argument คือ ตัวแปรหรือค่าที่ต้องการส่งมาให้กับฟังก์ชั่น(ตัวแปรส่ง)
// parameter คือ ตัวแปรที่ฟังก์ชันสร้างไว้สำหรับรับค่าที่จะส่งเข้ามาให้กับฟังก์ชั่น(ตัวแปรรับ)

// function plusnumber(x){
//     console.log(x)
// }
// let ntext = "Howw"
// plusnumber(ntext)

// function fullName(fname,lname){
//     console.log("ชื่อจริง = ",fname, "นามสกุล = ",lname)
// }
// fullName("thanathip","chinwongkhiaw")
// fullName("Saika","Kuozaki")



// // รูปแบบฟังก์ชันที่2 คือ returnค่าออกไป
// function getIp(){           //สร้างฟังก์ชันขึ้นมา
//     return "127.60.131.1"   
// }
// let mytp = getIp()      //สร้างตัวแปรมาเก็บค่าของfunction getIp
// console.log(mytp)       //นำตัวแปรที่เก็บค่าของfunctionมาใช้แล้วเอาไปประมวลผลต่อ


// // รูปแบบฟังก์ชันที่3 คือ สร้างตัวแปรในฟังก์ชันแล้วส่งค่าของตัวแปรออกไป
// function mycityIp(){        
//     let city = "ปทุมธานี" //สร้างตัวแปรในฟังก์ชัน
//     return city         //ส่งค่าของตัวแปรในฟังก์ชัน
// }
// console.log(mycityIp())     //เรียกใช้ฟังก์ชันเฉพาะให้มันจบในครั้งเดียว

// 4ฟังก์ชันที่มีการรับค่าและส่งค่าออกไป
// function setsaraly(saraly,){
//     let bonus = 1000;
//     return saraly + bonus;


// }
// let a = setsaraly(15000);
// a-=9000
// console.log(a)

// let b = setsaraly(20000);
// console.log(b)

// function summation(x,y){
//     return x+y
// }
// summation(50,2000)
// console.log(summation(50,2000))

// ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น
// function Nameperson(name, lasname,city="ปทุม"){
//         console.log("ชื่อ",name, "นามสกุล",lasname, "ที่อยู่",city)
// }

// Nameperson("ธนาธิป","ชินวงเขียว"); //ถ้าเกิดว่าผู้ใช้กรอกแค่ชื่อกับนามสกุลและไม่ได้ใส่ที่อยู่มา ค่าที่อยู่ที่ว่างอยู่จะดึงparameterที่อยู่มาใช้แทนที่ว่าง


// array

// let color = ["red","white","black"]
// color.push("เทา")

// let count = color.length;
// console.log(color)
// // console.log(x)


// let x = 20;
// x<=2?console.log("true"):console.log("false");

// == เท่ากับ
// != ไม่เท่ากับ
// && and และ
// ||  or หรือ
// ! not ไม่
// 


// โปรแกรมเช็คเกรด
// let score = 50;
// if (score >= 80) {
//     console.log("A");
// }
// else if (score >= 70) {
//     console.log("B");
// }else if(score >= 60){
//     console.log("C");
// }else if(score >= 50){
//     console.log("D");
// }else if (score <= 49){
//     console.log("F");
// }



// --------------------------------------------
// a = ture && b = false

// score = 20;

// เทียบประโยคซ้ายกับประโยคขวาถ้าคะแนนที่กำหนดอยู่ในรหว่าง20-70ถ้า
// ฝั่งใดฝั่งนึงเป็นจริงผลก็จะออกมาเป็นtrue
// ง่ายๆคือถ้าใช้&&ค่าทั้ง2ต้องเท่ากันถึงจะเป็ฯจริง
// and (true) => ซ้าย && ขวาต้องเป็นจริงทั้งคู่
// console.log(score >=50 && score <=10)

// ถ้าเชื่อมด้วย||จะยึดตามฝั่งซ้ายเป็นหลักถ้าฝั่งซ้ายเป็นจริงหรือ
// เท็จมันก็จะไม่สนใจเพราะถือว่าฝั่งซ้ายเป็น
// ถ้าใช้||เชื่อมมันจะยึดตามค่าฝั่งใดฝั่งนึงถ้าเกิดขาวเป็นจริงแล้วซ้ายเป็นเท็จผลก็จะออกมา
// เป็นจริง
// or (true) => ซ้าย || ขวา เป็นจริง
// console.log(score >=50 || score <=10)


// -------------------------------------------
// การเพิ่มค่าลดค่า
// ++(prefix) ++a คือเพิ่มค่าให้aก่อน1ค่าแล้วค่อยนำไปใช้
// ++(postfix) a++ คือนำค่าปัจจุบันในaไปใช้ก่อนแล้วค่อยเพิ่มค่าทีหลัง
// --(prefix) --a คือลดค่าให้aก่อน1ค่าแล้วค่อยนำไปใช้
// --(postfix) a-- คือนำค่าปัจจุบันในaไปใช้ก่อนแล้วค่อยลดค่าทีหลัง

// let a = 5, b =10;

// console.log("ค่าเริ่มต้น",a)
// console.log("แบบprefix",a--)
// console.log("ค่าปัจจุบัน",a)


// ----------------------------
// การเขียนแบบลดรูป
// let a = 20, b=5;
// a+=b ความหมายคือ a=a+b

// console.log(a+=b)


// ---------------------------------

// if 
// switch..case

// การเขียนเงื่อนไข
// let money = 4000;
// let blacn = 9000;
// if(blacn <= money){
//     console.log("ดำเนินการถอนเงิน = ",blacn);
//     money-=blacn;
//     console.log("งนคงเหลือ = ",money);
// }else{
//     console.log("เงินไม่พอ")
// }



// -----------------------------
// การเขียนif elseแบบลดรูป
// ? = true
// : = false
// เอาไว้เขียนเฉพาะเงื่อนไขที่ไม่ซับซ้อน
// let money = 400;
// let blacn = 400;
// money = (money==blacn) ?console.log("เงินพอ"):console.log("เงินไม่พอ")



// ---------------
// การเขียนเงื่อนไขซ้อนซ้อนเงื่อนไข

// let age = 19;

// if(age<=20){
//     if(age >= 18){
//         console.log("มหาลัย")
//     }else if(age >= 16){
//         console.log("ม.ปลาย")
//     }else if(age >= 13){
//         console.log("ม.ต้น")
//     }else{
//         console.log("ประถม")
//     }
// }else{
//     console.log("เรียนจบแล้ว")
// }

// --------------------
// Switch Caseเงื่อนไข


//let month = 1;  //ปิดไฟ //เปิดไฟ

// let light ;

// if(status == 0){
//     light= "ปิดไฟ";
// }else if(status == 1){
//     light = "เปิดไฟ";
// }else{
//     light = "ไม่พบข้อมูล";
// }

// switch(month){
//     case 1: name = "มกรา";
//       break;
//     case 2 : name = "กุมพา";
//         break;
//     case 3 : name = "มีนา";
//         break;
//     case 4 : name = "เมษา";
//         break;
//     case 5 : name = "พฤษภา";
//         break;
//     case 6 : name = "มิถุนา";
//         break;
//     case 7 : name = "กรกฎา";
//         break;
//     default : name = "ไม่พบข้อมูล"
// }

// console.log(name)


// ----------------โปรแกรมคำนวนคู่คี่

// let x = 20;
// let z = x%y;
// if(x%2 == 0){
//     console.log("เลขคู่")
// }else{
//     console.log("เลขคี่")
// }


// --------------------------------การวนลูป

// while
// for
// do while

// let x = 1; //นับจำนวนรอบ
// while(x<=500){
//     console.log("ครั้งที่",x)
//     if(x==4){
//         continue
//     }
//     x++;
// }


// for

// for(let x = 1;x<=10;x++){
//     console.log("เงี่ยน",x)
//     if(x == 5){
//         break
//     }
// }


// x = (-20>=0)?console.log("true"):console.log("flase")

// let month = 2;

// switch(month){
//     case 1 :name="มกรา";
//         break
//     case 2 :name ="กุมภา";
// }

// console.log(name)

// ลูปแบบDowhile ลูปDo whileคือลองทำก่อน1ครั้งถ้าเงื่อนไขเป็นจริงก็กลับไปทำซ้ำไม่รู้จำนวนรอบที่ชัดเจน
// ลูปwhileคือต้องรอเงื่อนไขให้เป็นจริงไม่รู้จำนวนรอบที่ชัดเจน


// let ouo = 1;
// do{
//     console.log("123")
// }while(ouo>=0)


// ลูปแบบforคือรู้จำนวนรอบที่ชัดเจน
// for(let count = 1 ;count<=20;count++){
//     if(count == 5)continue;
//     console.log(count);
    
// }
// console.log("จบโปรแกรม")

// เข้าถึงสมาชิกarryด้วยfor loop

// let color = ["red","white","black","blue"]

// let count = color.length;

// color.push("dark")
// for(let i = 0;i<color.length;i++){
//     console.log("ครั้งที่ =",(i+1),color[i])
// }



// เข้าถึงสมาชิกด้วยforEach

// let color = ["red","white","black","blue"]

// color.forEach(myData);


// function myData(item){
//     console.log(item)
// }


// แปลงarryเป็นstring 
// .tostring แปลงเป็นstring
//  .join("*"); นำค่าแต่ละค่าในตัวแปร array มารวมกันเป็นข้อความแล้วส่งค่ากลับเป็นข้อความที่มีตัวคั่นตัวแปรแต่ละค่าตามที่กำหนด
//  color.pop(); เอาตัวสุดท้ายออก
//  let x = color.pop(); เอาตัวท้ายออกแล้วเก็บในตัวแปรx

// รวมarrayเป็นString แต่จะคั่นด้วยเครื่องหมาย comma
// let color = ["red","white","black","blue"]
// let x = color.toString()

// console.log(x)

// การแปลงเป็น String โดยใช้ join
// let color = ["red","white","black","blue"]
// let x = color.join("")  //joinสามารถกำหนดใน()ได้ว่าจะให้ข้อความคั่นด้วยตัวอะไรหรือไม่คั่นก็ได้

// console.log(x)

// let color = ["red","white","black","blue"]

// console.log(color)
// let z = color.pop() //เอาตัวสุดท้ายออกแล้วเก็บในตัวแปร z
// console.log(color)
// console.log(z)


// การรวมArrayเป็นก้อนเดียวกัน

// let furits = ["ส้ม","องุ่น","มะม่วง"]
// let color = ["red","white","black","blue"]
// let hardware = ["เมาส์","คีย์บอด","จอย"]

// let carts = furits.concat(color,hardware) //รวมarrayก้อนอื่นให้เป็นก้อนเดียวกันโดยใช้concat

// console.log(carts)

//การเรียงลำดับในarray

// let point = [20,-5,-2,40,100,500,120]

// ///น้อยไปมากก
// console.log(point)

// point.sort(function(a,b){
//     return a-b ;
// })
// console.log(point)


// let point = [20,-5,-2,40,100,500,120]

// ///มากกไปน้อย
// console.log(point)

// point.sort(function(a,b){
//     return b-a ;
// })
// console.log(point)


// JavaScript Object

// let person = {
//     name:"Thanathip",
//     lastname:"Chinwongkhiaw",
//     email:"krkko2080ti@gmail.com"
// };

// let item = ["Mouse",1500,"Z"]
// // console.log(typeof(person))

// // การเข้าถึงข้อมูลแบบobject
// console.log("ชื่อ ",person.name)
// console.log("นามสกุล ",person.lastname)
// console.log("email ",person.email)

// // การเข้าถึงข้อมูลแบบArray
// console.log("ชื่อ ",item[0])
// console.log("นามสกุล ",item[1])
// console.log("email ",item[2])


// JavaScript Object (Method)
//Method คือการเขียนฟังก์ชันลงในObject ถ้าเกิดทำงานกับวัตถุจะเปลี่ยนจากfunctionเป็นMethod
// let person = {
//     name:"Nueng",
//     lname:"Kung",
//     age:19,
//     email:"sterben2029@gmail.com",

//     getPerson:function(){
//         return "ชื่อ " + this.name + " " + "นามสกุล "+this.lname    //keyword this คือการอ้างอิงถึงตัวของobject
//     }
// }


// //การเรียกใช้Method
// // person.getPerson();
// // console.log(person.getPerson()) 

// document.write(person.getPerson());


// ปุ่มการกดconfrim

// function deleteData(){

    
//     let result = confirm("ต้องการลบข้อมูลหรือไม่")
//     if(result){
//         console.log("ลบข้อมูล")
//     }else{
//         console.log("ไม่ได้ลบข้อมูล")
//     }

// }

// EventListener 

// const even = document.getElementById('menu')

// even.addEventListener('change', getMenu)

// function getMenu(){
//     console.log(even.value)
// }


// let person = {
//     fname:"Saika",
//     lname:"Kuozaki",
//     age:200,

//     getUser(){
//         return "ชื่อจริง = " + this.fname + " " + "นามสกุล = "+ this.lname
//     }
// }

// console.log(person.getUser())

// Arrow function

// const add = (a,b) => a+b;

// console.log(add(5, 10))

// fetch API คือการดึงข้อมูลจากเซิฟเวอร์หรือส่งข้อมูลไปที่เซิฟเวอร์

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Network response was not ok" + response.statusText)
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error("There was a problem the fetch operation", error);
//     });


// let color = ["red","white","black","yellow"]

// for(i = 0; i <=color.length;i++){
//     console.log("รอบที่ = ",[i+1],color[i])
// }
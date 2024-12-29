
/*function a(){

    if(true){
        var a=5;
        console.log(a);
    }
    console.log(a);
}
a();

let a=5;
a=3;
console.log(a); 

const a=1;
console.log(a); 

if(30>5){
    console.log("Hi");
}

Data Types :
--> number 
--> Boolean
--> String
--> BigInt - end with n eg: let a=122345465476585363244241n or let a=BigInt(1234)
--> Object 

let student1 = {
    name: ["abi", "rahul"], 
    age: 20,               
    isStudent: true,
    address: {
        state: "tamilnadu",
        city: "perundurai"
    },
    hello: function() {
        console.log("hi student");
        console.log("hi students");
    }
};


console.log(student1.name[0]); 
console.log(student1["age"]);  
let student1 = new Object();

student1.name = "sudee";
student1.age=20;
console.log(student1)
student1.hello = function()
{
    console.log("age"); 
}
student1.hello(); 

--> logical sortcircuit operators 
 --> or
  --> and

  --> preincrement and postincreament 

  let a = 5;
  let b = a++ + --a;
  let c = ++b + b++;
  a++;
  console.log(a);
  console.log(b);
  console.log(c);
  
  let d = true;
  !!!!!d;
  console.log(d); --> d value is not stored so it prints actual value of d
  d=!!!!!d;
  console.log(d); --> d value is stored so it prints the logical value of d 

  conditional statements
  --> if
  --> if else
  --> if elseif else
  --> nested if else
  --> switch 

  let a = 15;
  if(a%5==0 && a%3==0)
  {
    console.log("hi hello");
  }
  else if(a%5==0)
  {
    console.log("hello");
  }
  else if(a%3==0)
  {
    console.log("hi");
  }
  else
  {
    console.log("Not divided by 3 and 5");
  } 

    let choice="hello"
    switch(choice){
        case "hi" :
            console.log("hi everyone")
            
        case "hello" :
                console.log("hello everyone")
                break;
        default:
                console.log("everyone")
    } 

    if no break is provided it will continusly print the statements
    if no curly braces is given it only takes 1st statement from if
    eg :
    let a= 10
    if(a=0)
       console.log("hi")
       console.log("hello") it prints hello because it does not consider this as inside if , if curly braces provided then it will cosider */
    
    /* for (intialization;CSSConditionRule;increamnet/decreament)
    {
        statements;
    } 

    //for(;;) it runs the statements as infinite because it takes all as true and no statements is to terminate

    let a=1;
    for(console.log('a');a<=3;console.log('b'))
    {
        console.log('c');
        a++;
    }  
   // it goes in the order of initialization so 1st a will prints , sencond condition checks 1,=3 so moves to statements so prints c then increamnet 
   //so it prints b then again it checks condition 2<=3 then it prints c like wise it prints till the condition gets false
   // output = acbcbcb

   let a=1
   for(a=1;a<100;a++);
   console.log("hi");
   console.log(a); 

   // here no for loop statements is provided so it does print anything but the for loop excutes i.e it checks and increament a but it 
   // does not print anything after finishing for loop it prints hi one time and a value prints now a is 100.


   for( let a=1;a<100;a++);
   console.log("hi");
   console.log(a); 
   it causes error as a not defined because let uses only in local scope 

   for( var a=1;a<100;a++)
   console.log("hi");
   console.log(a); 
   // here hi statements runs 99 times 

   do while --> statements first execute and condition checked 
   while --> condition checked and statements execute 
   //for loop,while = entry check loop
   //do while --> exit check loop

   let a=1
   do{
    console.log(a);
    a++;
   }while(a<=10)  
   
    //--> functions
   //--> non parameterized and without return type  
   function app()
   {
    console.log("app")
   }
   app() 
   //--> non parameterized and with return type  
   function app()
   {
     return "apple"
   }
   console.log(app()); 

  // parameterized and without return type 

  function num(a,b)
  {
    console.log(a,b);
  }
  num(2,4); 

  //normal function
  function apple(){
    console.log("hello");
  }
  apple()

  //arrow function
  let apple =()=> console.log("hello");
  apple() 

  let banana = () => {
  console.log("Nandhini");
   return 3+3; 
  }
  console.log(banana());

  //if single statement then it automatically return without using of return statement but that should not used inside curlybraces

  let orange = () => 3+3
  console.log(orange())

  let number = (a,b) =>{
     c=a+b
     return c
  }
  d=number(5,6)
  console.log(d) 

 // --> spread operator(....)  (spread the values as an array or object)

  let a=[1,2,3,4,5,6]
  let b=[7,8,9,10]
  let c = [...a,...b]
 console.log(c)
 
 //rest operator  (combine the values into a array or object)
 function spreadExample(...values){
    console.log(values);
 }
 spreadExample(1,2,3,4,5,6,7) 

 let a= {
    name : "girl",
    age : 26
 }
 let b = {...a};
 console.log(b); 

 //destructuring operator
 let a=[1,5,7,9,5];
 let [b,c,x,...y] = a;
 console.log(y); 


 let a= {
    name : "sudee" ,
    age :20 ,
    place : "erode",
    college: "kongu"
 }
let {name: b,age: c,...d}=a;
console.log(b,c,d) 

// callback - function is passed as parameter into another function

function dog(callback){
  setTimeout(()=>{
    console.log("Jack the dog");
    callback();
  },2000);
}
function cat(){
  console.log("rose the cat")
}
dog(cat) 

function attendence(callback){
  setTimeout(()=>{
    console.log("attendence completed");
    callback();
  },1000)
 
}
function lunch(callback){
  setTimeout(()=>{
    console.log("lunch completed");
    callback();
  },1000)
 
}
function goingtohome(callback){5
  setTimeout(()=>{
    console.log("goingtogome completed");
    callback();
  },1000)
 
}
//callback hell  

attendence(()=>{
  lunch(()=>{
    goingtohome(()=>{
      console.log("day completed")
    })
  })
})

//promise
//asynchronous - parallel working
//sychronous - one after another
//await - connecting with db
//async function should be written in promise statement */

     
//Promise :    instead of call back it is used
/* function attendance()
{
    return new Promise((resolve,reject)=>
    {
        let att = false;
        if(att)
            resolve("present")
        else 
            reject("absent")
    })
}
function lunch()
{
    return new Promise((resolve,reject)=>
        {
            let lun = false;
            if(lun)
                resolve("had lunch")
            else 
                reject("did not have lunch")
        })
}
function go()
{
    return new Promise((resolve,reject)=>
        {
            let going = true;
            if(going)
                resolve("went")
            else 
                reject("hostel")
        })
}
attendance().then((value)=>{console.log(value);return lunch()})
             .then((value)=>{console.log(value);return go()})
             .then((value)=>{console.log(value);})
             .catch((err)=> console.error(err)) 

//async 

function attendance()
{
    return new Promise((resolve,reject)=>
    {
        let att = true;
        if(att)
            resolve("present")
        else 
            reject("absent")
    })
}
function lunch()
{
    return new Promise((resolve,reject)=>
        {
            let lun = true;
            if(lun)
                resolve("had lunch")
            else 
                reject("did not have lunch")
        })
}
function go()
{
    return new Promise((resolve,reject)=>
        {
            let going = true;
            if(going)
                resolve("went")
            else 
                reject("hostel")
        })
}

async function finalDay(){
  try{
    let att = await attendance();
    console.log(att);
    const lun = await lunch();
    console.log(lun);
    const home=await go();
    console.log(home)
  } catch (error) {
    console.error(error)
  }
}
finalDay() */

// file "abc" is being processed
//file is getting downloaded
//download completed

//append 
//let a = "sudee";
//console.log(`my name is ${a}`);

/* function funct1(a,funct2)
{
  setTimeout(()=>{
    console.log(`${a} is processing`);
    funct2(a);
  },1000)

}

function funct2(a)
{
  console.log(`${a} is downloading`);
  setTimeout(()=>{
    console.log(`${a} is downloaded`);
    
  },2000)

}
funct1("abc",funct2) */

/* if(condition)
  true statement 
else
  false statement */

//condition ? true statement : false statement

//31/04/2024 - invalid
//29/02/2001 - valid



 













    
  








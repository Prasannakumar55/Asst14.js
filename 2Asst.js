// 1 .

function func (Name) {
    alert('Hello World' + Name);
}
function func2 (callback) {
    var Name = prompt('please enter your name.');
    callback(Name);
}
 func2(func); 


 // 2 .

 setTimeout (() => {
    x = 1;
    console.log(x);
 }, 1000)

 setTimeout (() => {
    x = 2;
    console.log(x);
 }, 2000)

 setTimeout (() => {
    x = 3;
    console.log(x);
 }, 3000)

 setTimeout (() => {
    x = 4;
    console.log(x);
 }, 4000)

 setTimeout (() => {
    x = 5;
    console.log(x);
 }, 5000)

 setTimeout (() => {
    x = 6;
    console.log(x);
 }, 6000)

 setTimeout (() => {
    x = 7;
    console.log(x);
 }, 7000)


 // 3 .
 
 const promise = new Promise((success,failure) => {
    setTimeout (() => {
        x = 1;
        success(console.log(x));
    }, 1000)
 }).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 2;
        success(console.log(x));
    }, 2000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 3;
        success(console.log(x));
    }, 3000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 4;
        success(console.log(x));
    }, 3000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 4;
        success(console.log(x));
    }, 4000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 5;
        success(console.log(x));
    }, 5000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 6;
        success(console.log(x));
    }, 6000)
 }) ).then( ()=> new Promise((success,reject)=>{

    setTimeout(() => {
        x = 7;
        success(console.log(x));
    }, 7000)
 }) );


 // 4. 

 let p = new Promise((resolve, reject) => {
   if (data == "true") {
      resolve ("Promise Done");
   }
   else {
      reject ("Promise Not Done");
   }
});

p.then(function(data) {
   console.log(data)
})
console.log(p);

p.catch(function(errordata){
   console.log(errordata);
})
console.log(p);


// 5 .

function call (play) {
   play ();
}
call (function () {
   console.log("call back function")
});

// 6 .
function step1 () {
   setTimeout(() => {
      console.log("Step1 Done")
      setTimeout (() => {
         console.log("Step2 Done")
         setTimeout(() => {
            console.log("sStep3 Done")
         }, 2000)
      }, 2000)
   }, 2000)
}
 
step1 ();


// 7 .

function Eligible (age) {
   return new Promise((resolve, reject) => {
      if(age >= 50) {
         resolve = ("Eligible For Vote");
      }
      else {
         reject = ("Not Eligible For Vote");
      }
   })
}

Eligible().then(function (data1) {
   console.log(data1);
}).catch(function (Error1) {
   console.log(Error1);
})


// 8 .

async function test() {
   
   let res = await fetch("2Asst.txt")
   console.log("inside the text 1")
   let res1 = await res.text()
   console.log(res1)
}
test ();
console.log("inside the text 2");


// 9 .

let p1 = new Promise((resolve, reject) => {
   resolve = ("Async")
   reject = ("Await")
});
 
let p2 = new Promise((resolve, reject) => {
   resolve = ("then")
   reject = ("catch")
});

let p3 = new Promise((resolve, reject) => {
   resolve = ("promises")
   reject = ("promose.all")
});

promise.all([p1,p2,p3])

.then((data2) => {
   console.log(data2)
})

.catch((error2) => {
   console.log(error2);
 });


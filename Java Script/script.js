// function showdata(){
//     var text = document.getElementById('character').value;
//     var div = document.getElementById('placeholder');
//     if("AEIOUaeiou".includes(text)){
//         div.innerHTML = "It is a vowel";
//     }
//     else{
//         div.innerHTML = "It is a consonant";
//     }
// }



var marks = [33,44,55,66,77]
// marks.forEach((p)=>{console.log(p)})
let result = marks.map((p)=>p*5)
// console.log(result)

let array = ['pankaj','niketh','ajay','abid','satvik']
const func = (p)=>{return p.toUpperCase()}
result = array.map(func)
// console.log(result)

messages = ['hello',"world",'how','are','you']
function sum(a,b,c){
    return a+' '+b+' '+c;
}
// console.log(messages.reduce((a,b)=>a+' '+b))
// console.log(messages.join(' '))
// console.log(messages.reduce(sum))
// console.log(marks.slice(1,4))
// marks = [...marks,4,5,6,7,8900]
// console.log(marks)


// function* sequence(){
//     let i = 0;
//     while(true){
//         yield i;
//         i = i+1;
//     }
// }
// let seq = sequence()

// console.log(seq.next())
// console.log(seq.next())
// console.log(seq.next())


function* generate(a){
    let i = 1;
    while(i<=10){
        yield a+' * '+i+' = '+(a*i)
        i++;
    }
}
// for(let x of generate(5))
//     console.log(x)





/*********** creation of classes in js**************/

// const obj1 = {
//     msg: 'Welcome to Actalent',
//     show:function(){
//         console.log(this.msg);
//     }
// }
// obj1.show();


// const obj2 = class{
//     show(){
//         console.log('object with class')
//     }
// }
// new  obj2().show();



// class Stock{
//     id;
//     name;
//     rate;
//     constructor(id,name,rate){
//         this.id = id;
//         this.name = name;
//         this.rate = rate
//     }
//     display(){
//         console.log(`${this.id} ${this.name} ${this.rate}`)
//     }
// }

// let instance1 = new Stock(101,'niketh',450000);
// instance1.id = 102
// instance1.display()


// function Visitor(name,purpose,dateOfVisit){
//     this.name = name;
//     this.show =  function(){
//         console.log(name+purpose+dateOfVisit)
//     }
    // this.show();
// }

// let v = new Visitor('niketh ','training',' 23-08-2024');
// v.name = 'pankaj'
// v.show()


// Visitor('pankaj',' job',' 23-08-2024')



// class Visitor{
//     #name = 'niketh';
//     purpose;
//     date_time;
//     process(){
//         console.log(this.#name);
//     }
//     static count = 0;
//     get name (){return this.#name;}
//     set name(d){this.#name = d};
// }

// let i1 = new Visitor();
// i1.name = 'pankaj'
// i1.process()
// console.log(i1.process)
// console.log(i1.name)




/************************************/




// var dishes = ['idly','sambar','annam']
// function addDish(){
//     return new Promise((done,notdone)=>{
//         setTimeout(()=>{
//             dishes.push('pulusu');
//         },2000);
//     })
// }

// function callMethods(){
//     addDish();
//     console.log(dishes);
// }

// callMethods();




let p = fetch('https://fakestoreapi.com/products/1');

p.then((res)=>res.json())
.then((data)=>{
    console.log('fetch'+JSON.stringify(data));
})








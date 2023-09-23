// let products=["mobile","watch","earphones","camera","watch","mobile","laptop"]
// let s="javascript"
// console.log(products.join(""));

// ! --------Array.isArray method-----------------
// console.log(Array.isArray(products));

// console.log(Array.isArray(s));


// ! --------Array.from method-----------------
// let res=Array.from(s)
// console.log(res);

// console.log(Array.isArray(res));

// ! --------set method-----------------

// let numbers=["3","1","8","32","11","3","7","8","12","9"]
// console.log(numbers);

// let res1=new Set(numbers)
// console.log(res1);

// let newArray=Array.from(res1)
// console.log(newArray.sort((a,b)=>a-b));  //call-back function for ascending order

// ?--------------------------------------------------------------------------------------

// let p="javascript"
// console.log(p);
// let newP=p.split("")
// // console.log(newP);
// let rev=newP.reverse()
// // console.log(rev);
// let newString=rev.join("")
// console.log(newString);

// ?--------------------------------------------------------------------------------------
// let numbers=[3,1,8,32,11,3,7,8,12,9]

// let sum=0;

// for (let i in numbers){
//     sum+=numbers[i]
// }

// console.log(sum);

// ?--------------------------------------------------------------------------------------

// let n = [1,2,3];
// let r1 = n.reduce((a,b,c,d)=>{
//     return a+b;
// }

// )
// console.log(r1);
// ?--------------------------------------------------------------------------------------

// let numbers=[1,2,3,4]

// console.log(numbers.reduce((a,b,c,d)=>a+b));
// ?--------------------------------------------------------------------------------------

// let products=["mobile","watch","earphones","camera","watch","mobile","laptop"]

// for(let ele of products){
//     if(ele[0]!=='m')
//     console.log(ele);
// }

// ?--------------------------------------------------------------------------------------
// let products=['watch','laptop','mic','keyboard','mouse']

// let m=products.filter((product)=>product.startsWith('m'))
// console.log(m);

// ?--------------------------------------------------------------------------------------

// let products=['watch','laptop','mic','keyboard','mouse']
// for(let ele of products){
//     console.log(ele);
// }

// ?--------------------------------------------------------------------------------------

// !for each method------------------------

// let s=[1,3,5,2,4,6]

// let p=s.forEach(Element=>{
//     console.log(Element);
//     return Element * Element
// })

// * prints only the console statement...but not the return statement 


// console.log(p);    //& ---------------undefined


// ! -------map method-------------------------

// console.log(s.map(ele=>ele*2));    //&-------(6) [2, 6, 10, 4, 8, 12]
//* returns the updated array

// console.log(s.map(ele=>ele<3));    //&-------(6) [true, false, false, true, false, false]
//* returns the updated array



/*console.log(s.filter(ele => {
    ele*2
})); */                              //&------[]

// console.log(s.filter(ele => {
//     return ele < 4
// }));                              //&------(3) [1, 3, 2]


// let a=[2,69,90,30,23,70,45];
// console.log(a.filter((ele=>ele%10==0)));   //&---------------(3) [1, 3, 2]

// console.log(a.map((ele=>ele*ele)));    //&---------------(7) [4, 4761, 8100, 900, 529, 4900, 2025]


// ?--------------------------------------------------------------------------------------

let students=[
    {
        sname:"ram",
        age:18,
        dept:"cse"
    },
    {
        sname:"raj",
        age:20,
        dept:"ise"
    },
    {
        sname:"john",
        age:19,
        dept:"civil"
    },
    {
        sname:"ravi",
        age:21,
        dept:"civil"
    }
]


console.log(students.filter((student=>student.dept=="cse")));


let u=students.map((student)=>student.sname.toUpperCase())
console.log(u);

console.log(students.filter((student)=>student.age<20));

console.log(students.filter((student)=>student.dept!="civil"));
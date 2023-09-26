// *                         Array destructuring


let colors=['red','pink','green','blue','white'];

// let r=colors[0];
// console.log(r);

// let[r,p,g,b,w]=colors;
// console.log(r,p,g,b,w);


let[,,g]=colors;
console.log(g);        //& your comma to skip element{only in arrays}

// --------------------------------------------------------------------

let[r,p,...w]=colors;
console.log(r,p,w);   //& use of rest parameters

// --------------------------------------------------------------------

let func=([a,b,c,d])=>
{
    console.log(a,b,c,d);
}

func(colors)          //& can destructure by passing the paraments in the function and calling the function by passing arguements as the identifier

// ?--------------------------------------------------------------------------------------------------

// *                         Object destructuring



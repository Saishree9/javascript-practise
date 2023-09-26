function getDate(a=0)
{
    x=new Date(a)
    year=x.getFullYear()
    month=Number(x.getMonth())+1
    date=x.getDate()
    if (month<10){
        console.log(`${year}-0${month}-${date}`);
    }
    else{
        console.log(`${year}-${month}-${date}`);
    }
    
}

getDate("2001-6-25")



// function getDate(a)
// {
//     x=new Date(a)
//     console.log(x.getFullYear()+"-"+x.getMonth()+"-"+x.getDate());
// }
// getDate("1999-12-03")


// let x=new Date()
// console.log(x);

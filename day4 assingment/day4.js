// destructuring of object


let student = {
    name : 'sugesh',
    age : '24',
    projects:{
        dicegame:'to player dice game using javscript'
    }
}

let { name,age,projects,dicegame}=student
console.log(student)

const shopping=['paste','brush','soap','shampoo','rice']
console.log(shopping)

shopping.push('pencil')
console.log(shopping)

let x=6,y=5,z=8
console.log(x+y+z)
console.log(x-y-z)
console.log(x+y*z)
console.log(x/y+z)
console.log(x%y+z)
console.log(x**y)


 ask = (yes,no) =>{
    if(ask){
        console.log('yes')
    }else {
        console.log('no')
    }
} 
 
ask("do u agree",
()=>{alert('YOU agreed.');},()=>{alert('you canclled execution.');})

// prime number

for (let n = 2; n <= 5; n++) {

    let notPrime = false;
    for (var i = 2; i <= n; i++) {
        if (n%i===0 && i!==n) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(n);
    }
}

for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Buzz" );
  }
  else
  {
    console.log(i);
  }
}



let num;


do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
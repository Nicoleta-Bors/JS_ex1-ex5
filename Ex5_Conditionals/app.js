console.log('Ex.1 - Display the larger integer of two numbers:\nEx.2 - The sign of product of three numbers\nEx.3 - Sort three numbers\nEx.4 - Find the largest of five numbers');

let exerciseNumber = parseInt(prompt('Pick an exercise (1-4): '));

switch(exerciseNumber){
  case 1: firstEx(); break;
  case 2: secondEx(); break;
  case 3: thirdEx(); break;
  case 4: fourthEx(); break;
  default: console.log('The exercise number doesn\'t exist!'); break;
}
//ex 1
function firstEx(){
  const num1 = prompt('Enter 1st number: ');
  const num2 = prompt('Enter 2nd number: ');
  
  num1 > num2 ? console.log(`The larger number is ${num1}`) : console.log(`The larger number is ${num2}`)
}
//ex 2
function secondEx(){
  const num1 = prompt('Enter 1st number: ');  
  const num2 = prompt('Enter 2nd number: ');
  const num3 = prompt('Enter 3rd number: ');
  
  num1*num2*num3 > 0 ? console.log('The sign is +') : console.log('The sign is -')
}
//ex 3
function thirdEx(){
  const num1 = prompt('Enter 1st number: ');  
  const num2 = prompt('Enter 2nd number: ');
  const num3 = prompt('Enter 3rd number: ');
  
  const max = Math.max(num1, num2, num3); 
  const min = Math.min(num1, num2, num3); 
  
  let mid = 0; 

  if( (num1 != max) && (num1 != min) ){
    mid = num1;
  } else if(num2 != max && num2 != min){
    mid = num2;
  } else if(num3 != max && num3 != min){
    mid = num3;
  }

  console.log(`Ascending-sort: ${min}, ${mid}, ${max}\nDescending-sort: ${max}, ${mid}, ${min}`)
}
//ex 4
function fourthEx(){
  const num1 = prompt('Enter 1st number: ');  
  const num2 = prompt('Enter 2nd number: ');
  const num3 = prompt('Enter 3rd number: ');
  const num4 = prompt('Enter 4th number: ');  
  const num5 = prompt('Enter 5th number: ');
  let max;

  if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    max = num1;
  } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    max = num2;
  } else if (num3 > num2 && num3 > num1 && num3 > num4 && num3 > num5){
    max = num3;
  } else if (num4 > num2 && num4 > num3 && num4 > num1 && num4 > num5){
    max = num4;
  } else if (num5 > num2 && num5 > num3 && num5 > num4 && num5 > num1){
    max = num5;
  } 

  console.log(`The largest is ${max}`);
}
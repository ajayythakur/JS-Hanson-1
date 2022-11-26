// Add two Numbers
const AddTwoNumbers = (a,b) => {
    return (a+b);
  }

// Find if the conditions are obeyed or not?
// You are given two number first as 
// A
// and second as 
// B
// and check if both conditions (
// A
// <
// 10
// and 
// A
// >
// B
// ) are satisfied or not with the help of operators.

// Note: You have to complete Is_Valid function. No need to take any input.
const Is_Valid = (a,b) => {
    if(a<10 && a>b){
    return true;
    }
    else{
    return false;
    }
  };

  
//   Check the conditons
// You are given two numbers 
// A
// and 
// B
// . You need to do the following checks:

// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.
const Check = (A, B) => 
{
    if(A/10===0 && B/10===0){
      return true;
    }
    else if(A%10 !==0 && B%10 !==0){
      return false;
    }
    else if(A%10===0 || B%10===0){
    return true;
    }
};

// Find the first digit of a 4 digit number
const First_Digit = (n) => {
    var a=n/1000;
    return(Math.floor(a));
 };

//  Find the last digit of a 4 digit number
const Last_Digit = (n) => {
    var a=n%10;
    return(Math.floor(a));
 };
 
//  Find the remainder
const Find_the_remainder = (a,b) => {
    return c=b%a;
  };

//   Multipy two Numbers
const Multiply_two_number = (a,b) => {
    var c=a*b;
    return c;
};

// Marks Calculator
const Sum = (A, B, C) => 
{
 sum=A+B+C;
 return sum;
};

const Average = (A, B, C) => 
{
 var average=sum/300*100;
 return average;
};

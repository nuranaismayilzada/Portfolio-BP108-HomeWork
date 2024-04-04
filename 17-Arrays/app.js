// ## Task 1 🎯

// ### Ədədin birinci və sonuncu rəqəmlərinin cəmi
// Tam ədədin birinci və sonuncu rəqəmlərinin cəmini tapın.

// ### Input
// Ən azı 2 rəqəmi olan 32 mərtəbəli tam ədəd verilir. Ədəd müsbət və ya mənfi ola bilər.


// ### Output
// Yeganə ədəd - məsələnin həlli.

// #### Input example

//     2345

// #### Output example

//     7
   
// ------------------------------------------------------------------------------------------------------------------------------------

//~~~~~~~~~~~~~~~~~~~~~~~Stringe cevirmekle 1ci usul~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let  number=23459974;
// let sum=0;
// let str=number.toString();
// for (let i = 0; i < str.length; i++) {
//     if (i==0 || i==str.length-1) {
//         sum+=Number(str[i])   
//     }
// }
// console.log(sum);


//~~~~~~~~~~~~~~Stringe cevirmeden 2ci usul~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let  number=98923459974;
// let count=0;
// let lastNumber=number%10;
// while (number>=10) {
//     count+=1;
//     number=parseInt(number/10)
// }
// let firstNumber=parseInt(number/(10**count))
// console.log(firstNumber+lastNumber);

// ------------------------------------------------------------------------------------------------------------------------------------




// ### Task 2 🎯
// Ədəddəki cüt və tək yerdə olan rəqəmləri ayrılıqda cəmləyirik. Bu cəmlərin hasilini tapın.


// #### Input
// n (10 ≤ n ≤ 2 * 10**9) natural ədədi.

// #### Output
// Tək və cüt yerdə olan rəqəmlərin cəmlərinin hasilini verin.

// ##### Input example 1

//     27 --> 2*7 = 14

// #### Output example 1

//     14
   
// #### Input example 2

//     2821 --> (2+2) * (8*1) = 36

// #### Output example 2

//     36

// #### Input example 3

//     10001

// #### Output example 3

//     0

// -------------------------------------------------------------------------------------------------------------------------------

// let number=2345680102;
// let onlySum=0;
// let coupleSum=0;
// let strNumber=number.toString();
// for (let i = 0; i < strNumber.length; i++) {
//     if (i%2==0) {
//         coupleSum+=Number(strNumber[i])
//     }
//     else{
//         onlySum+=Number(strNumber[i]);
//     }    
// }
// console.log(`Multiple ${coupleSum*onlySum}`);

// -------------------------------------------------------------------------------------------------------------------------------

// ## Task 3 🎯

// ### 2 vahid artırma
// Tam ədədlər ardıcıllığı verilir. Ardıcıllığın hər bir mənfi olmayan elementini 2 vahid artırmalı.

// #### Input
// Birinci sətirdə ardıcıllığın elementlərinin sayını ifadə edən n (n ≤ 100) natural ədədi verilir. İkinci sətirdə boşluqla ayrılmış, qiyməti modulca 100-dən böyük olmayan ardıcıllığın elementləri verilir.

// #### Output
// Tək sətirdə ardıcıllığın n sayda yeni qiymətlərini eyni ardıcıllıqla boşluqla ayrılmış şəkildə verməli.

// #### Input example

//     4
   
//     1 2 3 -4
// #### Output example

//     3 4 5 -4

// -------------------------------------------------------------------------------------------------------------------------------

// let numbers=[1,2,3,-4];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]>0) {
//         numbers[i]+=2
//     }
// }
// console.log(numbers);
// -------------------------------------------------------------------------------------------------------------------------------


// ## Task 4 🎯

// ### İki ən böyük
// n sayda tam ədədlərdən ibarət massiv verilir. Massivin iki ən böyük elementinin cəmini tapın.

// ### Input
// Birinci sətirdə n natural ədədi verilir (n ≤ 100). Növbəti sətirdə modulca 100-dən böyük olmayan n sayda tam ədəd verilir.


// ### Output
// Massivin iki ən böyük elementinin cəmini çap edin.


// #### Input example

//     5
   
//     1 5 2 6 3

// #### Output example

//     11

// -------------------------------------------------------------------------------------------------------------------------------
// let numbers=[2,9,8,5,3,2]
// let maxOne=numbers[0];
// let maxTwo=numbers[0]
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]>maxOne) {
//         maxTwo=maxOne;
//         maxOne=numbers[i]
//     }    
//     else if(numbers[i]>maxTwo && numbers[i]!==maxOne){
//         maxTwo=numbers[i]
//     }
// }
// console.log(maxOne+maxTwo);
// -------------------------------------------------------------------------------------------------------------------------------



// ## Task 5 🎯

// ### Ən böyük və ən kiçiklərindən başqa
// N sayda tam ədədlərdən ibarət massiv verilir. Bu massivin ən kiçik və ən böyük elementlərindən başqa bütün elementlərinin cəmini tapın.

// ### Input
// Birinci sətirdə N natural ədədi verilir. Növbəti sətirdə N sayda modulca 100-dən böyük olmayan tam ədədlər verilir.

// ### Output
// Məsələnin cavabı.


// #### Input example
   
//     6 2 7 1 7 1 2

// #### Output example

//     10
   
//-------------------------------------------------------------------------------------------------------------------------------
// let numbers=[0,1,2,3,4,5,6];
// let min=numbers[0];
// let max=numbers[0];
// let sum=0;
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]>max) {
//         max=numbers[i]
//     } 
//     if (numbers[i]<min) {
//         min=numbers[i]
//     }   
// }
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i]==min || numbers[i]==max) {
//         continue;
//     }    
//     sum+=numbers[i]
// }
// console.log(sum);
//-------------------------------------------------------------------------------------------------------------------------------

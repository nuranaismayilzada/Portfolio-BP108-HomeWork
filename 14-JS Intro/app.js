// ## Task 1: 🎯
// ### Sadə məsələ
// Proqram ikirəqəmli ədədi oxuyur və ədədin hər bir rəqəmini arada boşluq olmaqla ekrana verir.

// ### Input
// 10 - 99 arası hər hansı bir natural ədəd

// ### Output
// Boşluqla ayrılmış iki rəqəm

// #### Input example:

//     23

// #### Output example:

//     2 3
// ---------------------------------------------------------------------------------------------------------------
// let number=65;
// let lastNumber=number%10;
// let firstNumber=parseInt(number/10);
// console.log(firstNumber," ",lastNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ## Task 2: 🎯

// ### Ortadakı rəqəm olmadan
// Üçrəqəmli ədədi orta rəqəmi olmadan yazmalı.

// ### Input
// Yeganə üçrəqəmli ədəd.

// ### Output
// Üçrəqəmli ədədi orta rəqəmi olmadan verməli.


// #### Input example:

//     198

// #### Output example:

//     18

// ----------------------------------------------------------------------------------------------------------------
// let number=198;
// let lastNumber=number%10;
// let firstNumber=parseInt(number/100);
// let newNumber=firstNumber*10+lastNumber
// console.log(newNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ## Task 3: 🎯

// ### Almaları bölüşdürmə - 2
// n məktəbli k almanı bərabər bölüşdürdülər, bölünməyən qalanlar sabətdə qalır. Səbətdə neçə alma qalacaq?

// ### Input
// İki tam n və k ədədləri verilir. Bütün giriş verilənləri 1500-ü aşmır – məktəbdə az hallarda çox şagird olur və belə bir səbəti hardan tapmalı?

// ### Output
// Proqram yeganə ədədi – səbətdə qalan almaların sayını verməlidir
// #### Input example 1:

//      3

//     14

// #### Output example 1:
//     2
// #### Input example 2:
//     10

//     100
// #### Output example 2:
//     0
// ---------------------------------------------------------------------------------------------------------
// let studentCount=14;
// let appleCount=3;
// let basketappleCount=(appleCount%studentCount)
// console.log(basketappleCount);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 5: 🎯

// ### Düzbucaqlının perimetri
// Düzbucaqlının perimetrini hesablayın.

// ### Input
// Dördbucaqlının tamqiymətli a və b (1 ≤ a, b ≤ 1000) tərəfləri.

// ### Output
// Dördbucaqlının perimetrini verməli.

// #### Input example:

//     3 4

// #### Output example:

//     14

// ---------------------------------------------------------------------------------------------------------
// let length=5;
// let wide=6;
// let perimeter=(length+wide)*2
// console.log(`Perimeter:${perimeter}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 7 🎯

// ### a və b ədədlərinin hasilini tapın.

// #### Input example 1

//     65536
   
//     216

// #### Output example 1

//     14155776

// ---------------------------------------------------------------------------------------------------------
// let a=11;
// let b=23;
// let c=a*b;
// console.log(c);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 8 🎯

// ### Ədədin qüvvəti

// a və n natural ədədləri verilir. a**n -in qiymətini hesablayın.


// #### Input example 1

//     2
   
//     10

// #### Output example 1

//     1024

// ---------------------------------------------------------------------------------------------------------
// let a=3;
// let n=4;
// let number=a**n;
// console.log(number);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 9 🎯

// ### Rəqəmi silmək
// Natural n ədədi verilmişdir. n ədədinin axırınci rəqəmini (təkli rəqəmini) silin.


// #### Input example 1

//     512

// #### Output example 1

//     51

// ---------------------------------------------------------------------------------------------------------
// let number=515;
// let lastNumber=number%10;
// let newNumber=parseInt((number-lastNumber)/10)
// console.log(newNumber)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 10 🎯

// ### Rəqəm
// Girişdə n natural ədədi verilir. Bu ədədin sağdan birinci rəqəmini tapmaq tələb olunur.

// #### Input example 1

//     27

// #### Output example 1

//     7

// ---------------------------------------------------------------------------------------------------------
// let number=27;
// let lastNumber=number%10;
// console.log(lastNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 11 🎯

// ### Tərsinə Ədəd
// Verilmiş dördrəqəmli natural ədədini tərsinə çevirin.


// #### Input example 1

//     1234

// #### Output example 1

//     4321

// ---------------------------------------------------------------------------------------------------------
// let number=1234;
// let firstNumber=parseInt(number/1000)
// let lastNumber=number%10;
// let secondNumber=parseInt(number/100%10)
// let thirdNumber=parseInt(number/10%10);
// let newNumber=lastNumber*1000+thirdNumber*100+secondNumber*10+firstNumber;
// console.log(newNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 12 🎯

// ### Həsən və pirojki
// Birinci böyük fasilədə Həsənin m qəpiyi vardır, ikinci fasilədə o acıdı və bütün pullarını dadlı pirojkiyə xərcləmək qərarına gəldi. 
// Pirojki n qəpiyə satılırsa, Həsən neçə pirojki ala bilər?


// #### Input example 1

//     27 10

// #### Output example 1

//     2
// --------------------------------------------------------------------------------------------------------
// let hasanMoney=27;
// let pirojikMoney=10;
// let pirojikCount=parseInt(hasanMoney/pirojikMoney);
// console.log(`Hesenin ala bileceyi pirojik sayi:${pirojikCount}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ## Task 13 🎯
// ### Səthin sahəsi və həcm 2
// Verilmiş ölçülərinə görə kubun səthinin sahəsini və həcmini hesablayın.

// Kubun sethinin sahesi: s=6*a*a
// Kubun hecmi: v= a*a*a


// #### Input example 1

//     3

// #### Output example 1

//     54 27
// ---------------------------------------------------------------------------------------------------------
// let a=3;
// let S=6*(a**2);
// let V=a**3;
// console.log(`S=${S}  V=${V}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ## Task 14 🎯
// ### Ədədi tapın 1

// Üçrəqəmli n ədədini 10-a böldülər. Tam hissənin soluna n ədədinin sonuncu rəqəmini yazıb x ədədini aldılar. Əgər n məlumdursa, x ədədini tapın.


// #### Input example 1

//     123

// #### Output example 1

//     312
// ---------------------------------------------------------------------------------------------------------
// let number=245;
// let firstNumber=parseInt(number/100)
// let secondNumber=parseInt(number/10%10);
// let lastNumber=number%10;
// let newNumber=lastNumber*100+firstNumber*10+secondNumber;
// console.log(newNumber);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
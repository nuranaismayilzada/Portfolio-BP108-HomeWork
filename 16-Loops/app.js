// I. 1 dən 100'ə qədər sadecə cüt ədədləri çapa verin.
// for (let i = 1; i <100; i++) {
//     if (i%2==0) {
//         console.log(i);
//     }    
// }



//-------------------------------------------------------------------------------------------------------------------------------


// II. question) number type'lı bir dəyişən daxil edin.
// Verilən rəqəmin tək və ya cüt olduğunu console'a çıxaran proqram tərtib edin.

// Məsələn: number = 15;
// Nəticə: 15 tək rəqəmdir

// Məsələn: number = 8;
// Nəticə: 8 cüt rəqəmdir

// let number=45;
// if (number%2==0) {
//     console.log(`Nəticə: ${number} cüt rəqəmdir.`);
// }
// else if(number%2!=0){
//     console.log(`Nəticə: ${number} tək rəqəmdir.`);
// }


//-------------------------------------------------------------------------------------------------------------------------------





// III. Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.
// let number=15;
// let divisor=1;
// while (number>0) {
//     if (number%divisor==0) {
//         console.log(divisor);
//     }
//     divisor+=1;
// }




//-------------------------------------------------------------------------------------------------------------------------------







// VI. question) Düzbucaqlı üçbucağın katetləri və hipotenuzunun uzunluğu verilib.
// Verilən məlumatlara əsəsən bu üçbucağın düzbucaqlı üçbucaq olub olmadığını
// yoxlayan proqram tərtib edin.

// Məsələn: katet1=3, katet2=4, hipotenuz=5 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaqdır

// Məsələn: katet1=3, katet2=3, hipotenuz=8 yazdıqda cavab bu şəkildə olmalıdır:

// Result: düzbucaqlı üçbucaq deyil.

// let katet1=3;
// let katet2=3;
// let hipotenuz=5;
// if (hipotenuz**2==katet1**2+katet2**2) {
//     console.log("Düzbucaqlı üçbucaqdır.");
// }
// else{
//     console.log("Düzbucaqlı üçbucaq deyil.");
// }




//-------------------------------------------------------------------------------------------------------------------------------





// V. question) 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
// Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:
// Result: 6, 5, 2

// let number=652;
// let strNumber="";
// while (number>0) {
//     let lastNumber=number%10;
//     strNumber+=lastNumber+",";
//     number=parseInt(number/10);
// }
// console.log(strNumber);


// let number = 652;
// let strNumber = String(number)
// let result = "";
// for (let i = 0; i < strNumber.length; i++) {
//     result+=strNumber[i]+" ";
// }
// console.log(result);





//-------------------------------------------------------------------------------------------------------------------------------



// VI.question) Üçbücağın 3 tərəfi verilib.
// Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.


// let a=5;
// let b=5;
// let c=5;
// if (a==b && a==c && b==c) {
//     console.log("Ucbucaq berabertereflidir.");
// }
// else{
//     console.log("Ucbucaq beraberterefli deyil.");
// }



//-------------------------------------------------------------------------------------------------------------------------------



// VII. question) IV.question) Üçbücağın 3 tərəfi verilib.
// Onların bərabəryanlı üçbucaq olduğunu təyin edən proqram tərtib edin.

// let a=6;
// let b=7;
// let c=7;
// if ((a==b && b!=c && a!=c) || (b==c && a!=c && b!=a) || (a==c && b!=a && b!=c) )  {
//     console.log("Ucbucaq beraberyanlidir.");
// }
// else{
//     console.log("Ucbucaq beraberyanli deyil.");
// }



//-------------------------------------------------------------------------------------------------------------------------------

// VIII. question) 3 dəyişən daxil edin.
// Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin.

// let a=5;
// let b=10;
// let c=6;
// if ((a<b+c)&&(b<a+c)&&(c<b+c)) {
//     console.log("Bu ededler ucbucagin terefleridir.");
// }
// else{
//     console.log("Bu ededler ucbucagin terefleri deyil.");
// }


//-------------------------------------------------------------------------------------------------------------------------------


// IX. question) Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.Məsələn: month="january" dedikdə cavab "january has 31 days",
// month="february" dedikdə cavab "february has 28 days" şəklində olsun



// let nameMonth = "Yanvar";
// switch (nameMonth) {
//     case "Yanvar":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Fevral":
//         console.log(`${nameMonth} ayi 28 gunden ibaretdir`);
//         break;
//     case "Mart":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Aprel":
//         console.log(`${nameMonth} ayi 30 gunden ibaretdir`);
//         break;
//     case "May":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Iyun":
//         console.log(`${nameMonth} ayi 30 gunden ibaretdir`);
//         break;
//     case "Iyul":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Avqust":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Sentyabr":
//         console.log(`${nameMonth} ayi 30 gunden ibaretdir`);
//         break;
//     case "Oktyabr":
//         console.log(`${nameMonth} ayi 30 gunden ibaretdir`);
//         break;
//     case "Noyabr":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     case "Dekabr":
//         console.log(`${nameMonth} ayi 31 gunden ibaretdir`);
//         break;
//     default:
//         console.log("Ay duzgun yazilmayib.");
//         break;
// }



//-------------------------------------------------------------------------------------------------------------------------------


// X. 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin rəqəmlərindən ibarət olan max və min ədədlərini tapın


// let number=914;
// let max=number%10;
// let min=number%10;
// while (number>0) {
//     let lastNumber=number%10;
//     if (lastNumber>max) {
//         max=lastNumber
//     }
//     if (lastNumber<min) {
//         min=lastNumber
//     }
//     number=parseInt(number/10);
// }
// console.log(`Verilen ededdeki maxium reqem: ${max}  minium reqem:${min}`);
//-------------------------------------------------------------------------------------------------------------------------------
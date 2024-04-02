//  Task 1:
// Daxil edilən yaşa görə istifadəçinin pensiya yaşına çatıb-çatmadığını tapan proqram yazın.
// Ədəd müsbət və 125-dən balaca olmalıdır.
// let age=87;
// if (age>0 && age<65) {
//     console.log("Pensiya yasina catmamisiniz !");
// }
// else if (age>65 && age<125) {
//     console.log("Beli siz artiq pensiya yasindasiniz !");
// }
// else{
//     console.log("Yas formati duzgun daxil edilmeyib!");
// }



// Task 2:
// Daxil edilən rəqəmin cüt yoxsa tək olmasını tapın. Ədəd müsbət olmadır.
// let number=289;
// if (number>0 && number%2==0) {
//     console.log("Eded cutdur");
// }
// else if (number>0 && number%2!=0){
//     console.log("Eded tekdir");
// }
// else{
//     console.log("Eded menfidir.");
// }


// Task 3:
// daxil edilən aya görə (məsələn Fevral), hansi fəsil oldugunu consola yazan proqram yazin.
// let choice="Oktyabr";
// switch (choice) {
//     case "Yanvar":
//         console.log("Qis");
//         break;
//     case "Fevral":
//         console.log("Qis");
//         break;
//     case "Mart":
//         console.log("Yaz");
//         break;
//     case "Aprel":
//         console.log("Yaz");
//         break;
//     case "May":
//         console.log("Yaz");
//         break;
//     case "Iyun":
//         console.log("Yay");
//         break;
//     case "Iyul":
//         console.log("Yay");
//         break;
//     case "Avqust":
//         console.log("Yay");
//         break;
//     case "Sentyabr":
//         console.log("Payiz");
//         break;
//     case "Oktyabr":
//         console.log("Payiz");
//         break;
//     case "Noyabr":
//         console.log("Payiz");
//         break;
//     case "Dekabr":
//         console.log("Qis");
//         break;
// }


// Task 4:
// Daxil edilən müsbət ədədin 3 və 5 ədədinə eyni anda bölünüb-bölünmədiyini tapan proqram yazın.
// let number=42;
// if (number%3==0 && number%5==0) {
//     console.log("Daxil edilen eded eyni anda hem 5-e,hemde 3-e qaliqsiz bolunur.");
// }
// else{
//     console.log("Daxil edilen eded 3 ve 5 e eyni anda bolunmur.");
// }


// Task 5:
// Daxil edilən müsbət ədədin 2-yə tam bölünüb-bölünmədiyini tapan proqram yazın. 
//Əgər tam bölünürsə, consolda bölündü yazılsın,tam bölünmürsə qalıq hesablanıb yazılsın.
// let number=41;
// if (number>0 && number%2==0) {
//     console.log("Bolundu.");
// }
// else if(number>0 && number%2!=0){
//     console.log(`Bolunmeden alinan qaliq:${number%2}`);
// }
// else{
//     console.log("Eded menfidir.");
// }


// Task 6:
// Daxil edilən 2 ədədin hasilinin müsbət yoxsa mənfi ədəd olmasını göstərin.
// let number1=20;
// let number2=9;
// if (number1*number2>0) {
//     console.log("Hasil musbetdir.");
// }
// else if(number1*number2<0){
//     console.log("Hasil menfidir.");
// }
// else{
//     console.log("Hasil 0-a beraberdir.");
// }



// Task 7:
// Daxil edilən müsbət ədədin 1-100 arasında olub-olmadığını tapan proqram yazın.
// let number=98;
// if (number>0 && number<100) {
//     console.log("Daxil edilen eded 1-100 arasdindadir.");
// }
// else if (number>0 && number>100){
//     console.log("Daxil edilen eded 1-100 arasinda deyil.");
// }
// else{
//     console.log("Eded menfidir.");
// }



// Task 8:
// Daxil edilən 3 müsbət ədədin ən böyüyünü tapan proqram yazın.
// let number1=15;
// let number2=95;
// let number3=12;

// if (number1>0 && number2>0 && number3>0 && number1>number2 && number1>number3) {
//     console.log(`3 ededden en boyuyu: ${number1}`);
// }
// else if(number1>0 && number2>0 && number3>0 && number2>number1 && number2>number3){
//     console.log(`3 ededden en boyuyu: ${number2}`);
// }
// else if(number1>0 && number2>0 && number3>0 && number3>number1 && number3>number2){
//     console.log(`3 ededden en boyuyu: ${number3}`);
// }
// else{
//     console.log("Ededler ya menfidir yada bir-birine beraberdir.");
// }


// Task 9:
// Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın.
// 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F". 
//Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.
// let price=92;
// if (price>0 && price<60) {
//     console.log("Telebenin aldigi qiymet-F");
// }
// else if(price>=60 && price<70 ){
//     console.log("Telebenin aldigi qiymet-D");
// }
// else if(price>=70 && price<80 ){
//     console.log("Telebenin aldigi qiymet-C");
// }
// else if(price>=80 && price<90 ){
//     console.log("Telebenin aldigi qiymet-B");
// }
// else if(price>=90 ){
//     console.log("Telebenin aldigi qiymet-A");
// }
// else{
//     console.log("Qiymet formati duzgun daxil edilmeyib.");
// }




// Task 10:
// İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.
//Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın. Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.
//Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın." Taskı switch-case ilə yazın.
// let number1=10;
// let number2=2;
// let mathematicalEquation="*";
// switch (mathematicalEquation) {
//     case "+":
//         console.log(`Sum:${number1+number2}`);
//         break;
//     case "-":
//         console.log(`Subtraction:${number1-number2}`);
//         break;
//     case "*":
//         console.log(`Multiple:${number1*number2}`);
//         break;
//     case "/":
//         console.log(`Division:${number1/number2}`);
//         break;
//     default:
//         console.log("Zəhmət olmasa düzgün əməl daxil edin yazılsın.");
//         break;
// }



// Task 11:
// İstifadəçi yaşını daxil edir.Yaş 18-dən azdırsa "Yeniyetmə", 18-64 yaşdadırsa 
//"Yetkin", 65 və daha yuxarıdırsa "Yaşlı" kimi çıxış edən proqram yazın.Ədəd müsbət olmalıdır.
// let age=27;
// if (age>0 && age<18) {
//     console.log("Yeniyetme");
// }
// else if(age>17 && age<65){
//     console.log("Yetkin");
// }
// else if(age>0 && age>65){
//     console.log("Yasli");
// }
// else{
//     console.log("Yas formati duzgun daxil edilmeyib.");
// }



// Task 12:
// Daxil edilən x və y ədədlərinin aşağıdakı şərtlərinə görə hesablamasını edən proqram yazın.
// Bu şərtlərdən başqası daxil edilərsə consolda "Sadəcə tələb olunan şərtləri daxil edin yazılsın."
// Əgər x>0 və y<0 isə 4x+2y+4 ifadəsini hesablayın.
// Əgər x>0 və y=0 isə 2x-y+3 ifadəsini hesablayın.
// Əgər x<0 və y>0 isə 3x+4y+3 ifadəsini hesablayın.
// let x=-5;
// let y=3;
// if (x>0 && y<0) {
//     console.log(4*x+2*y+4);
// }
// else if(x>0 && y==0){
//     console.log(2*x-y+3);
// }
// else if(x<0 && y>0){
//     console.log(3*x+4*y+3);
// }
// else{
//     console.log("Sadəcə tələb olunan şərtləri daxil edin.");
// }




// Task 13:
//  Kiçik bir lotoreya oyunu yazın. Bu oyunda komputer bir random rəqəm yaradacaq,
// istifadəçidən isə promptla bir rəqəm alınacaq. Şərtlər belədir:
// 1. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədəd üst-üstə düşərsə alertlə " Siz 1000 manat qazandınız yazın".
// 2. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin hər iki mərtəbəsi uyğun gələrsə,
// amma mərtəbələrin yeri dəyişikdirsə alertlə " Siz 500 manat qazandınız" yazın. Yəni random ədəd 45-dir
// amma istifadəçi 54 yazıbsa o 500 manat qazanır.
// 3. Daxil edilən random ədədlə istifadəçinin daxil etdiyi ədədin bir mərtəbəsi uyğun gələrsə,alertlə " Siz 100 manat qazandınız" yazın. Yəni random ədəd 32-dir istifadəçi 42 yazıbsa o 100 manat qazanır.
// 4. Bu hallardan heç biri deyilsə, alertlə "Bir daha sınayın" yazın.
// let randomcomputerNumber=43;
// let randomcomputerfirstNumber=parseInt(randomcomputerNumber/10);
// let randomcomputerlastNumber=randomcomputerNumber%10;
// let randomuserNumber=23;
// let randomuserfirstNumber=parseInt(randomuserNumber/10)
// let randomuserlastNumber=randomuserNumber%10;
// if (randomcomputerNumber==randomuserNumber) {
//     console.log("Siz 1000 manat qazandınız.");
// }
// else if((randomcomputerfirstNumber==randomuserlastNumber && randomcomputerlastNumber==randomuserfirstNumber)
// &&(randomcomputerfirstNumber==randomuserfirstNumber || randomcomputerfirstNumber==randomuserlastNumber)
// &&(randomcomputerlastNumber==randomuserfirstNumber || randomcomputerlastNumber==randomuserlastNumber))
// {
//     console.log("Siz 500 manat qazandınız");
// }
// else if(randomcomputerfirstNumber==randomuserfirstNumber || randomcomputerlastNumber==randomuserlastNumber){
//     console.log("Siz 100 manat qazandiniz");
// }
// else{
//     console.log("Bir daha sınayın");
// }
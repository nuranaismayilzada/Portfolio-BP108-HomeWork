//! 1- 2 ədədin cəmini tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.

// function Sum(num1,num2) {
//     return num1+num2;
// }
// let sum=Sum(4,5)
// console.log(sum);


// ?------------------------------------------------------------------------------------------------


//! 2- 2 ədədin hasili tapan funskiya yazın. Ədədlər parametr olaraq verilməlidir.

// function Multiple(num1,num2) {
//     return num1*num2;
// }
// let multiple=Multiple(4,5)
// console.log(multiple);

// ?------------------------------------------------------------------------------------------------


//! 3- 2 ədədin bütün riyazi əməlləri(+ - * /) yerinə yetirə bilən funksiya yazın. 
// ! Funksiya ədədləri və əməliyyatı parametr olaraq qəbul etməldir.


// function Calculator(num1,num2,operation) {
//     if (operation=="+") {
//         return num1+num2;
//     }
//     else if(operation=="-"){
//         return num1-num2
//     }
//     else if(operation=="*"){
//         return num1*num2
//     }
//     else if(operation=="/"){
//         return Math.round(num1/num2)
//     }
//     else{
//         console.log("Invalid operation");
//     }
// }
// let calculator=Calculator(4,9,"+")
// console.log(calculator);


// ?------------------------------------------------------------------------------------------------


// ! 4- Parametr olaraq daxil edilən 2 ədəddən hansının böyük olduğunu return edən funksiya yazın

// const Comprassion=(num1,num2)=>{
//     if (num1>num2) {
//         return num1;
//     }
//     else if(num2>num1){
//         return num2;
//     }
//     else{
//         return ("Ededler beraberdir.")
//     }
// }

// let comprassion=Comprassion(6,8);
// console.log(comprassion);


// ?------------------------------------------------------------------------------------------------


// ! 5-  Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin. 

// const strCut=(str)=>(str.slice(0,5))
// console.log(strCut("nnurane"));


// ?------------------------------------------------------------------------------------------------

// ! 6-  Elə bir funksiya yazın ki, hansı uzunluqda string parametr olaraq verilsə uzunluğunu 5 simvol etsin.
// ! Əgər 5 simvoldan kiçik olarsa sözü * ilə tamamlasın

// const strComplicated=(str)=>{
//    if (str.length>=5) {
//     return str.slice(0,5)
//    }
//    else{
//     return str.padEnd(5,"*")
//    } 
// }
// console.log(strComplicated("nurane"));

// ?------------------------------------------------------------------------------------------------


// ! 7- Parametr olaraq qəbul edilən arrayın elementləri cəmini hesablayan funksiya yazın.

// const sum=function(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(sum([2,4,5,7]));



// ?------------------------------------------------------------------------------------------------


// ! 8- Parametr olaraq qəbul edilən arrayın yalnız rəqəm olan elementləri cəmini hesablayan funksiya yazın.

// function sum(arr) {
//     let sum=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==+arr[i]) {
//             sum+=arr[i]
//         }        
//     }
//     return sum;
// }
// console.log(sum([1,2,3,3,4,"nurane",false,true,true,2,2,1,true]));

// ?----------------------------------------------------------------------------------------------------


//! 9- Parametr olaraq qəbul edilən array-in elementlərini tərsinə düzən funksiya yazın.

// function reverse(arr) {
//     let reverseArr=[];
//     let k=0;
//     for (let i = arr.length-1; i >=0; i--) {
//         reverseArr.push(arr[i])
//         k++;
//     }
//     return reverseArr;
// }
// console.log(reverse([2,3,5,8,1,82,212,2]));


// ?----------------------------------------------------------------------------------------------------


// ! 10- Parametr olaraq söz qəbul edən və sözü tərsinə yazan funksiya yazın.

// let reverseString=(str)=>{
//     console.log(str.split('').reverse().join(''));
// }
// reverseString("nurannne")


// ?--------------------------------------------------------------------------------------------------------


// ! 11- Parametr olaraq bir array və bir dəyişən qəbul edən, geriyə bu dəyişəni arrayın 3-cü elementi edib qaytaran funksiya yazın.


// function changeStr(arr,element) {

//     for (let i = 0; i < arr.length; i++) {
//         if (i==2) {
//             arr[i]=element;
//         }        
//     }
//     return arr;
// }
// console.log(changeStr(["nurane","n",7,22,1,true,false,7,2],"p"));


// ?--------------------------------------------------------------------------------------------------------


// ! 12- Parametr olaraq rəqəmlərdən ibarət array qəbul edən və geriyə ancaq müsbət ədədlərdən ibarət array qaytaran funksiya yazın.

// function onlypilusNumbers(arr) {
//     let newArr=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(onlypilusNumbers([-9,2,3,-8,2,33,-34]));


// ?--------------------------------------------------------------------------------------------------------

// ! 13- Parametr olaraq sözlərdən ibarət array qəbul edən və ancaq uzunluğu 5 dən çox olan sözləri qaytaran funksiya yazın

// function str(arr) {
//     let newArr=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>5) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(str(["nunu","nurane","nurus","n","salam","necesen","how","aree","youuuu"]));

// ?--------------------------------------------------------------------------------------------------------

// ! 14- 18-ci taskda olan bütün alqoritmləri funksiya şəklində yazırsınız. Hamısında verilən datanı funksiya
// !parametr olaraq qəbul edəcək. Məsələn students ilə bağlı olanlarda funksiya students array-ni parametr olaraq 
//! qəbul edib nəticəni ya konsola verməli ya da return etməlidir.
let students = [
    {
        id: 1,
        name: "Nurane",
        surname: "Ismayilzade",
        age: 21,
        hobbies: ["music", "walking", "watchingfilm"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "cavid" },
            { id: 4, name: "alisa" },
        ],
        loginDetail: { username: "nurana21", password: "nunu123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 88,
        salaryAZN: 144,
        university: "BDU",
    },
    {
        id: 2,
        name: "Gizilgul",
        surname: "Allahverdiyeva",
        age: 20,
        hobbies: ["book", "writing code"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "babaxan" },
            { id: 4, name: "gulshen" },
        ],
        loginDetail: { username: "allahverdieva1", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 70,
        salaryAZN: 100,
        university: "BDU",
    },
    {
        id: 3,
        name: "Xanim",
        surname: "Nuriyeva",
        age: 21,
        hobbies: ["book", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "hikmet" },
            { id: 4, name: "gulsen" },
        ],
        loginDetail: { username: "xanim123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 145,
        university: "BDU",
    },
    {
        id: 4,
        name: "Minaya",
        surname: "Binnetova",
        age: 21,
        hobbies: ["book", "gaming", "movie", "music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "anar" },
        ],
        loginDetail: { username: "binnetova", password: "hello123" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 90,
        salaryAZN: 142,
        university: "BDU",
    },
    {
        id: 5,
        name: "Sabina",
        surname: "Hatamli",
        age: 21,
        hobbies: ["shopping", "listen to music"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Mirvari" },
        ],
        loginDetail: { username: "sebine123", password: "salam123" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 81,
        salaryAZN: 146,
        university: "BDU",
    },

    {
        id: 6,
        name: "Ləman",
        surname: "Şamilova",
        age: 20,
        hobbies: [
            "watching movies",
            "reading books",
            "painting",
            " walking",
            " listen to music",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "lemanshamilova", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 85.8,
        salaryAZN: 145,
        university: "BDU",
    },
    {
        id: 7,
        name: "Narmin",
        surname: "Musayeva",
        age: 21,
        hobbies: ["book", "gaming", "painting", "walking"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "fidan" },
            { id: 4, name: "Irada" },
        ],
        loginDetail: {
            username: "narmin0",
            password: "narmin01",
        },
        gender: "girl",
        boyfriendGirlfriend: false,
        fail: false,
        avgPoint: 80,
        salaryAZN: 196,
        university: "BDU",
    },

    {
        id: 8,
        name: "Fatima",
        surname: "Akhundzada",
        age: 20,
        hobbies: ["drawing", "sleeping"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Valida" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: false,
        avgPoint: 76,
        salaryAZN: 100,
        university: "BDU",
    },
    {
        id: 9,
        name: "Elmir",
        surname: "Huseynov",
        age: 21,
        hobbies: ["book", "ice skating", "Tennis", "Karting"],
        student: true,
        teacher: [
            { id: 1, name: "Gurban" },
            { id: 2, name: "Hajar" },
            { id: 3, name: "Morad" },
            { id: 4, name: "Fikrat" },
        ],
        loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 120,
        university: "BDU",
    },
    {
        id: 10,
        name: "Fidan",
        surname: "Rehimli",
        age: 21,
        hobbies: ["book", "gaming"],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "Turan" },
        ],
        loginDetail: { username: "fidan123", password: "fidanrahimli" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 75,
        salaryAZN: 98,
        university: "BDU",
    },
    {
        id: 11,
        name: "Aynur",
        surname: "Aynurova",
        age: 20,
        hobbies: ["book", "gaming"],
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
        ],
        loginDetail: { username: "aynur123", password: "salamBaku" },
        gender: "girl",
        boyfriendGirlfriend: true,
        fail: true,
        avgPoint: 81,
        salaryAZN: 120,
        university: "BDU",
    },

    {
        id: 12,
        name: "Elman",
        surname: "Muradov",
        age: 20,
        hobbies: [
            "book",
            "gaming",
            "sking",
            "wrestling",
            "swiming",
            "arguing about philosophy",
            "solving sudoku",
            "hiking",
            "walking",
        ],
        student: true,
        teacher: [
            { id: 1, name: "gurban" },
            { id: 2, name: "hajar" },
            { id: 3, name: "jale" },
            { id: 4, name: "akhmed" },
        ],
        loginDetail: { username: "elman17", password: "elman12345" },
        gender: "man",
        boyfriendGirlfriend: false,
        fail: true,
        avgPoint: 76,
        salaryAZN: 100,
        university: "BDU",
    },
];

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün elementləri konsola yazın

// function showStudents(students) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(students[i]);
// }
// }
// showStudents(students)


// ?----------------------------------------------------------------------------------------------------------------



// ! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// function showName(students) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(`Ad:${students[i].name}`);
//     }
// }
// showName(students)


// ?----------------------------------------------------------------------------------------------------------------



// ! - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada

// function showNameandSurname(students) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(`Ad:${students[i].name},soyad:${students[i].surname}`);
//     }
// }
// showNameandSurname(students)

// ?----------------------------------------------------------------------------------------------------------------



// ! - Kəsri olan tələbələrin ad və soyadını çapa verin

// function failshowStudents(students) {
//     console.log("Kesri olan telebeler");
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].fail == true) {
//             console.log(`Ad:${students[i].name},soyad:${students[i].surname}`);
//         }
//     }
// }
// failshowStudents(students)


// ?----------------------------------------------------------------------------------------------------------------


//! - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// const showhobbiesStudents = (students) => {
//     let maxHobbie = students[0].hobbies.length
//     let maxhobbieIndex = 0
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].hobbies.length > maxHobbie) {
//             maxHobbie = students[i].hobbies.length;
//             maxhobbieIndex = i
//         }
//     }
//     return `Name:${students[maxhobbieIndex].name} Hobbies:${students[maxhobbieIndex].hobbies}`;
// }
// console.log(showhobbiesStudents(students));


// ?----------------------------------------------------------------------------------------------------------------


//! - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// function avg(students) {
//     let maxavgPoint=students[0].avgPoint;
//     let maxavgpointIndex=0;
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].avgPoint>maxavgPoint) {
//             maxavgPoint=students[i].avgPoint
//             maxavgpointIndex=i
//         }
//     }
//    return `Name:${students[maxavgpointIndex].name} Surname:${students[maxavgpointIndex].surname}`;
// }

// console.log(avg(students));


// ?----------------------------------------------------------------------------------------------------------------

// ! - Parolu ən uzun olan tələbənin username və adını çapa verin

// const maxpasswordlengthshowStudent = (students) => {
//     let maxPassword = students[0].loginDetail.password.length;
//     let maxpasswordIndex = 0;
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].loginDetail.password.length > maxPassword) {
//             maxPassword = students[i].loginDetail.password.length
//             maxpasswordIndex = i
//         }
//     }
//     return `Username:${students[maxpasswordIndex].loginDetail.username} Name:${students[maxpasswordIndex].name}`;
// }
// console.log(maxpasswordlengthshowStudent(students));

// ?----------------------------------------------------------------------------------------------------------------


// ! - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// function boyfriendhaveStudents(students) {
//     console.log("Boyfriend ve ya Girlfriendi olan telebeler");
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].boyfriendGirlfriend == true) {
//             console.log(`Ad:${students[i].name},username:${students[i].loginDetail.username}`);
//         }
//     }
// }
// boyfriendhaveStudents(students)

// ?----------------------------------------------------------------------------------------------------------------


// !- yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// function showNameTeachername(students) {
//     let teachers = ""
//     for (let i = 0; i < students.length; i++) {
//         teachers = "";
//         if (students[i].age == 20) {

//             for (let j = 0; j < students[i].teacher.length; j++) {
//                 teachers += students[i].teacher[j].name + " "
//             }
//             console.log(`Name:${students[i].name} Teachers names:${teachers}`);
//         }
//     }
// }
// showNameTeachername(students)

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// let usdsalaryshow=function (students) {
//     for (let i = 0; i < students.length; i++) {
//         students[i].salaryUSD=parseInt(`${students[i].salaryAZN/1.70}`)
//         console.log(students[i]);
//     }
// }
// usdsalaryshow(students)


// ?----------------------------------------------------------------------------------------------------------------


// ! - Müəllimlərin baş hərflərini böyük hərflə yazın

// function showuppercaseteacherName(students) {
//     for (let i = 0; i < students.length; i++) {
//         for (let j = 0; j < students[i].teacher.length; j++) {
//             students[i].teacher[j].name = students[i].teacher[j].name.charAt(0).toUpperCase() + students[i].teacher[j].name.slice(1);
//         }
//         console.log(students[i]);
//     }
// }
// showuppercaseteacherName(students)


// ?----------------------------------------------------------------------------------------------------------------


// ! - Şifrəsində rəqəm olmayan tələbələri tapın

// let showStudents = (students) => {
//     let newStudents = [];
//     for (let i = 0; i < students.length; i++) {
//         let reqem = false;
//         for (let j = 0; j < students[i].loginDetail.password.length; j++) {
//             if (!isNaN(students[i].loginDetail.password[j])) {
//                 reqem = true;
//                 break;
//             }
//         }
//         if (!reqem) {
//             let newStu = {};
//             newStu.id = students[i].id;
//             newStu.name = students[i].name;
//             newStu.surname = students[i].surname;
//             newStu.age = students[i].age;
//             newStu.hobbies = students[i].hobbies;
//             newStu.student = students[i].student;
//             newStu.teacher = students[i].teacher;
//             newStu.loginDetail = students[i].loginDetail;
//             newStu.gender = students[i].gender;
//             newStu.boyfriendGirlfriend = students[i].boyfriendGirlfriend;
//             newStu.fail = students[i].fail;
//             newStu.avgPoint = students[i].avgPoint;
//             newStu.salaryAZN = students[i].salaryAZN;
//             newStu.university = students[i].university;
//             newStudents.push(newStu);
//         }
//     }
//     return newStudents;
// }

// console.log(showStudents(students));



// ?----------------------------------------------------------------------------------------------------------------


//! - Qızların arasında id-si 3 olan müəllimlərin adını deyin

// function girlsteachersNames(students) {
//     let girls = []
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].gender == "girl") {
//             girls.push(students[i])
//         }
//     }
//     for (let i = 0; i < girls.length; i++) {
//         for (let j = 0; j < girls[i].teacher.length; j++) {
//             if (girls[i].teacher[j].id == 3) {
//                 console.log(girls[i].teacher[j]);
//             }
//         }
//     }
// }
// girlsteachersNames(students)


// ?----------------------------------------------------------------------------------------------------------------


// ! - Tələbələrin adlarını və müəllim saylarını çapa verin

// function teachersCount(students) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(`Name:${students[i].name},Teachers count:${students[i].teacher.length}`);
//     }
// }
// teachersCount(students)


// ?----------------------------------------------------------------------------------------------------------------


//! - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]


// let newStudents=(students)=>{
//     let newstudents=[]
// for (let i = 0; i < students.length; i++) {
//     let newStu={}
//     newStu.name=students[i].name;
//     newStu.username=students[i].loginDetail.username;
//     newStu.password=students[i].loginDetail.password
//     newstudents.push(newStu)
// }
//         return newstudents;
// }
// console.log(newStudents(students));


// ?----------------------------------------------------------------------------------------------------------------


// ! - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin


//! 1ci usul
// function addedTeachers(students) {
//     for (let i = 0; i < students.length; i++) {
//         for (let j = 0; j < students[i].teacher.length; j++) {
//             students[i].teacher[j].name=students[i].teacher[j].name+" müəllim";
//         }
//     }
//     console.log(students);
// }

// addedTeachers(students)

//! 2-ci usul string metodu ile

// function addedTeachers(students) {
//     for (let i = 0; i < students.length; i++) {
//         for (let j = 0; j < students[i].teacher.length; j++) {
//             students[i].teacher[j].name=students[i].teacher[j].name.concat(" müəllim");
//         }
//     }
//     console.log(students);
// }
// addedTeachers(students)


// ?----------------------------------------------------------------------------------------------------------------


// !- Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin

// ! 1-ci usul string metod istifade etmekle

// function spaceaddedstudentsNames(students) {
//     for (let i = 0; i < students.length; i++) {
//         students[i].loginDetail.password=students[i].loginDetail.password.padStart(students[i].loginDetail.password.length+3," ")
//     }
//     console.log(students);
// }
// spaceaddedstudentsNames(students)


// ! 2-ci usul string metodsuz
// function spaceaddedstudentsNames(students) {
//     for (let i = 0; i < students.length; i++) {
//         students[i].loginDetail.password = "   " + students[i].loginDetail.password;
//     }
//     console.log(students);
// }
// spaceaddedstudentsNames(students)


// ?----------------------------------------------------------------------------------------------------------------

//! - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin

// function showPassword(students) {
//     let newpassword = ""
//     for (let i = 0; i < students.length; i++) {
//         newpassword = " "
//         let passwordStart = students[i].loginDetail.password.slice(0, 4)
//         let passwordEnd = "*".repeat(students[i].loginDetail.password.length - 4)
//         newpassword = passwordStart + passwordEnd;
//         students[i].loginDetail.password = newpassword;
//     }
//     console.log(students);
// }
// showPassword(students)

// ?----------------------------------------------------------------------------------------------------------------

//! - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin

// function nameandsurnameShow(students) {
//     for (let i = 0; i < students.length; i++) {
//         let nameLength=students[i].name.length;
//          let surnamelength=students[i].surname.slice(0,nameLength)
//          students[i].surname=surnamelength;
//      }
//     return students;
// }
// console.log(nameandsurnameShow(students));


// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin yaşlarının toplamı nə qədərdir

// function totalSum(students) {
//     let sum = 0;
//     for (let i = 0; i < students.length; i++) {
//         sum += students[i].age;
//     }
//     return `Total sum:${sum}`;
// }

// console.log(totalSum(students));

// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin cəmi bal ortalaması nə qədərdir

// function totalAvg(students) {
//     let totalaveragePoint = 0;
//     for (let i = 0; i < students.length; i++) {
//         totalaveragePoint += students[i].avgPoint;
//     }
//     return `Total Average Point:${parseInt(totalaveragePoint / students.length)}`;
// }
// console.log(totalAvg(students));


// ?----------------------------------------------------------------------------------------------------------------

// !- "book" həvəsini olan tələbələrin siyahısını çap edin


// function bookHobbiesShow(students) {
//     let newStudents = [];
//     for (let i = 0; i < students.length; i++) {
//         let newStu = {}
//         for (let j = 0; j < students[i].hobbies.length; j++) {
//             if (students[i].hobbies[j] == "book") {
//                 newStu.id = students[i].id
//                 newStu.name = students[i].name;
//                 newStu.surname = students[i].surname;
//                 newStu.age = students[i].age;
//                 newStu.hobbies = students[i].hobbies;
//                 newStu.student = students[i].student;
//                 newStu.teacher = students[i].teacher;
//                 newStu.loginDetail = students[i].loginDetail;
//                 newStu.gender = students[i].gender;
//                 newStu.boyfriendGirlfriend = students[i].boyfriendGirlfriend;
//                 newStu.fail = students[i].fail;
//                 newStu.avgPoint = students[i].avgPoint;
//                 newStu.salaryAZN = students[i].salaryAZN;
//                 newStu.university = students[i].university;
//                 newStudents.push(newStu);
//                 break;
//             }
//         }
//     }
//     console.log(newStudents);
// }
// bookHobbiesShow(students)


// ?----------------------------------------------------------------------------------------------------------------

// ! - Tələbələrin yaş ortalaması nədir?

// function avgAge(students) {
//     let sum = 0;
//     for (let i = 0; i < students.length; i++) {
//         sum += students[i].age;
//     }
//     return `Total sum avarage:${parseInt(sum / students.length)}`;
// }
// console.log(avgAge(students));


// ?----------------------------------------------------------------------------------------------------------------

//! - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin.


// let ageandgendershow = (students) => {
//     let newStudent = [];
//     for (let i = 0; i < students.length; i++) {
//         let newStu = {}
//         newStu.name=students[i].name
//         newStu.gender = students[i].gender;
//         newStu.age = students[i].age;
//         newStudent.push(newStu)
//     }
//     return newStudent;
// }
// console.log(ageandgendershow(students));


// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır

// let totalnamesurnamelengthSum = (students) => {
//     let sum = 0;
//     for (let i = 0; i < students.length; i++) {
//         sum = 0;
//         sum = students[i].name.length + students[i].surname.length
//         console.log(`${students[i].name} ${students[i].surname}, name and surname total sum:${sum}`);
//     }
// }
// totalnamesurnamelengthSum(students)


// ?----------------------------------------------------------------------------------------------------------------

//! - Tələbələrin adlarını tərsinə çevirin.

// function reverseName(students) {
//     for (let i = 0; i < students.length; i++) {
//         students[i].name=students[i].name.split("").reverse().join("")
//     }
//     console.log(students);
// }
// reverseName(students);

// ?----------------------------------------------------------------------------------------------------------------

// ! - "gamig" həvəsi olan tələbələrin array-ini yaradın


// function gamingHobbies(students) {
//     let newStudents = [];
//     for (let i = 0; i < students.length; i++) {
//         let newStu = {}
//         for (let j = 0; j < students[i].hobbies.length; j++) {
//             if (students[i].hobbies[j] == "gaming") {
//                 newStu.id = students[i].id
//                 newStu.name = students[i].name;
//                 newStu.surname = students[i].surname;
//                 newStu.age = students[i].age;
//                 newStu.hobbies = students[i].hobbies;
//                 newStu.student = students[i].student;
//                 newStu.teacher = students[i].teacher;
//                 newStu.loginDetail = students[i].loginDetail;
//                 newStu.gender = students[i].gender;
//                 newStu.boyfriendGirlfriend = students[i].boyfriendGirlfriend;
//                 newStu.fail = students[i].fail;
//                 newStu.avgPoint = students[i].avgPoint;
//                 newStu.salaryAZN = students[i].salaryAZN;
//                 newStu.university = students[i].university;
//                 newStudents.push(newStu);
//                 break;
//             }
//         }
//     }
//     console.log(newStudents);
// }
// gamingHobbies(students)



// ?----------------------------------------------------------------------------------------------------------------

//! - Bütün tələbələrin hobbiləri olan array yaradın?

// let hobbies = (students) => {
//     let hobbiesStudents = [];

//     for (let i = 0; i < students.length; i++) {
//         for (let j = 0; j < students[i].hobbies.length; j++) {
//             hobbiesStudents.push(students[i].hobbies[j])
//         }
//     }
//     return hobbiesStudents;
// }
// console.log(hobbies(students));


// ?----------------------------------------------------------------------------------------------------------------


// ! 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//! (Array method-lardan istifadə edin)
//!Example:
// !console.log(getFirst([1, 73, 99, 20])) -> 1
// !console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// !console.log(getFirst([1, 73, 99, 20], 0)) -> []
// !console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]


// function show(arr, n) {
//     let newArr = arr.slice(0, n);
//     return newArr;
// }
// console.log(show([1, 73, 99, 20],4));



// ?--------------------------------------------------------------------------------------------------------------------


//! 2. Write a simple JavaScript function to join all elements of the following array into a string.
//! console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
//! console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// function join(arr,symbol) {
//     return arr.toString().replaceAll(",",symbol)
// }
// console.log(join([1, 73, 99, 20], "/"));

// ?--------------------------------------------------------------------------------------------------------------------


//! 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character.
//! For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
//! Example:
//! console.log(convert('saLamNecesen)) -> SAlAMnECESEN

// let convert = (str) => {
//     let newStr = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase()) {
//             newStr += str[i].toLowerCase();
//         }
//         else if (str[i] == str[i].toLowerCase()) {
//             newStr += str[i].toUpperCase();
//         }
//     }
//     return newStr;
// }
// console.log(convert('SalamNecEsEn'));


// ?--------------------------------------------------------------------------------------------------------------------



// !4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// !console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]


// function clear(arr) {
//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0 || arr[i] === false || arr[i] === true || arr[i] === undefined || arr[i] === null || arr[i] === "") {
//             continue
//         }
//         newArr.push(arr[i])
//     }
//     console.log(newArr);
// }
// clear([0, 1, false, 2, undefined, '', 3, null]);



// ?--------------------------------------------------------------------------------------------------------------------


// ! 5. Write a method that returns a duplicate-free array.
// ! console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// ! console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]


// function clearDuplicate(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let check = false;
//         for (let j = 0; j < newArr.length; j++) {
//             if (arr[i] == newArr[j]) {
//                 check = true;
//                 break;
//             }
//         }
//         if (check == false) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }
// clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])


// ?--------------------------------------------------------------------------------------------------------------------


//! 6. Write a function that compares two arrays and returns true if they are identical.
//!console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// !console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// !console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// !console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true


// function isEqual(arr1,arr2) {
// if (arr1.length!==arr2.length) {
//     console.log(false);
// }
// else{
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i]!==arr2[i]) {
//             break;
//         }
//     }
//     console.log(true);
// }
// }
// isEqual([1, 2, 3, 4], [1, 2, 3, 4]);



// ?--------------------------------------------------------------------------------------------------------------------


// !7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa
// !char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.


// function isHas(str, char) {
//     let sum = -1;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == char) {
//             if (sum === -1) {
//                 sum = i
//             }
//             else {
//                 sum += i
//             }
//         }
//     }
//     console.log(sum);
// }
// isHas("salam", 'a')


// ?--------------------------------------------------------------------------------------------------------------------


//! 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir.
// ! Və daxil olunmuş indeksə əsasən göndərilmiş string - i həmin array - ə əlavə edib return etsin.
// ! Məsələn arqument olaraq - ['a', 'salam', 'b', 'world'], 3, "dev" göndərilərsə o zaman dev string - ini
//! 3cu indekse elave etmelidir, eger gonderilmish indeks array -in uzunlugundan boyuk olarsa
// !o zaman hemin string array -in en sonuna elave edilsin.


// function change(arr,index,str) {
//     if (arr.length>index) {
//         arr.splice(index,0,str)
//     }
//     else{
//         arr.push(str)
//     }
//     return arr;
// }
// console.log(change(['a', 'salam', 'b', 'world'], 3, "dev"));


// ?--------------------------------------------------------------------------------------------------------------------

//! 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
//! gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir.
//! Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// function Concat(arr1,arr2,char) {
//     return arr1.concat(arr2).join(char) ;
// }
// console.log(Concat([1,2],[3,4], '*'));


// ?--------------------------------------------------------------------------------------------------------------------

// !10.
//! [
//!  { name: "Ali", scores: [90, 85, 92] },
// !  { name: "Davud", scores: [100, 100, 100] },
//!   { name: "Mammal", scores: [75, 80, 85] },
//!  { name: "Camil", scores: [90, 95, 85] },
//! ];
//! #studentlərin ortalama score'nu yeni bir arrayda yığın

// let studentss = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Davud", scores: [100, 100, 100] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
// ];

// let avg = (studentss) => {
//     let avgScore = [];
//     for (let i = 0; i < studentss.length; i++) {
//         let total = 0;
//         for (let j = 0; j < studentss[i].scores.length; j++) {
//             total += studentss[i].scores[j];
//         }
//         let average = total / studentss[i].scores.length;
//         avgScore.push(average);
//     }
//     return avgScore;
// }
// console.log(avg(studentss));




// ?--------------------------------------------------------------------------------------------------------------------


//! !11.
// !const webTechs = [
//!   "HTML",
//!   "CSS",
//!   "JS",
//!   "React",
//!   "JS",
//!   "Redux",
//!   "Node",
//!   "JS",
//!   "MongDB",
//! ];
// ! # webTechs arrayında olan elementlərin uzunluğu 4'dən böyük olanları yeni bir arraya yığın



// const webTechs = [
//     "HTML",
//     "CSS",
//     "JS",
//     "React",
//     "JS",
//     "Redux",
//     "Node",
//     "JS",
//     "MongDB",
// ];

// const lengththanfourTechs = (webTechs) => {
//     let newArr = []
//     for (let i = 0; i < webTechs.length; i++) {
//         for (let j = 0; j < webTechs[i].length; j++) {
//             if (webTechs[i].length > 4) {
//                 newArr.push(webTechs[i])
//                 break;
//             }
//         }
//     }
//     return newArr;
// }

// console.log(lengththanfourTechs(webTechs));




// ?--------------------------------------------------------------------------------------------------------------------


// !12.
//! const products = [
// !  {
//!     id: 1,
//!     title: "Smartphone",
// !    description: "A high-end smartphone with the latest features.",
// !    price: 799.99,
// !  },
//!   {
//  !   id: 2,
// !    title: "Laptop",
//  !   description: "Powerful laptop with a large screen and fast processor.",
// !    price: 1299.99,
//  ! },
// !  {
// !    id: 3,
//  !   title: "Coffee Maker",
//  !   description: "An automatic coffee maker with a built-in grinder.",
//   !  price: 99.99,
//  ! },
//  ! {
//  !   id: 4,
//   !  title: "Headphones",
//   !  description: "Wireless over-ear headphones with noise-cancellation.",
//   !  price: 199.99,
//   !},
//  ! {
//   !  id: 5,
//  !   title: "Smart TV",
// !    description: "55-inch 4K Smart TV with streaming apps built-in.",
// !    price: 699.99,
// !  },
// !];

// !# product arrayindəki producların qiymətləri cəmini və ortalamasını tapın

// const products = [
//     {
//         id: 1,
//         title: "Smartphone",
//         description: "A high-end smartphone with the latest features.",
//         price: 799.99,
//     },
//     {
//         id: 2,
//         title: "Laptop",
//         description: "Powerful laptop with a large screen and fast processor.",
//         price: 1299.99,
//     },
//     {
//         id: 3,
//         title: "Coffee Maker",
//         description: "An automatic coffee maker with a built-in grinder.",
//         price: 99.99,
//     },
//     {
//         id: 4,
//         title: "Headphones",
//         description: "Wireless over-ear headphones with noise-cancellation.",
//         price: 199.99,
//     },
//     {
//         id: 5,
//         title: "Smart TV",
//         description: "55-inch 4K Smart TV with streaming apps built-in.",
//         price: 699.99,
//     },
// ];

// let productsAvg=(products)=>{
//     let productsSum=0;
//     for (let i = 0; i < products.length; i++) {
//         productsSum+=products[i].price
//     }
//     let productsAvarage=parseInt(productsSum/products.length);
//     console.log(`Products Sum:${productsSum} Products Avarage:${productsAvarage}`);
// }
// productsAvg(products)


// ?--------------------------------------------------------------------------------------------------------------------


//! 13.let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
//!countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın


// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

// function Countries(countries) {
//     let newCountries=[]
// for (let i = 0; i < countries.length; i++) {
//    if (countries[i].charAt(0).toLowerCase()==="a" && countries[i].charAt(countries[i].length-1).toLowerCase()==="a") {
//     newCountries.push(countries[i])
//    }
// }
// console.log(newCountries);   
// }

// Countries(['Arabia','Almaniya','Azerbaycan'])
// Countries(countries)



// ?--------------------------------------------------------------------------------------------------------------------


//! 14.# Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// !function findNumberOfDivisors(n) {
// !  ...
// !}


//!(bolene 1 -i daxil etmedim)

// function findNumberOfDivisors(number) {
//     let divisor=1;
// let count=0;
//     while (number>divisor) {
//         if (number%divisor==0) {
//             count+=1;
//         }
//         divisor+=1
//     }
//    return count;
// }

// console.log(findNumberOfDivisors(16));


// ?--------------------------------------------------------------------------------------------------------------------



// !15.daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// !function findSpaceCounts(str){
// !        ...
// !    }

// function findSpaceCounts(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == " ") {
//             count += 1;
//         }
//     }
//     return count
// }
// console.log(findSpaceCounts("Salam Nunu necsenn neynirsen sen ?"));



// ?--------------------------------------------------------------------------------------------------------------------

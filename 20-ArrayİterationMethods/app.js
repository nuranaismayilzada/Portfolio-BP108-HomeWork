// ! 7- Parametr olaraq qəbul edilən arrayın elementləri cəmini hesablayan funksiya yazın.

// let arr=[2,4,5,7]
// let sum=0
// arr.forEach(element => {
//     sum+=element
// });
// console.log(sum);

// ?------------------------------------------------------------------------------------------------


// ! 8- Parametr olaraq qəbul edilən arrayın yalnız rəqəm olan elementləri cəmini hesablayan funksiya yazın.

// let sum=0;
// let arr = [1, 2, 3, 3, 4, "nurane", false, true, true, 2, 2, 1, true]
// arr.forEach(element => {
//     if (element == +element) {
//         sum += element
//     }
// });
// console.log(sum);
// ?----------------------------------------------------------------------------------------------------


//! 9- Parametr olaraq qəbul edilən array-in elementlərini tərsinə düzən funksiya yazın.

// let reversee=[2,3,5,8,1,82,212,2];
// reversee.reverse()
// console.log(reversee);


// ?----------------------------------------------------------------------------------------------------

// ! 11- Parametr olaraq bir array və bir dəyişən qəbul edən, geriyə bu dəyişəni arrayın 3-cü elementi edib qaytaran funksiya yazın.


//  let arr=["nurane","n",7,22,1,true,false,7,2]
// let newArr= arr.map((element,index) => {
//     if (index==3) {
//         if (element=="p") {
//             element="p"
//             return element
//         }
//     }
//     return element
//  });
//  console.log(newArr);

// ?----------------------------------------------------------------------------------------------------
// ! 12- Parametr olaraq rəqəmlərdən ibarət array qəbul edən və geriyə ancaq müsbət ədədlərdən ibarət array qaytaran funksiya yazın.

// let onlypilusNumbers=[-9,2,3,-8,2,33,-34]
// let newArr=onlypilusNumbers.filter(element=>element>0)
// console.log(newArr);

// ?--------------------------------------------------------------------------------------------------------
// ! 13- Parametr olaraq sözlərdən ibarət array qəbul edən və ancaq uzunluğu 5 dən çox olan sözləri qaytaran funksiya yazın

// let arr=["nunu","nurane","nurus","n","salam","necesen","how","aree","youuuu"]
// let newArr=arr.filter(element=>element.length>5)
// console.log(newArr);

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

// students.forEach(element => {
//     console.log(element);
// });

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban

// students.forEach(element => {
//     console.log(`Ad:${element.name}`);
// });

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada

// students.forEach(element => console.log(`Ad:${element.name},soyad:${element.surname}`))

// ?----------------------------------------------------------------------------------------------------------------


// ! - Kəsri olan tələbələrin ad və soyadını çapa verin

// let  failshowStudents=students.filter((element)=>element.fail==true)
// failshowStudents.forEach((elemen)=>{
//     console.log(`Ad:${elemen.name},soyad:${elemen.surname}`)
// });

// ?----------------------------------------------------------------------------------------------------------------

//! - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// let maxHobbie = students[0].hobbies.length;
// let maxhobbieIndex = 0
// students.forEach((element,index) =>  {
//     if (maxHobbie<element.hobbies.length) {
//         maxHobbie=element.hobbies.length
//         maxhobbieIndex=index
//     }
// })
// console.log(`Name:${students[maxhobbieIndex].name} Hobbies:${students[maxhobbieIndex].hobbies}`);


// ?----------------------------------------------------------------------------------------------------------------


//! - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin

// let maxavgPoint = students[0].avgPoint;
// let maxavgpointIndex = 0;
// students.forEach((element, index) => {
//     if (maxavgPoint < element.avgPoint) {
//         maxavgPoint = element.avgPoint;
//         maxavgpointIndex = index
//     }
// });
// console.log(`Name:${students[maxavgpointIndex].name} Surname:${students[maxavgpointIndex].surname}`)


// ?----------------------------------------------------------------------------------------------------------------

// ! - Parolu ən uzun olan tələbənin username və adını çapa verin

// let maxPassword = students[0].loginDetail.password.length;
// let maxpasswordIndex = 0;
// students.forEach((element,index) =>  {
//     if (maxPassword<element.loginDetail.password.length) {
//         maxPassword=element.loginDetail.password.length
//         maxpasswordIndex=index
//     }
// })
// console.log(`Name:${students[maxpasswordIndex].name} Hobbies:${students[maxpasswordIndex].loginDetail.username}`);


// ?----------------------------------------------------------------------------------------------------------------

// ! - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin


// let boygirlfirend=students.filter((elemet)=> elemet.boyfriendGirlfriend==true).forEach((element)=>{
//     console.log(`Ad:${element.name},username:${element.loginDetail.username}`);
// })


// ?----------------------------------------------------------------------------------------------------------------

// !- yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// let findStudents=students.filter((element)=>element.age==20).forEach((element)=>{
//      let teachersNames = element.teacher.map(teacher=>teacher.name).join(" ");
//      console.log(`Name:${element.name} Teachers names:${teachersNames}`);
// })

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// students.forEach(student => {
//     student.salaryUsd = parseInt(student.salaryAZN / 1.70);
// });
// console.log(students);

// ?----------------------------------------------------------------------------------------------------------------

//! - Qızların arasında id-si 3 olan müəllimlərin adını deyin


let girls=students.filter(element=>element.gender=="girl")

girls.forEach((element) => {
    if(element.teacher.id === 3) {
        console.log(element.teacher.name);
    }
});
// ?----------------------------------------------------------------------------------------------------------------

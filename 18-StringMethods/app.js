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


// ! - Bütün elementləri konsola yazın
// for (let i = 0; i < students.length; i++) {
//         console.log(students[i]);
// }



// ?----------------------------------------------------------------------------------------------------------------



// ! - Bütün tələbələrin adlarını konsola yazın - ad: Qurban
// for (let i = 0; i < students.length; i++) {
//     console.log(`Ad:${students[i].name}`);    
// }



// ?----------------------------------------------------------------------------------------------------------------



// ! - Bütün tələbələrin adlarını və soyadlarını konsola yazın - ad: Qurban, soyad: Qurbanzada
// for (let i = 0; i < students.length; i++) {
//     console.log(`Ad:${students[i].name},soyad:${students[i].surname}`);    
// }



// ?----------------------------------------------------------------------------------------------------------------



// ! - Kəsri olan tələbələrin ad və soyadını çapa verin
// console.log("Kesri olan telebeler");
// for (let i = 0; i < students.length; i++) {
//     if (students[i].fail==true) {
//         console.log(`Ad:${students[i].name},soyad:${students[i].surname}`);    
//     }
// }



// ?----------------------------------------------------------------------------------------------------------------


//! - Ən çox hobbisi olan tələbənin ad və hobbilərini çapa verin

// let maxHobbie=students[0].hobbies.length
// let maxhobbieIndex=0
// for (let i = 0; i < students.length; i++) {
//     if (students[i].hobbies.length>maxHobbie) {
//         maxHobbie=students[i].hobbies.length;
//         maxhobbieIndex=i
//     }
// }
// console.log(`Name:${students[maxhobbieIndex].name} Hobbies:${students[maxhobbieIndex].hobbies}`);


// ?----------------------------------------------------------------------------------------------------------------


//! - Ortalaması ən böyük olan tələbənin ad və soyadını çapa verin


// let maxavgPoint=students[0].avgPoint;
// let maxavgpointIndex=0;
// for (let i = 0; i < students.length; i++) {
//     if (students[i].avgPoint>maxavgPoint) {
//         maxavgPoint=students[i].avgPoint
//         maxavgpointIndex=i
//     }
// }
// console.log(`Name:${students[maxavgpointIndex].name} Surname:${students[maxavgpointIndex].surname}`);


// ?----------------------------------------------------------------------------------------------------------------

// ! - Parolu ən uzun olan tələbənin username və adını çapa verin

// let maxPassword=students[0].loginDetail.password.length;
// let maxpasswordIndex=0;
// for (let i = 0; i < students.length; i++) {
//     if (students[i].loginDetail.password.length>maxPassword) {
//         maxPassword=students[i].loginDetail.password.length
//         maxpasswordIndex=i
//     }    
// }
// console.log(`Username:${students[maxpasswordIndex].loginDetail.username} Name:${students[maxpasswordIndex].name}`);


// ?----------------------------------------------------------------------------------------------------------------


// ! - boyfriend-i olan tələbələrin adlarını və username-lərini çapa verin

// console.log("Boyfriend ve ya Girlfriendi olan telebeler");
// for (let i = 0; i < students.length; i++) {
//     if (students[i].boyfriendGirlfriend==true) {
//         console.log(`Ad:${students[i].name},username:${students[i].loginDetail.username}`);    
//     }
// }


// ?----------------------------------------------------------------------------------------------------------------


// !- yaşı 20 olan tələbələrin adlarını və müəllim adlarını çapa verin

// let teachers=""
// for (let i = 0; i < students.length; i++) {
//     teachers="";
//     if (students[i].age==20) {

//         for (let j = 0; j < students[i].teacher.length; j++) {
//             teachers+=students[i].teacher[j].name+" "            
//         }
//         console.log(`Name:${students[i].name} Teachers names:${teachers}`);
//     }
// }

// ?----------------------------------------------------------------------------------------------------------------


// ! - Bütün tələbələrə təqaüdlərinin dollar ilə görünməsini təmin edin

// for (let i = 0; i < students.length; i++) {
//     students[i].salaryUSD=parseInt(`${students[i].salaryAZN/1.70}`)
//     console.log(students[i]);   
// }

// ?----------------------------------------------------------------------------------------------------------------


// ! - Müəllimlərin baş hərflərini böyük hərflə yazın

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//         students[i].teacher[j].name=students[i].teacher[j].name.charAt(0).toUpperCase()+students[i].teacher[j].name.slice(1);
//     }    
//     console.log(students[i]);        
// }

// ?----------------------------------------------------------------------------------------------------------------


// ! - Şifrəsində rəqəm olmayan tələbələri tapın

// let newStudents=[]
// for (let i = 0; i < students.length; i++) {
//     let newStu={}
//     for (let j = 0; j < students[i].loginDetail.password.length; j++) {
//         if (students[i].loginDetail.password[j]==+students[i].loginDetail.password[j]) {
//             newStu.id=students[i].id
//             newStu.name=students[i].name;
//             newStu.surname=students[i].surname;
//             newStu.age=students[i].age;
//             newStu.hobbies=students[i].hobbies;
//             newStu.student=students[i].student;
//             newStu.teacher=students[i].teacher;
//             newStu.loginDetail=students[i].loginDetail;
//             newStu.gender=students[i].gender;
//             newStu.boyfriendGirlfriend=students[i].boyfriendGirlfriend;
//             newStu.fail=students[i].fail;
//             newStu.avgPoint=students[i].avgPoint;
//             newStu.salaryAZN=students[i].salaryAZN;
//             newStu.university=students[i].university;
//             newStudents.push(newStu);
//             break;
//         }        
//     }   
// }
// console.log(newStudents);

// ?----------------------------------------------------------------------------------------------------------------


//! - Qızların arasında id-si 3 olan müəllimlərin adını deyin

// let girls=[]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].gender=="girl") {
//         girls.push(students[i])
//     }    
// }
// for (let i = 0; i < girls.length; i++) {
//     for (let j = 0; j < girls[i].teacher.length; j++) {
//         if (girls[i].teacher[j].id==3) {
//             console.log(girls[i].teacher[j]);
//         }
//     }  
// }



// ?----------------------------------------------------------------------------------------------------------------


// ! - Tələbələrin adlarını və müəllim saylarını çapa verin

// for (let i = 0; i < students.length; i++) {
//     console.log(`Name:${students[i].name},Teachers count:${students[i].teacher.length}`);  
// }

// ?----------------------------------------------------------------------------------------------------------------


//! - Tələbələrin adlarını username və şifrələrindən ibarət yeni array yaradın [{name:qurban,username:qurban123,password:qqq123}]

// let newStudents=[]
// for (let i = 0; i < students.length; i++) {
//     let newStu={}
//     newStu.name=students[i].name;
//     newStu.username=students[i].loginDetail.username;
//     newStu.password=students[i].loginDetail.password
//     newStudents.push(newStu)
// }
// console.log(newStudents);


// ?----------------------------------------------------------------------------------------------------------------


// ! - Müəllimlərin adlarından sonra müəllim sözünü əlavə edin. String metod istifadə edin


//! 1ci usul

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//         students[i].teacher[j].name=students[i].teacher[j].name+" müəllim";  
//     }
// }
// console.log(students);


//! 2-ci usul string metodu ile 

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].teacher.length; j++) {
//         students[i].teacher[j].name=students[i].teacher[j].name.concat(" müəllim");  
//     }
// }
// console.log(students);


// ?----------------------------------------------------------------------------------------------------------------


// !- Hamının şifrəsinin əvvəlinə 3 ədəd boşluq əlavə edin. String metod istifadə edin

// ! 1-ci usul string metod istifade etmekle

// for (let i = 0; i < students.length; i++) {
//     students[i].loginDetail.password=students[i].loginDetail.password.padStart(students[i].loginDetail.password.length+3," ")
//     console.log(students[i].loginDetail.password);    
// }
// console.log(students);

// ! 2-ci usul string metodsuz
// for (let i = 0; i < students.length; i++) {
//     students[i].loginDetail.password="   "+students[i].loginDetail.password;
// }
// console.log(students);


// ?----------------------------------------------------------------------------------------------------------------

//! - Hamının şifrəsinin ilk 4 simvolu görsənsin yerdə qalanlar "*" ilə əvəz olunsun. String metod istifadə edin

// let newpassword=""
// for (let i = 0; i < students.length; i++) {
//     newpassword=" "
//     let passwordStart=students[i].loginDetail.password.slice(0,4)
//     let passwordEnd="*".repeat(students[i].loginDetail.password.length-4)
//     newpassword=passwordStart+passwordEnd;
//     students[i].loginDetail.password=newpassword;
// }
// console.log(students);

// ?----------------------------------------------------------------------------------------------------------------

//! - Hamının soyadının uzunluğu adının uzunluğu qədər olsun. String metod istifadə edin

// for (let i = 0; i < students.length; i++) {
//    let nameLength=students[i].name.length;
//     let surnamelength=students[i].surname.slice(0,nameLength)
//     students[i].surname=surnamelength;
// }
// console.log(students);

// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin yaşlarının toplamı nə qədərdir

// let sum=0;
// for (let i = 0; i < students.length; i++) {    
//     sum+=students[i].age;
// }
// console.log(`Total sum:${sum}`);


// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin cəmi bal ortalaması nə qədərdir

// let totalaveragePoint=0;
// for (let i = 0; i < students.length; i++) {
//     totalaveragePoint+=students[i].avgPoint; 
// }
// console.log(`Total Average Point:${parseInt(totalaveragePoint/students.length)}`);


// ?----------------------------------------------------------------------------------------------------------------



// !- "book" həvəsini olan tələbələrin siyahısını çap edin

// let newStudents = [];
// for (let i = 0; i < students.length; i++) {
//     let newStu = {}
//     for (let j = 0; j < students[i].hobbies.length; j++) {
//         if (students[i].hobbies[j] == "book") {
//             newStu.id = students[i].id
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
//             break;
//         }
//     }
// }
// console.log(newStudents);


// ?----------------------------------------------------------------------------------------------------------------

// ! - Tələbələrin yaş ortalaması nədir?

// let sum=0;
// for (let i = 0; i < students.length; i++) {    
//     sum+=students[i].age;
// }
// console.log(`Total sum avarage:${parseInt(sum/students.length)}`);


// ?----------------------------------------------------------------------------------------------------------------

//! - Hər bir tələbə üçün cinsiyət və yaşı göstərən bir obyekt yaradin.

// let newStudent=[];
// for (let i = 0; i < students.length; i++) {
//     let newStu={}
//     newStu.gender=students[i].gender;
//     newStu.age=students[i].age;
//     newStudent.push(newStu)
// }
// console.log(newStudent);


// ?----------------------------------------------------------------------------------------------------------------


//! - Bütün tələbələrin ad və soyadlarının uzunluqlarının cəmi hansıdır
// let sum=0;
// for (let i = 0; i < students.length; i++) {
//     sum=0;
//     sum=students[i].name.length+students[i].surname.length 
//     console.log(`${students[i].name} ${students[i].surname}, name and surname total sum:${sum}`);
// }

// ?----------------------------------------------------------------------------------------------------------------

//! - Tələbələrin adlarını tərsinə çevirin.

// for (let i = 0; i < students.length; i++) {
//     students[i].name=students[i].name.split("").reverse().join("")  
// }
// console.log(students);


// ?----------------------------------------------------------------------------------------------------------------

// ! - "gamig" həvəsi olan tələbələrin array-ini yaradın

// let newStudents = [];
// for (let i = 0; i < students.length; i++) {
//     let newStu = {}
//     for (let j = 0; j < students[i].hobbies.length; j++) {
//         if (students[i].hobbies[j] == "gaming") {
//             newStu.id = students[i].id
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
//             break;
//         }
//     }
// }
// console.log(newStudents);


// ?----------------------------------------------------------------------------------------------------------------

//! - Bütün tələbələrin hobbiləri olan array yaradın?

// let hobbiesStudents = [];

// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].hobbies.length; j++) {
//         hobbiesStudents.push(students[i].hobbies[j])
//     }    
// }
// console.log(hobbiesStudents);

// ?----------------------------------------------------------------------------------------------------------------


// ! 1. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
//! (Array method-lardan istifadə edin)
//!Example:
// !console.log(getFirst([1, 73, 99, 20])) -> 1
// !console.log(getFirst([1, 73, 99, 20], 2)) -> [1, 73]
// !console.log(getFirst([1, 73, 99, 20], 0)) -> []
// !console.log(getFirst([1, 73, 99, 20], 4)) -> [1, 73, 99, 20]


// let arr = [1, 73, 99, 20];
// let n = 4; 
// let newArr = arr.slice(0, n);
// console.log(newArr);



// ?--------------------------------------------------------------------------------------------------------------------


//! 2. Write a simple JavaScript function to join all elements of the following array into a string.
//! console.log(join([1, 73, 99, 20], "*")) -> 1*73*99*20
//! console.log(join([1, 73, 99, 20], "/")) -> 1/73/99/20

// let arr = [1, 73, 99, 20];
// let newStr=arr.toString().replaceAll(",","*")
// let newStr2=arr.toString().replaceAll(",","/")
// console.log(newStr);
// console.log(newStr2);


// ?--------------------------------------------------------------------------------------------------------------------


//! 3. Write a JavaScript program(function) that accepts a string as input and swaps the case of each character. 
//! For example, if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'
//! Example:
//! console.log(convert('saLamNecesen)) -> SAlAMnECESEN



// let str="saLamNecesen";
// let newStr=""
// for (let i = 0; i < str.length; i++) {
//     if (str[i]==str[i].toUpperCase()) {
//         newStr+=str[i].toLowerCase();
//     }    
//     else if (str[i]==str[i].toLowerCase()) {
//         newStr+=str[i].toUpperCase();
//     }  
// }
// console.log(newStr);


// ?--------------------------------------------------------------------------------------------------------------------



// !4. Write a method that clears the array from all unnecessary elements, like false, undefined, empty strings, zero, null.
// !console.log(clear([0, 1, false, 2, undefined, '', 3, null]); -> [1, 2, 3]

// let arr=[0, 1, false, 2, undefined, '', 3, null]
// let newArr=[]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===0 || arr[i]===false || arr[i]===true || arr[i]===undefined || arr[i]===null || arr[i]==="") {
//         continue
//     }    
//     newArr.push(arr[i])

// }
// console.log(newArr);



// ?--------------------------------------------------------------------------------------------------------------------


// ! 5. Write a method that returns a duplicate-free array.
// ! console.log(clearDuplicate([1, 2, 1, 2, 3])); -> [1, 2, 3]
// ! console.log(clearDuplicate(['a', 2, 'd', 2, 'a', 14, 14, 's', false])); -> ['a', 2, 'd', 14, 's', false]

// let arr=[1, 2, 1, 2, 3,4,2,4,4,4,5,5]
// let newArr=[];

// for (let i = 0; i < arr.length; i++) {
//     let check=false;
//     for (let j = 0; j < newArr.length; j++) {
//         if (arr[i]==newArr[j]) {
//             check=true;
//             break;
//         }        
//     }
//     if (check==false) {
//         newArr.push(arr[i])
//     }    
// }
// console.log(newArr);


// ?--------------------------------------------------------------------------------------------------------------------


//! 6. Write a function that compares two arrays and returns true if they are identical.
//!console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4])) -> true
// !console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, 5])) -> false
// !console.log(isEqual([1, 2, 3, 4], [1, 2, 3, 4, false])) -> false
// !console.log(isEqual([1, 2, 3, 4, false], [1, 2, 3, 4, false])) -> true

// let arr=[1,2,3,4]
// let arrtwo=[1,2,3,4]
// if (arr.length!==arrtwo.length) {
//     console.log(false);
// }
// else{
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]!==arrtwo[i]) {
//             break;
//         }
//     }
//     console.log(true);
// }

// ?--------------------------------------------------------------------------------------------------------------------


// !7. Bir string ve bir char qebul eden bir function yazın.Əgər daxil olunmuş char string-də varsa 
// !char-ın yerləşdiyi indekslərin cəmini yoxdursa -1 return etsin. Məsələn salam və 'a' daxil olunarsa output 1+3=4 olmalıdır.

// let string="nuraneen";
// let char="n";
// let sum=-1;
// for (let i = 0; i < string.length; i++) {
//     if (string[i]==char) {
//         if (sum===-1) {
//             sum=i
//         }
//         else{
//             sum+=i
//         }
//     }  
// }
// console.log(sum);

// ?--------------------------------------------------------------------------------------------------------------------


//! 8. Bir function yazın parametr olaraq bir array, bir index və bir string qəbul edir.
// ! Və daxil olunmuş indeksə əsasən göndərilmiş string - i həmin array - ə əlavə edib return etsin. 
// ! Məsələn arqument olaraq - ['a', 'salam', 'b', 'world'], 3, "dev" göndərilərsə o zaman dev string - ini
//! 3cu indekse elave etmelidir, eger gonderilmish indeks array -in uzunlugundan boyuk olarsa 
// !o zaman hemin string array -in en sonuna elave edilsin.

// let arr=["a","salam","b",'world']
// let index=6
// let str="dev"
// if (arr.length>index) {
//     arr.splice(index,0,str)
// }
// else{
//     arr.push(str)
// }
// console.log(arr);


// ?--------------------------------------------------------------------------------------------------------------------

//! 9. Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.
//! gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. 
//! Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.

// let arr1=[1,2]
// let arr2=[3,4]
// let char="*"
// console.log(arr1.concat(arr2).join("*"));


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
// let avgScore = [];

// for (let i = 0; i < studentss.length; i++) {
//     let total = 0;
//     for (let j = 0; j < studentss[i].scores.length; j++) {
//         total += studentss[i].scores[j];
//     }
//     let average = total / studentss[i].scores.length;
//     avgScore.push(average);
// }

// console.log(avgScore);



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
//   ];


//   let newArr=[]

//   for (let i = 0; i < webTechs.length; i++) {
//     for (let j = 0; j < webTechs[i].length; j++) {
//         if (webTechs[i].length>4) {
//             newArr.push(webTechs[i])
//             break;
//         }        
//     }    
//   }
//   console.log(newArr);

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


// let productsSum=0;
// for (let i = 0; i < products.length; i++) {
//     productsSum+=products[i].price
// }
// let productsAvarage=parseInt(productsSum/products.length);

// console.log(`Products Sum:${productsSum} Products Avarage:${productsAvarage}`);


// ?--------------------------------------------------------------------------------------------------------------------


//! 13.let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
//!countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın
// let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];
// let newCountries=[]
// for (let i = 0; i < countries.length; i++) {
//    if (countries[i].charAt(0).toLowerCase()==="a" && countries[i].charAt(countries[i].length-1).toLowerCase()==="a") {
//     newCountries.push(countries[i])
//    }
// }
// console.log(newCountries);


// ?--------------------------------------------------------------------------------------------------------------------


//! 14.# Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

// !function findNumberOfDivisors(n) {
// !  ...
// !}

// let number=15;
// let divisor=1;
// let count=0;
// while (number>=divisor) {
//     if (number%divisor==0) {
//         count+=1;
//     }
//     divisor+=1
// }
// console.log(count);


// ?--------------------------------------------------------------------------------------------------------------------



// !15.daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin
// !function findSpaceCounts(str){
// !        ...
// !    }

// let str="Salam Nurane necesen neynirsen?"
// let count=0;
// for (let i = 0; i < str.length; i++) {
//     if (str[i]==" ") {
//         count+=1;
//     }    
// }
// console.log(count);


// ?--------------------------------------------------------------------------------------------------------------------

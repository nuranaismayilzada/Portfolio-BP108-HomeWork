
// let cardsSection = document.querySelector(".cardsSection")

// // let addButton=document.querySelector(".addButton")
// // addButton.addEventListener("click",()=>{
// //     addButton()
// //     axious.post("https://northwind.vercel.app/api/suppliers/",{
// //         obj
// //     })
// // })


// let getProducts = () => {
//     const datas = fetch("https://northwind.vercel.app/api/suppliers")
//         .then((res) => res.json()).
//         then((data) => {
//             // console.log(data);
//             // data.forEach(element => {
//             //     console.log(element);
//             // });
//             function createCard(elemen) {
//                 let card = document.createElement("div")
//                 card.style.width = "300px";
//                 card.style.height = "250px";
//                 card.style.backgroundColor = "green"
//                 card.style.border = "1px solid transparent"
//                 card.style.borderRadius = "15px"


//                 let company_name = document.createElement("p")
//                 company_name.innerText = elemen.companyName

//                 let contact_name = document.createElement("span")
//                 contact_name.innerText = elemen.contactName



//                 let contact_title = document.createElement("span")
//                 contact_title.innerText = elemen.contactTitle


//                 let address_Street = document.createElement("span")
//                 address_Street.innerText = elemen.address.street


//                 let address_City = document.createElement("span")
//                 address_City.innerText = elemen.address.city


//                 let address_Region = document.createElement("span")
//                 address_Region.innerText = elemen.address.region


//                 let address_Country = document.createElement("p")
//                 address_Country.innerText = elemen.address.country


//                 let postal_Code = document.createElement("span")
//                 postal_Code.innerText = elemen.address.postalCode


//                 let address_Phone = document.createElement("span")
//                 address_Phone.innerText = elemen.address.phone


//                 let deleteButton = document.createElement("button")
//                 deleteButton.innerText = "Delete";
//                 deleteButton.className = "delButton"
                
//                 card.append(company_name, contact_name, contact_title, address_Street, address_City, address_Region
//                     , address_Country, postal_Code, address_Phone, deleteButton)
//                 cardsSection.append(card)
//                 deleteButton.addEventListener("click", (e) => {
                   
//                     e.target.parentElement.remove()
//                 });

//             }


//             data.forEach(element => {
//                 createCard(element)
//             });

//         });
//     function addButton() {
//         let addButton = document.querySelector(".addButton")
//         addButton.addEventListener("click", () => {
//             let obj = {}
//             let compName = document.querySelector("#companyname")
//             obj.companyName = compName.value

//             let contName = document.querySelector("#contactname")
//             obj.contactName = contName.value

//             let contTitle = document.querySelector("#contacttitle")
//             obj.contactTitle = contTitle.value

//             let addStreet = document.querySelector("#addressstreet")
//             obj.addressStreet = addStreet.value


//             let addCity = document.querySelector("#addresscity")
//             obj.addressCity = addCity.value


//             let addRegion = document.querySelector("#addressregion")
//             obj.addressRegion = addRegion.value

//             let addCountry = document.querySelector("#addresscountry")
//             obj.addressCountry = addCountry.value


//             let postCode = document.querySelector("#postalcode")
//             obj.postalCode = postCode.value


//             let addPhone = document.querySelector("#addressphone")
//             obj.addressPhone = addPhone.value




//             let card = document.createElement("div")
//             card.style.width = "300px";
//             card.style.height = "250px";
//             card.style.backgroundColor = "green"
//             card.style.border = "1px solid transparent"
//             card.style.borderRadius = "15px"


//             let company_name = document.createElement("p")
//             company_name.innerText = obj.companyName

//             let contact_name = document.createElement("span")
//             contact_name.innerText = obj.contactName



//             let contact_title = document.createElement("span")
//             contact_title.innerText = obj.contactTitle


//             let address_Street = document.createElement("span")
//             address_Street.innerText = obj.addressStreet


//             let address_City = document.createElement("span")
//             address_City.innerText = obj.addressCity


//             let address_Region = document.createElement("span")
//             address_Region.innerText = obj.addressRegion


//             let address_Country = document.createElement("p")
//             address_Country.innerText = obj.addressCountry


//             let postal_Code = document.createElement("span")
//             postal_Code.innerText = obj.postalCode


//             let address_Phone = document.createElement("span")
//             address_Phone.innerText = obj.addressPhone


//             let deleteButton = document.createElement("button")
//             deleteButton.innerText = "Delete";
//             deleteButton.className = "delButton"


//             card.append(company_name, contact_name, contact_title, address_Street, address_City, address_Region
//                 , address_Country, postal_Code, address_Phone, deleteButton)
//             cardsSection.append(card)

//         })

//     }
//     addButton()

// }


// // function addButton() {
// //         let addButton=document.querySelector(".addButton")
// //         addButton.addEventListener("click",()=>{
// //             let obj={}
// //            let compName=document.querySelector("#companyname")
// //            obj.companyName=compName.value

// //            let contName=document.querySelector("#contactname")
// //            obj.contactName=contName.value

// //            let contTitle=document.querySelector("#contacttitle")
// //            obj.contactTitle=contTitle.value

// //            let addStreet=document.querySelector("#addressstreet")
// //            obj.addressStreet=addStreet.value


// //            let addCity=document.querySelector("#addresscity")
// //            obj.addressCity=addCity.value


// //            let addRegion=document.querySelector("#addressregion")
// //            obj.addressRegion=addRegion.value

// //            let addCountry=document.querySelector("#addresscountry")
// //            obj.addressCountry=addCountry.value


// //            let postCode=document.querySelector("#postalcode")
// //            obj.postalCode=postCode.value


// //            let addPhone=document.querySelector("#addressphone")
// //            obj.addressPhone=addPhone.value




// //            let card=document.createElement("div")
// //             card.style.width="300px";
// //             card.style.height="250px";
// //             card.style.backgroundColor="green"   
// //             card.style.border="1px solid transparent"
// //             card.style.borderRadius="15px"


// //             let company_name=document.createElement("p")
// //             company_name.innerText=obj.companyName

// //             let contact_name=document.createElement("span")
// //             contact_name.innerText=obj.contactName



// //             let contact_title=document.createElement("span")
// //             contact_title.innerText=obj.contactTitle


// //             let address_Street=document.createElement("span")
// //             address_Street.innerText=obj.addressStreet


// //             let address_City=document.createElement("span")
// //             address_City.innerText=obj.addressCity


// //             let address_Region=document.createElement("span")
// //             address_Region.innerText=obj.addressRegion


// //             let address_Country=document.createElement("p")
// //             address_Country.innerText=obj.addressCountry


// //             let postal_Code=document.createElement("span")
// //             postal_Code.innerText=obj.postalCode


// //             let address_Phone=document.createElement("span")
// //             address_Phone.innerText=obj.addressPhone


// //             let deleteButton=document.createElement("button")
// //             deleteButton.innerText="Delete";
// //             deleteButton.className="delButton"
// //             card.append(company_name,contact_name,contact_title,address_Street,address_City,address_Region
// //             ,address_Country,postal_Code,address_Phone,deleteButton)
// //             cardsSection.append(card) 


// //         })
// //     }


// getProducts()
// 

let cardsSection = document.querySelector(".cardsSection");

function createCard(element) {
    let card = document.createElement("div");
    card.style.width = "300px";
    card.style.height = "250px";
    card.style.backgroundColor = "green";
    card.style.border = "1px solid transparent";
    card.style.borderRadius = "15px";

    let company_name = document.createElement("p");
    company_name.innerText = element.companyName;

    let contact_name = document.createElement("span");
    contact_name.innerText = element.contactName;

    let contact_title = document.createElement("span");
    contact_title.innerText = element.contactTitle;

    let address_Street = document.createElement("span");
    address_Street.innerText = element.address.street;

    let address_City = document.createElement("span");
    address_City.innerText = element.address.city;

    let address_Region = document.createElement("span");
    address_Region.innerText = element.address.region;

    let address_Country = document.createElement("p");
    address_Country.innerText = element.address.country;

    let postal_Code = document.createElement("span");
    postal_Code.innerText = element.address.postalCode;

    let address_Phone = document.createElement("span");
    address_Phone.innerText = element.address.phone;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delButton";

    deleteButton.addEventListener("click", () => {
        axios.delete(`https://northwind.vercel.app/api/suppliers/${element.id}`)
            .then(response => {
                console.log("Card  silindi:", response.data);
                card.remove(); 
            })
            .catch(error => {
                console.error("Error:", error);
            });
    });

    card.append(company_name, contact_name, contact_title, address_Street, address_City, address_Region,
        address_Country, postal_Code, address_Phone, deleteButton);
    cardsSection.append(card);
}

let addButton = document.querySelector(".addButton");
addButton.addEventListener("click", () => {
    let obj = {};
    let compName = document.querySelector("#companyname");
    obj.companyName = compName.value;

    let contName = document.querySelector("#contactname");
    obj.contactName = contName.value;

    let contTitle = document.querySelector("#contacttitle");
    obj.contactTitle = contTitle.value;

    let addStreet = document.querySelector("#addressstreet");
    obj.address = { street: addStreet.value }; 

    let addCity = document.querySelector("#addresscity");
    obj.address.city = addCity.value;

    let addRegion = document.querySelector("#addressregion");
    obj.address.region = addRegion.value;

    let addCountry = document.querySelector("#addresscountry");
    obj.address.country = addCountry.value;

    let postCode = document.querySelector("#postalcode");
    obj.address.postalCode = postCode.value;

    let addPhone = document.querySelector("#addressphone");
    obj.address.phone = addPhone.value;

    axios.post("https://northwind.vercel.app/api/suppliers/", obj)
        .then(response => {
            console.log("Gonderildi:", response.data);
            createCard(response.data); 
        })
        .catch(error => {
            console.error("Error:", error);
        });
});

let getProducts = () => {
    fetch("https://northwind.vercel.app/api/suppliers")
        .then((res) => res.json())
        .then((data) => {
            data.forEach(element => {
                createCard(element);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
};

getProducts();

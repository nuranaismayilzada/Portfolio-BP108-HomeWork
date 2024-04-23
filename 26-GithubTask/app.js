let sun = document.querySelector(".fa-regular")
let sunBlack = document.querySelector(".black")
let body = document.querySelector("#github")
sun.addEventListener("click", () => {
    body.style.backgroundColor = "#536872"
    sun.style.display = "none"
    sunBlack.style.display = "block";
})
sunBlack.addEventListener("click", () => {
    body.style.backgroundColor = "#141C2F"
    sun.style.display = "block"
    sunBlack.style.display = "none";
})

let form = document.querySelector("click", (e) => {
    e.preventDefault()
})
let searchBtn = document.querySelector(".searchBtn")
let searchInput = document.querySelector(".search")
let avatar = document.querySelector(".avatar")
let name = document.querySelector(".name")
let bio = document.querySelector(".bio")
let repos = document.querySelector(".repos")
let locationn = document.querySelector(".location")
let followers=document.querySelector(".followers")
let following=document.querySelector(".following")
let joined=document.querySelector(".joined")
let blog=document.querySelector(".blog")
let twitterUsername=document.querySelector(".twitterUsername")
let email=document.querySelector(".email")
let agithub=document.querySelector(".agithub")
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch("https://api.github.com/users").then((res) =>
        res.json()).then((data) => {
           data.forEach(element => {
                if (searchInput.value==element.login) {
                    avatar.src=element.avatar_url
                    name.innerText=element.login
                    let url=`https://api.github.com/users/${name.innerText}`
                    fetch(url).then((res)=>res.json()).then((dat)=>{
                        console.log(dat);
                        bio.innerText=dat.bio
                        if (dat.location==null) {
                            locationn.innerText="not mentioned"
                        }
                        else{
                            locationn.innerText=dat.location
                        }
                        followers.innerText=dat.followers
                        following.innerText=dat.following
                        repos.innerText=dat.public_repos
                        blog.innerText=dat.blog
                        if (dat.twitter_username==null) {
                            twitterUsername.innerText='dont use'
                        }else{

                            twitterUsername.innerText=dat.twitter_username
                        }
                        joined.innerText="Joined: " + dat.created_at
                        if (dat.email==null) {
                            email.innerText="Email: dont use"
                        }
                        else{
                           email.innerText="Email:" + dat.email
                        }
                    })
                }
           });
        })
})






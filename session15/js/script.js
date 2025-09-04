
const dataWrap = document.querySelector("#data-wrap")
// const serKey = document.querySelector("#data")
// let users = [
//     {
//         id: 1,
//         name: "Alice Johnson",
//         email: "alice.johnson@example.com",
//         phone: "+1-202-555-0147",
//         img: "https://randomuser.me/api/portraits/women/1.jpg"
//     },
//     {
//         id: 2,
//         name: "Michael Smith",
//         email: "michael.smith@example.com",
//         phone: "+1-202-555-0178",
//         img: "https://randomuser.me/api/portraits/men/2.jpg"
//     },
//     {
//         id: 3,
//         name: "Sophia Brown",
//         email: "sophia.brown@example.com",
//         phone: "+1-202-555-0193",
//         img: "https://randomuser.me/api/portraits/women/3.jpg"
//     },
//     {
//         id: 4,
//         name: "James Wilson",
//         email: "james.wilson@example.com",
//         phone: "+1-202-555-0112",
//         img: "https://randomuser.me/api/portraits/men/4.jpg"
//     },
//     {
//         id: 5,
//         name: "Emma Davis",
//         email: "emma.davis@example.com",
//         phone: "+1-202-555-0184",
//         img: "https://randomuser.me/api/portraits/women/5.jpg"
//     },
//     {
//         id: 6,
//         name: "Daniel Martinez",
//         email: "daniel.martinez@example.com",
//         phone: "+1-202-555-0129",
//         img: "https://randomuser.me/api/portraits/men/6.jpg"
//     },
//     {
//         id: 7,
//         name: "Olivia Taylor",
//         email: "olivia.taylor@example.com",
//         phone: "+1-202-555-0167",
//         img: "https://randomuser.me/api/portraits/women/7.jpg"
//     },
//     {
//         id: 8,
//         name: "William Anderson",
//         email: "william.anderson@example.com",
//         phone: "+1-202-555-0135",
//         img: "https://randomuser.me/api/portraits/men/8.jpg"
//     },
//     {
//         id: 9,
//         name: "Ava Thomas",
//         email: "ava.thomas@example.com",
//         phone: "+1-202-555-0155",
//         img: "https://randomuser.me/api/portraits/women/9.jpg"
//     },
//     {
//         id: 10,
//         name: "Ethan Moore",
//         email: "ethan.moore@example.com",
//         phone: "+1-202-555-0106",
//         img: "https://randomuser.me/api/portraits/men/10.jpg"
//     }
// ];
const createMyEle = (parent, elTag, classses, txt) => {
    const el = document.createElement(elTag)
    parent.appendChild(el)
    if (classses) el.className = classses
    if (txt) el.innerText = txt
    return el
}
const draw = (users) => {
    dataWrap.innerHTML = ""
    users.forEach(u => {
        const div = createMyEle(dataWrap, "div", "bg-light p-1 col-md-4 col-12 border border-white text-center border-5")
        el = createMyEle(div, "h3", "text-center text-dark my-3", u.name)
        el = createMyEle(div, "p", " text-muted my-3", u.email)
        el = createMyEle(div, "p", "text-muted my-3", u.age)
    })
}
// serKey.addEventListener("input", function (e) {
//     let result = users.filter(el => el.name.includes(serKey.value))
//     draw(result)
// })

// const users = []
// const myForm = document.querySelector("#myForm")
// myForm.addEventListener("submit", function (e) {
//     e.preventDefault()
//     let user = {
//         id: Date.now(),
//         name: myForm.name.value,
//         age: myForm.age.value,
//         email: myForm.email.value
//     }
//     users.push(user)
//     draw(users)
//     myForm.reset()
// })
const up = document.querySelector("#up")
window.addEventListener("scroll", function () {
    // console.log(window.scrollX, window.scrollY)
    if (window.scrollY >= 400) {
        up.classList.remove("d-none")
    }
    else {
        up.classList.add("d-none")
    }
})


const x = document.querySelectorAll(".x")
x.forEach(item => {
    item.addEventListener("click", function (e) {
        // console.log(item.innerText)
        let id = `#${item.innerHTML}`
        let obj = document.querySelector(id)
        // console.log(obj)
        obj.scrollIntoView({ behavior: "smooth" })
    })
})
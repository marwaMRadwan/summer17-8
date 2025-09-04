// const data = document.querySelector("#data")
// const writen = document.querySelector("#writen")
// data.addEventListener("keydown", function (e) {
// console.log(e.key)
// if (e.key.toLowerCase() == "enter") {
// writen.innerText = data.value
// <p class="col-3 bg-light p-4">hello</p>
//         const myP = document.createElement("p")
//         writen.appendChild(myP)
//         myP.className = "col-3 bg-light p-4"
//         myP.innerText = data.value
//         data.value=""
//     }
// })

const dataWrap = document.querySelector("#data-wrap")
const users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        phone: "+1-202-555-0147",
        img: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        name: "Michael Smith",
        email: "michael.smith@example.com",
        phone: "+1-202-555-0178",
        img: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@example.com",
        phone: "+1-202-555-0193",
        img: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        id: 4,
        name: "James Wilson",
        email: "james.wilson@example.com",
        phone: "+1-202-555-0112",
        img: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        id: 5,
        name: "Emma Davis",
        email: "emma.davis@example.com",
        phone: "+1-202-555-0184",
        img: "https://randomuser.me/api/portraits/women/5.jpg"
    },
    {
        id: 6,
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        phone: "+1-202-555-0129",
        img: "https://randomuser.me/api/portraits/men/6.jpg"
    },
    {
        id: 7,
        name: "Olivia Taylor",
        email: "olivia.taylor@example.com",
        phone: "+1-202-555-0167",
        img: "https://randomuser.me/api/portraits/women/7.jpg"
    },
    {
        id: 8,
        name: "William Anderson",
        email: "william.anderson@example.com",
        phone: "+1-202-555-0135",
        img: "https://randomuser.me/api/portraits/men/8.jpg"
    },
    {
        id: 9,
        name: "Ava Thomas",
        email: "ava.thomas@example.com",
        phone: "+1-202-555-0155",
        img: "https://randomuser.me/api/portraits/women/9.jpg"
    },
    {
        id: 10,
        name: "Ethan Moore",
        email: "ethan.moore@example.com",
        phone: "+1-202-555-0106",
        img: "https://randomuser.me/api/portraits/men/10.jpg"
    }
];

const createMyEle = (parent, elTag, classses, txt) => {
    const el = document.createElement(elTag)
    parent.appendChild(el)
    if (classses) el.className = classses
    if (txt) el.innerText = txt
    return el
}
users.forEach(u => {
    // const div = document.createElement("div")
    // div.classList = "bg-success p-5 col-md-4 col-12 border border-white text-center"
    // dataWrap.appendChild(div)
    const div = createMyEle(dataWrap, "div", "bg-success p-5 col-md-4 col-12 border border-white text-center")
    // let el = document.createElement("img")
    // el.src = u.img
    // el.className = "rounded-circle cir"
    // div.appendChild(el)
    let el = createMyEle(div, "img", "rounded-circle cir")
    el.src = u.img
    el = createMyEle(div, "h3", "text-center text-white my-3", u.name)
    // el = document.createElement("h3")
    // el.innerText = u.name
    // el.className = "text-center text-white my-3"
    // div.appendChild(el)
})
// let data = document.getElementsByTagName("div")
// console.log(data)
// data = document.getElementsByClassName("w-25")
// console.log(data)
// data = document.getElementById("test")
// console.log(data)

// querySelector
// data = document.querySelector("#test")
// console.log(data)

// data = document.querySelectorAll(".w-25")
// console.log(data)


// let div = document.querySelector("#test")
// div.textContent = "hello all"
// div.innerText += " hi"

// console.log(div.textContent)

// let content = "<h1>hello</h1>"
// div.innerHTML = content

// console.log(div.getAttribute("id"))

// console.log(div.id)
// div.setAttribute("name", "hello")

// console.log(div.classList)
// console.log(div.className)
// div.classList.add("border")
// div.classList.remove("bg-dark")
// div.classList.remove("text-white")

// div.className = "border border-3 text-dark w-25 p-3"
// div.classList.toggle("text-white")
// div.classList.toggle("text-success")

// let div = document.querySelector("#test")
// let myBtn = document.querySelector("#my-btn")

// myBtn.addEventListener("click", (e) => {
// console.log(myBtn)
// myBtn.innerText = "test"
// div.style.display = "none"
//     div.classList.toggle("d-none")
//     myBtn.innerText == "Hide" ? myBtn.innerText = "Show" : myBtn.innerText = "Hide"
// })

let btns = document.querySelectorAll(".tab-btn")
let content = document.querySelectorAll(".content")

btns.forEach((b, i) => {
    b.addEventListener("click", function (e) {
        // console.log(`clicked ${i}`)
        btns.forEach(btn => btn.classList.remove("btn-success"))
        content.forEach(c => c.classList.add("d-none"))
        content[i].classList.remove("d-none")
        btns[i].classList.add("btn-success")
    })
})

let accBtns = document.querySelectorAll(".acc-btn")
let accContent = document.querySelectorAll(".acc-content")
let arrows = document.querySelectorAll(".acc-btn i")
accBtns.forEach((b, i) => {
    b.addEventListener("click", function (e) {
        let currentArrow = arrows[i].className
        arrows.forEach(a => a.className = "bi bi-caret-down")
        accContent.forEach(c => c.classList.add("d-none"))

        if (currentArrow == "bi bi-caret-up") {
            arrows[i].className = "bi bi-caret-down"
            accContent[i].classList.add("d-none")
        }
        else {
            arrows[i].className = "bi bi-caret-up"
            accContent[i].classList.remove("d-none")
        }
        // accContent[i].classList.remove("d-none")
        // btns[i].classList.add("btn-success")
        // console.log(currentContent.contains("d-none"), currentContent)
        // if (currentContent.contains("d-none")) {
        //     accContent[i].classList.remove("d-none")
        // }
        // else {
        //     accContent[i].classList.add("d-none")

        // }
    })
})
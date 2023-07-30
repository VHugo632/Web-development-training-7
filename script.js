const body = document.body
const cursor = document.getElementById("cursor")
const loading = document.getElementById("loading")
const loader = document.getElementById("loader")
const photo = document.getElementById("photo")
const form = document.getElementById("form")
const email = document.getElementById("email")
const label = document.getElementById("label")

window.addEventListener("mousemove", function(position) {
    if (screen.width > 1024) {
        cursor.style.transform = "translate(calc(-50% + " + position.clientX + "px), calc(-50% + " + position.clientY + "px))"
    }
})

window.addEventListener("click", function() {
    if (screen.width <= 1024) {
        cursor.style.display = "none"
    }
    else {
        cursor.style.display = "block"
    }
})

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.filter = "opacity(0%)"
        setTimeout(function() {
            loading.style.transform = "translateY(100vh)"
            setTimeout(function() {
                loading.style.display = "none"
                body.style.overflow = "initial"
            }, 500)
        }, 400)
    }, 2000)
})

body.addEventListener("mouseleave", function() {
    cursor.style.display = "none"
})

body.addEventListener("mouseenter", function() {
    cursor.style.display = "block"
})

photo.addEventListener("mouseenter", function() {
    cursor.style.mixBlendMode = "plus-lighter"
})

photo.addEventListener("mouseleave", function() {
    cursor.style.mixBlendMode = ""
})

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "@", "."]

let valid = true
let inside = false

form.addEventListener("submit", function(data){
    data.preventDefault()
    valid = true
    if ((email.value).includes("@") == false || (email.value).includes(".") == false) {
        valid = false
    }
    if (valid == true) {
        for (let index_email = 0; index_email < (email.value).length ; index_email = index_email + 1) {
            inside = false
            for (let index_array = 0; index_array < characters.length; index_array = index_array + 1) {
                if (((email.value).charAt(index_email)).toUpperCase() == characters[index_array]) {
                    inside = true
                }
            }
            if (inside == false) {
                valid = false
                break
            }
        }
    }
    if (valid == false) {
        body.classList.add("error_email")
        label.innerHTML = "Please provide a valid email !"
    }
    else {
        body.classList.add("check_email")
        label.innerHTML = "A confirmation e-mail has been sent to you !"
    }
})

email.addEventListener("input", function() {
    body.classList.remove("error_email")
    body.classList.remove("check_email")
    label.innerHTML = "[Placeholder]"
})
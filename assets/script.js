// Deus seja louvado

function login() {
    document.querySelector(".login").addEventListener("mouseover", () => {
        document.querySelector(".fized").classList.remove("display")
    });
    document.querySelector(".fized").addEventListener("mouseover", () => {
        document.querySelector(".fized").classList.remove("display")
    });
    document.querySelector(".login").addEventListener("mouseout", () =>{
        document.querySelector(".fized").classList.add("display")
    });
    document.querySelector(".fized").addEventListener("mouseout", () =>{
        document.querySelector(".fized").classList.add("display")
    });
}

login()
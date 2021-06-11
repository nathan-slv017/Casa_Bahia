// Deus seja louvado

function login() {
    document.querySelector(".login").addEventListener("mouseover", () => {
        document.querySelector(".fized").classList.remove("display")
    });
    document.querySelector(".login").addEventListener("mouseover", () => {
        document.querySelector(".fized").classList.remove("display")
    });
    document.querySelector(".login").addEventListener("mouseout", () =>{
        document.querySelector(".fized").classList.add("display")
    });
    document.querySelector(".fized").addEventListener("mouseout", () =>{
        document.querySelector(".fized").classList.add("display")
    });
}
let onOf = 0;
setInterval(() =>{
    if( onOf === 1){
        document.querySelector(".cartaoCasasBahia").innerHTML = `<p>30X SEM JUROS</p>`
        onOf --;
        return;
    }

    if(onOf === 0){
        document.querySelector(".cartaoCasasBahia").innerHTML = `<p> CARTÃO CASAS BAHIA </p>`
        onOf ++;
        return;
    }
}, 1600);
login();

function imagen(n){
    document.querySelector(".fotoPrincipal").innerHTML = `<img src="imagens/fotoIphone${n}.webp" alt="" width="400px">`
}
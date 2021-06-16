// Deus seja louvado

    document.addEventListener("click", (e) =>{
        click(e)
    })

    function click(e){
        return e.target;
    }
    function login() {
        document.querySelector(".login").addEventListener("mouseover", () => {
            document.querySelector(".fized").classList.remove("display")
        });
        document.querySelector(".fized").addEventListener("mouseover", () => {
            document.querySelector(".fized").classList.remove("display")
        });
        document.querySelector(".login").addEventListener("mouseout", () => {
            document.querySelector(".fized").classList.add("display")
        });
        document.querySelector(".fized").addEventListener("mouseout", () => {
            document.querySelector(".fized").classList.add("display")
        });
    }
    let onOf = 0;
    setInterval(() => {
        if (onOf === 1) {
            document.querySelector(".cartaoCasasBahia").innerHTML = `<p>30X SEM JUROS</p>`
            onOf--;
            return;
        }

        if (onOf === 0) {
            document.querySelector(".cartaoCasasBahia").innerHTML = `<p> CARTÃO CASAS BAHIA </p>`
            onOf++;
            return;
        }
    }, 1600);


    function imagen(n) {
        document.querySelector(".fotoPrincipal").innerHTML = `<img src="imagens/fotoIphone${n}.webp" alt="" width="400px">`
    }

    login();

    document.querySelector(".parcelamento").addEventListener("click", () =>{
        opcoesDeParcelamento()
    })

    function opcoesDeParcelamento(){
        const divParcelamento = document.createElement("div");
        divParcelamento.setAttribute("class", "tableDeParcelamento");
        divParcelamento.innerHTML = 
        `<div id="titulo">
            <h2>Opções de parcelamento</h2>
            <button onclick="fecharParcelamento()">X<button>
        </div>
        <div>
            <h5>Cartão de credito</h5>
            <div id="parcela">
                <div>1x sem juros</div><div>R$ 8.090.07</div>
                <div>2x sem juros</div><div>R$ 4.349,50</div>
                <div>3x sem juros</div><div>R$ 2.899,67</div>
                <div>4x sem juros</div><div>R$ 2.174,75</div>
                <div>5x sem juros</div><div>R$ 1.739,80</div>
                <div>6x sem juros</div><div>R$ 1.449,83</div>
                <div>7x sem juros</div><div>R$ 1.242,71</div>
                <div>8x sem juros</div><div>R$ 1.087,38</div>
                <div>9x sem juros</div><div>R$ 966,56</div>
                <div>10x sem juros</div><div>R$ 869,90</div>
                <div>11x sem juros</div><div>R$ 790,82</div>
                <div>12x sem juros</div><div>R$ 724,92</div>
            </div>
        </div>`
        document.querySelector("body").appendChild(divParcelamento);
    }

    function fecharParcelamento(){
        document.querySelector(".tableDeParcelamento").remove();
    }
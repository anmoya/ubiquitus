(function () {
    var libros = [{
            titulo: "Historia de Chile",
            autor: "Cualquier weon"
        },
        {
            titulo: "Historia de Chile",
            autor: "Cualquier weon"
        }
    ];


    // UI
    var botonHome = document.getElementById('boton-home');
    var botonUs = document.getElementById('boton-us');
    var botonCatalogo = document.getElementById('boton-catalogo');
    var botonContacto = document.getElementById('boton-contacto');
    let select = document.querySelector('select#select-ed');

    // Data dummy
    var mostrador = document.getElementById('mostrador');
    const url = `${window.location.origin}/data/data.json`;
    var data = [];
    fetch(url).then(data => data.json()).then(d => {
        d.forEach((e) => {
            data.push(e);
        });
    })

    console.log(data);
    let bool = false;
    botonCatalogo.addEventListener('click', function () {
        // mostrador.innerHTML = mostrarCatalogo(data);
        mostrador.innerHTML = mostrarCatalogo(data);

        select.addEventListener('change', (e) => {
            let data_dom = Array.from(document.querySelectorAll('div#libros'));
            console.log(e.target.value);
            switch (e.target.value) {
                case "Edhasa":
                    console.log("edhasa");
                    SelectEye(data_dom, e.target.value);
                    break;
                case "Lom":
                    SelectEye(data_dom, e.target.value);
                    break;
                case "Quimantu":
                    SelectEye(data_dom, e.target.value);
                    break;

            }
        });
    });

    var mostrarCatalogo = function (libros) {
        // Iterar para imprimir
        let i = 0;
        let html = ``;
        libros.forEach((e) => {
            html += `
            <div class="col-4" data-eyecolor='${e.eyeColor}' data-about='${e.about}' id='libros'>  
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="img/libros/00${i++}.jpg" alt="Card image cap"> 
                        <div class="card-body">
                            <h5 class="card-title">${e.company}</h5>
                            <p class="card-text">${e.name}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
            `;
        });
        return html;
    }
})();

function SelectEye(arreglo, valor_select){
    console.log(valor_select);
    if(valor_select === 'Edhasa'){
        arreglo.forEach((e) => {
            console.log(e);
            if (e.dataset.eyecolor !== 'brown'){
                e.style.display = 'none';
            }  
            else {
                e.style.display = 'block';
            }          
        })
    }
    else if(valor_select === 'Lom'){
        arreglo.forEach((e) => {
            if(e.dataset.eyecolor !== 'blue'){
                e.style.display = 'none';
            }
            else {
                e.style.display = 'block';
            }
        });
    }
    else if (valor_select === 'Quimantu'){
        arreglo.forEach((e) => {
            if(e.dataset.eyecolor !== 'green'){
                e.style.display = 'none';
            }
            else{
                e.style.display = 'block';
            }
        });
    }
}
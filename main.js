(function () {
    var libros = [];


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
    });
    
    
    
    let bool = false;
    botonCatalogo.addEventListener('click', function () {
        // mostrador.innerHTML = mostrarCatalogo(data);
        mostrador.innerHTML = mostrarCatalogo(data);
        select.style.display = 'block';

        select.addEventListener('change', (e) => {
            let data_dom = Array.from(document.querySelectorAll('div#libros'));
            switch (e.target.value) {
                case "Historia Mapuche":
                    SelectEye(data_dom, e.target.value);
                    break;
                case "Novena Ola":
                    SelectEye(data_dom, e.target.value);
                    break;
                case "Mar y Tierra":
                    SelectEye(data_dom, e.target.value);
                    break;
                default:
                    SelectEye(data_dom, 'Todos');
                    break;

            }
        });
        
        let data_dom = Array.from(document.querySelectorAll('div#libros'));
        data_dom.forEach((e) => {
            e.addEventListener('click', function(){
               alert(e.target.value); 
            });
        })
    });

    var mostrarCatalogo = function (libros) {
        // Iterar para imprimir
        let i = 0;
        let html = ``;
        libros.forEach((e) => {
            html += `
            <div class="col-3" data-editorial='${e.editorial}' data-autor='${e.autor}' id='libros' style='margin-top: 20px;'>  
                <div class="card" style="width: 15rem;">
                    <img class="card-img-top" id="portada" src="#" alt="Card image cap"> 
                        <div class="card-body">
                            <h5 class="card-title">${e.titulo}</h5>
                            <p class="card-text">${e.autor}</p>
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
    if(valor_select === 'Historia Mapuche'){
        arreglo.forEach((e) => {
            console.log(e);
            if (e.dataset.editorial !== 'Historia Mapuche'){
                e.style.display = 'none';
            }  
            else {
                e.style.display = 'block';
            }          
        })
    }
    else if(valor_select === 'Novena Ola'){
        arreglo.forEach((e) => {
            if(e.dataset.editorial !== 'Novena Ola'){
                e.style.display = 'none';
            }
            else {
                e.style.display = 'block';
            }
        });
    }
    else if (valor_select === 'Mar y Tierra'){
        arreglo.forEach((e) => {
            if(e.dataset.editorial !== 'Mar y Tierra'){
                e.style.display = 'none';
            }
            else{
                e.style.display = 'block';
            }
        });
    }
    else {
        arreglo.forEach((e) => {
            if (e.style.display != 'block'){
                e.style.display = 'block';
            }
        });
    }
}
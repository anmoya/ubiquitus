(function(){
    var libros = [
        {titulo: "Historia de Chile", autor: "Cualquier weon"},
        {titulo: "Historia de Chile", autor: "Cualquier weon"}
    ];
    
    
    // UI
    var botonHome = document.getElementById('boton-home');
    var botonUs = document.getElementById('boton-us');
    var botonCatalogo = document.getElementById('boton-catalogo');
    var botonContacto = document.getElementById('boton-contacto');
    
    var mostrador = document.getElementById('mostrador');
    
    
    
    botonCatalogo.addEventListener('click',function(){
        mostrador.innerHTML = mostrarCatalogo();
    });
    
    
    
    
    
    
    var mostrarCatalogo = function(){
        var retorno = "";
        
        for (var i = 0; i < libros.length; i++){
            
            retorno += '<div class="col-4">' + 
                            '<div class="card" style="width: 18rem;">' +
                                '<img class="card-img-top" src="img/libros/00' + i + '.jpg" alt="Card image cap">' +
                                '<div class="card-body">' +
                                    '<h5 class="card-title">' + libros[i].titulo + '</h5>' +
                                    '<p class="card-text">' + libros[i].autor + '</p>' + 
                                    '<a href="#" class="btn btn-primary">Go somewhere' + 
                        '</a></div></div></div>';
            
        }
        
        
        return retorno;
    }
    
    
})();
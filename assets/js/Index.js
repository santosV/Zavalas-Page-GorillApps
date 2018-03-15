$(document).ready(function() {
     $( ".PULL" ).click(function() {
        
         changeVisibility();
     });
    $( ".selectionMenuPS" ).click(function() {
         changeVisibility();
     });
  
    $( ".productsSelect" ).click(function() {
        $('#nota').modal('hide');
        $('#products').modal('show');
     });
    
    $(".btn-finish").click(function(){
         $('#nota').modal('hide');
    });
    
     $( ".closeProducts" ).click(function() {
        $('#productsTable').html($('#productsTable').html()+"<tr><td>Pantalón</td><td>$100</td><td>1</td><td>$100</td></tr>");
        $('#products').modal('hide');
         $('#nota').modal('show');
         $(".tallas").show();
         $(".colores").hide();
         $(".prendas").hide();
         $(".titleSeleccion").html("Seleccione la <b>talla</b>");
     });
    
    $(".colores").click(function(){
        $(".titleSeleccion").html("Seleccione el <b>artículo</b>");
        $(".colores").hide();
        $(".prendas").show();
    });
    
    $(".tallas").click(function(){
        $(".titleSeleccion").html("Seleccione el <b>color</b>");
        $(".tallas").hide();
        $(".colores").show();
    });

    function changeVisibilityModal(){
        
        $('#products').modal('toggle');
        $('#nota').modal('toggle');
    }
    
    function changeVisibility(){
        $(".Gridview").fadeToggle();
         $(".seleccionSemana").fadeToggle();
    }
});
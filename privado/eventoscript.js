function calcularTotal() {
    var quantidadedeingresso = document.getElementById("quantity").value;
    var precodoingresso = 100; 
    var total = quantidadedeingresso * precodoingresso;
    document.getElementById("total").textContent = total.toFixed(2);}
    function compraringresso() {
        document.getElementById("mensagemcompra").style.display = "block";}

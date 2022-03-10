function calcularInt () {
    let deposito = parseFloat(document.getElementById('indep').value);
    let intAnual = parseFloat(document.getElementById('anit').value);
    let años = parseFloat(document.getElementById('years').value);
    
    
    let decimal = intAnual/100;      

    
    document.getElementById("tBody").innerHTML = "";

    for (let año = 1; año < años +1; año++) {
        let ganancia = deposito * decimal;     
        let totalAño = deposito + ganancia;

         
        document.getElementById("tBody").innerHTML += 
        `<tr>
        <th>  ${año}</th>
        <th>$ ${deposito.toFixed(2)}</th>
        <th>$ ${ganancia.toFixed(2)}</th>
        <th>$ ${totalAño.toFixed(2)}</th>
        </tr>`;
        
        deposito = totalAño;
    }
        
}
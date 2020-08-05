var prod, pre;
var totalLu=0,totalMa=0,totalMi=0,totalJu=0,totalVi=0,totalSa=0,totalDo=0;
// Estos arreglos contendran los valores de la tabla 

var lunes = new Array();

var martes = new Array();

var miercoles = new Array();

var jueves = new Array();

var viernes = new Array();

var sabado  = new Array();

var domingo = new Array();

function agregar(){ 
    prod = document.getElementById("prod").value;
    pre = document.getElementById("pre").value;

    var op = document.getElementById("dias").value;

    switch (op) {
        case "Lunes":
            alert("Lunes");
             lunesp = [prod,pre];
             lunes.push(lunesp); 
             tablaLu();
             totalLu = 0;
            break;
        case "Martes":
            alert("martes");
            martesp = [prod,pre];
            martes.push(martesp);          
            tablaMa();
            totalMa =0;
            break;
        case "Miercoles":
            alert("Miercoles");
            miercolesp = [prod,pre];
            miercoles.push(miercolesp);
            tablaMi();
            totalMi =0;
            break;
        case "Jueves":
            juevesp = [prod,pre];
            jueves.push(juevesp);
            tablaJu();
            totalJu = 0;
            break;
        case "Viernes":
            viernesp=[prod,pre];
            viernes.push(viernesp);
            tablaVi();
            totalVi=0;
            break;
        case "Sabado":
            sabadop=[prod,pre];
            sabado.push(sabadop);
            tablaSa();
            totalSa = 0;
            break;
        case "Domingo":
            domingop=[prod,pre];
            domingo.push(domingop);
            tablaDo();
            totalDo = 0;
            break;
        default:
            alert("Esa opcion no esta disponible");
            break;
    }

    function tablaLu(){
        
    tabla1=document.getElementById('tabla');

    tabla = "<table class=\"tab-x\" >"
    tabla += "<thead>"
    tabla += "<tr>"
    tabla += "<th>Producto</th>"
    tabla += "<th>Precio</th>"
    tabla += "</tr>"
    tabla += "</thead>"
    for (i=0;i<lunes.length;i++) {
        
        
        tabla += "<tr>"
        tabla +="<td>"+lunes[i][0]+"</td><td>"+lunes[i][1]+"</td>"
        tabla +="</tr>"
        totalLu = totalLu + parseFloat(lunes[i][1]);
    }
    tabla +="</tbody>"
    tabla += "<tfoot>"
    tabla +="<tr><th>Ventas del dia</th>"
    tabla +="<th>" + totalLu + "$ </th>"
    tabla +="</tfoot>"
    tabla += "</table>"
    
   return tabla1.innerHTML=tabla;
    }
    
    function tablaMa(){

        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<martes.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+martes[i][0]+"</td><td>"+martes[i][1]+"</td>"
            tabla +="</tr>"
            totalMa = totalMa + martes[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalMa + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }

    function tablaMi(){
        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<miercoles.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+miercoles[i][0]+"</td><td>"+miercoles[i][1]+"</td>"
            tabla +="</tr>"
            totalMi = totalMi + miercoles[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalMi + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }

    function tablaJu(){
        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<jueves.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+jueves[i][0]+"</td><td>"+jueves[i][1]+"</td>"
            tabla +="</tr>"
            totalJu = totalJu + jueves[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalJu + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }

    function tablaVi(){
        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<viernes.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+viernes[i][0]+"</td><td>"+viernes[i][1]+"</td>"
            tabla +="</tr>"
            totalVi = totalVi + viernes[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalVi + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }

    function tablaSa(){
        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<sabado.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+sabado[i][0]+"</td><td>"+sabado[i][1]+"</td>"
            tabla +="</tr>"
            totalSa = totalSa + sabado[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalSa + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }

    function tablaDo(){
        tabla1=document.getElementById('tabla');

        tabla = "<table class=\"tab-x\" >"
        tabla += "<thead>"
        tabla += "<tr>"
        tabla += "<th>Producto</th>"
        tabla += "<th>Precio</th>"
        tabla += "</tr>"
        tabla += "</thead>"
        for (i=0;i<domingo.length;i++) {
            
            
            tabla += "<tr>"
            tabla +="<td>"+domingo[i][0]+"</td><td>"+domingo[i][1]+"</td>"
            tabla +="</tr>"
            totalDo = totalDo + domingo[i][1];
             
        }
        tabla +="</tbody>"
        tabla += "<tfoot>"
        tabla +="<tr><th>Ventas del dia</th>"
        tabla +="<th>" + totalDo + "$ </th>"
        tabla +="</tfoot>"
        tabla += "</table>"
        
       return tabla1.innerHTML=tabla;
    }
}



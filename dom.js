const body=document.querySelectorAll("body");

for (var i = 1; i < 5; i++){
    input.addEventListener("click", {}=>{
        if(input.value.trim()=="") {
            var tr = document.createElement('tr');   
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');
        
            table.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
        
            td.innerText = input.value;
            input.value=""
        }
    
    
    
    
    })
    var tr = document.createElement('tr');   
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    
}
document.body.appendChild(table);

input.addEventListener("click", {}=>{
    if(input.value.trim()=="") {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.innerText = input.value;
    }




})



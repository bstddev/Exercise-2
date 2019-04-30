
function getInput(a){
    document.getElementById("data1").value = document.getElementById("data1").value + a
}

function validasi(){
    let valid = document.getElementById("data1").value
    try {
        document.getElementById("data1").value = eval(valid)
    } catch {
        document.getElementById("data1").value = alert("Hanya bisa melakukan operasi aritmatika sederhana, harap masukkan angka yang sesuai !") 
    }
}

function del(){
    let dlt = document.getElementById("data1").value
    document.getElementById("data1").value = dlt.substring(0,dlt.length-1)
}

function reset(){
    document.getElementById("data1").value = ""
}
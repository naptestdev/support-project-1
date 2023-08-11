

function sdt() {
    document.getElementById('addsdt').style.display="block";
    document.getElementById('open-sdt').style.display="none";
    document.getElementById('cancel-sdt').style.display="block";
}

function huysdt() {
    document.getElementById('cancel-sdt').style.display="none";
    document.getElementById('open-sdt').style.display="block";
    document.getElementById('addsdt').style.display="none";
}
function changeName(){
    document.getElementById('changeName').style.display="none";
    document.getElementById('cancelChangeName').style.display="block";
    document.getElementById('doi-ten').style.display="block" 
}
function cancelChangeName(){
    document.getElementById('changeName').style.display="block";
    document.getElementById('cancelChangeName').style.display="none";
    document.getElementById('doi-ten').style.display="none"
    
}

let products = {

    data: [
        
    ]
}
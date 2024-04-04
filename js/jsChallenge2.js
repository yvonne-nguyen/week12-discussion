document.querySelector("#sameAddress").addEventListener("click", function(){
    if(this.checked){
        document.querySelector("#home").value = document.querySelector("#bill").value;
        document.querySelector("#home").disabled = true;
        console.log("works");
    }
    else{
        document.querySelector("#home").value = "";
        document.querySelector("#home").disabled = false;
    }
})
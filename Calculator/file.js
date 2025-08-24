function sharenumber(num) 
{
    document.getElementById("scn").value+=num;
}
function calculate(){
    let result = eval(document.getElementById("scn").value);
    document.getElementById("scn").value = result;
}
function backspace(){
    let result=document.getElementById("scn");
    result.value = result.value.slice(0, -1);
}
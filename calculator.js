function enterNumber(numCheck,inputType){
    var total_val=document.getElementById('input_val').value;
    var prevVal=total_val.substr(total_val.length-1);
    if(inputType=='dec')
    {
        if(total_val.indexOf('.')!='-1')
        return;
    }
    if(prevVal=='*' || prevVal=='/' || prevVal=='-' || prevVal=='+'  )
    {
        if(numCheck=='*' || numCheck=='/' || numCheck=='+' || numCheck=='-')
        return;
    }
    document.getElementById('input_val').value +=numCheck;
}

function equalTo(){
    var total_val=document.getElementById('input_val').value;
    document.getElementById('input_val').value=eval(total_val);
}
function clearNumber(){
    document.getElementById('input_val').value ='';
}
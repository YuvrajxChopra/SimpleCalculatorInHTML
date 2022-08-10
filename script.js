var output_screen = document.getElementById('calculator-screen');
var input1 = '';
var opsign = 0;
var input2 = '';
var inputsel = 0;
var output = 0;


function insert(n){
    if(inputsel == 0){
       let temp = input1.concat(n);
       input1 = temp;
       
       return;
    }
    else{
        let temp = input2.concat(n);
        input2 = temp;
        return;
    }
    
}

function opentered(n){
    if(input1==0)
        return;
    else if(input1!=0&&input2!=0&&opsign!=0){
        calculate();
    }
    else{
        inputsel = 1;
    }
    opsign = n;
}

function calculate(){
    console.log('was here..');
    if(input1==0)
        return;
    if(input2==0)
        return;
    if(opsign==0)
        return;
    input1 = Number(input1);
    input2 = Number(input2);
    
    if(opsign==1){
        output = input1 / input2;
        opsign = 0;
    }
    else if(opsign==2){
        output = input1 * input2;
        opsign = 0;
    }
    else if(opsign==3){
        output = input1 + input2;
        opsign = 0;
    }
    else{
        output = input1 - input2;
        opsign = 0;
    }
    if(output==0){
        inputsel = 0;
        input1=input2='';
    }
    output_screen.innerHTML = output;
    input1 = output;
    input2 = '';
}


function clear1(){
    input1 = input2 = '';
    opsign = 0;
    output_screen.innerHTML = "";
}



setInterval(() => {
    let temp = '';
    if(opsign==1){
        temp = " / ";
    }
    else if(opsign==2){
        temp = " * ";
    }
    else if(opsign==3){
        temp = " + ";
    }
    else if (opsign==4){
        temp = " - ";
    }
    else {
        temp = "";
    }
    output_screen.innerHTML = input1 + temp + input2;
}, 0);
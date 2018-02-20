//reverse string using array split reverse and join
function reverseString(input){
    let strArr = input.split('').reverse().join('');
    return strArr
}

//reverse string using array split reverse and join. More cleaner way
function reverseString2(input){
    return input 
        .split('')
        .reverse()
        .join('');
}

//reverse string using forloop decrement 
function reverseString3(input){
    
    let revString = '';
    for (let i = input.length - 1; i >= 0;  i--) {
         revString = revString + input[i];   
    }
    return revString;
}

//reverse string using forloop increment 
function reverseString4(input){
    
    let revString = '';
    for (let i = 0; i <= input.length - 1;  i++) {
         revString =input[i] + revString;   
    }
    return revString;
}

//reverse string using for-of loop 
function reverseString5(input){

    let revString = '';
    for (const i of input) {
        revString = i + revString;          
    }
    
    return revString;
}

//reverse string using foreach loop 
function reverseString6(input){

    let revString = '';
    input.split('').forEach( i =>  revString = i + revString );
    
    return revString;
}

//reverse string using reduce 
function reverseString7(input){

    return input.split('').reduce((revSrting, i) => i + revSrting, '')
}


// call function
output = reverseString7('manam-');
console.log(output);


//Palindrome using array split reverse and join.
function palindrome(input){
    let isPalindrome = input.split('').reverse().join('');
   
    if (input === isPalindrome ) {
        return true
    } else {
        return false
    }
}

//Palindrome using array split reverse and join. More cleaner way
function palindrome2(input){
    let isPalindrome = input 
        .split('')
        .reverse()
        .join('');

    return isPalindrome === input
 
}

//Palindrome using forloop decrement 
function palindrome3(input){
    
    let revString = '';
    for (let i = input.length - 1; i >= 0;  i--) {
         revString = revString + input[i];   
    }
    return revString === input;
}

//Palindrome using forloop increment 
function palindrome4(input){
    
    let revString = '';
    for (let i = 0; i <= input.length - 1;  i++) {
         revString =input[i] + revString;   
    }
    return revString;
}

//Palindrome using for-of loop 
function palindrome5(input){

    let revString = '';
    for (const i of input) {
        revString = i + revString;          
    }
    
    return revString === input;
}

//Palindrome using foreach loop 
function palindrome6(input){

    let revString = '';
    input.split('').forEach( i =>  revString = i + revString );
    
    return revString === input;
}

//Palindrome using reduce 
function palindrome7(input){

    let revString = input.split('').reduce((revSrting, i) => i + revSrting, '')

    return revString === input;
}

// call function
output = palindrome7('racecar');
console.log(output);

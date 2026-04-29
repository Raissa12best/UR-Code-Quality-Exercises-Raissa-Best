

const reverseVowels = (str = '') => {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let left = 0, right = str.length - 1;
    let foundLeft = false, foundRight = false;
    str = str.split("");
    
    while(left < right) {
        if(vowels.has(str[left])) {
            foundLeft = true;
        }
        if(vowels.has(str[right])) {
            foundRight = true;
        }
        
        if(foundLeft && foundRight) {
            [str[left], str[right]] = [str[right], str[left]];
            foundLeft = false; 
            foundRight = false;
        }
        
        if(!foundLeft) {
            left++;
        }
        if(!foundRight) {
            right--;
        }
    }
    
    return str.join("");
};

console.log(reverseVowels(str));

// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.
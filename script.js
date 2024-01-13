
function estPalindrome(mot) {
    if (mot.length <= 1) {
        return true;
    } else if (mot[0] == mot[mot.length - 1]) {
        return estPalindrome(mot.slice(1, -1));
    } else {
        return false;
    }
}


let txt =prompt("enter name ","name")
console.log(estPalindrome(txt))


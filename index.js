function validatePassword (pwd) {
    //* Must be a minimum of 8 characters (8 characters or more) 
    if (pwd.length < 8) {
        return false
    }
    //* Must contain at least one lower case letter
    const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let hasLowerCase = false;
    for (let i = 0; i < pwd.length; i++) {
        const char = pwd.charAt(i);
        if (lowerCase.includes(char)) {             
            hasLowerCase = true;
        }
    }
        if (hasLowerCase === false) {
            return false
        }


     //* Must contain at least one upper case letter
        const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        let hasUpperCase = false;
        for (let i = 0; i < pwd.length; i++) {
            const char = pwd.charAt(i);
        if (upperCase.includes(char)) {             
            hasUpperCase = true;
        }
    }
        if (hasUpperCase === false) {
            return false
        }
    
//     //* Must contain at least one numeric value
        const numb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        let hasNumb = false;
        for (let i = 0; i < pwd.length; i++) {
            const char = pwd.charAt(i);
        if (numb.includes(char)) {             
            hasNumb = true;
        }
    }
        if (hasNumb === false) {
            return false
        }

//     //* Must contain at least one special character 
        const special = ['!', '@', '#', '$', '%', '^', '&', '*']
        let hasSpecial = false;
        for (let i = 0; i < pwd.length; i++) {
            const char = pwd.charAt(i);
        if (special.includes(char)) {
            hasSpecial = true;
        }
     }
        if (hasSpecial === false) {
            return false
        }



    return true
}
module.exports = validatePassword




// function validatePasswordDontLookAtMe () {
//     while (pwd.length >= 8) {
//         if (pwd.charAt(i) >= 'a' && pwd.charAt(i) <= 'z') {                 
//             return true
//         }
//         if (pwd.charAt(i) >= 'A' && pwd.charAt(i)'Z'){
//             return true
//         }
//         if (pwd.charAt(i) >= '0' && pwd.charAt)
//     }

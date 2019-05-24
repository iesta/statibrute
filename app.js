const fs = require('fs');
const camelcase = require('camelcase');
const titleize = require('titleize');
const humanizeString = require('humanize-string');

const CryptoJS = require('crypto-js');

const passwords = fs.readFileSync('passwords.txt', 'utf8').toString().match(/^.+$/gm);
const message = fs.readFileSync('message.txt', 'utf8');

console.log("Passwords file size: ", passwords.length);

let passwordsExt = []

for(let i = 0; i < passwords.length; i++){
    if(passwords[i].length>0) {
        passwordsExt.push(passwords[i])
        passwordsExt.push(titleize(passwords[i]))
        passwordsExt.push(humanizeString(passwords[i]))
        passwordsExt.push(camelcase(passwords[i], {pascalCase: true}))
        const cc = camelcase(passwords[i])
        passwordsExt.push(cc)
        passwordsExt.push(cc.toLowerCase())
        passwordsExt.push(humanizeString(cc.toLowerCase()))
        passwordsExt.push(cc.toUpperCase())
    }
}

encryptedHMAC = message.substring(0, 64);
encryptedHTML = message.substring(64);

for(let i = 0; i < passwordsExt.length; i++){

    decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passwordsExt[i]).toString()).toString();
    if (decryptedHMAC !== encryptedHMAC) {
        console.log(`#${i}`, "Negative: ", passwordsExt[i] );
    } else {
        console.log(`#${i}`, "Positive: ", passwordsExt[i]);
        console.log("---",);
        const plainHTML = CryptoJS.AES.decrypt(encryptedHTML, passwordsExt[i]).toString(CryptoJS.enc.Utf8);
        console.log(plainHTML);
        console.log("---",);
        break;
    }

}

 

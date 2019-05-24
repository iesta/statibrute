# StatiBrute

A quick & dirty tool to brute force StatiCrypt pages with a list of phrases and variations.

The script tests some camelCased, upperCased, lowerCased, with and without spaces variations of each phrase.

## Install

Install by cloning the repo

````
git clone [URL]
````

Then run:

````
npm install 
````
or
````
yarn install
````

## Use

Put the encrypted message in message.txt

Put a list a sentences, phrases, words in passwords.txt (one per line).

Run with: 

````
node app.js
````

## References

https://robinmoisson.github.io/staticrypt/

https://github.com/robinmoisson/staticrypt


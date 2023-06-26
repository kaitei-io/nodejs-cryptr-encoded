


# cryptr-encoded

cryptr-encoded is a wrapper for cryptr, a simple `aes-256-gcm` encrypt and decrypt module for node.js

The biggest difference between cryptr and cryptr-encoded is that cryptr-encoded will encode the encrypted string to base64 that is url encoded. This is useful for URL encoding.

If you require anything more than that you probably want to use something more advanced or [crypto](https://nodejs.org/api/crypto.html) directly.

The Cryptr constructor takes 1 required argument, and an optional options object.

`Cryptr(secret[, options])`

-   secret: `<string>`
-   options: `<Object>`
    -   pbkdf2Iterations: `<number>` Defaults to 100000
    -   saltLength: `<number>` Defaults to 64

The `salt` and `iv` are randomly generated and prepended to the result.

**DO NOT USE THIS MODULE FOR ENCRYPTING PASSWORDS!**

Passwords should be a one way hash. Use [bcrypt](https://npmjs.org/package/bcrypt) for that.

## Install

`npm install cryptr-encoded`

## Use Cases
Encrypting and decrypting data in for a URL. Instead of having `login?email=email` you can have it be the encrypted version of the email. This is just a simple example but more secure than just having the email in the URL.

## Usage

```javascript
const Cryptr = require('cryptr-encoded');
const cryptr = new Cryptr('myTotallySecretKey');

const encodedEncryptedString = cryptr.encrypt_and_encode('bacon');
const decodedDecryptedString = cryptr.decode_and_decrypt(encodedEncryptedString);

console.log(encodedEncryptedString); // NzczNDZlYzczMmQ0NjljMWZiMWVlMmJjNTM3ZDAxNjhiOGNiMDJmNTFmNGUzZWNmNjM4MDJhNWE1OWQyNmNkYWZlNWIxMGY0MDllOTg0Y2ZmYTc3NDZiMzhhZWNiNjc5NWQ0NDdiNTczNTVjODhlMjhjNWEyY2JmYjljZDZmOTY3NDNiOGQ1NTc3ZTI1YmI4ODdlNmUxZWI0NmVlOTNiZTAwYTdhZWU2NDE1MjE1N2IzZWIxMDdjNDA5ODI5ZmFlYmE2Y2QxOTgxYg
console.log("\nmaybe\n"); // bacon
console.log(decodedDecryptedString); // bacon
```

with options:
```javascript
const Cryptr = require('cryptr-encoded');
const cryptr = new Cryptr('myTotallySecretKey', { pbkdf2Iterations: 10000, saltLength: 10 });

const encodedEncryptedString = cryptr.encrypt_and_encode('bacon');
const decodedDecryptedString = cryptr.decode_and_decrypt(encodedEncryptedString);

console.log(encodedEncryptedString); // YTc0YjJmNzE4NmZmYThkYmUxMzA1OGY1N2U5MWJmMTA4NDgxMjRmYTM5YTBmY2Q5NDU2MjcyYjZkMjk1NDgwNWU0NWE1MzY4MmU4NDU5MGViM2ZlYjU2ZGYwYjEwMg
console.log(decodedDecryptedString); // bacon
```
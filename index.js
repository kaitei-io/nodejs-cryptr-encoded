const _Cryptr = require('cryptr');

class Cryptr {
    constructor(key, options) {
        this.cryptr = new _Cryptr(key, options);
    }

    encrypt(text) {
        return this.cryptr.encrypt(text);
    }

    decrypt(text) {
        return this.cryptr.decrypt(text);
    }

    encrypt_and_encode(text) {
        const encrypted = this.cryptr.encrypt(text);
        const encoded = Buffer.from(encrypted, 'utf8').toString('base64');
        return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
    }

    decode_and_decrypt(encoded_encrypted) {
        const encoded = encoded_encrypted.replace(/-/g, '+').replace(/_/g, '/');
        const encrypted = Buffer.from(encoded, 'base64').toString('utf8');
        return this.cryptr.decrypt(encrypted);
    }
}

module.exports = Cryptr;

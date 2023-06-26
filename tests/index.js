const Cryptr = require('../index.js');
const assert = require('assert');

function isUrlSafe(str) {
  return !(/[+/=]/g).test(str);
}

const cryptr = new Cryptr('mySecretKey');

function testEncryptionAndDecryption() {
  const original = 'Super cool plaintext, hi alex!'; //Alex is my best friend's name
  const encrypted = cryptr.encrypt(original);
  const decrypted = cryptr.decrypt(encrypted);

  assert.strictEqual(original, decrypted, 'Encryption and decryption test failed');
}

function testEncodingAndDecoding() {
  const original = 'Super cool plaintext, hi alex!'; //Alex is my best friend's name
  const encoded = cryptr.encrypt_and_encode(original);
  const decrypted = cryptr.decode_and_decrypt(encoded);

  assert.strictEqual(original, decrypted, 'Encoding and decoding test failed');
}

function testUrlSafety() {
  const original = 'Super cool plaintext, hi alex!'; //Alex is my best friend's name
  const encoded = cryptr.encrypt_and_encode(original);

  assert.ok(isUrlSafe(encoded), 'Encoded output is not URL safe');
}

function testObscureCharacters() {
  const original = '~!@#$%^&*()_+{}:"<>?';
  const encoded = cryptr.encrypt_and_encode(original);
  const decrypted = cryptr.decode_and_decrypt(encoded);

  assert.ok(isUrlSafe(encoded), 'Encoded output is not URL safe with obscure characters');
  assert.strictEqual(original, decrypted, 'Encoding and decoding test failed with obscure characters');
}

function testEmailAddress() {
  const original = 'test.email+alex-cool_@domain.com'; //Alex is my best friend's name
  const encoded = cryptr.encrypt_and_encode(original);
  const decrypted = cryptr.decode_and_decrypt(encoded);

  assert.ok(isUrlSafe(encoded), 'Encoded output is not URL safe with email address');
  assert.strictEqual(original, decrypted, 'Encoding and decoding test failed with email address');
}

testEncryptionAndDecryption();
testEncodingAndDecoding();
testUrlSafety();
testObscureCharacters();
testEmailAddress();

console.log('All tests passed!');

import fs from 'fs'
import { encryptWithPublicKey } from './encrypt.js';
import { decryptWithPrivateKey } from './decrypt.js';

const publicKey = fs.readFileSync('keys/id_rsa_pub.pem');

const encryptedMessage = encryptWithPublicKey(publicKey, 'Hello world');

console.log(encryptedMessage.toString())

const privateKey = fs.readFileSync('keys/id_rsa_priv.pem');

const decryptedMessage = decryptWithPrivateKey(privateKey, encryptedMessage)

console.log(decryptedMessage.toString())

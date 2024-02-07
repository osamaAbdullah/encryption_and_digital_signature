import crypto from 'crypto'
import { packageOfData } from './signMessage.js';
import { decryptWithPublicKey } from './decrypt.js';
import fs from 'fs';

const {algorithm, original, signedAndEncryptedAndHashedData} = packageOfData;

const hash = crypto.createHash(algorithm);
hash.update(JSON.stringify(original));

const currentHashedData = hash.digest('hex');

const publicKey = fs.readFileSync('keys/id_rsa_pub.pem');

const decryptedHashedData = decryptWithPublicKey(publicKey, signedAndEncryptedAndHashedData)

if (currentHashedData === decryptedHashedData.toString()) {
    console.log('data are secure')
} else {
    console.log('you are hacked')
}

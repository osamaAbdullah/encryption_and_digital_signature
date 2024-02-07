import crypto from 'crypto'
import fs from 'fs'
import { encryptWithPrivateKey } from './encrypt.js';

const hash = crypto.createHash('sha256');

const dataToBeHashedAndDecrypted = {
    name: 'osama',
    email: 'osama@akre.com',
    phone: 753485498453
};

hash.update(JSON.stringify(dataToBeHashedAndDecrypted));

const hashedData = hash.digest('hex');

const senderPrivateKey = fs.readFileSync('keys/id_rsa_priv.pem');

const signedAndEncryptedAndHashedData = encryptWithPrivateKey(senderPrivateKey, hashedData)

export const packageOfData = {
    algorithm: 'sha256',
    original: dataToBeHashedAndDecrypted,
    signedAndEncryptedAndHashedData,
}

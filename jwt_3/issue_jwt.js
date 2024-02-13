import jwt from 'jsonwebtoken'
import fs from 'fs';

const payload = {
    name: 'osama',
    email: 'osama@akre.com',
    role: 'administrator',
    id: 273465672
}

const privateKey = fs.readFileSync('keys/id_rsa_priv.pem');

export const JWT = jwt.sign(payload, privateKey, {algorithm: 'RS256'});

console.log({ JWT })
import base64url from 'base64url';
import crypto from 'crypto';
import fs from 'fs';

const signatureFUnction = crypto.createSign('RSA-SHA256');

const header = {
    alg: 'RS256',
    typ: 'JWT'
}

const payload = {
    name: 'osama',
    email: 'osama@akre.com',
    role: 'administrator',
    id: 273465672
}

console.log({header, payload});

const base64urlHeader = base64url(JSON.stringify(header));
const base64urlPayload = base64url(JSON.stringify(payload));

console.log({base64urlHeader, base64urlPayload});

signatureFUnction.write(base64urlHeader + '.' + base64urlPayload);
signatureFUnction.end();

const privateKey = fs.readFileSync('keys/id_rsa_priv.pem');

const signatureBase64 = signatureFUnction.sign(privateKey, 'base64');

console.log({signatureBase64});

const signatureBase64Url = base64url.fromBase64(signatureBase64);

console.log({signatureBase64Url});

export const JWT = base64urlHeader + '.' + base64urlPayload + '.' + signatureBase64Url

console.log({JWT});

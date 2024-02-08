import base64url from 'base64url';
import crypto from 'crypto';
import fs from 'fs';
import { JWT } from './issue_jwt.js';

const verifyFunction = crypto.createVerify('RSA-SHA256');

const [headerBase64Url, payloadBase64Url, signatureBase64Url] = JWT.split('.');

verifyFunction.write(headerBase64Url + '.' + payloadBase64Url);
verifyFunction.end();

const publicKey = fs.readFileSync('keys/id_rsa_pub.pem');

const signatureIsValid = verifyFunction.verify(publicKey, signatureBase64Url, 'base64url')

console.log(
    {
        signatureIsValid,
        header: base64url.decode(headerBase64Url),
        payload: base64url.decode(payloadBase64Url)
    }
);

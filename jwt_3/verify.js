import jwt from 'jsonwebtoken'
import fs from 'fs';
import { JWT } from './issue_jwt.js';

const publicKey = fs.readFileSync('keys/id_rsa_pub.pem');

export const isVerified = jwt.verify(JWT, publicKey, {algorithm: 'RS256'});

console.log({isVerified})


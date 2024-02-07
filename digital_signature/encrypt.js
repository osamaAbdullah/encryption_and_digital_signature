import crypto from 'crypto'

export function encryptWithPrivateKey(privateKey, message) {
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.privateEncrypt(privateKey, bufferMessage)
}

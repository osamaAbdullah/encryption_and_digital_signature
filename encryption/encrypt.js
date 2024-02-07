import crypto from 'crypto'

export function encryptWithPublicKey(publicKey, message) {
    const bufferMessage = Buffer.from(message, 'utf8');
    return crypto.publicEncrypt(publicKey, bufferMessage)
}

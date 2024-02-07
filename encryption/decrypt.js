import crypto from 'crypto'

export function decryptWithPrivateKey(privateKey, encryptedMessage) {
    return crypto.privateDecrypt(privateKey, encryptedMessage)
}

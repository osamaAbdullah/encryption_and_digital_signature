import crypto from 'crypto'

export function decryptWithPublicKey(publicKey, encryptedMessage) {
    return crypto.publicDecrypt(publicKey, encryptedMessage)
}

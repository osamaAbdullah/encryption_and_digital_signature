# Encryption:

### client will encrypt and send the message to the server only the server can decrypt that message since only the server has the private key

    1. clinet will encrypt a message using servers's public key

    2. clinet will send the message to the server

    3. server will decrypt the message using its private key


# SSL / TLS:

### client already has the `public key` of the server and knows the `message` that must be sent by the server.

    1. server will encrypt the message uing its private key

    2. client will recive the encrypted message from the server

    3. client will decrypt the message using server's public key

    4. client will compare the decrypted message with the messge that ther server must have sent if they match that means the message has been signed by the server

# Identity checking

    // sender

    1. hash the data with hash_algorithm

    2. encrypt the hashed data with sender's private key

    3. send the { encripted_and_hashed_data, hash_algorithm, original_data }

    // reciver

    4. recive { encripted_and_hashed_data, hash_algorithm, original_data }

    5. hash the original_data with hash_algorithm

    6. decrypt the encripted_and_hashed_data with senders public key

    7. compare new_hashed_data with recived_hashed_data

# JWT:

    // issue

    1. prepare raw header and payload

    2. convert them to $base64urlHeader, $base64urlPayload

    3. sign the $base64urlHeader, $base64urlPayload with private key

    4. JWT = base64urlHeader + '.' + base64urlPayload + '.' + signatureBase64Url


    // verify

    1. split JWT to headerBase64Url, payloadBase64Url, signatureBase64Url

    2. convert signatureBase64Url to signatureBase64

    3. try to verify signatureBase64 with headerBase64Url + '.' + payloadBase64Url

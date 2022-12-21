function Encrypt(text){
    var key = [ 28, 76, 95, 19, 51, 68, 44, 5, 33, 87 ];
    var textBytes = aesjs.utils.utf8.toBytes(text);
    key.push(25, 47, 52, 11, 35, 79);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(7));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return(encryptedHex);
};


function Decrypt(Hex){
    var key = [ 28, 76, 95, 19, 51, 68, 44, 5, 33, 87 ];
    key.push(25, 47, 52, 11, 35, 79);
    var encryptedBytes = aesjs.utils.hex.toBytes(Hex);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(7));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return(decryptedText);
};

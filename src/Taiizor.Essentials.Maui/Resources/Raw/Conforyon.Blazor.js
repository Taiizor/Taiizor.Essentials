console.log('%cConforyon Blazor Javascript has started.', 'color: #FFC000');


var Conforyon = {};


Conforyon.Clear = false;
Conforyon.Empty = "Empty!";
Conforyon.Error = "Error!";


Conforyon.Board = {};
Conforyon.Board.Text = {};
Conforyon.Board.Audio = {};

Conforyon.Color = {};
Conforyon.Color.Hex = {};
Conforyon.Color.Rgb = {};
Conforyon.Color.Type = "RGB1";
Conforyon.Color.Sharp = false;

Conforyon.Cryptology = {};
Conforyon.Cryptology.Aes = {};
Conforyon.Cryptology.Base = {};
Conforyon.Cryptology.Text = {};
Conforyon.Cryptology.Text.Md5 = {};
Conforyon.Cryptology.Text.Sha1 = {};
Conforyon.Cryptology.Text.Base = {};
Conforyon.Cryptology.Mode = "CBC";
Conforyon.Cryptology.Text.Sha256 = {};
Conforyon.Cryptology.Text.Sha384 = {};
Conforyon.Cryptology.Text.Sha512 = {};
Conforyon.Cryptology.Uppercase = false;
Conforyon.Cryptology.IV = "QxQsRoZQws61N46H";
Conforyon.Cryptology.Key = "uS830kWPrPSPyZK0pS7Pgw3wP3SvLOGr";


Conforyon.Board.Audio.CopyPath = function (Path) {
    Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardAudioCopyPath", Path);
}

Conforyon.Board.Audio.CopyByte = function (Bytes) {
    Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardAudioCopyByte", Bytes);
}

Conforyon.Board.Audio.PasteStream = function (Clear = Conforyon.Clear, Empty = Conforyon.Empty) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardAudioPasteStream", Clear, Empty);
}


Conforyon.Board.Text.CopyInteger = function (Number) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyInteger", Number);
}

Conforyon.Board.Text.CopyLong = function (Number) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyLong", Number);
}

Conforyon.Board.Text.CopyDouble = function (Number) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyDouble", Number);
}

Conforyon.Board.Text.CopyFloat = function (Number) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyFloat", Number);
}

Conforyon.Board.Text.CopyObject = function (Value) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyObject", Value);
}

Conforyon.Board.Text.CopyText = function (Text) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextCopyText", Text);
}

Conforyon.Board.Text.PasteText = function (Clear = Conforyon.Clear) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "BoardTextPasteText", Clear);
}



Conforyon.Color.Hex.RgbObject = function (Hex, Type = Conforyon.Color.Type, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorHexRgbObject", Hex, Type, Error);
}

Conforyon.Color.Hex.RgbText = function (Hex, Type = Conforyon.Color.Type, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorHexRgbText", Hex, Type, Error);
}


Conforyon.Color.Rgb.HexInteger = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorRgbHexInteger", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexLong = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorRgbHexLong", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexObject = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorRgbHexObject", R, G, B, Sharp, Error);
}

Conforyon.Color.Rgb.HexText = function (R, G, B, Sharp = Conforyon.Color.Sharp, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "ColorRgbHexText", R, G, B, Sharp, Error);
}



Conforyon.Cryptology.Aes.EncryptInteger = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptInteger", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptLong = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptLong", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptDouble = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptDouble", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptFloat = function (Number, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptFloat", Number, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptObject = function (Value, IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptObject", Value, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.EncryptText = function (Text, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesEncryptText", Text, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.DecryptObject = function (Base, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesDecryptObject", Base, IV, Key, Mode, Error);
}

Conforyon.Cryptology.Aes.DecryptText = function (Base, IV = IV = Conforyon.Cryptology.IV, Key = Conforyon.Cryptology.Key, Mode = Conforyon.Cryptology.Mode, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyAesDecryptText", Base, IV, Key, Mode, Error);
}


Conforyon.Cryptology.Base.DecryptObject = function (Base, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyBaseDecryptObject", Base, Error);
}

Conforyon.Cryptology.Base.DecryptText = function (Base, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyBaseDecryptText", Base, Error);
}


Conforyon.Cryptology.Text.Base.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Base.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextBaseEncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Md5.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Md5.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextMd5EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha1.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha1.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha1EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha256.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha256.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha256EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha384.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha384.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha384EncryptText", Text, Uppercase, Error);
}


Conforyon.Cryptology.Text.Sha512.EncryptInteger = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptInteger", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptLong = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptLong", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptDouble = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptDouble", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptFloat = function (Number, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptFloat", Number, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptObject = function (Value, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptObject", Value, Uppercase, Error);
}

Conforyon.Cryptology.Text.Sha512.EncryptText = function (Text, Uppercase = Conforyon.Cryptology.Uppercase, Error = Conforyon.Error) {
    return Taiizor.InvokeMethodAsync("Taiizor.Essentials.Maui.Conforyon", "CryptologyTextSha512EncryptText", Text, Uppercase, Error);
}
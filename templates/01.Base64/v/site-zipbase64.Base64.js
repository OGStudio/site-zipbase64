AMLEO Impl
// SRC: https://developer.mozilla.org/ru/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function base64Encode(str)
{
    var bytes = new (TextEncoder || TextEncoderLite)("utf-8").encode(str);
    return base64js.fromByteArray(bytes);
}
function base64Decode(str)
{
    var bytes = base64js.toByteArray(str);
    return new (TextDecoder || TextDecoderLite)("utf-8").decode(bytes);
}

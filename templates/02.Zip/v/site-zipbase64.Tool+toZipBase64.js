AMLEO Impl
Tool.prototype.toZipBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var bytes = new (TextEncoder || TextEncoderLite)("utf-8").encode(input.value);
    var zipValue = window.pako.deflate(bytes, {to: 'string'});
    output.value = base64Encode(zipValue);

    this.LOG("В_ЗИП_БАЗУ64", input.value.length, output.value.length);
}

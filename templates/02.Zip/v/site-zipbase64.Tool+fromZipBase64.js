AMLEO Impl
Tool.prototype.fromZipBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var zipValue = base64Decode(input.value);
    var bytes = window.pako.inflate(zipValue)
    output.value = new (TextDecoder || TextDecoderLite)("utf-8").decode(bytes);

    this.LOG("ИЗ_ЗИП_БАЗЫ64", input.value.length, output.value.length);
}

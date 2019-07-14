AMLEO Impl
Tool.prototype.toZipBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = zipBase64Encode(input.value)

    this.LOG("В_ЗИП_БАЗУ64", input.value.length, output.value.length);
}

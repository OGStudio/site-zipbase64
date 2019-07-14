AMLEO Impl
Tool.prototype.fromZipBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = zipBase64Decode(input.value)

    this.LOG("ИЗ_ЗИП_БАЗЫ64", input.value.length, output.value.length);
}

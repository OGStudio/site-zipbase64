AMLEO Impl
Tool.prototype.fromBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = base64Decode(input.value);

    this.LOG("ИЗ_БАЗЫ64", input.value.length, output.value.length);
}

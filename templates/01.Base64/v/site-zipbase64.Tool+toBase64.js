AMLEO Impl
Tool.prototype.toBase64 = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    output.value = base64Encode(input.value);

    this.LOG("В_БАЗУ64", input.value.length, output.value.length);
}

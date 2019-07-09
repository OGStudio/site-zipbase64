AMLEO Impl
Tool.prototype.swap = function()
{
    var input = document.getElementById("input");
    var output = document.getElementById("output");

    var inputText = input.value;
    var outputText = output.value;
    input.value = outputText;
    output.value = inputText;

    this.LOG("СМЕНА", inputText.length, outputText.length);
}

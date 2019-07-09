AMLEO Setup
this.logTranslations = {};

AMLEO Impl
Tool.prototype.LOG = function()
{
    var args = Array.prototype.slice.call(arguments);
    var translationKey = args.shift();
    var message = "";
    if (translationKey in this.logTranslations)
    {
        args.unshift(this.logTranslations[translationKey]);
        // Topic: Converting an array to a function arguments list
        // Source: https://stackoverflow.com/a/1316389
        message = formatString.apply(null, args);
    }
    else
    {
        message = translationKey + " " + args.join(" ");
    }
    LOG(message);
}

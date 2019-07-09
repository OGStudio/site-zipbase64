AMLEO Impl
// Topic: JavaScript equivalent to printf/String.Format
// Source: https://stackoverflow.com/a/4673436
function formatString()
{
    // Topic: How to shift “arguments”?
    // Source: https://stackoverflow.com/questions/4775895/how-to-shift-arguments
    var args = Array.prototype.slice.call(arguments);
    var str = args.shift();
    return str.replace(/{(\d+)}/g, function(match, number) { 
              return typeof args[number] != 'undefined'
                ? args[number]
                : match
              ;
            });
};

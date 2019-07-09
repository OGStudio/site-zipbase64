AMLEO Impl
function LOG(message)
{
    var log = document.getElementById("log");
    var now = new Date();
    log.innerHTML += now.toISOString() + " " + message + "<br>";
}

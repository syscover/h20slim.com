function pageload()
{
    var e = (new Date).getTime(), t = (e - before) / 1e3, n = document.getElementById("loadingtime");
    n.innerHTML = "Page load: " + t + " seconds."
}

window.onload = function ()
{
    pageload()
}, setTimeout(function ()
{
    document.body.className += " loaded"
}, 1500), document.addEventListener ? document.addEventListener("DOMContentLoaded", function ()
{
    document.removeEventListener("DOMContentLoaded", arguments.callee, !1), domReady()
}, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function ()
{
    "complete" === document.readyState && (document.detachEvent("onreadystatechange", arguments.callee), domReady())
});
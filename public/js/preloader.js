
// Preloader - OMA (Mar 2021)

function finishedLoading()
{
    setTimeout(
        function ()
        {
            document.body.className += " loaded"
        },
        250
    );
}

if (document.addEventListener)
{
    document.addEventListener("DOMContentLoaded",
        function ()
        {
            document.removeEventListener("DOMContentLoaded", arguments.callee);
            finishedLoading();
        }
    );
}
else if (document.attachEvent) // IE8
{
    document.attachEvent("onreadystatechange",
        function ()
        {
            if (document.readyState === "complete")
            {
                document.detachEvent("onreadystatechange", arguments.callee);
                finishedLoading();
            }
        }
    );
}
else
{
    setTimeout(
        function ()
        {
            finishedLoading();
        },
        2750
    );

}

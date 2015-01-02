(function (){

    var originalURL=location.href.match("(.*/[^\?#;/]+).*:+.*$")[1]+":orig";
    var fileName = location.pathname.match(".*/([^\?#;/]+).*:+.*$")[1];
    console.log("name:" + originalURL);
    console.log("name:" + fileName);

    var btn = document.createElement("input");
    btn.type = "button";
    btn.id="downloadimg";
    btn.value="originalDownload";
    //document.body.insertBefore(btn,document.body.firstChild);
    document.body.appendChild(btn);

    $("#downloadimg").on("click",function(){
        var a = document.createElement('a');
        a.download = fileName;
        a.href = originalURL;
        var evt = document.createEvent('MouseEvent');
        evt.initEvent("click",true,false);
        a.dispatchEvent(evt);
    });

})();
function run(){
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jscode = document.getElementById("JS-code").value;
    let Output = document.getElementById("output");

  output.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>" ;

  output.contentWindow.eval(jscode);
}
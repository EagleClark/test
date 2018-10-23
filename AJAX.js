var xmlhttp,str;
function GetXmlHttpObject()
{
var xmlHttp=null;
try
 {
 // Firefox, Opera 8.0+, Safari
 xmlHttp=new XMLHttpRequest();
 }
catch (e)
 {
 //Internet Explorer
 try
  {
  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
  }
 catch (e)
  {
  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
 }
return xmlHttp;
}

function GetCode(str)
{ 
xmlhttp=GetXmlHttpObject();
if (xmlhttp==null)
 {
 alert ("Browser does not support HTTP Request");
 return;
 }
var url="URL.php";
xmlhttp.onreadystatechange=function() 
{

if (xmlhttp.readyState==4 && xmlhttp.status==200)
 {
     if(str=="encode")
        document.getElementById("URLtext").value=xmlhttp.responseText; 
     if(str=="decode")
        document.getElementById("word").value=xmlhttp.responseText;
 }
}
xmlhttp.open("POST",url,true);
xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
var info;

if(str=="encode")
info="event="+str+"&word="+document.Wordtext.word.value;
if(str=="decode")
info="event="+str+"&URLtext="+document.URLF.URLtext.value;

xmlhttp.send(info);
}





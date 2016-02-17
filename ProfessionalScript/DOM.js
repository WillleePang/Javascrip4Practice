/* global newAttr */
/* global element */
/* global myList */
//---------------------Node类型---------------------
/* global newNode */
/* global value */
/* global someNode */
//在IE中无效
if (someNode.nodeType == Node.ELEMENT_NODE) {
    alert("Node is an element.");
}
//适用于所有浏览器
if (someNode.nodeType == 1) {
    alert("Node is an element.");
    value = someNode.nodeName;//nodeName的值是元素的标签名,nodeValue永远为null
}

//NodeList
var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item[1];
var count = someNode.childNodes.length;

//兼容IE8之前的版本
function convertToArray(nodes) {
    var array = null;
    try {
        //在IE8之前的版本无效
        array = Array.prototype.slice.call(someNode.childNodes, 0);
    } catch (error) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}

//判断结点是不是第一个或者是最后一个
if (someNode.nextSibling === null) {
    alert("Last node in the parent's childNodes list.");
} else if (someNode.previousSibling === null) {
    alert("First node in the parent's childNodes list.");
}

//operate node
var returnedNode = someNode.appendChild(newNode);
alert(returnedNode == newNode);//true
alert(someNode.lastChild == newNode);//true
//someNode has many nodes
returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild);//false
alert(returnedNode == someNode.lastChild);//true
//insert as last node
returnedNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild);//true
//insert as first node
returnedNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnedNode == newNode);//true
alert(newNode == someNode.firstChild);//true
//insert before last node
returnedNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.ChildNodes.length - 2]);//true
//replace first node
returnedNode = someNode.replaceChild(newNode, someNode.firstChild);
//replace last node
returnedNode = someNode.replaceChild(newNode, someNode.lastChild);
//remove first node
var formerFirstChild = someNode.removeChild(someNode.firstChild);
var formerLastChild = someNode.removeChild(someNode.lastChild);
//deep clone
var deepList = myList.cloneNode(true);
alert(deepList.childNodes.length);//3
//shallow clone
var shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length);//0


//---------------------Document类型---------------------
var html = document.documentElement;//取得对<html>的引用
alert(html === document.childNodes[0]);//true
alert(html === document.firstChild);//true
var body = document.body;//取得对<body>的引用
var doctype = document.doctype;//取得对<doctype>的引用
var originalTitle = document.title;
document.title = "New page title";
//取得完整的URL
var url = document.URL;
//取得域名
var domain = document.domain;
//取得来源页面的URL
var referrer = document.referrer;
//search element
var div = document.getElementById("myDiv");
var images = document.getElementsByTagName("img");
alert(images.length);
alert(images[0].src);
alert(images.item(0).src);
alert(images.namedItem("myImage"));//attr name of img
alert(images["myImage"]);//attr name of img
var allElements = document.getElementsByTagName("*");
var radios = document.getElementsByName("color");
//special collection
document.anchors;//包含文档中所有带name特性的<a>元素
document.applets;//包含文档中所有的<applet>元素
document.forms;//包括文档中所有的<form>元素
document.images;//包含文档中所有的<img>元素
document.links;//包含文档中所有带href特性的<a>元素
//DOM一致性检测
var hasXmlDom = document.implementation.hasFeature("XML", "1.0");

//---------------------Element类型---------------------
var div = document.getElementById("myDiv");
alert(div.tagName);//"DIV"
alert(div.tagName == div.nodeName);//true
alert(div.id);
alert(div.className);
alert(div.title);
alert(div.lang);
alert(div.dir);
div.id = "someOtherId";
div.className = "ft";
div.title = "Some other text";
div.lang = "fr";
div.dir = "rtl";
div = document.getElementById("myDiv");
alert(div.getAttribute("id"));
alert(div.getAttribute("class"));
alert(div.getAttribute("title"));
alert(div.getAttribute("lang"));
alert(div.getAttribute("dir"));
//设置特性名会被同一转换为小写形式
div.setAttribute("id", "someOtherId");
div.setAttribute("class", "ft");
div.setAttribute("title", "Some other text");
div.setAttribute("lang", "fr");
div.setAttribute("dir", "rtl");
//用于彻底删除元素特性
div.removeAttribute("class");
//attributes属性
var id = element.attributes.getNamedItem("id").nodeValue;
var id = element.attributes["id"].nodeValue;
element.attributes["id"].nodeValue = "someOtherId";
var oldAttr = element.attributes.removeNamedItem("id");
element.attributes.setNamedItem(newAttr);
//遍历元素的特性
function outputAttributes(element) {
    var pairs = new Array(),
        attrName, attrValue, i, len;
    for (i = 0, len = element.attributes.length; i < len; i++) {
        attrName = element.attributes[i].nodeName;
        attrValue = element.attributes[i].nodeValue;
        if (element.attributes[i].specified) {
            pairs.push(attrName + "=\"" + attrValue + "\"");
        }
    }
    return pairs.join(" ");
}
//创建元素
div = document.createElement("div");
div.id = "myNewDiv";
div.className = "box";
document.body.appendChild(div);
if (client.browser.ie && client.browser.ie <= 7) {
    //创建一个带name特性的iframe元素
    var iframe = document.createElement("<iframe name=\"myframe\"></iframe>");
    //创建input元素
    var input = document.createElement("<input type=\"checkbox\">");
    //创建button元素
    var button = document.createElement("<button type=\"reset\"></button>");
    //创建单选按钮
    var radio1 = document.createElement("<input type=\"radio\" name=\"choice\" value=\"1\">");
    var radio2 = document.createElement("<input type=\"radio\" name=\"choice\" value=\"2\">");
}

//---------------------Text类型---------------------
//元素的子节点
var textNode = div.firstChild;
div.firstChild.nodeValue = "Some other message";
//输出结果是"Some&lt;strong&gt;other&lt;/srong&gt; message"
div.firstChild.nodeValue = "Some <strong>other</strong> message";
//创建文本节点
var element = document.createElement("div");
element.className = "message";
textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
var anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
document.body.appendChild(element);
alert(element.childNodes.length);//2
element.normalize();
alert(element.childNodes.length);//1
alert(element.firstChild.nodeValue);//"Hello world!Yippes!"
//分割文本节点
var newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue);//"Hello"
alert(newNode.nodeValue);//" world!"
alert(element.childNodes.length);//2

//---------------------Comment类型---------------------
var div = document.getElementById("myDiv");
var comment = div.firstChild;
alert(comment.data);
comment = document.createComment("A comment ");

//---------------------CDATASection类型---------------------
/*
CDATASection类型只针对基于XML的文档，表示跌势CDATA区域。
与Comment类似,CDATASection类型继承自Text类型,
因此拥有除splitText()之外的所有字符串操作方法。
 */

//---------------------DocumentType类型---------------------
alert(document.doctype.name);//"HTML"

//---------------------DocumentFragment类型---------------------
//<ul id="myList"></ul>
var fragment = document.createDocumentFragment();
var ul = document.getElementById("myList");
var li = null;

for (var i = 0; i < 3; i++) {
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i + 1)));
    fragment.appendChild(li);
}
ul.appendChild(fragment);

//---------------------Attr类型---------------------
var attr = document.createAttribute("align");
attr.value = "left";
element.setAttributeNode(attr);
alert(element.attributes["align"].value);
alert(element.getAttributeNode("align").value);
alert(element.getAttribute("align"));


//---------------------DOM操作技术---------------------
function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    script.body.appendChild(script);
}
loadScript("Client.js");

function loadScriptString(code) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (error) {
        script.text = code;
    }
    script.body.appendChild(script);
}
loadScriptString("function sayHi(){alert('hi');}");

function loadStyles(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(link);
}
loadStyles("styles.css");

function loadStyleString(css) {
    var style = document.createElement("style");
    style.type = "text/css";
    try {
        style.appendChild(document.createTextNode(css));
    } catch (error) {
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
loadStyleString("body{background-color:red}");

function createTable() {
    //创建table
    var table = document.createElement("table");
    table.border = "1";
    table.width = "100%";
    
    //创建tbody
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    
    //创建第一行
    tbody.insertRow(0);
    tbody.rows[0].insertCell(0);
    tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
    tbody.rows[0].insertCell(1);
    tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));
    
    //创建第二行
    tbody.insertRow(1);
    tbody.rows[1].insertCell(0);
    tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
    tbody.rows[1].insertCell(1);
    tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));
    
    //将表格添加到文档主体中
    document.body.appendChild(table);
}
function insertDiv() {
    var divs = document.getElementsByTagName("div"),
        i,
        len,
        div;
    
    //infinite loop
    //for (i = 0; i < divs.length; i++) {
    for (i = 0, len = divs.length; i < len; i++) {
        div = document.createElement("div");
        document.body.appendChild(div);
    }

}
























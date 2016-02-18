//选择符API
var body = document.querySelector("body");
var myDiv = document.querySelector("#myDiv");
//取得类为"selected"的第一个元素
var selected = document.querySelector(".selected");
//取得类为"button"的第一个图像元素
var img = document.body.querySelector("img.button");

//取得某<div>中的所有<em>元素
var ems = document.getElementById("myDiv").querySelectorAll("em");
//取得类为"selected"的所有元素
var selecteds = document.querySelectorAll(".selected");
//取得所有<p>元素中的所有<strong>元素
var strongs = document.querySelectorAll("p strong");
var i, len, strong;
for (i = 0, len = strongs.length; i < len; i++) {
    strong = strongs[i];//或者storng.item(i);
    strong.className = "imprtant";
}

function matchesSelector(element, selector) {
    if (element.matchesSelector) {
        return element.matchesSelector(selector);
    } else if (element.msMatchesSelector) {
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector) {
        return element.mozMatchesSelector(selector);
    } else if (element.webkitMatchesSelector) {
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not supported.");
    }
}

//跨浏览器遍历某元素的所有子元素
function processChild() {

}
var i, len, child = element.firstElementChild;
while (child != element.lastElementChild) {
    processChild(child);
    child = child.nextElementSibling
}

//与类相关的扩充
//取得所有类中包含“username”和“current”的元素，类名的先后顺序无所谓
var allCurrentUsernames = document.getelementsByClassName("username current");
//取得ID为“myDiv”的元素中带有类名“selected”的所有元素
var selected = document.getElementById("myDiv").getElementsByClassName("selected");

//删除<div class="bd user disabled"></div>中的user类
function delClass() {
    var classNames = div.className.split(/\s+/);
    var pos = -1, i, len;
    for (i = 0, len = classNames.length; i < len; i++) {
        if (classNames[i] == "user") {
            pos = i;
            break;
        }
    }
    classNames.splice(i, 1);
    div.className = classNames.join(" ");
}
//classList属性
div.classList.remove("disabled");
div.classList.add("current");
div.classList.toggle("user");
if (div.classList.contains("bd") && !div.classList.contains("disabled")) {

}
for (var i = 0, len = div.classList.length; i < len; i++) {
    alert(div.classList[i]);
}
//焦点 
var button = document.getElementById("myButton");
button.focus();
alert(document.activeElement === button);
alert(document.hasFocus())
//HTMLDocument的变化
document.readyState;//loading,正在加载文档；complete,已经加载完文档
//兼容模式
if (document.compatMode == "CSS1Compat") {
    alert("Standards mode");
} else {
    alert("Quirks mode");
}
//head属性
var head = document.head || document.getElementsByTagName("head")[0];
//字符集属性
document.charset;
//自定义数据属性
var div = document.getElementById("myDiv");
var appId = div.dataset.appId;
var myName = div.dataset.myname;
div.dataset.appId = 123456;
div.dataset.myname = "micheal";
if (div.dataset.myname) {
    alert("Hello, " + div.dataset.myname);
}
//innerHTML插入javascript脚本，有作用域的元素和无作用域的元素
div.innerHTML = "<input type=\"hidden\"><script defer><\/script>";
var text = "<a href=\"#\" onclick=\"alert('hi')\">Click Me</a>";
var sanitized = window.toStaticHTML(text);//Internet Explorer 8 only
alert(sanitized);//"<a href=\"#\">Click Me</a>"
//outerHTML
var p = document.createElement("p");
p.appendChild(document.createTextNode("This is a paragraph."));
div.parentNode.replaceChild(p, div);
//作为前一个同辈元素插入
element.insertAdjacentHTML("beforebegin", "<p>Hello world!</p>");
//作为第一个子元素插入
element.insertAdjacentHTML("afterbegin", "<p>Hello world!</p>");
//作为最后一个字元素插入
element.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");
//作为后一个同辈元素插入
element.insertAdjacentHTML("afterend", "<p>Hello world!</p>");
//创建html解析器
var itemsHtml = "";
for (var i = 0, len = values.length; i < len; i++) {
    itemsHtml += "<li>" + values[i] + "</li>";
}
ul.innerHTML = itemsHtml;
//文档模式
//<meta http-equiv="X-UA-Compatible" content ="IE=IEVersion">
//<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
var mode = document.documentMode;
//children属性
var childCount = element.children.length;
var firstChild = element.children[0];
//contains()方法
alert(document.documentElement.contains(document.body));
var result = document.documentElement.compareDocumentPosition(document.body);
alert(!!(result & 16));
function contains(refNode, otherNode) {
    if (typeof refNode.contains == "function" && (!client.engine.webkit || client.engine.webkit >= 5522)) {
        return refNode.contains(otherNode);
    } else if (typeof refNode.compareDocumentPosition == "function") {
        return !!(refNode.compareDocumentPosition(otherNode) & 16);
    } else {
        var node = otherNode.parentNode;
        do {
            if (node === refNode) {
                return true;
            } else {
                node = node.parentNode;
            }
        } while (node !== null);
        return false;
    }
}
//插入文本
div.innerText = "Hello world!";
div.innerText = "Hello & welcome, <b>\"reader\"!</b>";
//原来的文本内容替换了容器元素中的所有内容
div.innerText = div.innerText;
//确保跨浏览器兼容
function getInnerText(element) {
    return (typeof element.textContent == "string") ? element.textContent : element.innerText;
}
function setInnerText(element, text) {
    if (typeof element.textContent == "string") {
        element.textContent = text;
    } else {
        element.textInnerText = text;
    }
}


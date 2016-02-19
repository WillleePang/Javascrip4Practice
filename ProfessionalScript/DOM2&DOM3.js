var supprotsDOM2Core = document.implementation.hasFeature("Core", "2.0");
var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");
//document类型的变化
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var att = document.createAttributeNS("http://www.somewhere.com", "random");
var elems = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "*");
//DocumentType类型的变化
alert(document.doctype.publicId);
alert(document.doctype.systemId);
alert(document.doctype.internalSubset);
//Document类型的变化
var newNode = document.importNode(oldNode, true);
document.body.appendChild(newNode);
var parentWindow = document.defaultView || document.parentWindow;
var doc = document.implementation.createDocument("", "root", null);
var htmldoc = document.implementation.createHTMLDocument("New Doc");
alert(htmldoc.title);
alert(typeof htmldoc.body);
//Node类型的变化
var div1 = document.createElement("div");
div1.setAttribute("class", "box");
var div2 = document.createElement("div");
div2.setAttribute("class", "box");
alert(div1.isSameNode(div1));//true
alert(div1.isEqualNode(div2));//true
alert(div1.isSameNode(div2));//false

div = document.createElement("div");
div.setUserData("name", "Nicholas", function (iperation, key, value, src, dest) {
    if (iperation == 1) {
        dest.setUserData(key, value, function () { });
    }
});
var newDiv = div.cloneNode(true);
alert(newDiv.getUserData("name"));
//框架的变化
var iframe = document.getElementById("myIframe");
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColr = "red";
myDiv.style.width = "100px";
myDiv.style.height = "200px";
myDiv.style.border = "1px solid black";

//DOM样式属性和方法
myDiv.style.cssText = "width:25px;height:100px;background-color:green";
alert(myDiv.style.cssText);
var prop, value, i, len;
for (i = 0, len = myDiv.style.length; i < len; i++) {
    prop = myDiv.style[i];
    value = myDiv.style.getPropertyCSSValue(prop);
    alert(prop + ":" + value.cssText + "(" + value.cssValueType + ")");
}
myDiv.sytle.removeProperty("border");

myDiv = document.getElementById("myDiv");
var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
//支持IE
computedStyle = myDiv.currentStyle;
alert(computedStyle.backgroundColor);
alert(computedStyle.width);
alert(computedStyle.height);
alert(computedStyle.border);
//样式表
var sheet = null;
for (var i = 0, len = document.styleSheets.length; i < len; i++) {
    sheet = document.styleSheets[i];
    alert(sheet.href);
}
function getStyleSheet(element) {
    return element.sheet || element.styleSheet;
}
var link = document.getElementsByTagName("link")[0];
var sheet = getStyleSheet(link);


sheet = document.styleSheets[0];
var rules = sheet.cssRules || sheet.rules;//取得规则列表
var rule = rules[0];//取得第一条规则
alert(rule.selectorText);//"div.box"
alert(rule.style.cssText);//完整的CSS代码
alert(rule.style.backgroundColor);//"blue"
alert(rule.style.width);//"100px"
alert(rule.style.height);//"200px"
rule.style.backgroundColor = "red";
sheet.insertRule("body { background-color:silver}", 0);
//仅对ie8有效
sheet.addRule("body", "background-color:silver", 0);
function insertRule(sheet, selectorText, cssText, position) {
    if (sheet.insertRule) {
        sheet.insertRule(selectorText + "{" + cssText + "}", position);
    } else if (sheet.addRule) {
        sheet.addRule(selectorText, cssText, position);
    }
}
sheet.deleteRule(0);
//仅对IE有效
sheet.removeRule(0);
function deleteRule(sheet, index) {
    if (sheet.deleteRule) {
        sheet.deleteRule(index);
    } else if (sheet.removeRule) {
        sheet.removeRule(index);
    }
}
//偏移量
function getElementLeft(element) {
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while (current !== null) {
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }
    return actualLeft;
}
function getElementTop(element) {
    var actualTop = element.offsetTop;
    var current = element.offsetParent;
    while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
    }
    return actualTop;
}
//客户区大小
function getViewport() {
    if (document.compatMode == "BackCompat") {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        };
    }
}

var docHeight = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight);
var docWidth = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth);

function scrollToTop(element) {
    if (element.scrollTop != 0) {
        element.scrollTop = 0;
    }
}

function getBoundingClientRect(element) {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;
    if (element.getBoundingClientRect) {
        if (typeof arguments.callee.offset != "number") {
            var temp = document.createElement("div");
            temp.style.cssText = "position:absolute;left:0;top:0;";
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        var rect = element.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            left: rect.left + offset,
            right: rect.right + offset,
            top: rect.top + offset,
            bottom: rect.bootom + offset
        };
    } else {
        var actualLeft = getElementLeft(element);
        var actualTop = getElementTop(element);
        return {
            left: actualLeft - scrollLeft,
            right: actualLeft + element.offsetWidth - scrollLeft,
            top: actualTop - scrollTop,
            bottom: actualTop + element.offsetHeith - scrollTop
        }
    }
}

//遍历
var supportsTraversals = document.implementation.hasFeature("Traversal", "2.0");
var suppertsNodeIterator = (typeof document.createNodeIterator == "function");
var supportsTreeWalker = (typeof document.createTreeWalker == "function");
//遍历NodeIterator
var div = document.getElementById("div1");
var filter = {
    acceptNode: function (node) {
        return node.tagName.toLowerCase() == "li" ?
            NodeFilter.FILTER_ACCEPT :
            NodeFilter.FILTER_SKIP;
    }
};
var iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT, filter, false);
var node = iterator.nextNode();
while (node != null) {
    alert(node.tagName);
    node = iterator.nextNode();
}

var walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, null, false);
walker.firstChild();
walker.nextSibling();
var node = walker.firstChild();
while (node !== null) {
    alert(node.tagName);
    node = walker.nextSibling();
}

//DOM中的范围
var range1 = document.createRange();
var range2 = document.createRange();
var p1 = document.getElementById("p1");
range1.selectNode(p1);
range2.selectNodeContents(p1);

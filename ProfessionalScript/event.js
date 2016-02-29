var btn = document.getElementById("myBtn");
btn.onclick = function () {
    alert("Clicked");
    alert("this.id");
};

btn.onclick = null;

btn.addEventListener("click", function () {
    alert(this.id);
}, false);
btn.addEventListener("chick", function () {
    alert("Hello world!");
}, false);

var handler = function () {
    alert(this.id);
}

//传入remove中的事件处理程序函数必须与传入add中的相同
btn.addEventListener("click", handler, false);
btn.removeEventListener("click", handler, false);
//IE8及之更早版本支持事件冒泡
//相反的顺序被触发
btn.attachEvent("onclick", function () {
    alert("clicked");
});
btn.attachEvent("onclick", function () {
    alert(this === window);
});

var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.addachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }
}
EventUtil.addHandler(btn, "click", handler);
EventUtil.removeHandler(btn, "click", handler);

btn.onclick = function (event) {
    alert(event.currentTarget === this);//true
    alert(event.target === this);//true
}

document.body.onclick = function (event) {
    alert(event.currentTarget === document.body);
    alert(this === document.body);
    alert(event.target === document.getElementById("myBtn"));
}

var btn = document.getElementByiD("myBtn");

handler = function (event) {
    switch (event.type) {
        case "click":
            alert("click");
            break;
        case "mouseover":
            event.target.style.backgroundColor = "red";
            break;
        case "mouseout":
            event.target.style.backgroundColor = "";
            break;
    }
}
btn.onclick = handler;
btn.onmouseover = handler;
btn.onmouseout = handler;

//阻止特定事件的默认行为
var link = document.getElementById("myLink");
link.onclick = function (event) {
    //z只有cancelable属性设置为ture的时间，才可以使用preventDefault来取消默认行为
    event.cancelable = true;
    event.preventDefault();
};


//停止时间在DOM层次中的传播，即取消进一步的时间捕获或者冒泡
btn.onclick = function (event) {
    alert("Clicked");
    event.stopPropagation();
}
document.body.onclick = function (event) {
    alert("Body clicked");
}

//确定事件当前正位于事件流的哪个阶段
btn.onclick = function (event) {
    alert(event.eventPhase);//2
}
document.body.addEventListener("click", function (event) {
    alert(event.eventPhase);//1
});
document.body.onclick = function (event) {
    alert(event.eventPhase);//3
}

//IE中的事件对象
btn.onclick = function () {
    var event = window.event;
    alert(event.type);//"click"
    alert(window.event.srcElement === this);
    window.event.cancelbubble = true;
}
btn.attachEvent("onclick", function (event) {
    alert(event.type);
    alert(event.srcElement === this);
});

//跨浏览器的事件对象
var EventUtil1 = {
    addHandler: function (element, type, handler) {
        //省略的代码
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    removeHandler: function (element, type, handler) {
        //省略的代码
    },
    stopPropagation: function () {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    },
    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    },
    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}
link.onclick = function (event) {
    event = EventUtil1.getEvent(event);
    EventUtil1.preventDefault(event);
    EventUtil1.stopPropagation(event);
}

//UI事件
var isSupported = document.implementation.hasFeature("HTMLEvents", "2.0");
var isSupported = document.implementation.hasFeature("UIEvent", "3.0");
//load onload 页面完全加载后，出发load事件
EventUtil.addHandler(window, "load", function (event) {
    //<img src="smile.gif" onload="alert('Image loaded.')"
    var image = document.getElementById("myImage");
    EventUtil.addHandler(image, "load", function (event) {
        event = EventUtil.getEvent(event);
        alert(EventUtil.getTarget(event).src);
    });
    //新图像元素不一定要从添加到文档后才开始下载，只要设置src属性就会开始下载
    document.body.appendChild(image);
    image.src = "simle.gif";
    //script元素的src属性并将该元素添加到文档后，才会开始下载
    var script = document.createElement("script");
    EventUtil.addHandler(script, "load", function (event) {
        alert("Loaded");
    });
    //下面两条语句的顺序不重要
    script.src = "example.js";
    document.body.appendChild(script);

    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    EventUtil.addHandler(link, "load", function (event) {
        alert("css Loaded");
    });
    //下面两条语句的顺序不重要
    link.href = "example.css";
    document.getElementsByTagName("head")[0].appendChild(link);
});
//unload 文档完全卸载后出发
EventUtil.addHandler(window, "unload", function (event) {
    alert("Unloaded");
});
//resize浏览器窗口调整到一个新的高度或者宽度
EventUtil.addHandler(window, "resize", function (event) {
    alert("resized");
});
//scroll 页面滚动事件 注:尽量保持事件处理程序的代码简单
EventUtil.addHandler(window, "scroll", function (event) {
    if (document.compatMode == "CSS1Compat") {
        alert(document.documentElement.srcollTop);
    } else {
        alert(document.body.scrollTop);
    }
});

//焦点事件
//focusout、fousin、blur、DOMFocusOut、focus、DOMFocusIn
var isSupported = document.implementation.hasFeature("FocusEvent", "3.0");

//鼠标与滚轮事件
var isSupported = document.implementation.hasFeature("MouseEvents", "2.0");
var isSupported = document.implementation.hasFeature("MouseEvents", "3.0");
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function (event) {
    event = EventUtil.getEvent(event);
    alert("Client coordinates:" + event.clientX + "," + event.clientY);
    var pageX = event.pageX, pageY = event.pageY;
    if (pageX === undefined) {
        pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
    if (pageY === undefined) {
        pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
    }
    alert("Page coordinates:" + event.pageX + "," + event.pageY);
    alert("Screen coordinates:" + event.screenX + "," + event.screenY);
});
//修改键
EventUtil.addHandler(div, "click", function (event) {
    event = EventUtil.getEvent(event);
    var keys = new Array();
    if (event.shiftKey) {
        keys.push("shift");
    }
    if (event.ctrlKey) {
        keys.push("ctrl");
    }
    if (event.altKey) {
        keys.push("alt");
    }
    if (event.metaKey) {
        keys.push("meta");
    }
    alert("Keys: " + keys.join(","));
});
//相关元素
EventUtil.addHandler(div, "mouseout", function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var relatedTarget = EventUtil.getRelatedTarget(event);
    alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
});
//鼠标按钮
EventUtil1.addHandler(div, "mousedown", function (event) {
    event = EventUtil1.getEvent(event);
    alert(EventUtil1.getBUtton(event));
})
//鼠标滚轮事件
EventUtil1.addHandler(document, "mousewheel", function (event) {
    event = EventUtil1.getEvent(event);
    //支持opera 9.5之前的版本
    var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
    alert(delta);
});
(function () {
    function handleMouseWheel(event) {
        event = EventUtil1.getEvent(event);
        var delta = EventUtil1.getWheelDelta(event);
        alert(delta);
    }
    EventUtil1.addHandler(document, "mousewheel", handleMouseWheel);
    EventUtil1.addHandler(document, "DOMMouseScroll", handleMouseWheel);
})();

//键盘与文本事件
var textbox = document.getElementById("myText");
EventUtil1.addHandler(textbox, "keyup", function (event) {
    event = EventUtil1.getEvent(event);
    alert(EventUtil1.getCharCode(event));

    var identifier = event.key || event.keyIdentifier;
    if (identifier) {
        alert(identifier);
    }

    var loc = event.location || event.keyLocation;
    if (loc) {
        alert(loc);
    }

    if (event.getModifierState) {
        alert(event.getModeifierState("Shift"));
    }
});
//textInput事件
EventUtil1.addHandler(textbox, "textInput", function (event) {
    event = EventUtil1.getEvent(event);
    alert(event.data);
    //把文本输入到文本框中的方式
    alert(event.inputMethod);
})
//复合事件
//用于处理IME的输入序列
var textbox = document.getElementById("myText");
EventUtil1.addHandler(textbox, "compositionstart", function (event) {
    event = EventUtil1.getevent(event);
    alert(event);
});
EventUtil1.addHandler(textbox, "compositionupdate", function (event) {
    event = EventUtil1.getevent(event);
    alert(event);
});
EventUtil1.addHandler(textbox, "compositionend", function (event) {
    event = EventUtil1.getevent(event);
    alert(event);
});
//变动事件
var isUpported = document.implementation.hasFeature("MutationEvents", "2.0");
//删除节点，removeChild() replaceChild() 从dom中删除节点时，触发这个时间
EventUtil1.addHandler(windwo, "load", function (event) {
    var list = document.getElementById("myList");

    EventUtil1.addHandler(document, "DOMSubtreeModified", function (event) {
        alert(event.type);
        alert(event.target);
    });
    EventUtil1.addHandler(document, "DOMNodeRemoved", function (event) {
        alert(event.type);
        alert(event.target);
        alert(event.relatedNode);
    });
    EventUtil1.addHandler(document, "DOMSubtreeModified", function (event) {
        alert(event.type);
        alert(event.target);
    });
    list.parentNode.removeChild(list);
});
//使用appendChild()、replaceChild()、insertBefore()向DOM中插入节点时，首先会出发DOMNodeInserted事件
EventUtil1.addHandler(window, "load", function () {
    var list = document.getElementById("myList");
    var item = document.createElement("li");
    item.appendChild(document.createTextNode("Item 4"));

    EventUtil1.addHandler(document, "DOMSubtreeModified", function (event) {
        alert(event.type);
        alert(event.target);
    });
    EventUtil1.addHandler(document, "DOMNodeInserted", function (event) {
        alert(event.type);
        alert(event.target);
        alert(event.relatedNode);
    });
    EventUtil1.addHandler(document, "DOMNodeInsertedIntDocument", function (event) {
        alert(event.type);
        alert(event.target);
    });
    list.parentNode.removeChild(list);
})

//HTML5事件
//contextmenu事件
EventUtil1.addHandler(window, "load", function () {
    var div = document.getElementById("myDiv");
    EventUtil1.addHandler(div, "contextmenu", function (event) {
        event = EventUtil1.getEvent(event);
        //保证不现实浏览器默认的上下文菜单
        EventUtil1.preventDefault(event);

        var mmenu = document.getElementById("myMenu");
        menu.style.left = event.clientX + "px";
        menu.style.top = event.clientY + "px";
        menu.style.visibility = "visible";
    });
    EventUtil1.addHandler(document, "click", function () {
        document.getElementById("myMenu").style.visibility = "hidden";
    });
});
//beforeunload事件
EventUtil1.addHandler(window, "beforeload", function (event) {
    event = EventUtil1, getEvent(event);
    var mesage = "I'm really going to miss you if you go.";
    event.returnValue = message;
    return message;
});
//DOMContentLoaded事件
//在形成完整的DOM树时候就会触发
EventUtil1.addHandler(document, "DOMContentLoaded", function (event) {
    alert("Content loaded");
});
//如果浏览器不支持DOMContentLoaded
setTimeout(function () {
    alert("excute");
}, 0);
//readystatechange事件
//uninitialized
//loading
//loaded
//interactive
//complete
EventUtil1.addHandler(document, "readystatechange", function () {
    if (document.readyState == "interfactive" || document.readyState == "complete") {
        EventUtil1.removeHandler(document, "readystatechange", arguments.callee);
        alert("Content loaded");
    }
});
//加载外部javascript文件的代码
EventUtil1.addHandler(window, "load", function () {
    var script = document.createElement("script");

    EventUtil1.addHandler(script, "readstatechange", function (event) {
        event = EventUtil1.getEvent(event);
        var target = EventUtil1.getTarget(event);
        if (target.readState == "loaded" || target.readyState == "complete") {
            EventUtil1.removeHandler(target, "readystatechange", arguments.callee);
            alert("script loaded");
        }
    });
    script.src = "example.js";
    document.body.appendChild(script);
});
//加载外部CSS文件的代码
EventUtil1.addHandler(window, "load", function () {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";

    EventUtil1.addHandler(link, "readstatechange", function (event) {
        event = EventUtil1.getEvent(event);
        var target = EventUtil1.getTarget(event);
        if (target.readState == "loaded" || target.readyState == "complete") {
            EventUtil1.removeHandler(target, "readystatechange", arguments.callee);
            alert("CSS Loaded");
        }
    });
    link.href = "example.css";
    document.getElementsByTagName("head")[0].appendChild(link);
});
//“往返缓存” back-forward cache
//pageshow和pagehide事件
//pageshow在页面显示是出发，无论页面是否来自bfcache
(function () {
    var showCount = 0;
    EventUtil1.addHandler(windwo, "load", function () {
        alert("Load fired");
    });
    EventUtil1.addHandler(window, "pageshow", function () {
        showCount++;
        alert("Show has been fired " + showCount + " times. Persisted?" + event.persisted);
    });
    EventUtil1.addHandler(window, "pagehide", function (event) {
        alert("Hiding, Persisted? " + event.persisted);
    });
})();
//hashchange事件
var isSupported = ("onhashchange" in window) && (document.documentMode === undefined || document.documentMode > 7);
EventUtil1.addHandler(window, "hashchange", function (event) {
    alert("Old URL: " + event.oldURL + "\nNew URL: " + event.newURL);
});
EventUtil1.addHandler(window, "hashchange", function (event) {
    alert("Current hash: " + location.hash);
});
//触摸设备
//orientationchange事件 去顶用户何时将设备由查看模式切换为纵向查看模式
EventUtil1.addHandler(window, "load", function (event) {
    var div = document.getElementById("myDiv");
    div.innerHTML = "Current orientation is " + window.orientation;
    EventUtil1.addHandler(window, "orientationchange", function (event) {
        div.innerHTML = 'Current orientation is ' + window.orientation;
    });
});
//MozOrientation事件
//当设备的加速机检测设备的方向改变是，就会触发这个事件
EventUtil1.addHandler(window, "MozOrientation", function (event) {
    var output = document.getElementById("output");
    output.innerHTML = "X=" + event.x + ",Y=" + event.y + ",Z=" + event.z + "<br>";
});
//diviceorientation事件 三维空间，靠x、y和z轴来定位的
EventUtil1.addHandler(windwo, "deviceorientation", function (event) {
    var output = document.getElementById("output");
    output.innerHTML = "Alpha=" + event.alpha + ",Beta=" + event.beta + ",Gamma=" + event.gamma + "<br>";
});
//devicemotion事件 告诉开发人员设备什么时候移动，而不仅仅是设备方向的改变
EventUtil1.addHandler(window, "devicemotion", function (event) {
    var output = document.getElementById("output");
    if (event.rotationRate !== null) {
        output.innerHTML = "Alpha=" + event.rotationRate.alpha + ",Beta=" + event.rotationRate.beta +
        ",Gamma=" + event.rotationRate.gamma + "<br>";
    }
});

//触摸与手势事件
//触摸事件
function handleTouchEvent(event) {
    //之跟踪一次触摸
    if (event.touches.length == 1) {
        var output = document.getElementById("output");
        switch (event.type) {
            case "touchstart":
                output.innerHTML = "Touch started (" + event.touches[0].clientX +
                "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
                output.innerHTML = "<br>Touch ended (" + event.changedTouches[0].clientX +
                "," + event.changedTouches[0].clientY + ")";
                break;
            case "touchmove":
                event.preventDefault();
                output.innerHTML = "<br>Touch moved (" + event.changedTouches[0].clientX +
                "," + event.changedTouches[0].clientY + ")";
                break;
        }
    }
}
EventUtil1.addHandler(document, "touchstart", handleTouchEvent);
EventUtil1.addHandler(document, "touchend", handleTouchEvent);
EventUtil1.addHandler(document, "touchmove", handleTouchEvent);
//手势事件
function handleGestureEvent(event) {
    var output = document.getElementById("output");
    switch (event.type) {
        case "gesturestart":
            output.innerHTML = "Gesture started (rotation=" + event.rotation +
            ",scale=" + event.scale + ")";
            break;
        case "gestureend":
            output.innerHTML = "<br>Gesture ended (" + event.rotation +
            ",scale=" + event.scale + ")";
            break;
        case "gesturechange":
            output.innerHTML = "<br>Gesture ended (" + event.rotation +
            ",scale=" + event.scale + ")";
            break;
    }
}
EventUtil1.addHandler("gesturestart", "touchstart", handleTouchEvent);
EventUtil1.addHandler("gestureend", "touchend", handleTouchEvent);
EventUtil1.addHandler("gesturechange", "touchmove", handleTouchEvent);

//内存和性能
//事件委托：事件处理程序过多
var item1 = document.getElementById("goSomewhere");
var item1 = document.getElementById("doSomewhere");
var item1 = document.getElementById("sayHi");
EventUtil1.addHandler(item1, "click", function (event) {
    location.href = "http://www.wrox.com";
});
EventUtil1.addHandler(item1, "click", function (event) {
    document.title = "I changed the document's title";
});
EventUtil1.addHandler(item1, "click", function (event) {
    alert("hi");
});
//如果在一个复杂的web应用程序中，对所有可单机的元素都采用这种方式，那么结果就会有数不清的代码用于添加事件处理程序。
//此时，可以利用事件委托技术解决这个问题。使用事件委托，只需要在DOM树中尽量最高的层次上添加一个时间处理程序。
var list = document.getElementById("myLinks");
EventUtil1.addHandler(list, "click", function (event) {
    event = EventUtil1.getEvent(event);
    var target = EventUtil1.getTarget(event);

    switch (target.id) {
        case "doSomething":
            document.title = "I changed the document's title";
            break;
        case "goSomewhere":
            location.href = "http://www.wrox.com";
        case "sayHi":
            alert("hi");
            break;
    }
});

//移除事件处理程序
//<input type = "button" value = "Click Me" id = "myBtn">
var btn = document.getElementById("myBtn");
btn.onclick = function () {
    //先执行某些操作
    btn.onclick = null;//移除事件处理程序
    document.getElementById("myDiv").innerHTML = "Processing..."//麻烦了！
};

//模拟鼠标事件
var btn = document.getElementById("myBtn");
event = document.createEvent("MouseEvents");
event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
btn.dispatchEvent(event);
//模拟键盘事件
var textbox = document.getElementById("myTextbox");
if (document.implementation.hasFeature("KeyboardEvents", "3.0")) {
    event = document.createEvent("KeyboadrEvent");
    event.initKeyboardEvent("keydown", true, true, document.defaultView, "a", 0, "Shift", 0);
}
textbox.dispatchEvent(event);
//适用于Firefox
event = document.createEvent("KeyEvents");
event.initKeyEvent("keypress", true, true, document.defaultView, false, false, false, false, 65, 65);
textbox.dispatchEvent(event);

event.initEvent(type, bubbles, cancelable);
event.view = document.defaultView;
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.metaKey = false;
event.keyCode = 65;
event.charCode = 65;
textbox.dispatchEvent(event);

event = document.createEvent("MutationEvents");
event.initMutationEvent("DOMNodeInserted", true, false, someNode, "", "", "", 0);
target.dispatchEvent(event);

var div = document.getElementById("myDiv"), event;
EventUtil1.addHandler(div, "myevent", function (event) {
    alert("DIV: " + event.detail);
});
EventUtil1.addHandler(document, "myevent", function (event) {
    alert("DOCUMENT: " + event.detail);
});
if (document.implementation.hasFeature("CustomEvents", "3.0")) {
    event = document.createEvent("CustomEvent");
    event.initCustomEvent("myevent", true, false, "Hello world!");
    div.dispatchEvent(event);
}

//IE中的事件模拟
var btn = document.getElementById("myBtn");
var event = document.createEventObject();

event.screenX = 100;
event.screenY = 0;
event.clientX = 0;
event.clientY = 0;
event.ctrlKey = false;
event.altKey = false;
event.shiftKey = false;
event.button = 0;
btn.fireEvent("onclick", event);

var textbox = document.getElementById("myTextbox");
var event = document.createEventObject();
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.keyCode = 65;
textbox.fireEvent("onkyepress",event);

























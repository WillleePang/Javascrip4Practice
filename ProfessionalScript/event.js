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















  
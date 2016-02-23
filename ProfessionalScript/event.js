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
}
link.onclick = function (event) {
    event = EventUtil1.getEvent(event);
    EventUtil1.preventDefault(event);
    EventUtil1.stopPropagation(event);
}


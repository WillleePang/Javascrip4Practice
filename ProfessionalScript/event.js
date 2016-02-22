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


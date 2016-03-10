//get selected option
function getSelectedOptions(selectebox) {
    var result = new Array();
    var option = null;

    for (var i = 0, len = selectbox.options.length; i < len; i++) {
        option = selectbox.options[i];
        if (option.selected) {
            result.push(option);
        }
    }

    return result;
}

var selectbox = document.getElementById("selLocation");
var selectedOptions = getSelectedOptions(selectbox);
var message = "";
for (var i = 0, len = selectedOption.length; i < len; i++) {
    message += "Selected index: " + selectedIndex + "\nSelected text: " +
        selectedOption.text + "\nSelected value: " + selectedOption.value;
}
alert(message);

//add option
var newOption1 = document.createElement("option");
newOption.appendChild(document.createTextNode("Otpion text"));
newOption.setAttribute("value", "Option value");
var newOption2 = new Option("Otpion text", "Option value");
selectebox.appendChild(newOption1);
selectebox.appendChild(newOption2);
selectbox.add(newOption1, undefined);
selectbox.add(newOption2, undefined);

//reomve option
selectbox.removeChild(selectebox.options[0]);
selectbox.remove(0);
selectbox.options[0] = null;
function clearSelectbox(selectbox) {
    for (var i = 0, len = selectbox.options.length; i < len; i++) {
        selectbox.remove(i);
    }
}

//移动和重排序
var selectbox1 = document.getElementById("selLocation1");
var selectbox2 = document.getElementById("selLocation2");
selectbox2.appendChild(selectbox1.options[0]);
var optionToMove = selectbox.options[1];
selectbox.insertBefore(optionToMove, select.options[optionToMove.index - 1]);
selectbox.insertBefore(optionToMove, select.options[optionToMove.index + 2]);

//表单序列化
function seriialize(form) {
    var parts = [], field = null, i, len, j, optLen, option, optVlue;
    for (i = 0, len = form.elements.length; i < len; i++) {
        field = form.elements[i];
        switch (field.type) {
            case "select-one":
            case "select-multiple":

                if (field.name.length) {
                    for (j = 0, optLen = field.options.length; j < optLen; j++) {
                        option = field.option[j];
                        if (option.selected) {
                            if (option.hasAtrribute) {
                                optValue = (option.hasAttribute("value") ? option.value : option.text);
                            } else {
                                optValue = (option.attribute["value"].specified ? option.value : option.text);
                            }
                            parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                        }
                    }
                }
                break;
            case undefined://字段集
            case "file"://文件输入
            case "submit"://提交按钮
            case "reset"://重置按钮
            case "button"://自定义按钮
                break;
            case "radio"://单选按钮
            case "checkbox"://复选框
                if (!field.checked) {
                    break;
                }
            /* 执行默认操作 */
            default:
                //不包含没有名字的表单字段
                if (field.name.length) {
                    parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                }
        }
    }
    return parts.join("&");
}

































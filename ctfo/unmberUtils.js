var numberUtils = {

    /**
     * 格式化后的数字
     * 比如12345.67格式化为12,345.67
     * @param {} s  数字串
     *           n  保留小数位
     * @return {}
     */
    numberFormats: function (s, n) {
        if (!s || isNaN(s))
            return '';
        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse();
        var r = s.split(".")[1];
        var t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length && l[i + 1] != '-' ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    },

    /**
     * 格式化后的数字
     * 比如12345.67格式化为12,345.67
     * @param {} s  数字串
     *           n  保留小数位
     * @return {}  默认返回0.00
     */
    numberFormatsToFixed: function (s, n) {
        if (s == null) {
            return '';
        } else {
            if (typeof(s) != "number") {
                s = s.replace(/,/g, '');
            }
            //数字格式化
            if (s && s != undefined) {
                s = '' + s;
                s = s.replace(/,/g, '');
            }
            if (!s || isNaN(s))
                return '0.00';

        }

        n = n > 0 && n <= 20 ? n : 2;
        s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
        var l = s.split(".")[0].split("").reverse();
        var r = s.split(".")[1];
        var t = "";
        for (i = 0; i < l.length; i++) {
            t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length && l[i + 1] != '-' ? "," : "");
        }
        return t.split("").reverse().join("") + "." + r;
    },
    /***
     *
     * @param s
     * @param n
     */
    numnberFormatsRestore: function (s, n) {
        return s.replace(/,/g, '');
    },

    /**
     * 百分比计算
     */
    parsePercent: function (value) {
        if (!value || isNaN(value)) return '';
        if (typeof value === 'string') {
            if (_trim(value).match(/%$/)) {
                return value;
            }

            return (parseFloat(value) * 100).toFixed(2) + '%';
        }

        if (parseFloat(value) > 1) {
            return (value * 100).toFixed(2) + "%";
        }
        return (value * 100).toFixed(2) + '%';
    },
};
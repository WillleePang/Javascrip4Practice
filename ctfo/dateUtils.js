var dateUtils = {

    /**
     * 获取date所在的周的起始日期和终止日期
     * 比如date=2013-1-11 则返回2013-1-7和2013-1-13
     * @param {} date
     * @return {}
     */
    getWeekDays: function (date) {
        var now = date;

        var start = new Date();
        var end = new Date();

        var weekday = now.getDay(); //从 Date 对象返回一周中的某一天 (0 ~ 6)。 返回值是 0（周日） 到 6（周六） 之间的一个整数。
        if (weekday == 0) weekday = 6;
        else weekday = weekday - 1;

        var nowTimes = now.getTime();//返回 1970 年 1 月 1 日至今的毫秒数。
        var weekdayTimes = weekday * 24 * 3600 * 1000;
        var week1Times = nowTimes - weekdayTimes;
        var week7Times = week1Times + 6 * 24 * 3600 * 1000;
        start.setTime(week1Times);
        end.setTime(week7Times);

        var obj = {};
        obj.startDate = start;
        obj.endDate = end;
        return obj;
    },

    /**数字代表的时间戳 毫米数*/
    getDateFromTimes: function (times) {
        var date = new Date();
        if (times) {
            date.setTime(times);
        }
        //	 var date = new Date(parseInt(times) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
        return date;
    },

    /**时间戳转时间,数字代表的时间戳 毫米数*/
    getFormatDateTimeFromTimes: function (times) {
        var date = this.getDateFromTimes(times);
        var str = date.format("yyyy-mm-dd HH:MM:ss");
        return str;
    },

    getFormatDateTimeFromTimes1: function (times) {
        var date = this.getDateFromTimes(times);
        var str = date.format("yyyy-mm-dd HH:MM");
        return str;
    },

    /**时间戳转时间,数字代表的时间戳 毫米数*/
    getFormatDateFromTimes: function (times) {
        if (!times)return "";
        if (times < 100000)return "";
        var date = this.getDateFromTimes(times);
        var str = date.format("yyyy-mm-dd");
        return str;
    },

    /**
     * 将时间格式转换为时间戳
     * @param str  时间格式
     * @return
     */
    dateToStamp: function (str) {
        if (str == null || str.length == 0) return null;
        var new_str = str.replace(/:/g, '-');
        new_str = new_str.replace('年', '-');
        new_str = new_str.replace('月', '-');
        new_str = new_str.replace('日', '-');
        new_str = new_str.replace('时', '-');
        new_str = new_str.replace('分', '-');
        new_str = new_str.replace('秒', '-');
        new_str = new_str.replace('+', ' ');
        new_str = new_str.replace('T', ' ');
        new_str = new_str.replace(/ /g, '-');
        var arr = new_str.split("-");
        var datum = null;
        if (arr.length == 3) {
            datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], 0 - 8, 0, 0));
        } else if (arr.length == 5) {
            datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], "00"));
        } else if (arr.length == 6) {
            datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
        }
        // var datum = new Date(datum.getTime());
        // alert("<br><b>还原到原始日期为</b>: "+datum.toLocaleString());
        return datum.getTime();
    }

};
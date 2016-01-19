/**
 * Created by Administrator on 2016/1/7.
 */

var log = _.bind(console.log, console);
log(_.filter(_.map([1, 4, 9, 16, 25], Math.sqrt), x => x % 2 === 1));
var result = _.chain([1, 4, 9, 16, 25])
    .map(Math.sqrt)
    .filter(x => x % 2 === 1)
    .value();
log(result);
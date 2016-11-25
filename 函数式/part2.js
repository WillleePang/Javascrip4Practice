/*
 * @Author: hq
 * @Date:   2016-10-18 10:40:39
 * @Last Modified by:   hq
 * @Last Modified time: 2016-10-18 10:54:24
 */

'use strict';

import _ from 'lodash';

var split = _.curry((char, str) => str.split(char));
var first = arr => arr[0];
var last = arr => arr[arr.length - 1];
var filter = _.curry((f, arr) => arr.filter(f));
var map = _.curry((f, x) => x.map(f));
var eq = _.curry((x, y) => x == y);
var compose = _.flowRight;

var toPairs = compose(map(split('=')), split('&'));
var params = compose(toPairs, last, split('?'));

var getParam = url => key => map(compose(Maybe.of, filter(compose(eq(key), first)), params))(url);

var url = new IO(_ => window.location.href);
var findParam = getParam(url);
findParam("a").__value();
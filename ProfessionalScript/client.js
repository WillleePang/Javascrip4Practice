function isSortable(object) {
	return typeof object.sort == "function";
}

function isHostMethod(object, property) {
	var t = typeof object[property];
	return t == "function" || (!!(t == "object" && object[property])) || t == "unknown";
}
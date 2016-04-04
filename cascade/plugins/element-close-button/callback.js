module.exports = function(api, node) {
	var newAttr;
	if (node.attrs.type === "close") {
		newAttr = "data-closer";
	} else if (node.attrs.type === "destroy") {
		newAttr = "data-destroyer";
	} else {
		newAttr = "data-collapser";
	}

	if (node.attrs.name !== undefined) {
		node.attrs[newAttr] = node.attrs.name;
	} else {
		node.attrs[newAttr] = "Untitled Close Button";
	}
	return node;
}
//# sourceMappingURL=callback.js.map

//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("baidu.hm.v1.Tag", {
	config: {
		/*DATA*/
		name: "hm",
		async: true,
		description: "Baidu Web Analytics",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "//hm.baidu.com/hm.js?${baidu_site_id}",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Site ID",
				description: "The ID of your website",
				token: "baidu_site_id",
				uv: ""
			}
		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		var _hmt = _hmt || [];
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		/*~POST*/
	}
});

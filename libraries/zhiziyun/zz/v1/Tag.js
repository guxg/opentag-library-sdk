//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zhiziyun.zz.v1.Tag", {
	config: {
		/*DATA*/
		name: "zz",
		async: true,
		description: "zhiyiyum.com tracking",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "ZZ Site ID",
				description: "The ID of your website",
				token: "zz_site_id",
				uv: ""
			},
			{
				name: "ZZ ID",
				description: "The ID of zz",
				token: "zz_id",
				uv: ""
			}

		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		var _zzsiteid = this.valueForToken("zz_site_id");
		var _zzid = this.valueForToken("zz_id");
		(function() {
	  		var zz = document.createElement('script');
	  		zz.type = 'text/javascript';
	  		zz.async = true;
	  		zz.src = 'https:' == document.location.protocol ? 'https://ssl.trace.zhiziyun.com/api/trace.js' : 'http://static.zhiziyun.com/trace/api/trace.js';
	  		var s = document.getElementsByTagName('script')[0];
	  		s.parentNode.insertBefore(zz, s);
		})();
		/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
	/*~PRE*/
	},
	post: function() {
	/*POST*/
	/*~POST*/
	}
});

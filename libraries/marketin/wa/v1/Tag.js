//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("marketin.wa.v1.Tag", {
	config: {
		/*DATA*/
		name: "wa",
		async: true,
		description: "Implement the basic Marketin pageview and link tracking.",
		html: "",
		locationDetail: "",
		isPrivate: false,
		url: "//wa.marketin.cn/wa.js",
		usesDocWrite: false,
		upgradeable: true,
		parameters: [
			{
				name: "Site ID",
				description: "The ID of your website",
				token: "ma_site_id",
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
		var _paq = _paq || [];
		/*~PRE*/
	},
	post: function() {
		/*POST*/
		window.piwikTracker = Piwik.getTracker("//wa.marketin.cn/wa.php", this.valueForToken("ma_site_id"));
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
		/*~POST*/
	}
});

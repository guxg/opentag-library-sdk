//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"googleuniversalanalytics.genericpageview.v1.Tag", {
		config: {
			/*DATA*/
			name: "Generic Page View",
			async: true,
			description: "This tag registers a pageview, and is intended for any page other than confirmation pages.",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Web Property ID",
				description: "Google Analytics Web Property ID for the Google Web Property you wish to track",
				token: "web_property_id",
				uv: ""
			}, {
				name: "Site URL",
				description: "Web site URL, without www.",
				token: "url",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/

			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js','ga');
			ga('create', '' + this.valueForToken("web_property_id"),
				'' + this.valueForToken("url"));
			ga('require', 'displayfeatures');
			ga('send', 'pageview');
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

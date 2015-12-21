script: function() {
			/*SCRIPT*/
			window._paq = _paq || [];
  			_paq.push(['trackPageView']);
  			_paq.push(['enableLinkTracking']);
  			_paq.push(['setTrackerUrl', '//wa.marketin.cn/wa.php']);
  			_paq.push(['setSiteId', this.valueForToken("ma_site_id")]);

			(function() {
			    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
			    g.type='text/javascript'; g.async=true; g.defer=true; g.src='//wa.marketin.cn/wa.js'; s.parentNode.insertBefore(g,s);
			})();
			/*~SCRIPT*/
		},
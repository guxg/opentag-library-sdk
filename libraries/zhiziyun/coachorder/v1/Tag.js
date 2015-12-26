//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zhiziyun.coachorder.v1.Tag", {
	config: {
		/*DATA*/
		name: "coachorder",
		async: true,
		description: "Coach Customied Tag for ZZOrder tracking",
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
			}, {
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
		/*~SCRIPT*/
	},
	pre: function() {
	/*PRE*/
		window.universal_variable = window.universal_variable || {};
		window.universal_variable.transaction = {
					"order_id": nCode,
					"total": totalPay,
					"line_items":[],
				};
		try{
			$j(".ck04_right_itembox").each(function(){
				var sku_code = $j(this).find("input[name='style_code']").val();//商品款号
				var quantity = $j(this).find("input[name='product_qty']").val();//购买数量
				var unit_sale_price = $j(this).find("input[name='unit_price']").val();//购买价格
				var item = {
					"product":{
						"sku_code":sku_code,
						"unit_sale_price":unit_sale_price,
						"name":"",
						"quantity":quantity
					}
				};
				window.universal_variable.transaction.line_items.push(item);
			});
		}catch(error){
			console.log(error);
		}
		window._zzot = [];
	/*~PRE*/
	},
	post: function() {
	/*POST*/
		try{
			_zzot['zzsiteId'] = this.valueForToken("zz_site_id");
			_zzot['zzId'] = this.valueForToken("zz_id");

			_zzot['zzOrderId'] = '' + window.universal_variable.transaction.order_id; //订单编号
			_zzot['zzOrderTotal'] = '' + window.universal_variable.transaction.total; //订单总金额
			
			var _products = window.universal_variable.transaction.line_items;

			//console.log(_products);

			var _i, _ii;
			for (_i = 0, _ii = _products.length; _i < _ii; _i += 1) {
				_zzot.push(['' + _products[_i].sku_code, '' + _products[_i].quantity, '' + _products[_i].unit_sale_price ]); //订单详情	
			}

			console.log(_zzot);

		}catch(error){
			console.log(error);
		}
		
		(function() {
		  var zz = document.createElement('script');
		  zz.type = 'text/javascript';
		  zz.async = true;
		  zz.src = 'https:' == document.location.protocol ? 'https://ssl.trace.zhiziyun.com/api/order_v2.js' : 'http://static.zhiziyun.com/trace/api/order_v2.js';
		  var s = document.getElementsByTagName('script')[0];
		  s.parentNode.insertBefore(zz, s);
		})();
	/*~POST*/
	}
});

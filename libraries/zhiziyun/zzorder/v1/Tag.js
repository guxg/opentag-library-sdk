//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("zhiziyun.zzorder.v1.Tag", {
	config: {
		/*DATA*/
		name: "zzorder",
		async: true,
		description: "Needs jQuery to get Order Info",
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
			}, {
				name: "Order Id",
				description: "Internal unique order id number for this transaction.",
				token: "orderId",
				uv: "universal_variable.transaction.order_id"
			}, {
				name: "Order Total",
				description: "Total amount of the transaction.",
				token: "orderTotal",
				uv: "universal_variable.transaction.total"
			}, {
				name: "Item SKUs",
				description: "Items SKU code.",
				token: "itemSkus",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Item Names",
				description: "Product name. Required to see data in the product detail report.",
				token: "itemNames",
				uv: "universal_variable.transaction.line_items[#].product.name"
			}, {
				name: "Item Unit Prices",
				description: "Product price - use the discounted rate that the user is actually buying at.",
				token: "itemUnitPrices",
				uv: "universal_variable.transaction.line_items[#].product.unit_sale_price"
			}, {
				name: "Item Quantities",
				description: "Quantity list of all the items",
				token: "itemQuantities",
				uv: "universal_variable.transaction.line_items[#].product.quantity"
			}
		]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		window._zzot = [];
		try{
			_zzot['zzsiteId'] = this.valueForToken("zz_site_id");
			_zzot['zzId'] = this.valueForToken("zz_id");

			_zzot['zzOrderId'] = '' + this.valueForToken("orderId"); //订单编号
			_zzot['zzOrderTotal'] = '' + this.valueForToken("orderTotal"); //订单总金额
			
			var _____i, _____ii;
			for (_____i = 0, _____ii = this.valueForToken("itemSkus").length; _____i < _____ii; _____i += 1) {
				_zzot.push([this.valueForToken("itemSkus")[_____i], this.valueForToken("itemQuantities")[_____i], this.valueForToken("itemUnitPrices")[_____i]]); //订单详情	
			}
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{702:function(t,e,n){var content=n(722);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("78f1dbcc",content,!0,{sourceMap:!1})},721:function(t,e,n){"use strict";var r=n(702);n.n(r).a},722:function(t,e,n){(t.exports=n(42)(!1)).push([t.i,".article-detail{padding:20px;background:#fff;width:50%;margin:10px auto 0;font-size:14px;min-height:calc(100vh - 154px);border-radius:5px}.article-detail .title{text-align:center;margin-bottom:10px}.article-detail .mark{display:flex;justify-content:space-between;margin-bottom:15px}",""])},724:function(t,e,n){"use strict";n.r(e);n(139);var r=n(24),c={asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.next=3,n.post("/front/article/findArticleById",{_id:r.id});case 3:return c=t.sent.data.res,t.abrupt("return",{list:c});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),middleware:"formateDate",layout:"front",data:function(){return{}},head:function(){return{title:"文章详情"}}},l=(n(721),n(30)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-detail"},[n("h2",{staticClass:"title"},[t._v(t._s(t.list.title))]),t._v(" "),n("div",{staticClass:"mark"},[n("span",{staticClass:"time"},[t._v("创建时间："+t._s(new Date(t.list.create_date).Format("yyyy-M-d h:m")))]),t._v(" "),n("span",{staticClass:"tag"},[t._v("标签："+t._s(t.list.tag[0]&&t.list.tag[0].tag_name))])]),t._v(" "),n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.list.content)}})])},[],!1,null,null,null);e.default=component.exports}}]);
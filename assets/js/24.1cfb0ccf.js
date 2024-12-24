(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{274:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"按键事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键事件"}},[t._v("#")]),t._v(" 按键事件")]),t._v(" "),a("p",[t._v("按键事件需要根据不同页面交互需求，重置交互方法；命名视图中如有独立交互逻辑，可单独赋值，默认交互逻辑与按键 code 对应关系如下表。")]),t._v(" "),a("h2",{attrs:{id:"按键对应表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键对应表"}},[t._v("#")]),t._v(" 按键对应表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("按键名称")]),t._v(" "),a("th",[t._v("事件名称")]),t._v(" "),a("th",[t._v("长按事件名称")]),t._v(" "),a("th",[t._v("keyCode")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("左")]),t._v(" "),a("td",[t._v("keyLeft")]),t._v(" "),a("td",[t._v("keyLongLeft")]),t._v(" "),a("td",[t._v("3, 37")])]),t._v(" "),a("tr",[a("td",[t._v("上")]),t._v(" "),a("td",[t._v("keyUp")]),t._v(" "),a("td",[t._v("keyLongUp")]),t._v(" "),a("td",[t._v("1, 38, 61")])]),t._v(" "),a("tr",[a("td",[t._v("右")]),t._v(" "),a("td",[t._v("keyRight")]),t._v(" "),a("td",[t._v("keyLongRight")]),t._v(" "),a("td",[t._v("4, 39")])]),t._v(" "),a("tr",[a("td",[t._v("下")]),t._v(" "),a("td",[t._v("keyDown")]),t._v(" "),a("td",[t._v("keyLongDown")]),t._v(" "),a("td",[t._v("2, 40, 77")])]),t._v(" "),a("tr",[a("td",[t._v("返回")]),t._v(" "),a("td",[t._v("keyBack")]),t._v(" "),a("td",[t._v("keyLongBack")]),t._v(" "),a("td",[t._v("8, 22, 27, 340, 461, 10009")])]),t._v(" "),a("tr",[a("td",[t._v("确认")]),t._v(" "),a("td",[t._v("keyEnter")]),t._v(" "),a("td",[t._v("keyLongEnter")]),t._v(" "),a("td",[t._v("13")])]),t._v(" "),a("tr",[a("td",[t._v("数字")]),t._v(" "),a("td",[t._v("keyNumber")]),t._v(" "),a("td",[t._v("keyLongNumber")]),t._v(" "),a("td",[t._v("48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105")])]),t._v(" "),a("tr",[a("td",[t._v("快进")]),t._v(" "),a("td",[t._v("keyFoward")]),t._v(" "),a("td",[t._v("keyLongFoward")]),t._v(" "),a("td",[t._v("70, 417")])]),t._v(" "),a("tr",[a("td",[t._v("快退")]),t._v(" "),a("td",[t._v("keyRewind")]),t._v(" "),a("td",[t._v("keyLongRewind")]),t._v(" "),a("td",[t._v("82, 412")])]),t._v(" "),a("tr",[a("td",[t._v("播放")]),t._v(" "),a("td",[t._v("keyPlay")]),t._v(" "),a("td",[t._v("keyLongPlay")]),t._v(" "),a("td",[t._v("80, 415")])]),t._v(" "),a("tr",[a("td",[t._v("暂停")]),t._v(" "),a("td",[t._v("keyPause")]),t._v(" "),a("td",[t._v("keyLongPause")]),t._v(" "),a("td",[t._v("81, 19")])]),t._v(" "),a("tr",[a("td",[t._v("停止")]),t._v(" "),a("td",[t._v("keyStop")]),t._v(" "),a("td",[t._v("keyLongStop")]),t._v(" "),a("td",[t._v("83, 413")])]),t._v(" "),a("tr",[a("td",[t._v("删除")]),t._v(" "),a("td",[t._v("keyDelete")]),t._v(" "),a("td",[t._v("keyLongDelete")]),t._v(" "),a("td",[t._v("46, 67")])])])]),t._v(" "),a("h2",{attrs:{id:"resetevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resetevent"}},[t._v("#")]),t._v(" resetEvent")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type")]),t._v("："),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("简介")]),t._v("：重置所有按键响应逻辑处理方法(仅重置默认层级的交互逻辑)")]),t._v(" "),a("li",[a("strong",[t._v("应用")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ComponentInternalInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("$Focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"addevent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addevent"}},[t._v("#")]),t._v(" addEvent")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type")]),t._v("："),a("code",[t._v("Function")])]),t._v(" "),a("li",[a("strong",[t._v("参数")]),t._v("：\n"),a("ul",[a("li",[a("code",[t._v("{Object} eventObj")]),t._v(" 添加交互事件响应定制逻辑")]),t._v(" "),a("li",[a("code",[t._v("{string} popup（非必传字段）")]),t._v(" 弹层标记，不传视为默认层级")])])]),t._v(" "),a("li",[a("strong",[t._v("简介")]),t._v("：添加按键响应")]),t._v(" "),a("li",[a("strong",[t._v("应用")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" proxy "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCurrentInstance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ComponentInternalInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认层级交互定制逻辑")]),t._v("\nproxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("$Focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("keyEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定弹层交互定制逻辑")]),t._v("\nproxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("$Focus"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("keyEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"popup"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
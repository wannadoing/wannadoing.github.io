"use strict";(self["webpackChunkto_doing_github_io"]=self["webpackChunkto_doing_github_io"]||[]).push([[120],{120:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",on:{scroll:e.add}},[e._m(0),t("div",{staticClass:"header_search"},[t("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.study_searchKey,expression:"study_searchKey",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"输入内容，回车搜索"},domProps:{value:e.study_searchKey},on:{change:function(t){e.study_searchKey=t.target.value}}})]),t("div",{staticClass:"main"},[t("ul",[e._l(e.filterList,(function(a,s){return t("li",{directives:[{name:"show",rawName:"v-show",value:e.flag2,expression:"flag2"}],key:s+"s",staticClass:"searchContent"},[t("h3",[e._v(" "+e._s(a.name)+" ")]),t("hr"),t("div",[t("span",[e._v(e._s(a.detail))]),t("span",[e._v(e._s(a.key))])]),t("div",[t("a",{attrs:{target:"_blank",href:a.url}},[e._v("点击进入")])])])})),e._l(e.$store.state.appContent.appList.slice(e.start,e.end),(function(a,s){return t("li",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],key:s},[t("h3",[e._v(" "+e._s(a.name)+" ")]),t("hr"),t("div",[t("span",[e._v(e._s(a.detail))]),t("br"),t("span",[e._v("提取码:"+e._s(a.key))])]),t("div",[t("a",{attrs:{target:"_blank",href:a.url}},[e._v("点击进入")])])])}))],2),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hiddenBtn_more,expression:"hiddenBtn_more"}],staticClass:"moreContent"},[t("a",[e._v("加载中...")])])])])},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"header_header"},[t("h2",[e._v("软件专区")]),t("h5",[e._v("提供各种优质APP")])])])}],i={name:"appContent",data(){return{flag:!0,flag2:!1,hiddenBtn_more:!0,start:0,end:10,study_searchKey:"",filterList:[]}},mounted(){this.add()},methods:{add(){let e=this,t=null;const a=document.querySelector(".container"),s=document.querySelector(".moreContent"),n=s.querySelector("a"),i=a.clientHeight;function r(){t=null,null!==t?clearTimeout(t):(t=setTimeout((()=>{let a=s.getBoundingClientRect().top;i>=a&&(e.end+=10,t=!t)}),700),e.end>=e.$store.state.appContent.appList.length&&(n.innerText="没有更多内容了"))}r()}},watch:{study_searchKey:{handler(e){""!=this.study_searchKey?(this.flag=!1,this.flag2=!0,this.hiddenBtn_more=!1,this.filterList=this.$store.state.appContent.appList.filter((t=>{let a=t.name.toUpperCase(),s=t.name.toLowerCase();if(-1!==t.detail.indexOf(e)||-1!==a.indexOf(e)||-1!==s.indexOf(e))return t}))):(this.flag=!0,this.flag2=!1,this.hiddenBtn_more=!0)}}}},r=i,l=a(1001),o=(0,l.Z)(r,s,n,!1,null,null,null),d=o.exports}}]);
//# sourceMappingURL=120.4d2c3a8f.js.map
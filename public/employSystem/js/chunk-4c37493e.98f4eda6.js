(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c37493e"],{"02ee":function(e,t,r){"use strict";var n=r("c032"),o=r.n(n);o.a},"5da7":function(e,t,r){"use strict";r.d(t,"g",(function(){return o})),r.d(t,"z",(function(){return i})),r.d(t,"n",(function(){return l})),r.d(t,"E",(function(){return u})),r.d(t,"f",(function(){return c})),r.d(t,"y",(function(){return s})),r.d(t,"D",(function(){return a})),r.d(t,"s",(function(){return m})),r.d(t,"a",(function(){return f})),r.d(t,"x",(function(){return p})),r.d(t,"B",(function(){return d})),r.d(t,"r",(function(){return b})),r.d(t,"q",(function(){return y})),r.d(t,"c",(function(){return g})),r.d(t,"A",(function(){return h})),r.d(t,"h",(function(){return v})),r.d(t,"o",(function(){return F})),r.d(t,"t",(function(){return w})),r.d(t,"b",(function(){return j})),r.d(t,"j",(function(){return I})),r.d(t,"C",(function(){return M})),r.d(t,"v",(function(){return O})),r.d(t,"u",(function(){return N})),r.d(t,"k",(function(){return _})),r.d(t,"e",(function(){return k})),r.d(t,"w",(function(){return x})),r.d(t,"m",(function(){return C})),r.d(t,"l",(function(){return $})),r.d(t,"d",(function(){return R})),r.d(t,"i",(function(){return P})),r.d(t,"p",(function(){return B}));var n=r("d541");function o(e,t){return Object(n["c"])({url:"/employMent/userInfo/",type:t},e)}function i(e,t){return Object(n["c"])({url:"/employMent/userInfo/login",type:t},e)}function l(e,t){return Object(n["c"])({url:"/employMent/userInfo/"+e.userId,type:t},{})}function u(e,t){return Object(n["c"])({url:"/employMent/userInfo/updateUserImage",type:t},e)}function c(e,t){return Object(n["c"])({url:"/employMent/stuInfo/",type:t},e)}function s(e,t){return Object(n["c"])({url:"/employMent/stuInfo/getByStuNo/"+e.stuNo,type:t},{})}function a(e,t){return Object(n["c"])({url:"/employMent/stuInfo/updateByStuNo/"+e.stuNo,type:t},e)}function m(e,t){return Object(n["c"])({url:"/employMent/employInfo/getByStuNo/"+e.stuNo,type:t},{})}function f(e,t){return Object(n["c"])({url:"/employMent/employInfo/",type:t},e)}function p(e,t){return Object(n["c"])({url:"/employMent/employStatistics/"+e.classNo,type:t},{})}function d(e,t){return console.log(e),Object(n["c"])({url:"/employMent/employInfo/updateById/"+e.id,type:t},e)}function b(e,t){return Object(n["c"])({url:"/employMent/counselorInfo/getByCounselorNo/"+e.counselorNo,type:t},{})}function y(e,t){return Object(n["c"])({url:"/employMent/classInfo/getByCounselorNo/"+e.counselorNo,type:t},{})}function g(e,t){return Object(n["c"])({url:"/employMent/classInfo/",type:t},e)}function h(e,t){return Object(n["c"])({url:"/employMent/classInfo/updateById/"+e.id,type:t},e)}function v(e,t){return Object(n["c"])({url:"/employMent/classInfo/"+e.id+"/"+e.counselorNo,type:t},{})}function F(e,t){return Object(n["c"])({url:"/employMent/careerGuidance/getByCounselorNo/"+e.counselorNo,type:t},{})}function w(e,t){return Object(n["c"])({url:"/employMent/careerGuidance/"+e.id,type:t},{})}function j(e,t){return Object(n["c"])({url:"/employMent/careerGuidance/",type:t},e)}function I(e,t){return Object(n["c"])({url:"/employMent/careerGuidance/"+e.id,type:t},{})}function M(e,t){return Object(n["c"])({url:"/employMent/careerGuidance/updateById/"+e.id,type:t},e)}function O(e,t){return Object(n["c"])({url:"/employMent/recruitmentInfo/",type:t},{})}function N(e,t){return Object(n["c"])({url:"/employMent/recruitmentInfo/getBycounselorNo/"+e.counselorNo,type:t},{})}function _(e,t){return Object(n["c"])({url:"/employMent/recruitmentInfo/"+e.id,type:t},{})}function k(e,t){return Object(n["c"])({url:"/employMent/recruitmentInfo/",type:t},e)}function x(e,t){return Object(n["c"])({url:"/employMent/employRepresent/",type:t},{})}function C(e,t){return Object(n["c"])({url:"/employMent/employRepresent/getByGraduationYear/"+e.graduationYear,type:t},{})}function $(e,t){return Object(n["c"])({url:"/employMent/employRepresent/getByCounselorNo/"+e.counselorNo,type:t},{})}function R(e,t){return Object(n["c"])({url:"/employMent/employRepresent/",type:t},e)}function P(e,t){return Object(n["c"])({url:"/employMent/employRepresent/"+e.id,type:t},{})}function B(e,t){return Object(n["c"])({url:"/employMent/professionAttach/getByKey/",type:t},e)}},b7f7:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"recruitmentBox"},[r("div",{staticClass:"recruitment"},[r("div",{staticClass:"title"},[e._v("已发布")]),r("div",{staticClass:"addRecruitment"},[r("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加")])],1),r("div",{staticClass:"recruitmentList"},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.recruitmentList,height:"500"}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"招聘公司/企业"}},[r("span",[e._v(e._s(t.row.corporateName))])]),r("el-form-item",{attrs:{label:"招聘岗位"}},[r("span",[e._v(e._s(t.row.recruitmentPost))])]),r("el-form-item",{attrs:{label:"工作地点"}},[r("span",[e._v(e._s(t.row.workPlace))])]),r("el-form-item",{attrs:{label:"招聘人数"}},[r("span",[e._v(e._s(t.row.recruitingNumbers))])]),r("el-form-item",{attrs:{label:"招聘时间"}},[r("span",[e._v(e._s(t.row.recruitingTime.split(",")[0])+" ~ "+e._s(t.row.recruitingTime.split(",")[1]))])]),r("el-form-item",{attrs:{label:"招聘地点"}},[r("span",[e._v(e._s(t.row.recruitingAddress))])]),r("el-form-item",{attrs:{label:"薪资待遇"}},[r("span",[e._v(e._s(t.row.salary))])]),r("el-form-item",{attrs:{label:"投递地址"}},[r("a",{staticStyle:{color:"#481aee"},attrs:{href:t.row.deliveryUrl,target:"view_window"}},[e._v("我要投递")])]),r("el-form-item",{attrs:{label:"职位要求"}},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.row.jobRequirements}},[r("span",{staticStyle:{color:"red"},attrs:{slot:"reference"},slot:"reference"},[e._v("预览")])])],1),r("el-form-item",{attrs:{label:"公司简介 "}},[r("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:t.row.companyProfile}},[r("span",{staticStyle:{color:"red"},attrs:{slot:"reference"},slot:"reference"},[e._v("预览")])])],1)],1)]}}])}),r("el-table-column",{attrs:{label:"招聘公司/企业",prop:"corporateName"}}),r("el-table-column",{attrs:{label:"招聘岗位",prop:"recruitmentPost"}}),r("el-table-column",{attrs:{label:"招聘人数",prop:"recruitingNumbers"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("recruitmentDialog",{attrs:{userInfo:e.userInfo,dialogFormVisible:e.dialogFormVisible},on:{dialogClose:e.dialogClose}})],1)])])},o=[],i=r("5da7"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"calssDialogBox"},[e.dialogFormVisible?r("el-dialog",{attrs:{title:"发布招聘信息",visible:e.dialogFormVisible},on:{close:e.dialogClose}},[r("el-form",{ref:"recruitmentForm",attrs:{model:e.recruitmentForm,rules:e.rules}},[r("el-form-item",{attrs:{label:"招聘公司/企业","label-width":e.formLabelWidth,prop:"corporateName"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.corporateName,callback:function(t){e.$set(e.recruitmentForm,"corporateName",t)},expression:"recruitmentForm.corporateName"}})],1),r("el-form-item",{attrs:{label:"招聘岗位","label-width":e.formLabelWidth,prop:"recruitmentPost"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.recruitmentPost,callback:function(t){e.$set(e.recruitmentForm,"recruitmentPost",t)},expression:"recruitmentForm.recruitmentPost"}})],1),r("el-form-item",{attrs:{label:"工作地点","label-width":e.formLabelWidth,prop:"workPlace"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.workPlace,callback:function(t){e.$set(e.recruitmentForm,"workPlace",t)},expression:"recruitmentForm.workPlace"}})],1),r("el-form-item",{attrs:{label:"招聘人数","label-width":e.formLabelWidth,prop:"recruitingNumbers"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.recruitingNumbers,callback:function(t){e.$set(e.recruitmentForm,"recruitingNumbers",t)},expression:"recruitmentForm.recruitingNumbers"}})],1),r("el-form-item",{attrs:{label:"招聘时间","label-width":e.formLabelWidth,prop:"recruitingTime"}},[[r("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.recruitmentForm.recruitingTime,callback:function(t){e.$set(e.recruitmentForm,"recruitingTime",t)},expression:"recruitmentForm.recruitingTime"}})]],2),r("el-form-item",{attrs:{label:"招聘地点","label-width":e.formLabelWidth,prop:"recruitingAddress"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.recruitingAddress,callback:function(t){e.$set(e.recruitmentForm,"recruitingAddress",t)},expression:"recruitmentForm.recruitingAddress"}})],1),r("el-form-item",{attrs:{label:"职位要求","label-width":e.formLabelWidth,prop:"jobRequirements"}},[r("el-input",{attrs:{autocomplete:"off",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.recruitmentForm.jobRequirements,callback:function(t){e.$set(e.recruitmentForm,"jobRequirements",t)},expression:"recruitmentForm.jobRequirements"}})],1),r("el-form-item",{attrs:{label:"公司简介","label-width":e.formLabelWidth,prop:"companyProfile"}},[r("el-input",{attrs:{autocomplete:"off",type:"textarea",autosize:{minRows:2,maxRows:4}},model:{value:e.recruitmentForm.companyProfile,callback:function(t){e.$set(e.recruitmentForm,"companyProfile",t)},expression:"recruitmentForm.companyProfile"}})],1),r("el-form-item",{attrs:{label:"薪酬待遇","label-width":e.formLabelWidth,prop:"salary"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.salary,callback:function(t){e.$set(e.recruitmentForm,"salary",t)},expression:"recruitmentForm.salary"}})],1),r("el-form-item",{attrs:{label:"投递地址","label-width":e.formLabelWidth,prop:"deliveryUrl"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.recruitmentForm.deliveryUrl,callback:function(t){e.$set(e.recruitmentForm,"deliveryUrl",t)},expression:"recruitmentForm.deliveryUrl"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.cancelEdit}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("recruitmentForm")}}},[e._v("确 定")])],1)],1):e._e()],1)},u=[],c=r("fa7d"),s={props:["dialogFormVisible","userInfo"],data:function(){return{formLabelWidth:"120px",recruitmentForm:{},rules:{corporateName:[{required:!0,message:"请输入招聘企业",trigger:"blur"}],recruitmentPost:[{required:!0,message:"请输入招聘岗位",trigger:"blur"}],workPlace:[{required:!0,message:"请输入工作地点",trigger:"blur"}],recruitingNumbers:[{required:!0,message:"请输入招聘人数",trigger:"blur"},{validator:c["a"],trigger:"blur"}],recruitingTime:[{required:!0,message:"请输入招聘时间",trigger:"blur"}],recruitingAddress:[{required:!0,message:"请输入招聘地点",trigger:"blur"}],jobRequirements:[{required:!0,message:"请输入招聘要求",trigger:"blur"}],companyProfile:[{required:!0,message:"请输入公司简介",trigger:"blur"}],salary:[{required:!0,message:"请输入薪酬待遇",trigger:"blur"}],deliveryUrl:[{required:!0,message:"请输入投递地址",trigger:"blur"}]}}},methods:{dialogClose:function(){this.$emit("dialogClose",!1)},cancelEdit:function(){this.$emit("dialogClose",!1)},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.recruitmentForm.counselorNo=t.userInfo.userId,console.log(t.recruitmentForm),Object(i["e"])(t.recruitmentForm,"post").then((function(e){200==e.status&&(t.$message({message:e.message,type:"success"}),t.$emit("dialogClose",!1))}))}))}}},a=s,m=r("2877"),f=Object(m["a"])(a,l,u,!1,null,"0e3ac632",null),p=f.exports,d={components:{recruitmentDialog:p},data:function(){return{userInfo:{},recruitmentList:[],dialogFormVisible:!1}},methods:{getRecruitMentInfo:function(){var e=this;Object(i["u"])({counselorNo:this.userInfo.userId},"get").then((function(t){200==t.status&&(e.recruitmentList=t.data)})).catch((function(e){console.log(e)}))},handleDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["k"])(t,"delete").then((function(e){200==e.status&&(r.getRecruitMentInfo(),r.$message({message:e.message,type:"success"}))}))})).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},dialogClose:function(e){this.dialogFormVisible=e,this.getRecruitMentInfo()}},created:function(){this.userInfo=JSON.parse(sessionStorage.getItem("userInfo")),this.getRecruitMentInfo()}},b=d,y=(r("02ee"),Object(m["a"])(b,n,o,!1,null,"d83a2cdc",null));t["default"]=y.exports},c032:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4c37493e.98f4eda6.js.map
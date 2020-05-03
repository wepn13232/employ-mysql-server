(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f506f88"],{"3cf6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"representBox"},[n("div",{staticClass:"represent"},[n("div",{staticClass:"represent-header"},[n("h1",[e._v("优秀就业列表")]),n("el-button",{attrs:{type:"success",plain:""},on:{click:function(t){return e.addNewPresent()}}},[e._v("添加")])],1),n("div",{staticClass:"represent-body"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.representData,height:"500"}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"basicinfo"},[n("span",[e._v("学号")]),n("span",[e._v(e._s(t.row.stuNo))]),n("span",[e._v("姓名")]),n("span",[e._v(e._s(t.row.stuName))]),n("span",[e._v("毕业年份")]),n("span",[e._v(e._s(t.row.graduationYear))]),n("span",[e._v("就业岗位")]),n("span",[e._v(e._s(t.row.jobTitle))]),n("span",[e._v("座右铭")]),n("span",[e._v(e._s(t.row.motto))])]),n("div",{staticClass:"picurl"},[n("img",{attrs:{src:t.row.picurl}})])]}}])}),n("el-table-column",{attrs:{label:"毕业年份",prop:"graduationYear"}}),n("el-table-column",{attrs:{label:"姓名",prop:"stuName"}}),n("el-table-column",{attrs:{label:"就业岗位",prop:"jobTitle"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")]),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)]),n("employRepresentDialog",{attrs:{userInfo:e.userInfo,representForm:e.editRepresent,dialogFormVisible:e.dialogFormVisible},on:{dialogClose:e.dialogClose}})],1)},o=[],u=n("5da7"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"calssDialogBox"},[e.dialogFormVisible?n("el-dialog",{attrs:{title:this.$store.getters.getRepresentFlag?"修改就业代表信息":"添加就业代表",visible:e.dialogFormVisible},on:{close:e.dialogClose}},[n("el-form",{ref:"representForm",attrs:{model:e.representForm,rules:e.rules}},[n("el-form-item",{attrs:{label:"学号","label-width":e.formLabelWidth,prop:"stuNo"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.representForm.stuNo,callback:function(t){e.$set(e.representForm,"stuNo",t)},expression:"representForm.stuNo"}})],1),n("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"stuName"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.representForm.stuName,callback:function(t){e.$set(e.representForm,"stuName",t)},expression:"representForm.stuName"}})],1),n("el-form-item",{attrs:{label:"毕业年份","label-width":e.formLabelWidth,prop:"graduationYear"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.representForm.graduationYear,callback:function(t){e.$set(e.representForm,"graduationYear",t)},expression:"representForm.graduationYear"}})],1),n("el-form-item",{attrs:{label:"就业岗位","label-width":e.formLabelWidth,prop:"jobTitle"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.representForm.jobTitle,callback:function(t){e.$set(e.representForm,"jobTitle",t)},expression:"representForm.jobTitle"}})],1),n("el-form-item",{attrs:{label:"座右铭","label-width":e.formLabelWidth,prop:"motto"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.representForm.motto,callback:function(t){e.$set(e.representForm,"motto",t)},expression:"representForm.motto"}})],1),n("el-form-item",{attrs:{label:"图片","label-width":e.formLabelWidth}},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"#",accept:"image/png, image/gif, image/jpg, image/jpeg","file-list":e.fileList,"auto-upload":!1,"before-upload":e.handleBeforeUpload,"on-change":e.fileChange}},[n("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取图片")])],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.cancelEdit}},[e._v("取消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("representForm")}}},[e._v("确定")])],1)],1):e._e()],1)},i=[],l=(n("fa7d"),{props:["dialogFormVisible","userInfo","representForm"],data:function(){return{formLabelWidth:"120px",fileList:[],rules:{stuNo:[{required:!0,message:"请输入学号",trigger:"blur"}],stuName:[{required:!0,message:"请输入姓名",trigger:"blur"}],graduationYear:[{required:!0,message:"请输入毕业年份",trigger:"blur"}],jobTitle:[{required:!0,message:"请输入就业岗位",trigger:"blur"}],motto:[{required:!0,message:"请输入座右铭",trigger:"blur"}]}}},methods:{dialogClose:function(){this.$emit("dialogClose",!1)},cancelEdit:function(){this.$emit("dialogClose",!1)},handleBeforeUpload:function(e){console.log("before"),"image/png"!==e.type&&"image/gif"!==e.type&&"image/jpg"!==e.type&&"image/jpeg"!==e.type&&this.$notify.warning({title:"警告",message:"请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片"});var t=e.size/1024/1024/2;t>2&&this.$notify.warning({title:"警告",message:"图片大小必须小于2M"})},fileChange:function(e,t){this.representForm.avatar=e.raw},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.representForm.counselorNo=t.userInfo.userId;var n=new FormData;n.append("avatar",t.representForm.avatar),n.append("counselorNo",t.representForm.counselorNo),n.append("stuName",t.representForm.stuName),n.append("graduationYear",t.representForm.graduationYear),n.append("stuNo",t.representForm.stuNo),n.append("jobTitle",t.representForm.jobTitle),n.append("motto",t.representForm.motto),t.$store.getters.getRepresentFlag?(n.append("id",t.representForm.id),Object(u["L"])(n,"put").then((function(e){200==e.status&&(t.$message({message:e.message,type:"success"}),t.$emit("dialogClose",!1))}))):Object(u["e"])(n,"post").then((function(e){200==e.status&&(t.$message({message:e.message,type:"success"}),t.$emit("dialogClose",!1))}))}))}},created:function(){}}),a=l,c=n("2877"),p=Object(c["a"])(a,s,i,!1,null,"18ef48a5",null),f=p.exports,m={components:{employRepresentDialog:f},data:function(){return{userInfo:{},representData:[],dialogFormVisible:!1,editRepresent:{}}},methods:{getByCounselorNo:function(e){var t=this;Object(u["q"])({counselorNo:e||""},"get").then((function(e){200==e.status&&(t.representData=e.data)})).catch((function(e){console.log(e)}))},dialogClose:function(e){this.$store.commit("changeReprensentStatus",!1),this.dialogFormVisible=e,this.getByCounselorNo(this.userInfo.userId)},handleEdit:function(e,t){this.editRepresent=t,this.dialogFormVisible=!0,this.$store.commit("changeReprensentStatus",!0)},handleDelete:function(e,t){var n=this;this.$confirm("此操作将永久删除该条数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["l"])(t,"delete").then((function(e){200==e.status&&(n.getByCounselorNo(n.userInfo.userId),n.$message({message:e.message,type:"success"}))}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},addNewPresent:function(){this.dialogFormVisible=!0,this.editRepresent={},this.$store.commit("changeReprensentStatus",!1)}},created:function(){this.userInfo=JSON.parse(sessionStorage.getItem("userInfo")),this.getByCounselorNo(this.userInfo.userId)}},d=m,y=(n("b340"),Object(c["a"])(d,r,o,!1,null,"04ed61dc",null));t["default"]=y.exports},"5da7":function(e,t,n){"use strict";n.d(t,"i",(function(){return o})),n.d(t,"H",(function(){return u})),n.d(t,"s",(function(){return s})),n.d(t,"O",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"G",(function(){return a})),n.d(t,"N",(function(){return c})),n.d(t,"A",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"F",(function(){return m})),n.d(t,"K",(function(){return d})),n.d(t,"z",(function(){return y})),n.d(t,"y",(function(){return g})),n.d(t,"d",(function(){return b})),n.d(t,"J",(function(){return h})),n.d(t,"k",(function(){return j})),n.d(t,"t",(function(){return I})),n.d(t,"B",(function(){return O})),n.d(t,"b",(function(){return N})),n.d(t,"m",(function(){return v})),n.d(t,"M",(function(){return F})),n.d(t,"D",(function(){return M})),n.d(t,"C",(function(){return w})),n.d(t,"n",(function(){return C})),n.d(t,"g",(function(){return _})),n.d(t,"E",(function(){return $})),n.d(t,"r",(function(){return B})),n.d(t,"q",(function(){return R})),n.d(t,"e",(function(){return k})),n.d(t,"L",(function(){return x})),n.d(t,"l",(function(){return S})),n.d(t,"u",(function(){return L})),n.d(t,"c",(function(){return T})),n.d(t,"x",(function(){return Y})),n.d(t,"w",(function(){return D})),n.d(t,"P",(function(){return V})),n.d(t,"f",(function(){return q})),n.d(t,"p",(function(){return E})),n.d(t,"I",(function(){return G})),n.d(t,"j",(function(){return W})),n.d(t,"v",(function(){return z})),n.d(t,"o",(function(){return A}));var r=n("d541");function o(e,t){return Object(r["c"])({url:"/employMent/userInfo/",type:t},e)}function u(e,t){return Object(r["c"])({url:"/employMent/userInfo/login",type:t},e)}function s(e,t){return Object(r["c"])({url:"/employMent/userInfo/"+e.userId,type:t},{})}function i(e,t){return Object(r["c"])({url:"/employMent/userInfo/updateUserImage",type:t},e)}function l(e,t){return Object(r["c"])({url:"/employMent/stuInfo/",type:t},e)}function a(e,t){return Object(r["c"])({url:"/employMent/stuInfo/getByStuNo/"+e.stuNo,type:t},{})}function c(e,t){return Object(r["c"])({url:"/employMent/stuInfo/updateByStuNo/"+e.stuNo,type:t},e)}function p(e,t){return Object(r["c"])({url:"/employMent/employInfo/getByStuNo/"+e.stuNo,type:t},{})}function f(e,t){return Object(r["c"])({url:"/employMent/employInfo/",type:t},e)}function m(e,t){return Object(r["c"])({url:"/employMent/employStatistics/"+e.classNo,type:t},{})}function d(e,t){return console.log(e),Object(r["c"])({url:"/employMent/employInfo/updateById/"+e.id,type:t},e)}function y(e,t){return Object(r["c"])({url:"/employMent/counselorInfo/getByCounselorNo/"+e.counselorNo,type:t},{})}function g(e,t){return Object(r["c"])({url:"/employMent/classInfo/getByCounselorNo/"+e.counselorNo,type:t},{})}function b(e,t){return Object(r["c"])({url:"/employMent/classInfo/",type:t},e)}function h(e,t){return Object(r["c"])({url:"/employMent/classInfo/updateById/"+e.id,type:t},e)}function j(e,t){return Object(r["c"])({url:"/employMent/classInfo/"+e.id+"/"+e.counselorNo,type:t},{})}function I(e,t){return Object(r["c"])({url:"/employMent/careerGuidance/getByCounselorNo/"+e.counselorNo,type:t},{})}function O(e,t){return Object(r["c"])({url:"/employMent/careerGuidance/"+e.id,type:t},{})}function N(e,t){return Object(r["c"])({url:"/employMent/careerGuidance/",type:t},e)}function v(e,t){return Object(r["c"])({url:"/employMent/careerGuidance/"+e.id,type:t},{})}function F(e,t){return Object(r["c"])({url:"/employMent/careerGuidance/updateById/"+e.id,type:t},e)}function M(e,t){return Object(r["c"])({url:"/employMent/recruitmentInfo/",type:t},{})}function w(e,t){return Object(r["c"])({url:"/employMent/recruitmentInfo/getBycounselorNo/"+e.counselorNo,type:t},{})}function C(e,t){return Object(r["c"])({url:"/employMent/recruitmentInfo/"+e.id,type:t},{})}function _(e,t){return Object(r["c"])({url:"/employMent/recruitmentInfo/",type:t},e)}function $(e,t){return Object(r["c"])({url:"/employMent/employRepresent/",type:t},{})}function B(e,t){return Object(r["c"])({url:"/employMent/employRepresent/getByGraduationYear/"+e.graduationYear,type:t},{})}function R(e,t){return Object(r["c"])({url:"/employMent/employRepresent/getByCounselorNo/"+e.counselorNo,type:t},{})}function k(e,t){return Object(r["c"])({url:"/employMent/employRepresent/",type:t},e)}function x(e,t){return Object(r["c"])({url:"/employMent/employRepresent/updateById/"+e.get("id"),type:t},e)}function S(e,t){return Object(r["c"])({url:"/employMent/employRepresent/"+e.id,type:t},{})}function L(e,t){return Object(r["c"])({url:"/employMent/professionAttach/getByKey/",type:t},e)}function T(e,t){return Object(r["c"])({url:"/employMent/professionAttach/",type:t},e)}function Y(e,t){return Object(r["c"])({url:"/employMent/adminInfo/login",type:t},e)}function D(e,t){return Object(r["c"])({url:"/employMent/userInfo/",type:t},e)}function V(e,t){return Object(r["c"])({url:"/employMent/userInfo/"+e.get("id"),type:t},e)}function q(e,t){return Object(r["c"])({url:"/employMent/userInfo/",type:t},e)}function E(e,t){return Object(r["c"])({url:"/employMent/userInfo/"+e.id,type:t},{})}function G(e,t){return Object(r["c"])({url:"/employMent/professionAttach/"+e.attachId,type:t},e)}function W(e,t){return Object(r["c"])({url:"/employMent/professionAttach/"+e.attachId,type:t},{})}function z(e,t){return Object(r["c"])({url:"/employMent/stuInfo/",type:t},e)}function A(e,t){return Object(r["c"])({url:"/employMent/stuInfo/"+e.id,type:t},{})}},9199:function(e,t,n){},b340:function(e,t,n){"use strict";var r=n("9199"),o=n.n(r);o.a}}]);
//# sourceMappingURL=chunk-7f506f88.2acdc5cb.js.map
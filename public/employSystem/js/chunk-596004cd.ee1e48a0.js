(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596004cd"],{"14e18":function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("el-form",{ref:"reginsteForm",staticClass:"demo-ruleForm reginste-container",attrs:{model:e.reginsteForm,rules:e.fieldRules,"label-position":"left","label-width":"0px"}},[s("h3",{staticClass:"title"},[e._v("就业管理信息系统账号注册")]),s("el-form-item",{attrs:{prop:"userId"}},[s("span",[e._v("账号")]),s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"学号/教工号"},model:{value:e.reginsteForm.userId,callback:function(r){e.$set(e.reginsteForm,"userId",r)},expression:"reginsteForm.userId"}})],1),s("el-form-item",{attrs:{prop:"password"}},[s("span",[e._v("密码")]),s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码","show-password":""},model:{value:e.reginsteForm.password,callback:function(r){e.$set(e.reginsteForm,"password",r)},expression:"reginsteForm.password"}})],1),s("el-form-item",{attrs:{prop:"confirmPassword"}},[s("span",[e._v("确认密码")]),s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"再次输入密码","show-password":""},model:{value:e.reginsteForm.confirmPassword,callback:function(r){e.$set(e.reginsteForm,"confirmPassword",r)},expression:"reginsteForm.confirmPassword"}})],1),s("el-form-item",{attrs:{prop:"userName"}},[s("span",[e._v("姓名")]),s("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"请输入您的姓名"},model:{value:e.reginsteForm.userName,callback:function(r){e.$set(e.reginsteForm,"userName",r)},expression:"reginsteForm.userName"}})],1),s("el-form-item",{attrs:{prop:"userType"}},[s("span",[e._v("身份类型")]),s("el-switch",{attrs:{"active-text":"辅导员","inactive-text":"学生"},model:{value:e.reginsteForm.userType,callback:function(r){e.$set(e.reginsteForm,"userType",r)},expression:"reginsteForm.userType"}})],1),s("el-form-item",{attrs:{prop:"session"}},[s("span",[e._v("所属年级")]),s("el-date-picker",{attrs:{type:"year",placeholder:"选择所属年级","value-format":"yyyy"},model:{value:e.reginsteForm.session,callback:function(r){e.$set(e.reginsteForm,"session",r)},expression:"reginsteForm.session"}})],1),s("el-form-item",{staticStyle:{width:"100%"}},[s("el-button",{staticStyle:{width:"48%"},attrs:{type:"primary",loading:e.reginsteing},nativeOn:{click:function(r){return r.preventDefault(),e.reginsteSubmit("reginsteForm")}}},[e._v("立即注册")])],1),s("el-form-item",[s("p",{staticClass:"registed"},[e._v(" 已有账号，前往 "),s("router-link",{attrs:{to:"/login"}},[e._v("登录")])],1)])],1)},o=[],a=(s("a78e"),s("5da7")),i=(s("fa7d"),s("d541")),n=(s("1c46"),{name:"reginste",data:function(){var e=this,r=function(r,s,t){""===s?t(new Error("请再次输入密码")):s!==e.reginsteForm.password?t(new Error("两次输入密码不一致!")):t()};return{reginsteing:!1,reginsteForm:{userId:"",password:"",confirmPassword:"",userName:"",session:"",userType:1},fieldRules:{userId:[{required:!0,message:"请输入学号/教工号",trigger:"blur"}],userType:[{required:!0,message:"请选择身份类型",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],confirmPassword:[{validator:r,trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],session:[{required:!0,message:"请选择所属年级",trigger:"blur"}]},checked:!0}},methods:{reginsteSubmit:function(e){var r=this;this.$refs[e].validate((function(e){if(e){var s="ILOVEKUANGMINYI",t=Object(i["a"])(r.reginsteForm.password,s);Object(a["j"])({userId:r.reginsteForm.userId,password:t,userName:r.reginsteForm.userName,userType:r.reginsteForm.userType?2:1,session:r.reginsteForm.session},"post").then((function(e){200==e.status?(r.$router.push("/login"),r.$message({message:e.message,type:"success"})):r.$message({message:e.message,type:"error"})})).catch((function(e){alert(e)}))}}))}},created:function(){}}),l=n,u=(s("3865"),s("2877")),m=Object(u["a"])(l,t,o,!1,null,"ff84086a",null);r["default"]=m.exports},3865:function(e,r,s){"use strict";var t=s("a7e4"),o=s.n(t);o.a},a7e4:function(e,r,s){}}]);
//# sourceMappingURL=chunk-596004cd.ee1e48a0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},23:function(e,t,a){e.exports=a(55)},29:function(e,t,a){},31:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(20),r=a.n(l),o=a(58),c=a(59),s=(a(29),a(2)),u=a(3),d=a(5),h=a(4),p=a(6),m=(a(31),a(11)),f=a.n(m),b=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){null==f.a.get("token")&&(document.location.href="https://oauth.yandex.ru/authorize?".concat("response_type=token","&","client_id=829e0a5d8d074e74ab1584176c6c3a13","&").concat("redirect_uri=http://clouds.tools:3000/auth"))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("a",{href:"/list/"},"\u043c\u043e\u0438 \u0444\u0430\u0439\u043b\u044b"))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=/access_token=([^&]+)/.exec(document.location.hash)[1];document.cookie="token="+e,document.location.href="/list/"}},{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component),v=a(7),E=a(21),y=a.n(E);function O(e,t,a,n,i,l){var r=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],o={Authorization:"OAuth "+f.a.get("token")};r||(o={}),y()({method:e,url:n,data:t,params:a,headers:o}).then(function(e){i(e.data)},function(e){401===e.response&&(document.location.href="/auth"),l(e)})}var j=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,this.props.on?i.a.createElement("div",null,i.a.createElement("img",{alt:"back",onClick:this.goBack,style:{cursor:"pointer",marginLeft:5,zIndex:1003,position:"fixed",opacity:.8},width:"100%",height:"100%",src:"/pic/preloader.gif"})):null)}}]),t}(n.Component),k=(a(10),function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=Number(this.props.total_space/1073741824).toFixed(2),t=Number(this.props.used_space/1073741824).toFixed(2);return i.a.createElement("div",null,i.a.createElement("h3",null,"\u0412\u0441\u0435\u0433\u043e \u043c\u0435\u0441\u0442\u0430:",i.a.createElement("span",{className:"badge badge-secondary"},e," \u0413\u0411.")),i.a.createElement("h3",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043e:",i.a.createElement("span",{className:"badge badge-secondary"},t," \u0413\u0411.")))}}]),t}(n.Component)),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).uploadFile=a.uploadFile.bind(Object(v.a)(a)),a.state={file:null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"uploadFile",value:function(){var e=this,t=new FormData(this.state.file);O("GET",null,{path:("/"+this.props.path||"/")+this.state.file.name},"https://cloud-api.yandex.net/v1/disk/resources/upload",function(a){O("PUT",t,null,a.href,function(t){e.getList()},function(e){console.log("err: ",e)},!1)},function(e){console.log("err: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-sm card"},i.a.createElement("label",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u0430\u0439\u043b:  "),i.a.createElement("input",{type:"file",onChange:function(t){return e.setState({file:t.target.files[0]})}}),i.a.createElement("button",{className:"btn btn-outline-success",onClick:this.uploadFile},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"))}}]),t}(n.Component),F=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).newFolder=a.newFolder.bind(Object(v.a)(a)),a.state={foldertitle:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"newFolder",value:function(){var e=this;O("PUT",null,{path:("/"+this.props.path||"/")+this.state.foldertitle},"https://cloud-api.yandex.net/v1/disk/resources",function(t){e.setState({foldertitle:""},function(){e.props.getList()})},function(e){console.log("err: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"col-sm card"},i.a.createElement("label",null,"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043f\u0430\u043f\u043a\u0443:  "),i.a.createElement("label",{style:{backgroundColor:"#d4cfcf"}}," ",this.props.path||"/"," "),i.a.createElement("input",{type:"text",value:this.state.foldertitle,placeholder:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438",onChange:function(t){return e.setState({foldertitle:t.target.value})}}),i.a.createElement("button",{className:"btn btn-outline-success",onClick:this.newFolder},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0430\u043f\u043a\u0443"))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-sm card"},i.a.createElement("label",null,"\u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c: "),i.a.createElement("select",{className:"form-control-sm",onChange:this.props.sortBy,value:this.props.sortby},i.a.createElement("option",{value:"created"},"\u0434\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435"),i.a.createElement("option",{value:"name"},"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),i.a.createElement("option",{value:"path"},"\u043f\u0443\u0442\u044c"),i.a.createElement("option",{value:"modified"},"\u0434\u0430\u0442\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"),i.a.createElement("option",{value:"size"},"\u0440\u0430\u0437\u043c\u0435\u0440")))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).delFolder=a.props.delFolder.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"row list-group-flush"},i.a.createElement("div",{className:"col-sm-11 list-group-item"},i.a.createElement("a",{href:"/list/"+this.props.path+this.props.item.name+"/"},i.a.createElement("img",{alt:"folder",src:"/pic/folder.png",width:"30",height:"30"}),i.a.createElement("label",{style:{margin:5,cursor:"pointer"}},this.props.item.name))),i.a.createElement("div",{className:"col-sm"},i.a.createElement("img",{alt:"delete",style:{cursor:"pointer",marginLeft:5},width:"20",height:"20",src:"/pic/recbin.png",onClick:function(){return e.delFolder(e.props.item.path)}})))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).dateToString=a.dateToString.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"dateToString",value:function(e){var t=new Date(e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear().toString()+" "+t.getHours()+":"+t.getMinutes()}},{key:"render",value:function(){var e=Number(this.props.item.size/1024).toFixed(2),t=this.dateToString(this.props.item.created),a=this.dateToString(this.props.item.modified);return i.a.createElement("div",{className:"row list-group-flush"},i.a.createElement("div",{className:"col-sm-11"},i.a.createElement("img",{alt:"document",src:"/pic/doc.png",width:"30",height:"30"}),i.a.createElement("label",{style:{margin:5}},this.props.item.name),i.a.createElement("br",null),i.a.createElement("label",{style:{margin:5,color:"grey",fontSize:10}},e," Kb"),i.a.createElement("label",{style:{margin:5,color:"grey",fontSize:10}},"created: ",t),i.a.createElement("label",{style:{margin:5,color:"grey",fontSize:10}},"modified: ",a)),i.a.createElement("div",{className:"col-sm"},i.a.createElement("a",{style:{margin:5},href:this.props.item.file},i.a.createElement("img",{alt:"download",width:"30",height:"30",src:"/pic/download.png"}))))}}]),t}(n.Component),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getList=a.getList.bind(Object(v.a)(a)),a.sortBy=a.sortBy.bind(Object(v.a)(a)),a.goBack=a.goBack.bind(Object(v.a)(a)),a.state={data:[],limit:10,used_space:0,name:"",path:decodeURI(document.location.pathname.replace("/list/","")),sortby:"created",total_space:0,foldertitle:"",file:null,total:0,loading:!0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"getList",value:function(){var e=this;this.setState({loading:!0},function(){O("GET",null,{path:e.state.path||"/",sort:e.state.sortby,limit:e.state.limit},"https://cloud-api.yandex.net/v1/disk/resources",function(t){e.setState({data:t._embedded.items,total:t._embedded.total,name:t.name,loading:!1})},function(e){console.log("err: ",e)})})}},{key:"showMore",value:function(){var e=this;this.setState({limit:this.state.limit+10},function(){e.getList()})}},{key:"delFolder",value:function(e){var t=this;window.confirm("\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435!")&&O("DELETE",null,{path:e=e.replace("disk: ","")},"https://cloud-api.yandex.net/v1/disk/resources",function(e){t.props.getList()},function(e){console.log("err: ",e)})}},{key:"sortBy",value:function(e){var t=this;this.setState({sortby:e.target.value},function(){t.getList()})}},{key:"goBack",value:function(){var e=this.state.path;e="/list/"+e.replace(this.state.name,""),document.location.href=e.replace("//","/")}},{key:"componentDidMount",value:function(){var e=this;this.getList(),O("GET",null,{},"https://cloud-api.yandex.net/v1/disk/",function(t){e.setState({total_space:t.total_space,used_space:t.used_space})},function(e){console.log("err: ",e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container-fluid"},i.a.createElement(j,{on:this.state.loading}),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(k,{total_space:this.state.total_space,used_space:this.state.used_space}),i.a.createElement("div",{className:"row"},i.a.createElement(N,{path:this.state.path,sortBy:this.sortBy}),i.a.createElement(F,{path:this.state.path,getList:this.getList}),i.a.createElement(w,{uploadFile:this.uploadFile,getList:this.getList,path:this.state.path}))),""!==this.state.path?i.a.createElement("img",{alt:"back",onClick:this.goBack,style:{cursor:"pointer",marginLeft:5},width:"80",height:"80",src:"/pic/back.png"}):null,i.a.createElement("p",null,"\u0412\u0441\u0435\u0433\u043e ",this.state.total),this.state.data.map(function(t){return i.a.createElement("div",{style:{margin:15},key:t.resource_id},"dir"===t.type?i.a.createElement(C,{path:e.state.path,item:t,delFolder:e.delFolder,getList:e.getList}):i.a.createElement(L,{item:t}))}),this.state.total>this.state.data.length?i.a.createElement("button",{onClick:this.showMore.bind(this),className:"btn btn-outline-primary"},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"):null))}}]),t}(n.Component),S="pushState"in window.history;r.a.render(i.a.createElement(o.a,{forceRefresh:!S},i.a.createElement("div",null,i.a.createElement(c.a,{path:"/",component:b}),i.a.createElement(c.a,{path:"/auth",component:g}),i.a.createElement(c.a,{path:"/list/",component:_}))),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.34c6b6ab.chunk.js.map
(this.webpackJsonproomkeeping=this.webpackJsonproomkeeping||[]).push([[4],{1306:function(e,t,a){"use strict";var l=a(0),n=a.n(l);function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function c(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),l.forEach((function(t){i(e,t,a[t])}))}return e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}var g={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},v={empty:u({},g,{backgroundColor:"#ccc"}),full:u({},g,{backgroundColor:"black"}),placeholder:u({},g,{backgroundColor:"red"})},E=function(e){return n.a.isValidElement(e)?e:"object"===o(e)&&null!==e?n.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?n.a.createElement("span",{className:e}):void 0},y=function(e){function t(){return r(this,t),h(this,f(t).apply(this,arguments))}return d(t,e),c(t,[{key:"render",value:function(){var e,t=this.props,a=t.index,l=t.inactiveIcon,o=t.activeIcon,r=t.percent,s=t.direction,c=t.readonly,m=t.onClick,u=t.onMouseMove,d=E(l),f=r<100?{}:{visibility:"hidden"},p=E(o),b=(i(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===s?"right":"left",0),i(e,"width","".concat(r,"%")),e),h={cursor:c?"inherit":"pointer",display:"inline-block",position:"relative"};function g(e){u&&u(a,e)}function v(e){m&&(e.preventDefault(),m(a,e))}return n.a.createElement("span",{style:h,onClick:v,onMouseMove:g,onTouchMove:g,onTouchEnd:v},n.a.createElement("span",{style:f},d),n.a.createElement("span",{style:b},p))}}]),t}(n.a.PureComponent),N=function(e){function t(e){var a;return r(this,t),(a=h(this,f(t).call(this,e))).state={displayValue:a.props.value,interacting:!1},a.onMouseLeave=a.onMouseLeave.bind(b(b(a))),a.symbolMouseMove=a.symbolMouseMove.bind(b(b(a))),a.symbolClick=a.symbolClick.bind(b(b(a))),a}return d(t,e),c(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(a){return{displayValue:t?e.value:a.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.props.onClick(a,t)}},{key:"symbolMouseMove",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:a})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var a=this.calculateHoverPercentage(t),l=Math.ceil(a%1*this.props.fractions)/this.props.fractions,n=Math.pow(10,3),o=e+(Math.floor(a)+Math.floor(l*n)/n);return o>0?o>this.props.totalSymbols?this.props.totalSymbols:o:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,a=e.target.getBoundingClientRect(),l="rtl"===this.props.direction?a.right-t:t-a.left;return l<0?0:l/a.width}},{key:"render",value:function(){var e,t=this.props,a=t.readonly,l=t.quiet,o=t.totalSymbols,r=t.value,s=t.placeholderValue,c=t.direction,i=t.emptySymbol,d=t.fullSymbol,f=t.placeholderSymbol,p=t.className,b=t.id,h=t.style,g=t.tabIndex,v=this.state,E=v.displayValue,N=v.interacting,w=[],S=[].concat(i),O=[].concat(d),k=[].concat(f),R=0!==s&&0===r&&!N;e=R?s:l?r:E;for(var x=Math.floor(e),j=0;j<o;j++){var C=void 0;C=j-x<0?100:j-x===0?100*(e-j):0,w.push(n.a.createElement(y,m({key:j,index:j,readonly:a,inactiveIcon:S[j%S.length],activeIcon:R?k[j%O.length]:O[j%O.length],percent:C,direction:c},!a&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return n.a.createElement("span",m({id:b,style:u({},h,{display:"inline-block",direction:c}),className:p,tabIndex:g,"aria-label":this.props["aria-label"]},!a&&{onMouseLeave:this.onMouseLeave}),w)}}]),t}(n.a.PureComponent);function w(){}w._name="react_rating_noop";var S=function(e){function t(e){var a;return r(this,t),(a=h(this,f(t).call(this,e))).state={value:e.initialRating},a.handleClick=a.handleClick.bind(b(b(a))),a.handleHover=a.handleHover.bind(b(b(a))),a}return d(t,e),c(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var a=this,l=this.translateDisplayValueToValue(e);this.props.onClick(l),this.state.value!==l&&this.setState({value:l},(function(){return a.props.onChange(a.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.emptySymbol,l=e.fullSymbol,o=e.placeholderSymbol,r=e.readonly,s=e.quiet,c=e.fractions,i=e.direction,m=e.start,u=e.stop,d=e.id,f=e.className,p=e.style,b=e.tabIndex;return n.a.createElement(N,{id:d,style:p,className:f,tabIndex:b,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,a){return Math.floor((t-e)/a)}(m,u,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:r,quiet:s,fractions:c,direction:i,emptySymbol:a,fullSymbol:l,placeholderSymbol:o,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(n.a.PureComponent);S.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:w,onClick:w,onChange:w,emptySymbol:v.empty,fullSymbol:v.full,placeholderSymbol:v.placeholder},t.a=S},1707:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(102),r=a(15),s=a(27),c=a(88),i=a(22),m=a(51),u=a(28),d=a(14),f=a.n(d),p=a(92),b=a(5),h=a(40),g=a.n(h);var v=function(e){var t=Object(l.useState)(!1),a=Object(r.a)(t,2),o=a[0],s=a[1],d=Object(l.useState)(!1),h=Object(r.a)(d,2),v=h[0],E=h[1],y=Object(l.useState)(""),N=Object(r.a)(y,2),w=N[0],S=N[1],O=Object(l.useState)(!1),k=Object(r.a)(O,2),R=k[0],x=k[1],j=Object(i.e)((function(e){return e.auth.user}),i.c),C=j.role,T=j.user.hostel;Object(l.useEffect)((function(){}),[j]);var P={fullname:"",email:"",password:""},D=u.d().shape({fullname:u.f().min(5).max(255).required("Name is required"),password:u.f().min(3).max(50).required("New Password is required"),email:u.f().required("E-mail is required").email()}),H=function(e){return M.touched[e]&&M.errors[e]?"is-invalid":M.touched[e]&&!M.errors[e]?"is-valid":""},M=Object(m.c)({initialValues:P,validationSchema:D,onSubmit:function(t,a){!function(t,a,l){s(!0),E(!1),setTimeout((function(){s(!1),l(!1),g.a.post("/api/register/RoomKeeper",Object(c.a)(Object(c.a)({},t),{},{hostel:T,role:C})).then((function(t){x(!1),203===t.status?(a("User Already Registered."),S(t.data),E(!0)):200===t.status&&(x(!0),M.handleReset(),e.onUpdate()),s(!1)})).catch((function(e){console.log(e),s(!1),l(!1),a(e),E(!0)}))}),1e3)}(t,a.setStatus,a.setSubmitting)},onReset:function(e,t){t.resetForm;M.setValues({fullname:P.fullname,email:P.email,password:P.password})}});return n.a.createElement("form",{className:"card card-custom",onSubmit:M.handleSubmit,onReset:M.handleReset},o&&n.a.createElement(p.f,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Register RoomKeeper"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Registering the roomkeeper for your organization."))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},v&&n.a.createElement("div",{className:"alert alert-custom alert-light-danger fade show mb-10",role:"alert"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement("span",{className:"svg-icon svg-icon-3x svg-icon-danger"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/Code/Info-circle.svg")})," ")),n.a.createElement("div",{className:"alert-text font-weight-bold"},w),n.a.createElement("div",{className:"alert-close",onClick:function(){return E(!1)}},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},n.a.createElement("i",{className:"ki ki-close"}))))),R&&n.a.createElement("div",{className:"alert alert-custom alert-light-success fade show mb-10",role:"alert"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement("span",{className:"svg-icon svg-icon-3x svg-icon-success"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/Code/Done-circle.svg")})," ")),n.a.createElement("div",{className:"alert-text font-weight-bold"},"RoomKeeper Registered."),n.a.createElement("div",{className:"alert-close",onClick:function(){return x(!1)}},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},n.a.createElement("i",{className:"ki ki-close"}))))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Full Name"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Full Name",className:"form-control form-control-lg form-control-solid mb-2 ".concat(H("fullname")),name:"fullname"},M.getFieldProps("fullname"))),M.touched.fullname&&M.errors.fullname?n.a.createElement("div",{className:"invalid-feedback"},M.errors.fullname):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"E-mail"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"E Mail",className:"form-control form-control-lg form-control-solid ".concat(H("email")),name:"email",autoComplete:"off"},M.getFieldProps("email"))),M.touched.email&&M.errors.email?n.a.createElement("div",{className:"invalid-feedback"},M.errors.email):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Password"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"password",placeholder:"Password",className:"form-control form-control-lg form-control-solid ".concat(H("password")),name:"password",autoComplete:"off"},M.getFieldProps("password"))),M.touched.password&&M.errors.password?n.a.createElement("div",{className:"invalid-feedback"},M.errors.password):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("button",{type:"submit",className:"btn btn-info font-weight-bold px-9 py-4 my-3",disabled:M.isSubmitting||M.touched&&!M.isValid},"Register",M.isSubmitting),n.a.createElement("button",{type:"reset",className:"btn btn-secondary font-weight-bold px-9 py-4 my-3 ml-5"},"Reset"))))))},E=a(1310),y=a.n(E),N=a(1282);function w(e){var t=e.data,a=e.onRefreshTable,o=e.hostel,s=e.role,c=e.show,i=e.onHide,m=e.action,u=Object(l.useState)(!1),d=Object(r.a)(u,2),f=d[0],h=d[1],v=Object(l.useState)(!1),E=Object(r.a)(v,2),y=E[0],w=E[1],S=function(){g.a.get("/api/users?hostel=".concat(o,"&role=").concat(s)).then((function(e){a(e.data)})).catch((function(e){console.log(e)}))};return n.a.createElement(N.a,{show:c,onHide:i,"aria-labelledby":"Delete-Modal"},f&&n.a.createElement(p.f,null),!y&&n.a.createElement(N.a.Header,{closeButton:!0},n.a.createElement(N.a.Title,{id:"Delete-Modal"},s.charAt(0).toUpperCase()+s.slice(1)," Delete")),n.a.createElement(N.a.Body,null,y?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:"".concat(Object(b.d)("/media/svg/illustrations/features.svg")),alt:"user svg"}),n.a.createElement("h2",{className:"text-success font-weight-bold text-center"},"Successfully Deleted!")):f?n.a.createElement("span",null,s.charAt(0).toUpperCase()+s.slice(1)," are deleting..."):n.a.createElement("span",null,"Are you sure?")),n.a.createElement(N.a.Footer,null,y?n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{type:"button",onClick:function(){i(),setTimeout((function(){w(!1)}),500)},className:"btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3 text-center"},"Confirm")):n.a.createElement("div",null,n.a.createElement("button",{type:"button",onClick:i,className:"btn btn-light btn-elevate"},"Cancel"),n.a.createElement(n.a.Fragment,null," "),n.a.createElement("button",{type:"button",onClick:function(){h(!0),setTimeout((function(){"all"===m?g.a.post("/api/deleteAllUsers?hostel=".concat(o,"&role=").concat(s)).then((function(){h(!1),w(!0),S()})).catch((function(e){console.log(e),h(!1)})):"selected"===m?g.a.post("/api/deleteUsers?hostel=".concat(o,"&role=").concat(s),{data:t}).then((function(e){h(!1),w(!0),S()})).catch((function(e){h(!1),console.log(e)})):"single"===m&&g.a.post("/api/deleteUsers?hostel=".concat(o,"&role=").concat(s),{email:t}).then((function(e){h(!1),w(!0),S()})).catch((function(e){h(!1),console.log(e)}))}),1e3)},className:"btn btn-primary btn-elevate"},"Delete"))))}var S=a(1306),O=a(557),k={color:"#B5B5C3",fontWeight:"600",fontSize:"0.9rem",letterSpacing:"0.1rem",textTransform:"uppercase"},R={fontWeight:"400",lineHeight:"1.5",color:"#3f4254",fontSize:"13px",verticalAlign:"middle"};var x=function(e){var t=Object(l.useState)([]),a=Object(r.a)(t,2),o=a[0],s=a[1],m=Object(l.useState)(!1),u=Object(r.a)(m,2),d=u[0],h=u[1],v=Object(l.useState)(""),E=Object(r.a)(v,2),N=E[0],x=E[1],j=Object(l.useState)([]),C=Object(r.a)(j,2),T=C[0],P=C[1],D=Object(i.e)((function(e){return e.auth.user.user.hostel}),i.c);Object(l.useEffect)((function(){g.a.get("/api/users?hostel=".concat(D,"&role=roomkeeper")).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))}),[D,e]);var H=[{name:"name",label:"Name",options:{filter:!0,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:k},"name")},customBodyRender:function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"symbol symbol-35 symbol-light mr-4 ml-4"},n.a.createElement("span",{className:"symbol-label",style:{backgroundImage:"url(".concat(t.rowData[6]?t.rowData[6]:Object(b.d)("/media/users/blank.png"),")")}})),n.a.createElement("span",{className:"align-top",style:Object(c.a)(Object(c.a)({},R),{},{lineHeight:3})},e))}}},{name:"email",label:"E-mail",options:{filter:!1,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:k},"e-mail")},customBodyRender:function(e){return n.a.createElement("span",{style:R},e)}}},{name:"phone",label:"Phone No.",options:{filter:!1,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:k},"phone no.")},customBodyRender:function(e){return e?n.a.createElement("span",{style:R},e):n.a.createElement("span",{className:"text-muted font-weight-bolder"},"N/A")}}},{name:"ratings",label:"Ratings",sortThirdClickReset:!0,options:{filter:!0,sort:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:k},"Ratings")},customBodyRender:function(e,t){return e>0?n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{initialRating:e,fractions:10,readonly:!0,emptySymbol:n.a.createElement("span",{className:"svg-icon svg-icon-lg"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/General/Star.svg")})),fullSymbol:n.a.createElement("span",{className:"svg-icon svg-icon-lg svg-icon-primary"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/General/Star.svg")}))}),n.a.createElement("br",null),n.a.createElement("em",{className:"text-muted font-size-sm font-weight-bold"},"Total ",t.rowData[5]," Ratings.")):n.a.createElement("em",{className:"text-muted font-size-lg font-weight-dark-50"},"*Not Yet Rated*")}}},{name:"Actions",options:{filter:!1,sort:!1,download:!1,empty:!0,print:!1,searchable:!1,customBodyRender:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{title:"Delete Student",className:"btn btn-icon btn-light btn-hover-danger btn-sm ",onClick:function(){h(!0),x("single"),P(t.rowData[1])}},n.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-danger"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/General/Trash.svg"),title:"Delete Student"}))))}}},{name:"count",label:"Total Ratings",options:{filter:!1,sort:!1,print:!1,searchable:!1,display:"excluded",sortThirdClickReset:!0}},{name:"profileimg",options:{display:"excluded",filter:!1,sort:!1,download:!1,print:!1,searchable:!1}}],M={customToolbarSelect:function(e,t,a){var l=e.data.map((function(e){return t[e.index].data[1].props.children}));return n.a.createElement("div",{className:"mb-2 mt-2 no-shadow"},n.a.createElement("button",{type:"button",className:"btn btn-danger font-weight-bolder font-size-sm",onClick:function(){P(l),x("selected"),h(!0),a([])}},n.a.createElement("i",{className:"fa fa-trash"})," Delete Selected"))},filter:!0,rowHover:!1,searchOpen:!0,tableId:"roomkeeperList",filterType:"dropdown",rowsPerPageOptions:[10,25,50,100],textLabels:{body:{noMatch:"Sorry, no RoomKeeper records found",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}},pagination:{next:"Next Page",previous:"Previous Page",rowsPerPage:"Rows per page:",displayRows:"of"},toolbar:{search:"Search",downloadCsv:"Download CSV",print:"Print",viewColumns:"View Columns",filterTable:"Filter Table"},filter:{all:"All",title:"FILTERS",reset:"RESET"},viewColumns:{title:"Show Columns",titleAria:"Show/Hide Table Columns"},selectedRows:{text:"Student(s) selected",delete:"Delete",deleteAria:"Delete Selected Rows"}}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{className:"mb-0"},n.a.createElement(p.d,null,n.a.createElement("div",{className:"mt-4 mb-1"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark mb-0"},"RoomKeeper List"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Manage or Remove RoomKeepers from your organization.")),n.a.createElement(p.e,null,n.a.createElement(O.a,{variant:"outline-danger",onClick:function(){x("all"),h(!0)}},n.a.createElement("i",{className:"fa fa-trash"})," Delete All RoomKeepers"))),n.a.createElement(p.c,{className:"p-0",style:{zIndex:"0"}},n.a.createElement(y.a,{title:"",data:o,columns:H,options:M,className:"card card-custom shadow-none border-bottom-0 table table-head-custom table-vertical-center overflow-hidden mb-0"}))),"all"===N&&n.a.createElement(w,{role:"roomkeeper",action:"all",hostel:D,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}),"selected"===N&&n.a.createElement(w,{role:"roomkeeper",data:T,action:N,hostel:D,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}),"single"===N&&n.a.createElement(w,{role:"roomkeeper",data:T,action:N,hostel:D,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}))},j=function(){Object(s.k)().setTitle("Manage RoomKeeper");var e=Object(l.useState)(!1),t=Object(r.a)(e,2),a=t[0],o=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(v,{onUpdate:function(){o(!a)}}),n.a.createElement("br",null),n.a.createElement(x,{reloadTable:a}))};var C=function(e){var t=Object(l.useState)(!1),a=Object(r.a)(t,2),o=a[0],s=a[1],d=Object(l.useState)(!1),h=Object(r.a)(d,2),v=h[0],E=h[1],y=Object(l.useState)(""),N=Object(r.a)(y,2),w=N[0],S=N[1],O=Object(l.useState)(!1),k=Object(r.a)(O,2),R=k[0],x=k[1],j=Object(i.e)((function(e){return e.auth.user}),i.c),C=j.role,T=j.user.hostel;Object(l.useEffect)((function(){}),[j]);var P={fullname:"",email:"",password:"",room:"",floor:""},D=u.d().shape({fullname:u.f().min(5).max(255).required("Name is required"),password:u.f().min(3).max(50).required("New Password is required"),email:u.f().required("E-mail is required").email(),room:u.f().required("Room Number is Required"),floor:u.c().integer().required("Floor is Required")}),H=function(e){return M.touched[e]&&M.errors[e]?"is-invalid":M.touched[e]&&!M.errors[e]?"is-valid":""},M=Object(m.c)({initialValues:P,validationSchema:D,onSubmit:function(t,a){!function(t,a,l){s(!0),E(!1),setTimeout((function(){s(!1),l(!1),g.a.post("/api/register/Student",Object(c.a)(Object(c.a)({},t),{},{hostel:T,role:C})).then((function(t){x(!1),203===t.status?(a("User Already Registered."),S(t.data),E(!0)):200===t.status&&(x(!0),M.handleReset(),e.onUpdate()),s(!1)})).catch((function(e){console.log(e),s(!1),l(!1),a(e),E(!0)}))}),1e3)}(t,a.setStatus,a.setSubmitting)},onReset:function(e,t){t.resetForm;M.setValues({fullname:P.fullname,email:P.email,password:P.password,room:P.room,floor:P.floor})}});return n.a.createElement("form",{className:"card card-custom",onSubmit:M.handleSubmit,onReset:M.handleReset},o&&n.a.createElement(p.f,null),n.a.createElement("div",{className:"card-header py-3"},n.a.createElement("div",{className:"card-title align-items-start flex-column"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark"},"Register Student"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Registering the Student for your organization."))),n.a.createElement("div",{className:"form"},n.a.createElement("div",{className:"card-body"},v&&n.a.createElement("div",{className:"alert alert-custom alert-light-danger fade show mb-10",role:"alert"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement("span",{className:"svg-icon svg-icon-3x svg-icon-danger"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/Code/Info-circle.svg")})," ")),n.a.createElement("div",{className:"alert-text font-weight-bold"},w),n.a.createElement("div",{className:"alert-close",onClick:function(){return E(!1)}},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},n.a.createElement("i",{className:"ki ki-close"}))))),R&&n.a.createElement("div",{className:"alert alert-custom alert-light-success fade show mb-10",role:"alert"},n.a.createElement("div",{className:"alert-icon"},n.a.createElement("span",{className:"svg-icon svg-icon-3x svg-icon-success"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/Code/Done-circle.svg")})," ")),n.a.createElement("div",{className:"alert-text font-weight-bold"},"Student Registered."),n.a.createElement("div",{className:"alert-close",onClick:function(){return x(!1)}},n.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close"},n.a.createElement("span",{"aria-hidden":"true"},n.a.createElement("i",{className:"ki ki-close"}))))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Full Name"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Full Name",className:"form-control form-control-lg form-control-solid mb-2 ".concat(H("fullname")),name:"fullname"},M.getFieldProps("fullname"))),M.touched.fullname&&M.errors.fullname?n.a.createElement("div",{className:"invalid-feedback"},M.errors.fullname):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Room Details"),n.a.createElement("div",{className:"col-lg-3 col-xl-3 mb-4"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Room Number",className:"form-control form-control-lg form-control-solid ".concat(H("room")),name:"room",autoComplete:"off"},M.getFieldProps("room"))),M.touched.room&&M.errors.room?n.a.createElement("div",{className:"invalid-feedback"},M.errors.room):null),n.a.createElement("div",{className:"col-lg-3 col-xl-3"},n.a.createElement("input",Object.assign({type:"text",placeholder:"Floor",className:"form-control form-control-lg form-control-solid ".concat(H("floor")),name:"floor",autoComplete:"off"},M.getFieldProps("floor"))),M.touched.floor&&M.errors.floor?n.a.createElement("div",{className:"invalid-feedback"},M.errors.floor):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"E-mail"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"text",placeholder:"E Mail",className:"form-control form-control-lg form-control-solid ".concat(H("email")),name:"email",autoComplete:"off"},M.getFieldProps("email"))),M.touched.email&&M.errors.email?n.a.createElement("div",{className:"invalid-feedback"},M.errors.email):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"},"Password"),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("input",Object.assign({type:"password",placeholder:"Password",className:"form-control form-control-lg form-control-solid ".concat(H("password")),name:"password",autoComplete:"off"},M.getFieldProps("password"))),M.touched.password&&M.errors.password?n.a.createElement("div",{className:"invalid-feedback"},M.errors.password):null)),n.a.createElement("div",{className:"form-group row"},n.a.createElement("label",{className:"col-xl-3 col-lg-3 col-form-label text-alert"}),n.a.createElement("div",{className:"col-lg-9 col-xl-6"},n.a.createElement("button",{type:"submit",className:"btn btn-info font-weight-bold px-9 py-4 my-3",disabled:M.isSubmitting||M.touched&&!M.isValid},"Register",M.isSubmitting),n.a.createElement("button",{type:"reset",className:"btn btn-secondary font-weight-bold px-9 py-4 my-3 ml-5"},"Reset"))))))},T={color:"#B5B5C3",fontWeight:"600",fontSize:"0.9rem",letterSpacing:"0.1rem",textTransform:"uppercase"},P={fontWeight:"400",lineHeight:"1.5",color:"#3f4254",fontSize:"13px",verticalAlign:"middle"};var D=function(e){var t=Object(l.useState)([]),a=Object(r.a)(t,2),o=a[0],s=a[1],m=Object(l.useState)(!1),u=Object(r.a)(m,2),d=u[0],h=u[1],v=Object(l.useState)(""),E=Object(r.a)(v,2),N=E[0],S=E[1],k=Object(l.useState)([]),R=Object(r.a)(k,2),x=R[0],j=R[1],C=Object(i.e)((function(e){return e.auth.user.user.hostel}),i.c);Object(l.useEffect)((function(){g.a.get("/api/users?hostel=".concat(C,"&role=student")).then((function(e){console.log(e.data),s(e.data)})).catch((function(e){console.log(e)}))}),[C,e]);var D=[{name:"name",label:"Name",options:{filter:!0,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:T},"name")},customBodyRender:function(e,t){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"symbol symbol-35 symbol-light mr-4 ml-4"},n.a.createElement("span",{className:"symbol-label",style:{backgroundImage:"url(".concat(t.rowData[6]?t.rowData[6]:Object(b.d)("/media/users/blank.png"),")")}})),n.a.createElement("span",{className:"align-top",style:Object(c.a)(Object(c.a)({},P),{},{lineHeight:3})},e))}}},{name:"email",label:"E-mail",options:{filter:!0,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:T},"e-mail")},customBodyRender:function(e){return n.a.createElement("span",{style:P},e)}}},{name:"phone",label:"Phone No.",options:{filter:!1,sort:!0,sortThirdClickReset:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:T},"phone no.")},customBodyRender:function(e){return e?n.a.createElement("span",{style:P},e):n.a.createElement("span",{className:"text-muted font-weight-bolder"},"N/A")}}},{name:"room",label:"Room No.",sortThirdClickReset:!0,options:{filter:!0,sort:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:T},"Room No.")},customBodyRender:function(e){return n.a.createElement("span",{style:P},e)}}},{name:"floor",label:"Floor No.",sortThirdClickReset:!0,options:{filter:!0,sort:!0,customHeadLabelRender:function(){return n.a.createElement("span",{className:"table-vertical-center",style:T},"Floor No.")},customBodyRender:function(e){return n.a.createElement("span",{style:P},e)}}},{name:"Actions",options:{filter:!1,sort:!1,download:!1,empty:!0,print:!1,searchable:!1,customBodyRender:function(e,t){return n.a.createElement("div",null,n.a.createElement("button",{title:"Delete Student",className:"btn btn-icon btn-light btn-hover-danger btn-sm ",onClick:function(){h(!0),S("single"),j(t.rowData[1])}},n.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-danger"},n.a.createElement(f.a,{src:Object(b.d)("/media/svg/icons/General/Trash.svg"),title:"Delete Student"}))))}}},{name:"profileimg",options:{display:"excluded",filter:!1,sort:!1,download:!1,print:!1,searchable:!1}}],H={customToolbarSelect:function(e,t,a){var l=e.data.map((function(e){return t[e.index].data[1].props.children}));return n.a.createElement("div",{className:"mb-2 mt-2 no-shadow"},n.a.createElement("button",{type:"button",className:"btn btn-danger font-weight-bolder font-size-sm",onClick:function(){j(l),S("selected"),h(!0),a([])}},n.a.createElement("i",{className:"fa fa-trash"})," Delete Selected"))},filter:!0,elevation:0,rowsPerPage:10,rowHover:!1,searchOpen:!0,tableId:"studentList",filterType:"dropdown",rowsPerPageOptions:[10,25,50,100],textLabels:{body:{noMatch:"Sorry, no student records found",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}},pagination:{next:"Next Page",previous:"Previous Page",rowsPerPage:"Rows per page:",displayRows:"of"},toolbar:{search:"Search",downloadCsv:"Download CSV",print:"Print",viewColumns:"View Columns",filterTable:"Filter Table"},filter:{all:"All",title:"FILTERS",reset:"RESET"},viewColumns:{title:"Show Columns",titleAria:"Show/Hide Table Columns"},selectedRows:{text:"Student(s) selected",delete:"Delete",deleteAria:"Delete Selected Rows"}}};return n.a.createElement(n.a.Fragment,null,n.a.createElement(p.b,{className:"mb-0"},n.a.createElement(p.d,null,n.a.createElement("div",{className:"mt-4 mb-1"},n.a.createElement("h3",{className:"card-label font-weight-bolder text-dark mb-0"},"Student List"),n.a.createElement("span",{className:"text-muted font-weight-bold font-size-sm mt-1"},"Manage or Remove Students from your organization.")),n.a.createElement(p.e,null,n.a.createElement(O.a,{variant:"outline-danger",onClick:function(){S("all"),h(!0)}},n.a.createElement("i",{className:"fa fa-trash"})," Delete All Students"))),n.a.createElement(p.c,{style:{zIndex:"0"}},n.a.createElement(y.a,{title:"",data:o,columns:D,options:H,className:"card card-custom shadow-none border-bottom-0 table table-head-custom table-vertical-center overflow-hidden mb-0"}))),"all"===N&&n.a.createElement(w,{role:"student",action:"all",hostel:C,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}),"selected"===N&&n.a.createElement(w,{role:"student",data:x,action:N,hostel:C,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}),"single"===N&&n.a.createElement(w,{role:"student",data:x,action:N,hostel:C,onRefreshTable:function(e){s(e)},show:d,onHide:function(){h(!1)}}))},H=function(){Object(s.k)().setTitle("Manage Student");var e=Object(l.useState)(!1),t=Object(r.a)(e,2),a=t[0],o=t[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,{onUpdate:function(){o(!a)}}),n.a.createElement("br",null),n.a.createElement(D,{reloadTable:a}))};function M(){return n.a.createElement("div",{className:"flex-row-fluid lg-12"},n.a.createElement(o.d,null,n.a.createElement(s.a,{path:"/manage/roomkeeper",component:j}),n.a.createElement(s.a,{path:"/manage/student",component:H})))}a.d(t,"default",(function(){return M}))}}]);
//# sourceMappingURL=4.f9959af3.chunk.js.map
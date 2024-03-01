import{u as R,a as te,b as D,c as z,r as E,d as T,o as b,e as x,w as l,f as L,g as W,n as G,h as P,T as ne,i as e,j as $,k as I,Q as oe,l as j,m as M,p as le,t as O,q as ae,s as k,v as F,x as Y,_ as ie,y as N,z as S,A as se,F as U,B,C as de,D as ce,E as re,G as H,H as K,I as X,J as Z,K as ue,L as me,M as ee,N as _e,O as pe,S as fe,P as be,R as he,U as ve}from"./index-fdb962ab.js";const ge={class:"relative-position"},we=["src"],ye=400,ke={__name:"ActionLabelThumbnailPreview",setup(w){R(),te();const s=D(),u=z(()=>s.actionLabelData.find(p=>p.id===s.currentThumbnailActionLabelId).thumbnail),a=E([16,16]),c=p=>{a.value=[a.value[0]-p.delta.x,a.value[1]-p.delta.y]},m=E(400),v=p=>{const r=p.deltaY/-5,t=m.value+r;if(t>=ye){const n=a.value[0]-r/2,i=a.value[1]-r/2;n>=0&&i>=0&&(a.value=[n,i],m.value=t)}},y=()=>{const p=s.actionLabelData.findIndex(r=>r.id===s.currentThumbnailActionLabelId);for(let r=p-1;r>=0;r--)if(s.actionLabelData[r].thumbnail){s.currentThumbnailActionLabelId=s.actionLabelData[r].id;return}},_=()=>{const p=s.actionLabelData.findIndex(r=>r.id===s.currentThumbnailActionLabelId);for(let r=p+1;r<s.actionLabelData.length;r++)if(s.actionLabelData[r].thumbnail){s.currentThumbnailActionLabelId=s.actionLabelData[r].id;return}};return(p,r)=>{const t=oe,n=j,i=M,f=le;return T(s).currentThumbnailActionLabelId!==null?(b(),x(f,{key:0,class:"z-top",offset:a.value},{default:l(()=>[L("div",ge,[W(L("img",{class:"block shadow-1 rounded-borders",style:G({"max-width":m.value+"px"}),src:u.value,alt:"thumbnail",draggable:"false",onWheel:P(v,["prevent"])},null,44,we),[[ne,c,void 0,{prevent:!0,mouse:!0}]]),e(n,{class:"absolute-left text-black",style:{bottom:"36px"},flat:"",icon:"arrow_back",onClick:y},{default:l(()=>[e(t,null,{default:l(()=>[$("Previous thumbnail preview")]),_:1})]),_:1}),e(n,{class:"absolute-right text-black",style:{bottom:"36px"},flat:"",icon:"arrow_forward",onClick:_},{default:l(()=>[e(t,null,{default:l(()=>[$("Next thumbnail preview")]),_:1})]),_:1}),e(i,{flat:"",class:"absolute-bottom",spread:""},{default:l(()=>[e(n,{class:"text-black",flat:"",icon:"cancel",onClick:r[0]||(r[0]=g=>T(s).currentThumbnailActionLabelId=null)},{default:l(()=>[e(t,null,{default:l(()=>[$("Close thumbnail preview")]),_:1})]),_:1})]),_:1})])]),_:1},8,["offset"])):I("",!0)}}},xe={class:"row q-table__top"},Le={class:"col-6 q-table__title"},qe={__name:"TableEditor",props:{modelValue:{required:!0,type:String},title:{required:!0,type:String}},emits:["update:modelValue","close"],setup(w,{emit:s}){const u=ae(()=>ie(()=>import("./MonacoCodeEditor-fd2aef61.js").then(_=>_.M),["./MonacoCodeEditor-fd2aef61.js","./index-fdb962ab.js","./index-9d8e5784.css","./MonacoCodeEditor-d45f809a.css"],import.meta.url)),a=w,c=s,m=E(a.modelValue),v=()=>{try{c("update:modelValue",m.value),c("close")}catch(_){throw k.notify(_.toString(),"negative"),_}},y=()=>{m.value!==a.modelValue?k.confirm("Are you sure to leave without save?").onOk(()=>{c("close")}):c("close")};return(_,p)=>{const r=F,t=j,n=M,i=Y;return b(),x(i,null,{default:l(()=>[L("div",xe,[L("div",Le,O(w.title),1),e(r),e(n,{flat:""},{default:l(()=>[e(t,{size:"sm",outline:"",icon:"save",color:"primary",onClick:v,label:"save"}),e(t,{size:"sm",outline:"",icon:"close",color:"negative",onClick:y,label:"cancel"})]),_:1})]),e(T(u),{style:{height:"70vh"},modelValue:m.value,"onUpdate:modelValue":p[0]||(p[0]=f=>m.value=f),language:"json"},null,8,["modelValue"])]),_:1})}}},Ce={class:"col-6 q-table__title"},Ve=["src","onClick"],J={__name:"TableBase",props:{title:{required:!0,type:String},storeKey:{required:!0,type:String},columnList:{required:!0,type:Array},importFunction:{required:!0,type:Function},expand:{default:!1,type:Boolean}},emits:["add","delete"],setup(w){const s=w,u=D();R();const{[s.storeKey]:a}=N(u),c=_=>{u.currentThumbnailActionLabelId=u.currentThumbnailActionLabelId===_.id?null:_.id},m=E(!1),v=()=>{u.currentThumbnailActionLabelId=null,m.value=!m.value},y=z({get(){return JSON.stringify(a.value,null,2)},set(_){s.importFunction(JSON.parse(_))}});return(_,p)=>{const r=F,t=j,n=M,i=re,f=H,g=K,h=X,V=Z,q=ue,Q=me,C=ee;return b(),S(U,null,[m.value?(b(),x(qe,{key:0,modelValue:y.value,"onUpdate:modelValue":p[0]||(p[0]=o=>y.value=o),title:w.title,onClose:v},null,8,["modelValue","title"])):I("",!0),W(e(C,{rows:T(a),columns:w.columnList,"row-key":"id",pagination:{rowsPerPage:0}},{top:l(o=>[L("div",Ce,O(w.title),1),e(r),e(n,{flat:""},{default:l(()=>[e(t,{size:"sm",outline:"",icon:"edit",onClick:v,label:"edit"}),e(t,{size:"sm",outline:"",icon:"add",onClick:p[1]||(p[1]=d=>_.$emit("add")),label:"add"})]),_:1})]),header:l(o=>[e(f,null,{default:l(()=>[w.expand?(b(),x(i,{key:0,"auto-width":""})):I("",!0),(b(!0),S(U,null,B(o.cols,d=>(b(),x(i,{key:d.name},{default:l(()=>[$(O(d.label),1)]),_:2},1024))),128))]),_:2},1024)]),body:l(o=>[e(f,{class:de({"bg-green-2":T(u).currentThumbnailActionLabelId===o.row.id&&w.title==="Action Labels"})},{default:l(()=>[w.expand?(b(),x(g,{key:0,"auto-width":""},{default:l(()=>[e(t,{size:"sm",flat:"",round:"",dense:"",onClick:d=>o.expand=!o.expand,icon:o.expand?"expand_more":"chevron_right"},null,8,["onClick","icon"])]),_:2},1024)):I("",!0),(b(!0),S(U,null,B(o.cols,d=>(b(),S(U,{key:o.row.field},[d.type==="input"?(b(),x(g,{key:0},{default:l(()=>[o.row.thumbnail?(b(),S("img",{key:0,class:"vertical-middle float-left cursor-pointer rounded-borders float-left q-mr-md",style:{height:"40px"},src:o.row.thumbnail,alt:"thumbnail",onClick:A=>c(o.row)},null,8,Ve)):I("",!0),e(h,{"input-class":"text-center",modelValue:o.row[d.field],"onUpdate:modelValue":A=>o.row[d.field]=A,dense:"",borderless:"",rules:[A=>A.length!==0||"Please enter at least 1 character"],disable:o.row[d.field]==="default","hide-bottom-space":""},null,8,["modelValue","onUpdate:modelValue","rules","disable"])]),_:2},1024)):d.type==="color"?(b(),x(g,{key:1,class:"cursor-pointer text-center"},{default:l(()=>[e(V,{outline:"",style:G({"border-color":o.row.color,color:o.row.color})},{default:l(()=>[$(O(o.row.color.toUpperCase()),1)]),_:2},1032,["style"]),e(Q,{"auto-save":"",modelValue:o.row.color,"onUpdate:modelValue":A=>o.row.color=A,title:"Edit the label color"},{default:l(()=>[e(q,{modelValue:o.row.color,"onUpdate:modelValue":A=>o.row.color=A},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)):d.type==="operation"?(b(),x(g,{key:2},{default:l(()=>[e(t,{icon:"delete",color:"negative",flat:"",dense:"",style:{width:"100%"},disabled:o.row.name==="default",onClick:A=>_.$emit("delete",o)},null,8,["disabled","onClick"])]),_:2},1024)):(b(),x(g,{key:3,class:"text-center"},{default:l(()=>[$(O(typeof d.field=="string"?o.row[d.field]:d.field(o.row)),1)]),_:2},1024))],64))),128))]),_:2},1032,["class"]),o.expand?(b(),x(f,{key:0},{default:l(()=>[ce(_.$slots,"expand",{props:o})]),_:2},1024)):I("",!0)]),_:3},8,["rows","columns"]),[[se,!m.value]])],64)}}},Ae={class:"q-mb-sm"},Se={class:"q-gutter-xs"},Te={__name:"ActionLabelTable",setup(w){const s=[{name:"name",align:"center",label:"name",field:"name",type:"input"},{name:"color",align:"center",label:"color",field:"color",style:"width: 120px",type:"color"},{name:"nObjects",align:"center",label:"#objects",field:t=>t.objects.length},{name:"operation",align:"center",label:"operation",field:"operation",type:"operation"}],u=D(),{actionLabelData:a,objectLabelData:c}=N(u),m=()=>{let t=a.value.at(-1).id;a.value.push({id:t+1,name:"new",color:k.randomColor(),objects:[0]})},v=t=>{k.confirm("Are you sure to delete label "+t.row.name+"?").onOk(()=>{t.row.id===u.currentThumbnailActionLabelId&&(u.currentThumbnailActionLabelId=null),a.value.splice(a.value.findIndex(n=>n.id===t.row.id),1)})},y=t=>{t.objects=c.value.map(n=>n.id)},_=t=>{t.objects=[0]},p=z(()=>{const t={};for(const n of a.value){t[n.id]={};for(const i of c.value)t[n.id][i.id]=n.objects.indexOf(i.id)!==-1}return t}),r=(t,n)=>{const i=a.value.find(f=>f.id===t);i.objects.indexOf(n)===-1?(i.objects.push(n),i.objects.sort((f,g)=>f-g)):i.objects.splice(i.objects.indexOf(n),1)};return(t,n)=>{const i=j,f=M,g=Z,h=K;return b(),S(U,null,[e(J,{title:"Action Labels",storeKey:"actionLabelData",columnList:s,importFunction:T(u).importActionLabelData,expand:"",onAdd:m,onDelete:v},{expand:l(({props:V})=>[e(h,{colspan:"100%",style:{"white-space":"normal"}},{default:l(()=>[L("div",Ae,[e(f,{dense:"",flat:""},{default:l(()=>[e(i,{size:"sm",outline:"",icon:"apps",onClick:q=>y(V.row),label:"Select All"},null,8,["onClick"]),e(i,{size:"sm",outline:"",icon:"clear_all",onClick:q=>_(V.row),label:"Clear All"},null,8,["onClick"])]),_:2},1024)]),L("div",Se,[(b(!0),S(U,null,B(T(c),q=>(b(),x(g,{square:"",key:q.id,selected:p.value[V.row.id][q.id],color:t.$q.dark.isActive?"primary":"secondary","onUpdate:selected":Q=>r(V.row.id,q.id)},{default:l(()=>[$(O(q.name),1)]),_:2},1032,["selected","color","onUpdate:selected"]))),128))])]),_:2},1024)]),_:1},8,["importFunction"]),e(ke)],64)}}},$e={__name:"ObjectLabelTable",setup(w){const s=[{name:"name",align:"center",label:"name",field:"name",type:"input"},{name:"color",align:"center",label:"color",field:"color",style:"width: 120px",type:"color"},{name:"operation",align:"center",label:"operation",field:"operation",type:"operation"}],u=D(),{objectLabelData:a}=N(u),c=()=>{let v=a.value.at(-1).id;a.value.push({id:v+1,name:"new",color:k.randomColor()})},m=v=>{k.confirm("Are you sure to delete label "+v.row.name+"?").onOk(()=>{a.value.splice(a.value.findIndex(y=>y.id===v.row.id),1)})};return(v,y)=>(b(),x(J,{title:"Object Labels",storeKey:"objectLabelData",columnList:s,importFunction:T(u).importObjectLabelData,onAdd:c,onDelete:m},null,8,["importFunction"]))}},De={class:"q-px-md q-pb-md"},Ie=L("div",{class:"q-table__title q-pb-sm"},"Preview (100px × 100px)",-1),Oe={__name:"SkeletonPreview",props:{typeId:{required:!0,type:Number}},setup(w){const s=w,u=E();return _e(()=>{const a=u.value.getContext("2d");pe(()=>D().skeletonTypeData.find(c=>c.id===s.typeId),()=>{a.clearRect(0,0,u.value.width,u.value.height);const c=new fe(200,200,s.typeId);c.ratio=4,c.highlight=!0,c.draw(a,!0)},{immediate:!0,deep:!0})}),(a,c)=>{const m=Y;return b(),S("div",De,[Ie,e(m,{flat:"",bordered:"",style:{width:"300px",margin:"0 auto"}},{default:l(()=>[L("canvas",{style:{height:"300px",width:"300px"},ref_key:"preview",ref:u,height:"400",width:"400"},null,512)]),_:1})])}}},Ue=L("div",{class:"col-6 q-table__title"},"Points",-1),je=L("div",{class:"col-6 q-table__title"},"Edges",-1),Qe={__name:"SkeletonTypeTable",setup(w){const s=[{name:"name",align:"center",label:"name",field:"name",type:"input"},{name:"description",align:"center",label:"description",field:"description",type:"input"},{name:"color",align:"center",label:"color",field:"color",style:"width: 120px",type:"color"},{name:"nPoints",align:"center",label:"#points",field:t=>t.pointList.length},{name:"nEdges",align:"center",label:"#edges",field:t=>t.edgeList.length},{name:"operation",align:"center",label:"operation",field:"operation",type:"operation"}],u=D(),{skeletonTypeData:a}=N(u),c=()=>{let t=a.value.at(-1).id;a.value.push({id:t+1,name:"new",description:"",color:k.randomColor(),pointList:[],edgeList:[]})},m=t=>{k.confirm("Are you sure to delete type "+t.row.name+"?").onOk(()=>{t.expand=!1,be(()=>{a.value.splice(a.value.findIndex(n=>n.id===t.row.id),1)})})},v=t=>{const n=t.row.pointList;let i=n.length?n.at(-1).id:-1;n.push({id:i+1,name:"new",x:0,y:0})},y=(t,n)=>{const i=t.row.edgeList,f=t.row.pointList,g=[];for(const h of i)(h.from===n.row.id||h.to===n.row.id)&&g.push(h);if(g.length!==0){k.notify("Please delete its corresponding edges first!"+g.map(h=>`
(${h.from} <=> ${h.to})`),"warning");return}k.confirm("Are you sure to delete point "+n.row.name+"?").onOk(()=>{f.splice(f.findIndex(h=>h.id===n.row.id),1)})},_=z(()=>{const t={};for(const n of a.value)t[n.id]=n.pointList.map(i=>({label:i.name,value:i.id})),t[n.id].unshift({label:"center",value:-1});return t}),p=t=>{const n=t.row.edgeList;let i=n.length?n.at(-1).id:-1;n.push({id:i+1,from:-1,to:-1})},r=(t,n)=>{k.confirm("Are you sure to delete edge ("+n.row.from+" <=> "+n.row.to+")?").onOk(()=>{const i=t.row.edgeList;i.splice(i.findIndex(f=>f.id===n.row.id),1)})};return(t,n)=>{const i=F,f=j,g=X,h=K,V=H,q=ee,Q=he;return b(),x(J,{title:"Skeleton Types",storeKey:"skeletonTypeData",columnList:s,importFunction:T(u).importSkeletonTypeData,expand:"",onAdd:c,onDelete:m},{expand:l(({props:C})=>[e(h,{colspan:"100%"},{default:l(()=>[e(Oe,{"type-id":C.row.id},null,8,["type-id"]),e(q,{flat:"",dense:"","row-key":"id",rows:C.row.pointList,columns:[{name:"name",align:"center",label:"name",field:"name"},{name:"x",align:"left",label:"x",field:"x"},{name:"y",align:"left",label:"y",field:"y"},{name:"operation",align:"operation",label:"operation",field:"operation"}],pagination:{rowsPerPage:0}},{top:l(o=>[Ue,e(i),e(f,{size:"sm",outline:"",icon:"add",onClick:d=>v(C),label:"add"},null,8,["onClick"])]),body:l(o=>[e(V,null,{default:l(()=>[e(h,null,{default:l(()=>[e(g,{"input-class":"text-center",modelValue:o.row.name,"onUpdate:modelValue":d=>o.row.name=d,borderless:"",dense:"","hide-bottom-space":"",rules:[d=>d.length!==0||"Please enter at least 1 character"]},null,8,["modelValue","onUpdate:modelValue","rules"])]),_:2},1024),e(h,null,{default:l(()=>[e(g,{modelValue:o.row.x,"onUpdate:modelValue":d=>o.row.x=d,modelModifiers:{number:!0},borderless:"",dense:"",debounce:1500,onMousewheel:n[0]||(n[0]=P(()=>{},["prevent"]))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(h,null,{default:l(()=>[e(g,{modelValue:o.row.y,"onUpdate:modelValue":d=>o.row.y=d,modelModifiers:{number:!0},borderless:"",dense:"",debounce:1500,onMousewheel:n[1]||(n[1]=P(()=>{},["prevent"]))},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(h,null,{default:l(()=>[e(f,{icon:"delete",color:"negative",flat:"",dense:"",style:{width:"100%"},onClick:d=>y(C,o)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1032,["rows"]),e(q,{flat:"",dense:"","row-key":"id",rows:C.row.edgeList,columns:[{name:"from",align:"left",label:"from",field:"from"},{name:"to",align:"left",label:"to",field:"to"},{name:"operation",align:"center",label:"operation",field:"operation"}],pagination:{rowsPerPage:0}},{top:l(o=>[je,e(i),e(f,{size:"sm",outline:"",icon:"add",onClick:d=>p(C),label:"add"},null,8,["onClick"])]),body:l(o=>[e(V,{props:o},{default:l(()=>[e(h,null,{default:l(()=>[e(Q,{modelValue:o.row.from,"onUpdate:modelValue":d=>o.row.from=d,"stack-label":"",dense:"","options-dense":"",borderless:"","map-options":"","emit-value":"",options:_.value[C.key]},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024),e(h,null,{default:l(()=>[e(Q,{modelValue:o.row.to,"onUpdate:modelValue":d=>o.row.to=d,"stack-label":"",dense:"","options-dense":"",borderless:"","map-options":"","emit-value":"",options:_.value[C.key]},null,8,["modelValue","onUpdate:modelValue","options"])]),_:2},1024),e(h,null,{default:l(()=>[e(f,{icon:"delete",color:"negative",flat:"",dense:"",style:{width:"100%"},onClick:d=>r(C,o)},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["rows"])]),_:2},1024)]),_:1},8,["importFunction"])}}},Ee={style:{"max-width":"800px",margin:"0 auto"},class:"q-gutter-md"},Me={class:"row"},ze=L("div",{class:"text-h5"},"Configuration",-1),Ne={__name:"Configuration",setup(w){const s=D(),u=()=>{k.confirm("Are you sure to load? This would override the configuration!").onOk(()=>{k.importFile().then(c=>{try{s.importConfig(JSON.parse(c)),k.notify("Load successfully!","positive")}catch(m){k.notify(`Could not load config: ${m}`,"negative")}})})},a=()=>{k.prompt("Save","Enter configuration filename for saving","config").onOk(c=>{const m=s.exportConfig(),v=new Blob([JSON.stringify(m)],{type:"text/plain"});ve(c+".json",v)})};return(c,m)=>{const v=F,y=j,_=M;return b(),S("div",Ee,[L("div",Me,[ze,e(v),e(_,{flat:""},{default:l(()=>[e(y,{outline:"",icon:"publish",label:"load",onClick:u}),e(y,{outline:"",color:"primary",icon:"get_app",label:"save",onClick:a})]),_:1})]),e($e),e(Te),e(Qe)])}}};export{Ne as default};

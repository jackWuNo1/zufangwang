﻿!function(window,d){var IsNewProject=!1,keyword=d.getElementById("input_PROJNAME"),suggestion=d.getElementById("Suggestion"),suggrow0text="输中文/上下键选择",zz_proname="",text="",searhbus="",index=0,RentManageValueS="",InputSuggesTion={onload:function(){null!=suggestion&&(suggestion.rows[0].cells[0].innerHTML=suggrow0text,suggestion.style.top="-1px"),keyword.onfocus=function(){suggestion.style.display="",IsNewProject=!1,"请输入小区名称"==keyword.value&&(keyword.value=""),message.tips(d.getElementById("sp_projname"),"点选下拉框提示楼盘 更有利于网友搜索到您的房源")},keyword.onblur=function(){if(d.getElementById("sp_projname").style.color="Red",""==this.value&&(this.value=this.defaultValue,suggestion.style.display="none"),""==keyword.value&&(keyword.value="请输入小区名称"),""==d.getElementById("input_PROJCODE").value||"-2"==d.getElementById("input_PROJCODE").value){var e=suggestion.rows[1],t=e.getAttribute("address"),n=e.getAttribute("district"),s=e.getAttribute("comerce"),o=e.getAttribute("newcode"),i=e.getAttribute("projtype");e.getAttribute("projname");""!==o&&"-2"!==o?(InputSuggesTion.UseProjListItem(t,n,s,o,i),d.getElementById("trdistrict").style.display="none",d.getElementById("trProjAddress").style.display=""):InputSuggesTion.noproject()}else d.getElementById("trdistrict").style.display="none",InputSuggesTion.checkprojname()},keyword.oncontextmenu=function(){return!1},keyword.onkeypress=function(e){if(e=e||window.event,""==suggestion.style.display&&13==e.keyCode)return!1},keyword.onkeyup=function(e){if(suggestion.style.display="",e=e||window.event,InputSuggesTion.__IsInput(e))if(""==suggestion.style.display){if(13==e.keyCode){if(index>0){if(suggestion.rows.length<=1)index=0;else{if(this.value=suggestion.rows[index].cells[0].innerHTML,InputSuggesTion.UseProjListItem(suggestion.rows[index].getAttribute("address"),suggestion.rows[index].getAttribute("district"),suggestion.rows[index].getAttribute("comerce"),suggestion.rows[index].getAttribute("newcode"),suggestion.rows[index].getAttribute("projtype")),InputSuggesTion.haveSelectProj(),"undefined"!=typeof this.value){var t=this.value;t.length>10&&(t=t.substring(0,9)+".."),Input.AddTitleContext()}d.getElementById("trdistrict").style.display="none",d.getElementById("trProjAddress").style.display=""}suggestion.style.display="none"}return!1}40==e.keyCode?suggestion.rows.length>1&&(suggestion.rows[index].childNodes[0].className="",index++,index==suggestion.rows.length&&(index=1),suggestion.rows[index].childNodes[0].className="itemFocus"):38==e.keyCode?suggestion.rows.length>1&&(suggestion.rows[index].childNodes[0].className="",index--,index<1&&(index=suggestion.rows.length-1),suggestion.rows[index].childNodes[0].className="itemFocus"):27==e.keyCode&&(suggestion.style.display="none")}else 40==e.keyCode&&(suggestion.style.display="");else if(this.value!=text)if(InputSuggesTion.RemoveProjNameRelational(),text=this.value,""!=text)suggestion.rows[0].cells[0].innerHTML="Load......",clearTimeout(searhbus),searhbus=setTimeout(InputSuggesTion.getResponseBusInfo,500);else for(var n=suggestion.rows.length-1;n>0;n--)suggestion.tBodies[0].removeChild(suggestion.rows[n])},suggestion.onclick=function(e){e=e||window.event;var t=e.target||e.srcElement;index=parseInt(t.parentNode.getAttribute("index")),index>0&&(keyword.value=t.parentNode.cells[0].innerHTML,zz_proname=keyword.value,text=keyword.value,""!==suggestion.rows[index].getAttribute("newcode")&&"-2"!=suggestion.rows[index].getAttribute("newcode")?(InputSuggesTion.UseProjListItem(suggestion.rows[index].getAttribute("address"),suggestion.rows[index].getAttribute("district"),suggestion.rows[index].getAttribute("comerce"),suggestion.rows[index].getAttribute("newcode"),suggestion.rows[index].getAttribute("projtype")),d.getElementById("trdistrict").style.display="none",d.getElementById("trProjAddress").style.display=""):(InputSuggesTion.RemoveProjNameRelational(),d.getElementById("trdistrict").style.display="",d.getElementById("trProjAddress").style.display="none"),Input.AddTitleContext(),InputSuggesTion.haveSelectProj()),suggestion.style.display="none"},"True"!=isEdit&&(searhbus=setTimeout(InputSuggesTion.getResponseBusInfo,500),suggestion.style.display="none"),InputSuggesTion.AddRentManage(""),InputSuggesTion.HideSuggestion()},getResponseBusInfo:function(){if(d.getElementById("input_PROJNAME")&&d.getElementById("MyHouseType")){var e=d.getElementById("input_PROJNAME").value,t=d.getElementById("MyHouseType").value,n="/rentinput/PostService/GetNewDictList.aspx?key=",s=n+escape(e)+"&purpose="+escape(t);if(""!=e&&"请输入小区名称"!=e)jQuery.ajax({type:"get",url:s,dataType:"json"}).done(function(e){e&&InputSuggesTion.ShowHint_zz(e.hits)});else for(var o=suggestion.rows.length-1;o>0;o--)suggestion.tBodies[0].removeChild(suggestion.rows[o])}},AddRow:function(e,t,n,s,o,i){var d=document.createElement("TR");d.setAttribute("index",suggestion.rows.length),d.setAttribute("newcode",t),d.setAttribute("address",n),d.setAttribute("district",s),d.setAttribute("comerce",o),d.setAttribute("projtype",i),d.className="item",d.style.cursor="pointer";var r=document.createElement("TD");Common.GetStringLength(e)>30&&(e=Common.GetSubString(e,30)),r.innerHTML=e,r.style.color="#333333",d.appendChild(r),d.onmouseover=function(){var e=parseInt(this.getAttribute("index"));e!=index&&(index!=-1&&suggestion.rows[index]&&(suggestion.rows[index].childNodes[0].className="item"),this.childNodes[0].className="itemFocus",index=e)},suggestion.tBodies[0].appendChild(d)},isContentproj:function(e,t){for(var n=!1,s=0;s<e.length;s++)if(e[s].projname===t){n=!0;break}return n},ShowHint_zz:function(data){var browserName=navigator.appName;suggestion.rows[0].cells[0].innerHTML=suggrow0text;for(var projnew=d.getElementById("input_PROJNAME").value,i=suggestion.rows.length-1;i>0;i--)suggestion.tBodies[0].removeChild(suggestion.rows[i]);try{if(""!=data){data=eval(data),InputSuggesTion.isContentproj(data,projnew)||InputSuggesTion.AddRow(projnew,"","","","","");for(var i=0;i<data.length;i++)InputSuggesTion.AddRow(data[i].projname,data[i].newcode,data[i].address,data[i].district,data[i].comarea,data[i].purpose)}}catch(err){}suggestion.rows.length>1?(d.getElementById("trdistrict").style.display="none",suggestion.style.display="",index=1,suggestion.rows[1].childNodes[0].className="itemFocus"):(InputSuggesTion.AddRow(projnew,"","","","",""),InputSuggesTion.noproject()),message.warn(d.getElementById("sp_projname"),"点选下拉框提示楼盘 更有利于网友搜索到您的房源")},AddRentManage:function(e){RentManageValueS=0,jQuery.ajax({url:"/RentInput/PostService/RentInputAbout/CheckProjName.aspx?projName="+escape(e),type:"GET",dataType:"json",success:function(e){RentManageValueS=e.result,1==RentManageValueS?d.getElementById("sp_projname").innerHTML="<img src='http://img.fang.com/secondhouse/image/esfnew/images/delegateandjx/tureicon.gif' /><span style='color:blue'>您已经发布该楼盘出租信息，点击</span><a  target='_blank' href='/rentinput/UserCenter/RentManage.aspx' style='color:red'>管理出租房源</>":0==RentManageValueS&&message.succeed(d.getElementById("sp_projname")),isPrjname=!0},beforeSend:function(e){isload=!1},error:function(){isload=!1}})},haveSelectProj:function(){IsNewProject=!1,InputSuggesTion.AddRentManage(d.getElementById("input_PROJNAME").value),message.succeed(d.getElementById("sp_address")),isPrjaddress=!0},HideSuggestion:function(){for(var e=[document,document.body,document.documentElement],t=0;t<e.length;t++)if(null==e[t].onclick){e[t].onclick=function(e){e=e||window.event;var t=e.target||e.srcElement;""==suggestion.style.display&&t!=keyword&&(suggestion.style.display="none")};break}},__IsInput:function(e){return InputSuggesTion.__IsSelect(e)||InputSuggesTion.__IsMove(e)||9==e.keyCode||13==e.keyCode},noproject:function(){d.getElementById("trdistrict").style.display="",d.getElementById("trProjAddress").style.display="none",IsNewProject=!0,InputSuggesTion.checkprojname()},checkprojname:function(){var e=d.getElementById("input_PROJNAME").value.trim(),t=d.getElementById("sp_projname"),n=!1;return"请输入小区名称"==e&&(e=""),Common.GetLength(e)>=1&&Common.GetLength(e)<=30?Common.isBadwords(e)?message.warn(t,"小区名称含有敏感字符"):/^[-]?\d+$/.test(e)?message.warn(t,"小区名称不可全为数字"):/\d{7}/.test(e)?message.warn(t,"小区名称不允许包含联系方式"):(InputSuggesTion.AddRentManage(d.getElementById("input_PROJNAME").value),n=!0):""==d.getElementById("input_PROJNAME").value?message.warn(t,"请填写小区名称"):message.warn(t,"小区名称限1-30个字符"),n},UseProjListItem:function(e,t,n,s,o,i){"普通住宅"!=o&&"住宅"!=o&&"公寓"!=o||(o="住宅");for(var r=window.document.getElementsByName("input_n_str_PURPOSE"),u=0;u<r.length;u++)r[u].value==o&&(r[u].checked=!0),r[u].disabled=!0;if(d.getElementById("input_PROJCODE").value=s,""!=s&&jQuery.ajax({url:"/rentinput/postservice/rentinputabout/getprojdata.aspx?newcode="+s,success:function(e){InputSuggesTion.BindProjData(e)}}),e.length>30){var g=e.substr(0,30);d.getElementById("input_ADDRESS").value=g}else d.getElementById("input_ADDRESS").value=e;d.getElementById("input_ADDRESS").readOnly=!0;if(d.getElementById("input_DISTRICT").value=t,d.getElementById("input_COMAREA").value=n,message.succeed(d.getElementById("sp_address")),d.getElementById("sp_districtcomarea").innerHTML=t+"-"+n+" "+d.getElementById("input_ADDRESS").value,s&&"0"!=s.toString()){var a=document.createElement("span");a.id="addrspan_1",a.className="button darkgray"}},RemoveProjNameRelational:function(){if(d.getElementById("input_ADDRESS").readOnly=!1,d.getElementById("input_PROJCODE").value="",d.getElementById("input_DISTRICT").value=d.getElementById("District_Text").innerHTML||"",d.getElementById("input_COMAREA").value=d.getElementById("Comarea_Text").innerHTML||"",d.getElementById("sp_districtcomarea").value="",d.getElementById("sp_address").innerHTML="",d.getElementById("selDistrict").selectedIndex=0,d.getElementById("addrspan_1")){var e=d.getElementById("addrspan_1");e.parentNode.removeChild(e)}if(d.getElementById("addrlist_1")){var e=d.getElementById("addrlist_1");e.parentNode.removeChild(e)}if(d.getElementById("addrlist_2")){var e=d.getElementById("addrlist_2");e.parentNode.removeChild(e)}d.getElementById("input_TRAFFICINFO").value="",d.getElementById("input_AROUNDCONDITION").value=""},BindProjData:function(data){d.getElementById("input_TRAFFICINFO").value="",d.getElementById("input_AROUNDCONDITION").value="",data=eval("("+data+")");var busNode=data.bustext;busNode&&(d.getElementById("input_TRAFFICINFO").value=busNode.substr(0,200));var aroundNode=data.aroundservice;aroundNode&&(d.getElementById("input_AROUNDCONDITION").value=aroundNode.substr(0,200))},__IsSelect:function(e){return e.shiftKey||e.ctrlKey&&e.shiftKey?e.keyCode>=35&&e.keyCode<=40:!(!e.ctrlKey||e.shiftKey)&&65==e.keyCode},__IsMove:function(e){return e.keyCode>=35&&e.keyCode<=40}};window.InputSuggesTion=InputSuggesTion,InputSuggesTion.onload()}(window,document);
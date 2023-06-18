//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_752F||null!=window.HYPE_dtl_752F)||false==!0||null!=c&&10>c;a=!0==d?"HYPE-752.full.min.js":"HYPE-752.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_752"+c,"HYPE_dtl_752"+c,a,d),false==!0&&(a=a||k("HYPE_w_752","HYPE_wdtl_752","HYPE-752.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_752","HYPE-752.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"typewriter",source:"function(hypeDocument, element, event) {\nconsole.clear();\n\nconst titleContainer = document.querySelector('#title-container');\nconst titleText = \"Unleashing the Power of Analytics: Harnessing Data to Drive Educational Excellence\";\n\nconst blurbContainer = document.querySelector('#blurb-container');\nconst blurbText = \"Join us for an immersive webinar as we delve into the world of analytics in education and discover the transformative potential it holds for educators, administrators, and learners alike. In this webinar, we will explore how leveraging analytics can revolutionize the way we approach educational video content, empowering us to make data-driven decisions and enhance learning outcomes.\";\n\n\nfunction typewriterBlurb(string){\n  let increment = 0;\n  const characters = [];\n  let print = \"\";\n\n  for (let i = 0; i < string.length; i++) {\n    characters.push(string[i]);\n  }\n\n  const interval = setInterval(()=>{\n\n    print += characters[increment];\n    blurbContainer.innerHTML = print;\n    increment +=1;\n\n    if(increment == string.length){\n      clearInterval(interval);\n      console.log('done blurb');\n    }\n\n  }, 20);\n }\n\n\nfunction typewriterTitle(string){\n  let increment = 0;\n  const characters = [];\n  let print = \"\";\n\n  for (let i = 0; i < string.length; i++) {\n    characters.push(string[i]);\n  }\n\n  const interval = setInterval(()=>{\n\n    print += characters[increment];\n    titleContainer.innerHTML = print;\n    increment +=1;\n\n    if(increment == string.length){\n      clearInterval(interval);\n      typewriterBlurb(blurbText);\n      console.log('done title');\n    }\n\n  }, 20);\n }\n\n typewriterTitle(titleText);\n\t\n}",identifier:"58"},{name:"untitledFunction",source:"function(hypeDocument, element, event) {\t\nfunction copyToClipboard(text) {\n  navigator.clipboard.writeText(text)\n    .then(() => {\n      console.log('Text copied to clipboard');\n    })\n    .catch((error) => {\n      console.error('Error copying text to clipboard:', error);\n    });\n}\n\n// Usage\nconst textToCopy = \"leveraging data for improved learning outcomes\";\ncopyToClipboard(textToCopy);\n\t\n}",identifier:"190"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_752"+c](f,g,{"60":{p:1,n:"poll_3_2x.png",g:"177",o:true,t:"@2x"},"-2":{n:"blank.gif"},"47":{p:1,n:"steps_2.png",g:"56",o:true,t:"@1x"},"54":{p:1,n:"btn_done.png",g:"187",o:true,t:"@1x"},"61":{p:1,n:"poll_2.png",g:"179",o:true,t:"@1x"},"48":{p:1,n:"steps_2_2x.png",g:"56",o:true,t:"@2x"},"55":{p:1,n:"btn_done_2x.png",g:"187",o:true,t:"@2x"},"62":{p:1,n:"poll_2_2x.png",g:"179",o:true,t:"@2x"},"49":{p:1,n:"steps_3.png",g:"122",o:true,t:"@1x"},"56":{n:"poll.mp4",g:"193",t:"video/mp4"},"63":{p:1,n:"poll_1.png",g:"181",o:true,t:"@1x"},"57":{p:1,n:"interactivity_text.png",g:"183",o:true,t:"@1x"},"64":{p:1,n:"poll_1_2x.png",g:"181",o:true,t:"@2x"},"58":{p:1,n:"interactivity_text_2x.png",g:"183",o:true,t:"@2x"},"65":{p:1,n:"title_step_3.png",g:"74",t:"@1x"},"0":{p:1,n:"suggestions.png",g:"5",o:true,t:"@1x"},"59":{p:1,n:"poll_3.png",g:"177",o:true,t:"@1x"},"1":{p:1,n:"suggestions_2x.png",g:"5",o:true,t:"@2x"},"2":{p:1,n:"btn_continue_disable.png",g:"7",o:true,t:"@1x"},"3":{p:1,n:"btn_continue_disable_2x.png",g:"7",o:true,t:"@2x"},"4":{p:1,n:"btn_continue.png",g:"9",t:"@1x"},"5":{p:1,n:"btn_generate.png",g:"14",o:true,t:"@1x"},"6":{p:1,n:"btn_generate_2x.png",g:"14",o:true,t:"@2x"},"7":{p:1,n:"date_and_time.png",g:"22",t:"@1x"},"10":{p:1,n:"thumbnail_1_2x.png",g:"43",o:true,t:"@2x"},"8":{p:1,n:"title_step_1.png",g:"16",t:"@1x"},"9":{p:1,n:"thumbnail_1.png",g:"43",o:true,t:"@1x"},"11":{p:1,n:"title_step_2.png",g:"54",t:"@1x"},"12":{p:1,n:"thumbnail_2.png",g:"76",o:true,t:"@1x"},"13":{p:1,n:"thumbnail_2_2x.png",g:"76",o:true,t:"@2x"},"20":{p:1,n:"thumbnail_0.png",g:"87",o:true,t:"@1x"},"21":{p:1,n:"thumbnail_0_2x.png",g:"87",o:true,t:"@2x"},"14":{p:1,n:"regenerate_t_btn.png",g:"78",o:true,t:"@1x"},"22":{p:1,n:"lp_04_l.png",g:"89",o:true,t:"@1x"},"15":{p:1,n:"regenerate_t_btn_2x.png",g:"78",o:true,t:"@2x"},"30":{p:1,n:"lp_02_l.png",g:"97",o:true,t:"@1x"},"23":{p:1,n:"lp_04_l_2x.png",g:"89",o:true,t:"@2x"},"16":{p:1,n:"thumbnail_3.png",g:"82",o:true,t:"@1x"},"31":{p:1,n:"lp_02_l_2x.png",g:"97",o:true,t:"@2x"},"24":{p:1,n:"lp_04_d.png",g:"91",o:true,t:"@1x"},"17":{p:1,n:"thumbnail_3_2x.png",g:"82",o:true,t:"@2x"},"32":{p:1,n:"lp_02_d.png",g:"99",o:true,t:"@1x"},"25":{p:1,n:"lp_04_d_2x.png",g:"91",o:true,t:"@2x"},"18":{p:1,n:"thumbnail_4.png",g:"85",o:true,t:"@1x"},"40":{p:1,n:"toggle_d_on.png",g:"111",o:true,t:"@1x"},"33":{p:1,n:"lp_02_d_2x.png",g:"99",o:true,t:"@2x"},"26":{p:1,n:"lp_03_l.png",g:"93",o:true,t:"@1x"},"19":{p:1,n:"thumbnail_4_2x.png",g:"85",o:true,t:"@2x"},"41":{p:1,n:"toggle_d_on_2x.png",g:"111",o:true,t:"@2x"},"34":{p:1,n:"lp_01_l.png",g:"101",o:true,t:"@1x"},"27":{p:1,n:"lp_03_l_2x.png",g:"93",o:true,t:"@2x"},"42":{p:1,n:"toggle_l_on.png",g:"107",t:"@1x"},"35":{p:1,n:"lp_01_l_2x.png",g:"101",o:true,t:"@2x"},"28":{p:1,n:"lp_03_d.png",g:"95",o:true,t:"@1x"},"43":{p:1,n:"btn_selected.png",g:"118",o:true,t:"@1x"},"50":{p:1,n:"steps_3_2x.png",g:"122",o:true,t:"@2x"},"36":{p:1,n:"lp_01_d.png",g:"103",o:true,t:"@1x"},"29":{p:1,n:"lp_03_d_2x.png",g:"95",o:true,t:"@2x"},"44":{p:1,n:"btn_selected_2x.png",g:"118",o:true,t:"@2x"},"51":{p:1,n:"title_step_4.png",g:"175",t:"@1x"},"37":{p:1,n:"lp_01_d_2x.png",g:"103",o:true,t:"@2x"},"45":{p:1,n:"steps_1.png",g:"18",o:true,t:"@1x"},"52":{p:1,n:"steps_4.png",g:"185",o:true,t:"@1x"},"38":{p:1,n:"toggle_d_off.png",g:"113",t:"@1x"},"-1":{n:"PIE.htc"},"46":{p:1,n:"steps_1_2x.png",g:"18",o:true,t:"@2x"},"39":{p:1,n:"toggle_l_off.png",g:"109",t:"@1x"},"53":{p:1,n:"steps_4_2x.png",g:"185",o:true,t:"@2x"}},
l,[],e,[{n:"Main",o:"1",X:[0]}],[{o:"3",p:"600px",a:100,Y:1280,Z:800,b:100,cA:false,c:"#FFF",L:[],bY:1,d:1280,U:{"234":{V:{Hover:"263","Main Timeline":"262"},W:"262",n:"Thumbnails"},"226":{V:{"Reveal details":"261","Main Timeline":"260"},W:"260",n:"Step 2"},"206":{V:{"Show dark theme":"259","Show light theme":"258","Main Timeline":"257"},W:"257",n:"Step 3"},"243":{V:{"Show dark theme":"266","Show light theme":"265","Main Timeline":"264"},W:"264",n:"Step 4"},"253":{V:{"Main Timeline":"267"},W:"267",n:"Step 1"}},T:{"258":{c:"206",q:false,z:0.04,i:"258",a:[{f:"c",y:0,z:0.04,i:"e",e:0,r:true,s:1,o:"217"},{f:"c",y:0,z:0.04,i:"e",e:1,r:true,s:0,o:"219"},{f:"c",y:0,z:0.04,i:"e",e:1,r:true,s:1,o:"220"},{f:"c",y:0,z:0.04,i:"e",e:0,r:true,s:1,o:"209"},{y:0.04,i:"e",s:0,z:0,o:"217",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"219",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"220",f:"c"},{y:0.04,i:"e",s:0,z:0,o:"209",f:"c"}],n:"Show light theme",f:30,b:[]},"264":{c:"243",q:false,z:5.09,i:"264",a:[{y:0,p:1,i:"Video Track",z:5.09,o:"250",f:"c"}],n:"Main Timeline",f:30,b:[]},"267":{c:"253",q:false,z:0,i:"267",a:[],n:"Main Timeline",f:30,b:[]},"262":{c:"234",q:false,z:3.15,i:"262",a:[{f:"c",y:0,z:0.16,i:"e",e:0.6,s:1,o:"241"},{f:"c",y:0.16,z:0.16,i:"e",e:1,s:0.6,o:"241"},{f:"c",y:1.02,z:0.16,i:"e",e:0.6,s:1,o:"241"},{f:"c",y:1.18,z:0.16,i:"e",e:1,s:0.6,o:"241"},{f:"c",y:2.04,z:0.08,i:"e",e:1,s:0,o:"237"},{f:"c",y:2.04,z:0.06,i:"e",e:0,s:1,o:"241"},{f:"c",p:2,y:2.1,z:0.08,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"47"}]},s:{a:[{p:7,b:"262",symbolOid:"47"}]},o:"262"},{y:2.1,i:"e",s:0,z:0,o:"241",f:"c"},{f:"c",y:2.12,z:0.08,i:"e",e:1,s:0,o:"240"},{f:"c",y:2.12,z:0.24,i:"e",e:1,s:1,o:"237"},{f:"c",p:2,y:2.18,z:0.08,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"47"}]},s:{a:[{p:7,b:"262",symbolOid:"47"}]},o:"262"},{f:"c",y:2.2,z:0.08,i:"e",e:1,s:0,o:"242"},{y:2.2,i:"e",s:1,z:0,o:"240",f:"c"},{f:"c",p:2,y:2.26,z:0.1,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"47"}]},s:{a:[{p:7,b:"262",symbolOid:"47"}]},o:"262"},{f:"c",y:2.28,z:0.08,i:"e",e:1,s:0,o:"236"},{y:2.28,i:"e",s:1,z:0,o:"242",f:"c"},{f:"c",p:2,y:3.06,z:0.09,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:7,b:"262",symbolOid:"47"}]},o:"262"},{f:"c",y:3.06,z:0.09,i:"e",e:1,s:0,o:"238"},{y:3.06,i:"e",s:1,z:0,o:"236",f:"c"},{f:"c",y:3.06,z:0.09,i:"e",e:1,s:1,o:"237"},{f:"c",p:2,y:3.15,z:0,i:"ActionHandler",s:{a:[{p:7,b:"262",symbolOid:"47"}]},o:"262"},{y:3.15,i:"e",s:1,z:0,o:"238",f:"c"},{y:3.15,i:"e",s:1,z:0,o:"237",f:"c"}],n:"Main Timeline",f:30,b:[]},"265":{c:"243",q:false,z:0,i:"265",a:[],n:"Show light theme",f:30,b:[]},"260":{c:"226",q:false,z:0,i:"260",a:[],n:"Main Timeline",f:30,b:[]},"259":{c:"206",q:false,z:0.04,i:"259",a:[{f:"c",y:0,z:0.04,i:"e",e:1,r:true,s:1,o:"217"},{f:"c",y:0,z:0.04,i:"e",e:0,r:true,s:0,o:"219"},{f:"c",y:0,z:0.04,i:"e",e:1,r:true,s:1,o:"209"},{y:0.04,i:"e",s:1,z:0,o:"217",f:"c"},{y:0.04,i:"e",s:0,z:0,o:"219",f:"c"},{y:0.04,i:"e",s:1,z:0,o:"209",f:"c"}],n:"Show dark theme",f:30,b:[]},"257":{c:"206",q:false,z:0,i:"257",a:[],n:"Main Timeline",f:30,b:[]},"263":{c:"234",q:false,z:0.08,i:"263",a:[{f:"c",y:0,z:0.08,i:"e",e:1,s:0,o:"239"},{y:0.08,i:"e",s:1,z:0,o:"239",f:"c"}],n:"Hover",f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:5.09,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:0.08,i:"e",e:0,s:1,o:"253"},{f:"c",y:0,z:0.15,i:"e",e:1,s:0,o:"198"},{f:"c",p:2,y:0,z:0.15,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0,z:0.15,i:"e",e:0,s:1,o:"199"},{f:"c",y:0.07,z:0.01,i:"cY",e:"0",s:"1",o:"226"},{f:"c",y:0.08,z:0.14,i:"cY",e:"0",s:"0",o:"226"},{f:"c",y:0.08,z:0.07,i:"e",e:1,s:0,o:"226"},{y:0.08,i:"e",s:0,z:0,o:"253",f:"c"},{f:"c",y:0.15,z:0.15,i:"e",e:1,s:0,o:"200"},{f:"c",p:2,y:0.15,z:0.15,i:"ActionHandler",e:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:0.15,z:0.07,i:"e",e:0,s:1,o:"226"},{f:"c",y:0.15,z:0.15,i:"e",e:0,s:1,o:"198"},{y:0.15,i:"e",s:0,z:0,o:"199",f:"c"},{f:"c",y:0.22,z:0.01,i:"cY",e:"0",s:"1",o:"206"},{f:"c",y:0.22,z:0.01,i:"cY",e:"1",s:"0",o:"226"},{y:0.22,i:"e",s:0,z:0,o:"226",f:"c"},{f:"c",y:0.23,z:0.15,i:"cY",e:"0",s:"0",o:"206"},{y:0.23,i:"cY",s:"1",z:0,o:"226",f:"c"},{f:"c",y:0.23,z:0.07,i:"e",e:1,s:0,o:"206"},{f:"c",p:2,y:1,z:0.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"201"},{f:"c",y:1,z:0.08,i:"e",e:0,s:1,o:"206"},{f:"c",y:1,z:0.15,i:"e",e:0,s:1,o:"200"},{y:1,i:"e",s:0,z:0,o:"198",f:"c"},{f:"c",y:1.08,z:0.01,i:"cY",e:"1",s:"0",o:"206"},{y:1.08,i:"e",s:0,z:0,o:"206",f:"c"},{f:"c",y:1.09,z:0.01,i:"cY",e:"0",s:"1",o:"243"},{y:1.09,i:"cY",s:"1",z:0,o:"206",f:"c"},{f:"c",y:1.09,z:0.06,i:"e",e:1,s:0,o:"204"},{y:1.1,i:"cY",s:"0",z:0,o:"243",f:"c"},{f:"c",y:1.1,z:0.05,i:"e",e:1,s:0,o:"243"},{f:"c",p:2,y:1.15,z:0,i:"ActionHandler",s:{a:[{p:7,b:"kTimelineDefaultIdentifier",symbolOid:"2"}]},o:"kTimelineDefaultIdentifier"},{y:1.15,i:"e",s:1,z:0,o:"243",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"201",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"204",f:"c"},{y:1.15,i:"e",s:0,z:0,o:"200",f:"c"}],f:30,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"267"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"257"},{D:5.09,H:true,E:true,z:false,F:0,G:0,C:0,b:"264"},{D:0,H:true,E:true,z:false,F:0,G:0,C:0.07,b:"260"}]},"266":{c:"243",q:false,z:0,i:"266",a:[],n:"Show dark theme",f:30,b:[]},"261":{c:"226",q:false,z:3.27,i:"261",a:[{f:"c",y:0,z:0.01,i:"cY",e:"0",r:true,s:"1",o:"232"},{f:"c",y:0,z:0.07,i:"e",e:0,r:true,s:1,o:"227"},{f:"c",y:0.01,z:0.07,i:"e",e:1,r:true,s:0,o:"232"},{y:0.01,i:"cY",s:"0",z:0,o:"232",f:"c"},{f:"c",y:0.07,z:0.01,i:"cY",e:"1",r:true,s:"0",o:"227"},{y:0.07,i:"e",s:0,z:0,o:"227",f:"c"},{y:0.08,i:"cY",s:"1",z:0,o:"227",f:"c"},{y:0.08,i:"e",s:1,z:0,o:"232",f:"c"}],n:"Reveal details",f:30,b:[{D:3.15,H:true,E:true,z:false,F:0,G:0,C:0.12,b:"262"}]}},bZ:180,O:["245","244","243","208","207","206","214","228","226","255","254","253","247","252","217","216","215","230","229","256","219","218","231","246","250","249","212","209","222","220","213","223","225","241","238","236","242","240","237","235","234","232","227","233","239","248","251","210","224","211","221","196","201","200","198","199","197","204","203","205","202"],n:"Untitled Layout","_":0,v:{"197":{x:"visible",k:"div",c:580,d:24,z:2,a:41,j:"absolute",bF:"196",b:33},"232":{x:"visible",b:200,k:"div",c:860,d:340,z:2,e:0,a:0,bF:"226",j:"absolute",cY:"1"},"218":{h:"109",p:"no-repeat",x:"visible",a:101,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"215",b:0,d:32,k:"div",c:102},"225":{h:"118",p:"no-repeat",x:"visible",a:8,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,bF:"208",b:219,d:32,k:"div",c:106},"198":{h:"56",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:2,bF:"197",dB:"img",d:24,k:"div",c:580,e:0},"226":{x:"visible",a:210,bS:37,b:54,j:"absolute",cY:"1",c:860,k:"div",bY:1,d:657,z:4,cA:false,e:0,bZ:180,bX:false,cV:[]},"233":{c:587,d:340,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:0,w:"<div class=\"event-details\">\n<h1 class=\"title-event\" id=\"title-container\" contenteditable=\"true\"></h1>\n<p class=\"blurb\" id=\"blurb-container\" contenteditable=\"true\"></p>\n</div>\n\n\n<style>\n\ndiv.event-details{\n font-family:lato, helvetica, arial;\n}\n\nh1.title-event{\n font-size:18px; font-weight:700; margin:0 0 8px 0;\n}\n\nh1.title-event:focus{\n outline:none;\n}\n\np.blurb{\n font-size:16px; font-weight:400; line-height:140%; margin:0 0 8px 0;\n}\n\np.blurb:focus{\n outline:none;\n}\n\n\n</style>",bF:"232",A:"#CCC",x:"visible",j:"absolute",B:"#CCC",N:0,O:0,C:"#CCC",z:1,P:0,D:"#CCC",k:"div",a:273,b:0},"240":{w:"",h:"76",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"235",r:"inline",z:2,dB:"img",d:140,k:"div",c:249,e:0},"219":{h:"107",p:"no-repeat",x:"visible",a:101,q:"100% 100%",b:0,j:"absolute",r:"inline",z:3,bF:"215",dB:"img",d:32,aA:{a:[{b:"258",p:3,z:false,symbolOid:"59"}]},k:"div",e:0,c:102,aP:"pointer"},"199":{h:"18",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"197",dB:"img",d:24,k:"div",c:580,e:1},"227":{h:"5",p:"no-repeat",x:"visible",a:127,q:"100% 100%",bS:37,j:"absolute",cY:"0",bF:"226",r:"inline",b:200,d:157,z:3,dB:"img",e:1,k:"div",c:605},"234":{x:"visible",cA:false,a:0,b:0,j:"absolute",bF:"232",c:249,k:"div",bY:1,d:140,z:2,bX:false,bZ:180,cV:[]},"241":{h:"87",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:6,bF:"235",dB:"img",d:140,k:"div",c:249,e:1},"228":{h:"54",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,bF:"226",b:0,d:36.5,k:"div",c:353.5},"200":{h:"122",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:3,bF:"197",dB:"img",d:24,k:"div",c:580,e:0},"235":{aD:{a:[{b:"263",p:3,z:false,symbolOid:"47"}]},x:"visible",a:0,dB:"button",b:0,j:"absolute",bF:"234",aA:{a:[{b:"262",p:8,z:false,symbolOid:"47",J:false}]},z:4,k:"div",d:140,c:249,aP:"pointer",aC:{a:[{b:"263",p:3,z:true,symbolOid:"47"}]}},"242":{h:"82",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:3,bF:"235",dB:"img",d:140,k:"div",c:249,e:0},"229":{x:"visible",k:"div",c:860,d:100,z:4,a:0,j:"absolute",bF:"226",b:93},"201":{h:"185",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:4,bF:"197",dB:"img",d:24,k:"div",c:580,e:0},"236":{h:"85",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:4,bF:"235",dB:"img",d:140,k:"div",c:249,e:0},"243":{x:"visible",a:210,bS:61,b:0,j:"absolute",cY:"1",c:860,k:"div",bY:1,d:711,z:6,cA:false,e:0,bZ:180,bX:false,cV:[]},"250":{c:450,d:247,cQ:1,aO:"0",cR:1,bE:"193",aH:"1",bF:"249",aI:0,j:"absolute",x:"visible",aQ:"1",aR:"1",aJ:0,k:"video",z:1,aK:0,a:0,aL:0,b:0},"237":{h:"43",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bF:"235",dB:"img",d:140,k:"div",c:249,e:0},"202":{x:"visible",a:1125,dB:"button",bS:33,j:"absolute",bF:"196",aA:{a:[{b:"kTimelineDefaultIdentifier",p:8,z:false,symbolOid:"2",J:false},{p:4,h:"190"}]},k:"div",z:3,d:40,c:99,b:24,aP:"pointer"},"244":{x:"hidden",bF:"243",k:"div",c:860,d:711,z:6,a:0,bS:61,j:"absolute",b:0},"251":{h:"177",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:6,bF:"245",b:645,d:173,k:"div",c:384},"245":{x:"auto",bF:"244",k:"div",c:892,d:711,z:1,a:0,bS:61,j:"absolute",b:0},"203":{h:"9",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:2,bS:33,bF:"202",d:40,dB:"img",k:"div",c:99,aP:"pointer"},"210":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"95",M:1,bF:"209",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.100)",P:1,A:"rgba(0, 0, 0, 0.100)",C:"rgba(0, 0, 0, 0.100)",z:2,dB:"img",D:"rgba(0, 0, 0, 0.100)",aK:8,aJ:8,k:"div",aI:8,a:0,aL:8,b:464},"238":{h:"43",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:5,bF:"235",dB:"img",d:140,k:"div",c:249,e:0},"252":{h:"183",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:9,bF:"245",b:133,d:17,k:"div",c:746.5},"239":{h:"78",p:"no-repeat",x:"visible",a:8,q:"100% 100%",b:100,j:"absolute",r:"inline",z:7,bF:"235",dB:"img",d:32,k:"div",c:125,e:0},"246":{h:"179",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:7,bF:"245",b:182,d:208,k:"div",c:384},"204":{h:"187",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"202",r:"inline",bS:33,z:3,d:40,dB:"img",k:"div",e:0,c:99},"211":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"91",M:1,bF:"209",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.100)",P:1,A:"rgba(0, 0, 0, 0.100)",C:"rgba(0, 0, 0, 0.100)",z:1,dB:"img",D:"rgba(0, 0, 0, 0.100)",aK:8,aJ:8,k:"div",aI:8,a:446,aL:8,b:464},"253":{x:"visible",a:210,bS:37,b:54,j:"absolute",cA:false,c:860,k:"div",bY:1,d:657,z:3,bX:false,e:1,bZ:180,cV:[]},"247":{h:"175",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:5,bF:"245",b:56,d:44.5,k:"div",c:364},"205":{h:"7",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:1,bS:33,bF:"202",d:40,dB:"img",k:"div",c:99},"212":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"103",M:1,bF:"209",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.100)",P:1,A:"rgba(0, 0, 0, 0.100)",C:"rgba(0, 0, 0, 0.100)",z:4,dB:"img",D:"rgba(0, 0, 0, 0.100)",aK:8,aJ:8,k:"div",aI:8,a:0,aL:8,b:0},"254":{x:"visible",bF:"253",k:"div",c:860,d:657,z:5,a:0,bS:37,j:"absolute",b:0},"248":{h:"181",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:8,bF:"245",b:422,d:191,k:"div",c:384},"213":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"99",M:1,bF:"209",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.100)",P:1,A:"rgba(0, 0, 0, 0.100)",C:"rgba(0, 0, 0, 0.100)",z:3,dB:"img",D:"rgba(0, 0, 0, 0.100)",aK:8,aJ:8,k:"div",aI:8,a:446,aL:8,b:0},"220":{x:"visible",k:"div",c:860,d:896,z:1,e:1,a:0,j:"absolute",bF:"208",b:211},"206":{x:"visible",a:210,bS:61,b:0,j:"absolute",cY:"1",c:860,k:"div",bY:1,d:711,z:5,cA:false,e:0,bZ:180,bX:false,cV:[]},"255":{h:"16",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"254",b:0,d:36.5,k:"div",c:208.5},"249":{x:"hidden",aI:8,a:411,b:175,j:"absolute",aJ:8,z:10,k:"div",bF:"245",d:247,aK:8,c:450,aL:8},"207":{x:"hidden",bF:"206",k:"div",c:860,d:711,z:6,a:0,bS:61,j:"absolute",b:0},"214":{w:"",h:"74",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:54,j:"absolute",r:"inline",bF:"208",z:4,dB:"img",d:45,k:"div",cQ:1,c:647,cR:1},"221":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"89",M:1,bF:"220",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.200)",P:1,A:"rgba(0, 0, 0, 0.200)",C:"rgba(0, 0, 0, 0.200)",z:1,dB:"img",D:"rgba(0, 0, 0, 0.200)",aK:8,aJ:8,k:"div",aI:8,a:446,aL:8,b:464},"256":{h:"22",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"254",b:93,d:148,k:"div",c:544},"208":{x:"auto",bF:"207",k:"div",c:892,d:711,z:1,a:0,bS:61,j:"absolute",b:0},"215":{x:"visible",k:"div",c:203,d:32,z:5,a:0,j:"absolute",bF:"208",b:147},"222":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"101",M:1,bF:"220",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.100)",P:1,A:"rgba(0, 0, 0, 0.100)",C:"rgba(0, 0, 0, 0.100)",z:4,dB:"img",D:"rgba(0, 0, 0, 0.100)",aK:8,aJ:8,k:"div",aI:8,a:0,aL:8,b:0},"209":{x:"visible",k:"div",c:860,d:896,z:2,e:1,a:0,j:"absolute",bF:"208",b:211},"216":{h:"113",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:2,bF:"215",dB:"img",d:32,k:"div",c:101,e:1},"223":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"97",M:1,bF:"220",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.200)",P:1,A:"rgba(0, 0, 0, 0.200)",C:"rgba(0, 0, 0, 0.200)",z:3,dB:"img",D:"rgba(0, 0, 0, 0.200)",aK:8,aJ:8,k:"div",aI:8,a:446,aL:8,b:0},"230":{c:860,d:100,I:"None",J:"None",K:"None",L:"None",M:0,w:"<input type=\"text\" id=\"prompt\" class=\"prompt\" placeholder=\"Write a few word about your event\">\n\n<style>\n\n.prompt{\nwidth:860px;\nfont-size:16px; font-family:lato; color:#333;\nborder:none; appearance:none;\nborder-bottom:1px solid #ccc; \npadding:16px 88px 16px 0px;\nbox-sizing:border-box;\n}\n\n.prompt::placeholder{\ncolor:#666;\n}\n\n.prompt:focus{\nborder:none; outline:none;\nborder-bottom:1px solid #006efa; \n}\n\n\n\n</style>",bF:"229",A:"#CCC",x:"hidden",j:"absolute",B:"#CCC",N:0,O:0,C:"#CCC",z:1,P:0,D:"#CCC",k:"div",a:0,b:0},"196":{P:1,x:"visible",bS:15,a:0,b:711,j:"absolute",D:"#CCC",z:7,k:"div",L:"Solid",d:88,c:1280,g:"#FFF"},"231":{h:"14",p:"no-repeat",x:"visible",a:792,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"229",b:10,d:40,aA:{a:[{b:"261",p:3,z:false,symbolOid:"29"},{p:4,h:"58"}]},k:"div",c:68,aP:"pointer"},"217":{h:"111",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",z:4,bF:"215",dB:"img",d:32,aA:{a:[{b:"259",p:3,z:false,symbolOid:"59"}]},k:"div",e:1,c:101,aP:"pointer"},"224":{p:"no-repeat",c:414,q:"100% 100%",d:432,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"93",M:1,bF:"220",N:1,j:"absolute",x:"visible",O:1,B:"rgba(0, 0, 0, 0.200)",P:1,A:"rgba(0, 0, 0, 0.200)",C:"rgba(0, 0, 0, 0.200)",z:2,dB:"img",D:"rgba(0, 0, 0, 0.200)",aK:8,aJ:8,k:"div",aI:8,a:0,aL:8,b:464}}}],{},h,{},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();

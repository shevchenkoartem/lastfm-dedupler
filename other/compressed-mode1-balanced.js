javascript:(function(){function a(a){const b=document.createElement("button");return b.innerText=l,b.onclick=a,b.style.background="#D92323",b.style.color="white",b.style.padding="5px",b}function b(b,c,d,e){return{songId:b,date:c,isDuplicate:!1,isForcedDeleted:!1,isRemainedOriginal:!1,extraDeleteButton:null,get hasFinalState(){return this.isForcedDeleted||this.isRemainedOriginal},deleteMe:function(b){if(this.isDuplicate=!0,e.style.background="#F2CDCF",!b){const b=e.querySelectorAll("button"),c=b[b.length-1];c.innerText!==l&&(this.extraDeleteButton=a(function(){d.click()}),e.appendChild(this.extraDeleteButton))}else(function(){d.click()})(),this.isForcedDeleted=!0,null!=this.extraDeleteButton&&(e.removeChild(this.extraDeleteButton),this.extraDeleteButton=null)},forcedDeleteIfDuplicated:function(){this.isDuplicate&&!this.isForcedDeleted&&this.deleteMe(!0)},remainMe:function(){e.style.background="#DDFFD9",this.isRemainedOriginal=!0}}}function c(a){k.push(a),k.length>e&&k.shift()}function d(){for(let a=0;a<k.length-1;++a){const b=k[a];for(let c=a+1;c<k.length;++c){const d=k[c];if(b.hasFinalState&&d.hasFinalState)continue;const e=Math.abs(d.date-b.date)/1e3/60,i=e<=g;i&&(b.forcedDeleteIfDuplicated(),d.forcedDeleteIfDuplicated());const j=b.songId===d.songId,l=c===a+1;j&&(e<=f||l&&h)&&(!d.isForcedDeleted&&(!d.isDuplicate||i)&&d.deleteMe(i),!b.isRemainedOriginal&&!b.isDuplicate&&b.remainMe())}}}const e=4,f=15,g=1,h=!1,k=[],l="Delete",m=document.querySelectorAll(".chartlist-row");for(let a=m.length-1;0<=a;--a){const f=m[a],g=f.querySelector(".chartlist-name").querySelector("a").innerText,h=f.querySelector(".chartlist-artist").querySelector("a").innerText,i=f.querySelector(".chartlist-timestamp").querySelector("span").getAttribute("title"),j=new Date(i.replace("pm"," pm").replace("am"," am")),l=f.querySelector(".more-item--delete"),n=b(g+" - "+h,j,l,f);c(n),(k.length===e||0===a)&&d()}})();

# ChatGPT-Export-Markdown
Use bookmark applets (Bookmarklets) Export ChatGPT to Markdown 

## 特點
目前支援一般對話，與 ChatGPT Search

## 缺點
目前不支援圖片，暫時想不到怎麼做比較好，可能是匯出 word 或 pdf

## 下載與執行
Clone 之後，執行 npm run build 產生 index.min.js 檔案，將檔案內容加入書籤。


## 加入書籤
### 拖拉加入書籤
拖曳這個藍字 <a href="#缺點">Export Markdown</a> 到書籤列表
### 手動加入書籤
1. 建立一個新的書籤。
2. 在書籤的名稱輸入「Export Markdown」。
3. 將以下 JavaScript 程式碼貼到 URL 欄位：
```javascript
var msg001="沒有找到標題",msg001_1="沒有找到標題，請自訂檔案名稱",msg002="沒有找到 AI Name",msg003="沒有找到內容";(()=>{let e="";e=function(){let e,t;try{if(e=document.querySelector("body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary > div > div > div > nav > div.flex-col.flex-1.transition-opacity.duration-500.relative.-mr-2.pr-2.overflow-y-auto > div.flex.flex-col.gap-2.pb-2.text-token-text-primary.text-sm.mt-5"),null==e)throw msg001}catch(e){return console.error(e),prompt(msg001_1)}try{if(t=Array.prototype.filter.call(e.querySelectorAll("div.group"),(e=>-1==e.children[1].className.indexOf("hidden")))[0],null==t)throw msg001}catch(e){throw console.error(e),`step_2 - ${msg001}`}let r="";try{r=t.innerText}catch(e){throw console.error(e),`step_3 - ${msg001}`}return r}(),e||(confirm(msg001),e=prompt(msg001_1)),document.title=e})(),(e=>{let t="";if(t=function(){let e,t;try{if(e=document.querySelector("body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.composer-parent.flex.h-full.flex-col.focus-visible\\:outline-0 > div.flex-1.overflow-hidden > div > div > div > div"),null==e)throw msg002}catch(e){throw console.error(e),`step_1 - ${msg002}`}try{if(t=e.childNodes[0],null==t)throw msg002;return t.innerText.replace(/[\n\t]/g," ").replace(" 分享","")}catch(e){throw console.error(e),`step_2 - ${msg002}`}}(),!t)throw confirm(msg002),msg002;let r="";function n(e){var t,r,o,i,c,d;if(!e.tagName)return e.textContent||"";switch(e.tagName.toLowerCase()){case"pre":return function(e){const t=e.children[0].children[0].innerText,r=e.children[0].children[2].innerText;return`\n\`\`\`${t}\n${r}\n\`\`\`\n`}(e);case"table":return function(e){let t="";return e.querySelectorAll("tr").forEach(((e,r)=>{const n=e.querySelectorAll("th, td"),l=Array.from(n).map((e=>{var t;return`| ${(null===(t=e.textContent)||void 0===t?void 0:t.trim())||""} `})).join("");if(t+=l+"|\n",0===r){const e=Array.from(n).map((()=>"| --- ")).join("");t+=e+"|\n"}})),t}(e);case"h3":return`### ${(null===(t=e.textContent)||void 0===t?void 0:t.trim())||""}\n`;case"h4":return`#### ${(null===(r=e.textContent)||void 0===r?void 0:r.trim())||""}\n`;case"h5":return`##### ${(null===(o=e.textContent)||void 0===o?void 0:o.trim())||""}\n`;case"h6":return`###### ${(null===(i=e.textContent)||void 0===i?void 0:i.trim())||""}\n`;case"ul":return l(e,"-");case"ol":return l(e,"1.");case"p":case"span":return function(e){let t="",r=e.childNodes;if(r.length>0)for(let e=0;e<r.length;e++)t+=n(r[e]);return t+="\n",t}(e);case"a":return`[${(d=e).textContent}](${d.getAttribute("href")})`;case"code":return`\`\`\`${null===(c=e.textContent)||void 0===c?void 0:c.trim()}\`\`\` `;case"strong":return function(e){let t=e.textContent||"";return`**${t}**`}(e);case"div":let a="",s=e.children;if(s.length>0)for(let e=0;e<s.length;e++)a+=n(s[e])+"\n";return a;default:return e.innerText}}function l(e,t){let r="";return Array.from(e.children).forEach(((e,l)=>{r+=`${"1."===t?`${l+1}.`:t} `;let o=e.childNodes;if(o.length>0)for(let e=0;e<o.length;e++)r+=n(o[e]);r+="\n"})),r}if(r=function(){let e,r;try{if(e=document.querySelector("body > div.relative.flex.h-full.w-full.overflow-hidden.transition-colors.z-0 > div.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden > main > div.composer-parent.flex.h-full.flex-col.focus-visible\\:outline-0 > div.flex-1.overflow-hidden > div > div > div"),null==e)throw msg003}catch(e){throw console.error(e),`step_1 - ${msg003}`}try{r=Array.prototype.filter.call(e.children[0].children,(e=>e.className.indexOf("w-full")>-1))}catch(e){throw console.error(e),`step_2 - ${msg003}`}let l="";try{for(var o=0;o<r.length;o++){if(l+=`**${o%2==0?"自己":t}:**\n\n`,r[o].childNodes[1].getElementsByClassName("markdown").length>0){let e=r[o].childNodes[1].getElementsByClassName("markdown")[0].children;for(let t=0;t<e.length;t++)l+=n(e[t])+"\n"}else{l+=`${r[o].innerText.replace(/\>/g,"\\>").replace(/\</g,"\\<")}\n\n`}l+="\n\n---\n\n"}}catch(e){throw console.error(e),`step_3 - ${msg003}`}return l}(),!r)throw confirm(msg003),msg003;const o=new Date;if(r+=`\n\nExported on ${o.toLocaleDateString()} ${o.toLocaleTimeString()}`,e){const t=document.createElement("a");t.download=e+".md",t.href=URL.createObjectURL(new Blob([r])),t.style.display="none",document.body.appendChild(t),t.click()}else alert("取消操作")})(prompt("請輸入檔案名稱",(new Date).toDateString()+"-"+document.title));
```

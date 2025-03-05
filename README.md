# ChatGPT-Export-Markdown
Use bookmark applets (Bookmarklets) Export ChatGPT to Markdown 

## 特點
目前支援一般對話，與 ChatGPT Search

## 缺點
目前不支援圖片，暫時想不到怎麼做比較好，可能是匯出 word 或 pdf
目前不支援數學公式

## 下載與執行
Clone 之後，執行 ``npm run build`` 產生 index.min.js 檔案，將檔案內容加入書籤。


## 不想下載也可以直接加入書籤
1. 建立一個新的書籤。
2. 在書籤的名稱輸入「Export Markdown」。
3. 將以下 JavaScript 程式碼貼到 URL 欄位：
```javascript
javascript:var msg001="沒有找到標題",msg001_1="沒有找到標題，請自訂檔案名稱",msg002="沒有找到 AI Name",msg003="沒有找到內容";(()=>{let e="";e=function(){let e,t;try{if(e=document.querySelector("body > div.flex.h-full.w-full.flex-col > div > div.relative.flex.h-full.w-full.flex-row.overflow-hidden > div.z-\\[21\\].flex-shrink-0.overflow-x-hidden.bg-token-sidebar-surface-primary.max-md\\:\\!w-0 > div > div > div > nav > div.flex-col.flex-1.transition-opacity.duration-500.relative.pr-3.overflow-y-auto > div > div.flex.flex-col.gap-2.text-token-text-primary.text-sm.mt-5.first\\:mt-0.false > div"),null==e)throw msg001}catch(e){return console.error(e),prompt(msg001_1)}try{if(t=Array.prototype.filter.call(e.querySelectorAll("li.relative"),(e=>"#e3e3e3"==getComputedStyle(e.children[0]).getPropertyValue("--item-background-color")))[0],null==t)throw msg001}catch(e){throw console.error(e),`step_2 - ${msg001}`}let r="";try{r=t.innerText}catch(e){throw console.error(e),`step_3 - ${msg001}`}return r}(),e||(confirm(msg001),e=prompt(msg001_1)),document.title=e})(),(e=>{let t="";t="ChatGPT 說：";let r="";function n(e){var t,r,o,i,c,a;if(!e.tagName)return e.textContent||"";switch(e.tagName.toLowerCase()){case"pre":return function(e){const t=e.children[0].children[0].innerText,r=e.children[0].children[2].innerText;return`\n\`\`\`${t}\n${r}\n\`\`\`\n`}(e);case"table":return function(e){let t="";return e.querySelectorAll("tr").forEach(((e,r)=>{const n=e.querySelectorAll("th, td"),l=Array.from(n).map((e=>{var t;return`| ${(null===(t=e.textContent)||void 0===t?void 0:t.trim())||""} `})).join("");if(t+=l+"|\n",0===r){const e=Array.from(n).map((()=>"| --- ")).join("");t+=e+"|\n"}})),t}(e);case"h3":return`### ${(null===(t=e.textContent)||void 0===t?void 0:t.trim())||""}\n`;case"h4":return`#### ${(null===(r=e.textContent)||void 0===r?void 0:r.trim())||""}\n`;case"h5":return`##### ${(null===(o=e.textContent)||void 0===o?void 0:o.trim())||""}\n`;case"h6":return`###### ${(null===(i=e.textContent)||void 0===i?void 0:i.trim())||""}\n`;case"ul":return l(e,"-");case"ol":return l(e,"1.");case"p":case"span":return function(e){let t="",r=e.childNodes;if(r.length>0)for(let e=0;e<r.length;e++)t+=n(r[e]);return t+="\n",t}(e);case"a":return`[${(a=e).textContent}](${a.getAttribute("href")})`;case"code":return`\`\`\`${null===(c=e.textContent)||void 0===c?void 0:c.trim()}\`\`\` `;case"strong":return function(e){let t=e.textContent||"";return`**${t}**`}(e);case"div":let d="",s=e.children;if(s.length>0)for(let e=0;e<s.length;e++)d+=n(s[e])+"\n";return d;default:return e.innerText}}function l(e,t){let r="";return Array.from(e.children).forEach(((e,l)=>{r+=`${"1."===t?`${l+1}.`:t} `;let o=e.childNodes;if(o.length>0)for(let e=0;e<o.length;e++)r+=n(o[e]);r+="\n"})),r}if(r=function(){let e,r;try{if(e=document.querySelector("main > div > div:nth-child(2) > div > div > div "),null==e)throw msg003}catch(e){throw console.error(e),`step_1 - ${msg003}`}try{r=Array.prototype.filter.call(e.children,(e=>e.className.indexOf("w-full")>-1))}catch(e){throw console.error(e),`step_2 - ${msg003}`}let l="";try{for(var o=0;o<r.length;o++){if(l+=`**${o%2==0?"自己":t}:**\n\n`,r[o].childNodes[1].getElementsByClassName("markdown").length>0){let e=r[o].childNodes[1].getElementsByClassName("markdown")[0].children;for(let t=0;t<e.length;t++)l+=n(e[t])+"\n"}else{l+=`${r[o].innerText.replace(/\>/g,"\\>").replace(/\</g,"\\<")}\n\n`}l+="\n\n---\n\n"}}catch(e){throw console.error(e),`step_3 - ${msg003}`}return l}(),!r)throw confirm(msg003),msg003;const o=new Date;if(r+=`\n\nExported on ${o.toLocaleDateString()} ${o.toLocaleTimeString()}`,e){const t=document.createElement("a");t.download=e+".md",t.href=URL.createObjectURL(new Blob([r])),t.style.display="none",document.body.appendChild(t),t.click()}else alert("取消操作")})(prompt("請輸入檔案名稱",(new Date).toDateString()+"-"+document.title));
```

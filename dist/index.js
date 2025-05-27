"use strict";
var msg001 = '沒有找到標題';
var msg001_1 = '沒有找到標題，請自訂檔案名稱';
var msg002 = '沒有找到 AI Name';
var msg003 = '沒有找到內容';
(_ => {
    // === 找標題
    let titleName = '';
    function getTitleName() {
        let step_1;
        try {
            step_1 = document.querySelector("#history");
            debugger;
            if (step_1 == null) {
                throw msg001;
            }
        }
        catch (error) {
            console.error(error);
            return '';
        }
        let step_2;
        try {
            step_2 = Array.prototype.filter.call(step_1.querySelectorAll('a.__menu-item'), el => {
                var computedStyle = getComputedStyle(el);
                return computedStyle.getPropertyValue('background-color') == 'rgba(0, 0, 0, 0.06)';
            })[0];
            if (step_2 == null) {
                throw msg001;
            }
        }
        catch (error) {
            console.error(error);
            throw `step_2 - ${msg001}`;
        }
        let step_3 = '';
        try {
            step_3 = step_2.innerText;
        }
        catch (error) {
            console.error(error);
            throw `step_3 - ${msg001}`;
        }
        return step_3;
    }
    titleName = getTitleName();
    if (!titleName) {
        confirm(msg001);
        titleName = prompt(msg001_1);
    }
    // === 找標題 ===
    document.title = titleName;
})();
((fileName) => {
    // === 找 AI NAME
    let aiName = '';
    aiName = 'ChatGPT 說：';
    if (!aiName) {
        confirm(msg002);
        throw msg002;
        return;
    }
    // === 找 AI NAME ===
    // === 找內容
    let textContent = '';
    function replaceHtmlTags(text) {
        return text.replace(/\>/g, '\\>')
            .replace(/\</g, '\\<');
    }
    // 定義一個將 HTML 轉換為 Markdown 的函數
    function htmlToMarkdown(element) {
        var _a, _b, _c, _d, _e;
        if (element.tagName) {
            switch (element.tagName.toLowerCase()) {
                case 'pre':
                    // 處理 <pre> 標籤，通常包含程式碼區塊
                    return convertPreToMarkdown(element);
                case 'table':
                    // 處理 <table> 標籤
                    return convertTableToMarkdown(element);
                case 'h3':
                    // 處理 <h3> 標籤，轉成 `### 標題`
                    return `### ${((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''}\n`;
                case 'h4':
                    // 處理 <h4> 標籤，轉成 `#### 標題`
                    return `#### ${((_b = element.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || ''}\n`;
                case 'h5':
                    // 處理 <h5> 標籤，轉成 `##### 標題`
                    return `##### ${((_c = element.textContent) === null || _c === void 0 ? void 0 : _c.trim()) || ''}\n`;
                case 'h6':
                    // 處理 <h6> 標籤，轉成 `###### 標題`
                    return `###### ${((_d = element.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || ''}\n`;
                case 'ul':
                    // 處理 <ul> 列表，轉成 Markdown 的無序列表
                    return convertListToMarkdown(element, '-');
                case 'ol':
                    // 處理 <ol> 列表，轉成 Markdown 的有序列表
                    return convertListToMarkdown(element, '1.');
                case 'p':
                case 'span':
                    // 處理 <p> 段落
                    return convertPToMarkdown(element);
                case 'a':
                    // 處理 <a> 段落
                    return convertAToMarkdown(element);
                case 'code':
                    return `\`\`\`${(_e = element.textContent) === null || _e === void 0 ? void 0 : _e.trim()}\`\`\` `;
                case 'strong':
                    return convertStrongToMarkdown(element);
                case 'div':
                    let markdown = '';
                    let childElement = element.children;
                    if (childElement.length > 0) {
                        for (let index = 0; index < childElement.length; index++) {
                            markdown += htmlToMarkdown(childElement[index]) + `\n`;
                        }
                    }
                    return markdown;
                default:
                    return element.innerText;
            }
        }
        else {
            return element.textContent || '';
        }
    }
    // 將 HTML 元素 strong 轉換成 Markdown
    function convertStrongToMarkdown(strong) {
        let markdown = strong.textContent || '';
        // let childElement = strong.childNodes;
        // if (childElement.length > 0) {
        //     for (let index = 0; index < childElement.length; index++) {
        //         markdown += htmlToMarkdown(childElement[index] as HTMLElement);
        //     }
        // }
        return `**${markdown}**`;
    }
    // 將 HTML 元素 a 轉換成 Markdown
    function convertAToMarkdown(a) {
        return `[${a.textContent}](${a.getAttribute('href')})`;
    }
    // 將 HTML 元素 P 轉換成 Markdown
    function convertPToMarkdown(p) {
        let markdown = '';
        let childElement = p.childNodes;
        if (childElement.length > 0) {
            for (let index = 0; index < childElement.length; index++) {
                markdown += htmlToMarkdown(childElement[index]);
            }
        }
        markdown += '\n';
        return markdown;
    }
    // 將 <pre> 標籤轉換成 Markdown 程式碼區塊
    function convertPreToMarkdown(pre) {
        const lang = pre.children[0].children[0].innerText;
        const code = pre.children[0].children[2].innerText;
        return `\n\`\`\`${lang}\n${code}\n\`\`\`\n`;
    }
    // 將 <table> 轉換成 Markdown 表格語法
    function convertTableToMarkdown(table) {
        let markdown = '';
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, rowIndex) => {
            const cols = row.querySelectorAll('th, td');
            const rowMarkdown = Array.from(cols).map(col => { var _a; return `| ${((_a = col.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || ''} `; }).join('');
            markdown += rowMarkdown + '|\n';
            // 在第一行（標題）後面加上分隔線
            if (rowIndex === 0) {
                const separator = Array.from(cols).map(() => '| --- ').join('');
                markdown += separator + '|\n';
            }
        });
        return markdown;
    }
    // 將 <ul> 或 <ol> 轉換為 Markdown 列表
    function convertListToMarkdown(list, listType) {
        let markdown = '';
        const items = Array.from(list.children);
        items.forEach((item, index) => {
            const prefix = listType === '1.' ? `${index + 1}.` : listType;
            markdown += `${prefix} `;
            let childElement = item.childNodes;
            if (childElement.length > 0) {
                for (let index = 0; index < childElement.length; index++) {
                    markdown += htmlToMarkdown(childElement[index]);
                }
            }
            markdown += `\n`;
        });
        return markdown;
    }
    function getTextContent() {
        const mySelfName = '自己';
        let step_1;
        try {
            step_1 = document.querySelector('main > div> div  > div:nth-child(2) > div > div > div:nth-child(2) ');
            if (step_1 == null) {
                throw msg003;
            }
        }
        catch (error) {
            console.error(error);
            throw `step_1 - ${msg003}`;
        }
        let step_2;
        try {
            step_2 = Array.prototype.filter.call(step_1.children, el => el.className.indexOf('w-full') > -1);
        }
        catch (error) {
            console.error(error);
            throw `step_2 - ${msg003}`;
        }
        let step_3 = '';
        try {
            for (var i = 0; i < step_2.length; i++) {
                step_3 += `**${i % 2 === 0 ? mySelfName : aiName}:**\n\n`;
                if (step_2[i].childNodes[1].getElementsByClassName('markdown').length > 0) {
                    let step_4 = step_2[i].childNodes[1].getElementsByClassName('markdown')[0].children;
                    for (let index = 0; index < step_4.length; index++) {
                        step_3 += htmlToMarkdown(step_4[index]) + `\n`;
                    }
                }
                else {
                    const selfText = replaceHtmlTags(step_2[i].innerText);
                    step_3 += `${selfText}\n\n`;
                }
                step_3 += `\n\n---\n\n`;
            }
        }
        catch (error) {
            console.error(error);
            throw `step_3 - ${msg003}`;
        }
        return step_3;
    }
    textContent = getTextContent();
    if (!textContent) {
        confirm(msg003);
        throw msg003;
        return;
    }
    // === 找內容 ===
    // === 匯出
    const dNow = new Date;
    textContent += `\n\nExported on ${dNow.toLocaleDateString()} ${dNow.toLocaleTimeString()}`;
    if (fileName) {
        const elA = document.createElement("a");
        elA.download = fileName + '.md';
        elA.href = URL.createObjectURL(new Blob([textContent]));
        elA.style.display = "none";
        document.body.appendChild(elA);
        elA.click();
    }
    else {
        alert('取消操作');
        return;
    }
    // === 匯出 ===
})(prompt('請輸入檔案名稱', (new Date).toDateString() + '-' + document.title));

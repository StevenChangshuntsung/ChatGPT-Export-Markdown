// 定義一個將 HTML 轉換為 Markdown 的函數
function htmlToMarkdown(element: HTMLElement): string {
    switch (element.tagName.toLowerCase()) {
        case 'pre':
            // 處理 <pre> 標籤，通常包含程式碼區塊
            return `\`\`\`\n${element.textContent?.trim() || ''}\n\`\`\``;
        case 'table':
            // 處理 <table> 標籤
            return convertTableToMarkdown(element);
        case 'h3':
            // 處理 <h3> 標籤，轉成 `### 標題`
            return `### ${element.textContent?.trim() || ''}\n`;
        case 'ul':
            // 處理 <ul> 列表，轉成 Markdown 的無序列表
            return convertListToMarkdown(element, '-');
        case 'ol':
            // 處理 <ol> 列表，轉成 Markdown 的有序列表
            return convertListToMarkdown(element, '1.');
        case 'p':
            // 處理 <p> 段落
            return `${element.textContent?.trim() || ''}\n`;
        default:
            return element.outerHTML;
    }
}

// 將 <table> 轉換成 Markdown 表格語法
function convertTableToMarkdown(table: HTMLElement): string {
    let markdown = '';
    const rows = table.querySelectorAll('tr');
    rows.forEach((row, rowIndex) => {
        const cols = row.querySelectorAll('th, td');
        const rowMarkdown = Array.from(cols).map(col => `| ${col.textContent?.trim() || ''} `).join('');
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
function convertListToMarkdown(list: HTMLElement, listType: string): string {
    let markdown = '';
    const items = list.querySelectorAll('li');
    items.forEach((item, index) => {
        const prefix = listType === '1.' ? `${index + 1}.` : listType;
        markdown += `${prefix} ${item.textContent?.trim() || ''}\n`;
    });
    return markdown;
}

// 將網頁中的特定標籤轉換為 Markdown
export function convertPageToMarkdown(): string {
    const tags = ['pre', 'table', 'h3', 'ul', 'ol', 'p'];
    let markdown = '';

    tags.forEach(tag => {
        const elements = document.querySelectorAll<HTMLElement>(tag);
        elements.forEach(element => {
            markdown += htmlToMarkdown(element) + '\n';
        });
    });

    return markdown;
}

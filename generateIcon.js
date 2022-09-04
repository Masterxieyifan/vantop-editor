/*
 * @Descripttion: icon 文件生成脚本
 * @Author: 蔡远程
 * @Date: 2021-09-01 18:20:43
 * @LastEditTime: 2021-09-03 09:42:56
 * @LastEditors: 蔡远程
 */

// 替换图标步骤：
// 第一步，将图标 svg 文件拷贝至 /packages/VantopEditor/icons；
// 第二步，保证图标文件名称与工具栏对应的名称一致，具体名称可参考 https://www.tiny.cloud/docs/advanced/editor-icon-identifiers/；
// 第三步，重新运行项目或者直接运行该文件；

const fs = require('fs');
const ICONS_FILE_PATH = `${process.cwd()}/packages/VantopEditor/icons`
const files = fs.readdirSync(ICONS_FILE_PATH);
var endOfLine = require('os').EOL;

let template = "";
files.forEach(item => {
    const path = `${ICONS_FILE_PATH}/${item}`;
    const stat = fs.lstatSync(path);
    if (!stat.isDirectory()) {
        const key = item.replace('.svg', '');
        let value = fs.readFileSync(path,'utf-8');
        value = formatSvg(value, key);
        template +=
        `'${key}':
            '${value}',${endOfLine}
        `
    }
})

function formatSvg(target = '', name) {
    let val = target;
    // 去除 title 标签
    val = val.replace(/<title>.+<\/title>/gi, '');
    
    // 箭头svg无需设置fill
    if (name === "chevron-down") return val;

    // 匹配 path 标签, 并替换 fill 属性值为 currentColor
    val = val.replace(/(<path[^>]*?fill=")(.*?)("([^>]+)?>)/gi,'$1currentColor$3')
    
    // 特殊处理
    // if (name === 'text-color' || name === 'highlight-bg-color') {
    //     // 匹配 rect 标签, 替换 fill 属性值为 #000 ；
    //     // 添加指定 id 属性
    //     val = val.replace(/(<rect[^>]*?fill=")(.*?)("([^>]+)?>)/gi,`$1#000" id="tox-icon-${name}__color$3`)
    // }
    
    return val
}

const result = `
export default \`tinymce.IconManager.add('custom', {
    icons: {
        ${template}
    },
});\`
`;

fs.writeFileSync(`${process.cwd()}/packages/VantopEditor/const/icons.js`, result);
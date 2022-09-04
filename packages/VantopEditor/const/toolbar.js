/*
 * @Author: Shixin
 * @Date: 2021-07-19 09:01:09
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-09-03 10:41:33
 * @Description: 富文本工具栏
 * @FilePath: /vantop-editor/packages/VantopEditor/const/toolbar.js
 * 🍻 Write code drunkenly.
 */
const toolbar = {
    default: `
        undo redo formatpainter removeformat |
        formatselect fontselect fontsizeselect |
        bold italic strikethrough underline forecolor backcolor |
        subscript superscript link unlink image code |
        indent outdent align numlist bullist | 
        pagebreak hr emoticons importword insertdatetime charmap media |
        table |
        fullscreen |
    `,
    simple: `
        formatselect |
        bold italic strikethrough underline forecolor backcolor |
        indent outdent align numlist bullist | 
        link formatpainter
    `,
};
// preview
export default toolbar;

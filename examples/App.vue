<!--
 * @Author: Shixin
 * @Date: 2021-07-19 09:01:09
 * @LastEditors: 蔡远程
 * @LastEditTime: 2021-09-02 17:06:18
 * @Description: Do not edit
 * @FilePath: /vantop-editor/examples/App.vue
 * 🍻 Write code drunkenly.
-->
<template>
    <div class="example">
        <p>完整模式</p>
        <VantopEditor
            v-model="content"
            class="vantop-editor"
            :setting="setting"
            @input="handleContent"
        />
        <p>精简模式</p>
        <VantopEditor
            v-model="content"
            class="vantop-editor"
            :setting="setting"
            type="simple"
            @input="handleContent"
        />
        <p>自定义 setting(禁用上传图片与源码)</p>
        <VantopEditor
            ref="vantopEditor"
            v-model="content"
            class="vantop-editor"
            @input="handleContent"
        />
    </div>
</template>
<script>
// import VantopEditor from "@/lib/vantop-editor.umd.min.js";
import VantopEditor from "@/packages";
export default {
    components: {
        VantopEditor,
    },
    data() {
        return {
            content: "",
            setting: {
                // toolbar: [],
                // plugins: [],
                images_upload_handler: function (blobInfo, succFun, failFun) {
                    var xhr, formData;
                    var file = blobInfo.blob(); //转化为易于理解的file对象
                    xhr = new XMLHttpRequest();
                    xhr.withCredentials = false;
                    xhr.open("POST", "/demo/upimg.php");
                    xhr.onload = function () {
                        var json;
                        if (xhr.status != 200) {
                            failFun("HTTP Error: " + xhr.status);
                            return;
                        }
                        json = JSON.parse(xhr.responseText);
                        if (!json || typeof json.location != "string") {
                            failFun("Invalid JSON: " + xhr.responseText);
                            return;
                        }
                        succFun(json.location);
                    };
                    formData = new FormData();
                    formData.append("file", file, file.name); //此处与源文档不一样
                    xhr.send(formData);
                },
            },
        };
    },
    mounted () {
        // 禁用图片
       this.$refs.vantopEditor.editorSetting.toolbar = this.$refs.vantopEditor.editorSetting.toolbar.replace('image','')
        // 禁用 quickbars 快速工具栏
       this.$refs.vantopEditor.editorSetting.quickbars_insert_toolbar = ''
    },
    methods: {
        handleContent(content) {
            content;
            // console.log(content);
        },
    },
};
</script>
<style lang="scss" scoped>
.example {
    margin: auto;
    height: 500px;
    width: 80%;
}
</style>

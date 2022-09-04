<template>
  <div class="vantop-editor">
    <vue-tinymce
      v-if="visible"
      v-model="content"
      v-bind="$attrs"
      v-on="$listeners"
      :setting="editorSetting"
      @change="change"
    ></vue-tinymce>
  </div>
</template>

<script>
import Vue from 'vue';
import load from '@/packages/VantopEditor/utils/dynamicLoadScript';
import VueTinymce from '@/packages/VantopEditor/components/VueTimyce';

Vue.use(VueTinymce); // 安装vue的tinymce组件

import icons from '../const/icons.js'
import plugins from '../const/plugins';
import toolbar from '../const/toolbar';

export default {
  name: 'TinymceEditor',
  props: {
    // 编辑器文本的内容
    value: {
      type: String,
      default: '',
    },
    // 编辑器配置项
    setting: {
      type: Object,
      default: () => ({}),
    },
    // 上传图片、word 等资源文件 路径
    cdn: {
      type: String,
      default: 'https://nextop-web-static-prod.oss-accelerate.aliyuncs.com/tinymce',
    },
    waitTime: {
        type: Number,
        default: 1000,
    },
    type: {
        type: String,
        default: 'default'
    },
  },
  data() {
    return {
      visible: false,
      timer: null,
      content: '', // 编辑器的内容
      editorSetting: {
        skin: 'vantop-editor',
        skin_url: `${this.cdn}/vantop-editor/skins/ui/vantop-editor`,
        toolbar_mode: 'floating',
        menubar: false, // 是否显示菜单栏
        // 快速工具栏
        quickbars_selection_toolbar: 'removeformat | bold italic strikethrough underline forecolor backcolor',
        language: 'zh_CN', // 语言本地化
        language_url: `${this.cdn}/langs/zh_CN.js`,
        branding: true, // 隐藏右下角技术支持
        elementpath: false, // 隐藏底栏的元素路径
        statusbar: false, // 显示隐藏状态栏
        // default_link_target: '_blank',
        convert_urls: true, // 自动转换URL

        // CONFIG
        indentation: '12px', // 增加缩进
        forced_root_block: 'p',
        force_p_newlines: true,
        importcss_append: true,

        content_css: [
          `${this.cdn}/vantop-editor/skins/content/vantop-editor/content.css`,
          `${this.cdn}/styles/index.css`,
        ],

        insert_button_items: 'image link | inserttable',

        // 多图片上传插件处理
        images_upload_base_path: '/demo',
        images_upload_handler: function (blobInfo, succFun, failFun) {
            var xhr, formData;
            var file = blobInfo.blob();//转化为易于理解的file对象
            xhr = new XMLHttpRequest();
            xhr.withCredentials = false;
            xhr.open('POST', '/demo/upimg2.php');
            xhr.onload = function() {
                var json;
                if (xhr.status != 200) {
                    failFun('HTTP Error: ' + xhr.status);
                    return;
                }
                json = JSON.parse(xhr.responseText);
                if (!json || typeof json.location != 'string') {
                    failFun('Invalid JSON: ' + xhr.responseText);
                    return;
                }
                succFun(json.location);
            };
            formData = new FormData();
            formData.append('file', file, file.name );
            xhr.send(formData);
        },

        // CONFIG: Paste
        paste_retain_style_properties: 'all',
        paste_word_valid_elements: '*[*]', // word需要它
        paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
        paste_convert_word_fake_lists: false, // 插入word文档需要该属性
        paste_webkit_styles: 'all',
        paste_merge_formats: true,
        nonbreaking_force_tab: false,
        paste_auto_cleanup_on_paste: false,

        // CONFIG: Font
        fontsize_formats: '10px 11px 12px 14px 16px 18px 20px 24px',

        // FontSelect
        font_formats: `
                    微软雅黑=微软雅黑;
                    宋体=宋体;
                    黑体=黑体;
                    仿宋=仿宋;
                    楷体=楷体;
                    隶书=隶书;
                    幼圆=幼圆;
                    Andale Mono=andale mono,times;
                    Arial=arial, helvetica,
                    sans-serif;
                    Arial Black=arial black, avant garde;
                    Book Antiqua=book antiqua,palatino;
                    Comic Sans MS=comic sans ms,sans-serif;
                    Courier New=courier new,courier;
                    Georgia=georgia,palatino;
                    Helvetica=helvetica;
                    Impact=impact,chicago;
                    Symbol=symbol;
                    Tahoma=tahoma,arial,helvetica,sans-serif;
                    Terminal=terminal,monaco;
                    Times New Roman=times new roman,times;
                    Trebuchet MS=trebuchet ms,geneva;
                    Verdana=verdana,geneva;
                    Webdings=webdings;
                    Wingdings=wingdings,zapf dingbats
                `,

        // Tab
        tabfocus_elements: ':prev,:next',
        object_resizing: true,

        // Image
        imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',

        // CONFIG: Powerpaste
        powerpaste_word_import: 'propmt', // 参数可以是propmt, merge, clear，效果自行切换对比
        powerpaste_html_import: 'propmt', // propmt, merge, clear
        powerpaste_allow_local_images: true,
        // CONFIG: Powerpaste

        image_advtab: true, // 为图像属性编辑窗口添加高级属性，可以自定义图片的css样式（内置style）、边距（margin）和边框（border）。
      },
    };
  },
  watch: {
    value: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.content = newValue;
      },
    },
    setting: {
      immediate: true,
      deep: true,
      handler() {
        this.editorSetting = {
          ...this.editorSetting,
          ...this.setting,
        };

        this.editorSetting.toolbar = this.setting.toolbar || toolbar[this.type]
        this.editorSetting.plugins = this.setting.plugins || plugins[this.type];
                   
        // console.log(this.editorSetting);
      },
    },
  },
  created() {
    // 生成 icons 临时文件，并赋值
    const blob = new Blob([icons],{type: 'application/javascript'});
    this.blobUrl = URL.createObjectURL(blob);
    this.editorSetting.icons = 'custom';
    this.editorSetting.icons_url = this.blobUrl;

    
    // this.editorSetting.toolbar = toolbar[this.type];
    // this.editorSetting.plugins = plugins[this.type];
  },
  mounted() {
    load(this.cdn + '/tinymce.min.js', (err) => {
      //tinymceCDN代表tinymce的CDN地址，下一个参数是回调方法
      if (err) {
        //若脚本加载错误，这弹出错误提示
        return;
      }
      this.visible = true; //否则执行初始化tinymce方法
    });
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    URL.revokeObjectURL(this.blobUrl);
  },
  methods: {
    change() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$emit('input', this.content);
      }, this.waitTime);
    },
  },
};
</script>
<style lang="scss" scoped>
svg {
  fill: currentColor;
}
.vantop-editor {
  width: 100%;
  height: 100%;
  border: 1px solid #e5e7eb;
  /deep/ .tox-editor-header {
    position: relative;
    // 改写工具栏分组样式
    .tox-toolbar__group {
      position: relative;
      &:not(:last-of-type) {
        border-right: 0;
        &::after {
          position: absolute;
          right: 0;
          content: '';
          width: 1px;
          height: 16px;
          background-color: #d1d5db;
        }
      }
      &:nth-last-child(-n + 2) {
        &::after {
          display: none;
        }
      }
      &:last-of-type {
        // position: absolute;
        // right: 0;
        padding-left: 0;
        &::before {
          left: 0;
          content: '';
          width: 1px;
          margin-right: 4px;
          height: 16px;
          background-color: #d1d5db;
        }
      }
      .tox-tbtn {
        cursor: pointer;
      }
      // 选中样式
      .tox-tbtn:hover {
        background-color: #e2ecff;
        border: 0;
        box-shadow: none;
        color: #3377ff;
      }
      // 激活样式
      .tox-tbtn--enabled {
        background-color: #e2ecff;
        color: #3377ff;
      }
    }
  }
}
</style>

<style lang="scss">
.tox-tinymce {
  height: 100% !important;
}
.tox {
  .tox-toolbar__primary {
    background-size: 100% 100% !important;
  }
  .tox-tbtn {
    height: 32px !important;
    width: 32px !important;
    &.tox-tbtn--select {
        width: auto !important;
    }
  }
  .tox-toolbar__group {
    .tox-tbtn {
      cursor: pointer;
    }
    // 选中样式
    .tox-tbtn:hover {
      background-color: #e2ecff;
      border: 0;
      box-shadow: none;
      color: #3377ff;
    }
    // 激活样式
    .tox-tbtn--enabled {
      background-color: #e2ecff;
      color: #3377ff;
    }
  }
}
</style>

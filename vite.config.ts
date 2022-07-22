// @ts-nocheck
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [vue()],
  //通过 vueCustomBlockTransforms 选项来指定自定义区块的转换规则
  vueCustomBlockTransforms: {
    demo: (options) =>
    {
      //将options解构赋值
      const { path } = options;
      //异步读取文件内容，并转为string类型
      const file = fs.readFileSync(path).toString();
      //将读取到的文件中的自定义快渲染为AST
      const parsed = baseParse(file).children.find((n) => n.tag === "demo");
      //读取自定义模块中的文本内容
      const title = parsed.children[0].content;
      //将读取文件中的自定义块切分，并转为字符串类型
      const main = file.split(parsed.loc.source).join("").trim();
      //以JSON数据类型返回
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
    },
  }
};
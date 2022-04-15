## webpack 核心概念

## Entry
指示webpack应该使用哪个模块，来构建其内部依赖图的开始

## output
告诉webpack 在哪里输出bundle， 以及如何命名这些文件，默认值为./dist

## Module 
模块，在webpack 里一切皆模块，一个模块对应这一个文件。
webpack 会从配置的Entry 开始递归找出所有依赖的模块

## Chunk
代码块， 一个Chunk 由多个模块组合而成，用于代码合并并分割

## Loader
loader 让webpack 能够去处理那些非JavaScript文件

## plugin
loader 被用于转换某些类型的模块，二插件则可以用于执行范围更广的任务

## webpack 构建流程

1.初始化参数：从配置文件和shell z中读取与合并参数，得出最终的参数
2.开始编译: 用上一步得到的参数初始化Complier 对象，加载所有配置的插件，执行对象的run方法开始执行编译
3.确定入口： 根据配置中的entry找出所有的入口文件
4.编译模块：从入口文件出发，调用所有配置的Loader 对模块进行翻译，再找出模块以来的模块，递归本步骤知道所有入口依赖的文件都经过了本步骤的处理
5.完成模块编译： 在经过第4步使用Loader 翻译完所有的模块后，得到了每个模块被翻译后的最终内容以及他们之间的依赖关系
6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的chunk，再把每个Chunk转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会
7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统



### webpack 构成

* Complier (编译器类)

包含
入口文件 entry
出口路径 output
模块 module

run()w 启动函数


generate()  生成bundle函数

* 解析入口文件获取AST
通过babel 的parse函数把 文件内容转换成AST抽象语法树

``` javascript
const Parser = {
  getAst: path => {
    // 读取入口文件
    const content = fs.readFileSync(path, 'utf-8')
    // 将文件内容转为AST抽象语法树
    return parser.parse(content, {
      sourceType: 'module'
    })
  }
}
```

* 找出所有依赖模块
**key** 使用babel/traverse (遍历模块) 找出依赖模块
``` javascript
  getDependecies: (ast, filename) => {
    const dependecies = {}
    // 遍历所有的 import 模块,存入dependecies
    traverse(ast, {
      // 类型为 ImportDeclaration 的 AST 节点 (即为import 语句)
      ImportDeclaration({ node }) {
        const dirname = path.dirname(filename)
        // 保存依赖模块路径,之后生成依赖关系图需要用到
        const filepath = './' + path.join(dirname, node.source.value)
        dependecies[node.source.value] = filepath
      }
    })
    return dependecies
  }
}
```

* AST 转换成code
* 将AST语法树转换成浏览器可执行代码 **key** 使用@babel/core 和 @babel/preset-env

``` javascript
const { transformFromAst } = require('@babel/core')
  getCode: ast => {
    // AST转换为code
    const { code } = transformFromAst(ast, null, {
      presets: ['@babel/preset-env']
    })
    return code
  }
}
```

* 递归解析所有依赖项

``` javascript

  build(filename) {
    const { getAst, getDependecies, getCode } = Parser
    const ast = getAst(filename)
    const dependecies = getDependecies(ast, filename)
    const code = getCode(ast)
    return {
      // 文件路径,可以作为每个模块的唯一标识符
      filename,
      // 依赖对象,保存着依赖模块路径
      dependecies,
      // 文件内容
      code
    }
  }
```

* 重写require函数，输出bundle

``` js
generate(code) {
    // 输出文件路径
    const filePath = path.join(this.output.path, this.output.filename)
    // 懵逼了吗? 没事,下一节我们捋一捋
    const bundle = `(function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependecies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[module].code);
        return exports;
      }
      require('${this.entry}')
    })(${JSON.stringify(code)})`

    // 把文件内容写入到文件系统
    fs.writeFileSync(filePath, bundle, 'utf-8')
    (function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependecies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[module].code);
        return exports;
      }
      require('${this.entry}')
    })(${JSON.stringify(code)})
  }
}
```












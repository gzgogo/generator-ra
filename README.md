[[English](README.en-us.md)]

# generator-ra  [![Join the chat at https://gitter.im/generator-ra/Lobby](https://badges.gitter.im/generator-ra/Lobby.svg)](https://gitter.im/generator-ra/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> react+stylus

## 使用方法

### 1. 安装脚手架工具
```
npm install -g yo
```

### 2. 安装生成器
```
npm install -g generator-ra
```

>使用-g进行全局安装，在以后每次新建项目时不需再次安装，可直接创建项目。

### 3. 创建项目
```
yo ra
```

### 4. 目录结构
按上述步骤操作后，会得到如下目录结构：
```
├───package.json                  //包描述文件，包含基本模块的依赖
├───webpack.dev.config.js         //用于开发环境的webpack配置文件
├───webpack.prod.config.js        //用于生产环境的webpack配置文件
├───.gitignore                    //上传到github或gitlab时忽略不必要的文件
├───src/                          //源码的根目录
│   └───fonts/                    //放置自定义字体
│   └───images/                   //放置图片资源
│   └───javascripts/              //存放脚本的根目录
│     └───actions/                //放置redux的actions，该目录只在选择了redux选项时存在
│     └───components/             //放置组件
│     └───constants/              //放置常量
│     └───containers/             //放置容器组件，对于简单的项目，一般用于放置根组件
│     └───libs/                   //放置第三方库
│     └───reducers/               //放置redux的reducers，该目录只在选择了redux选项时存在
│     └───utils/                  //放置项目中的公共代码
│     └───main.js                 //入口脚本文件，对于简单的项目，一般用于绘制根组件
│   └───stylesheets/              //放置样式文件
```

### 5. 安装依赖
在项目根目录下执行：
```
npm install
```

### 6. 进入开发阶段（实时刷新）
```
npm run dev
```
在浏览器上打开地址`localhost:8888`（端口可以修改），即可在页面上看到Hello React字样，同时进入开发阶段，修改文件并保存后页面会实时刷新。

>1. HelloReact组件只用做demo演示，实际开发时需要通过删除HelloReact目录删除该demo组件。

>2. 有时运行该命令时会报如下错误：`Error: listen EADDRINUSE 127.0.0.1:8888`，遇到这种情况需要按照下面方法修改端口：
>修改`package.jso`文件内`scripts`字段的`dev`命令，找到`--port`，将其后面的`8888`改为其他端口，如`3000`。

### 7. 编译打包
```
npm run buld
```
编译后会生成dst目录，测试或发布时使用该目录即可。

### 8. 创建组件
在项目根目录下执行：
```
yo ra:rc
```
该命令会根据向导在`src/javascripts/components/`目录下创建相应组件。


## License

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) © [gongzhen]()

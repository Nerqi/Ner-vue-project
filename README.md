## Getting started
```bush
# clone the project
git clone http://10.1.241.24/asiainfo-aialm/project_demo_front.git

// install dependencies
cnpm install

// 预先打包第三方文件
npm run dll

// develop
npm run dev

```



## Build
```bush
npm run dll 预先打包第三方文件，生成json，告知webpack打包机制(只需运行一次，永久受用)
npm run build 打包（提前运行dll，可优化此步骤速度）
```

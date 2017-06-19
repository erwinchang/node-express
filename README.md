# node-express

* npm init
產生package.json


* 安裝目前使用的package
使用--save，將會更新package.json內容
```
npm install --save express
npm install --save express3-handlebars
```

* 若已有package.json裡面相關的相依package
 只有npm install將會自動安裝需要package

-----

## 說明

### ch04
使用exports全或變數方式
如果你想要讓某個東西可以在模組外被看到，就必順加到exports

### ch05

注意express3-handlebars，只能用在express3上面
目前使用express4，因此改用express-handlebars


* save及save-dev
save 及 save-dev都為自已加入package.json功能
save加到dependencies
save-dev加到devDependencies

* production
不會安裝devDependencies
若是npm install將會安裝dependencies及devDependencies
```
npm install --production
```

* mocha
使用save-dev將package加到devDependencies裡面
```
npm install --save-dev mocha
```

將第三方程式(Mocha,Chai)放在vendor目錄，可以讓你區分那些程式是應該測試並修改
* Chai is a BDD / TDD assertion library

* 未開啟test
![Imgur](http://i.imgur.com/4aDuijH.png)

* 開啟test=1
此時會產生(passes:,failures:,duration:)等變數在html上面，如下圖
![Imgur](http://i.imgur.com/TYnfh6c.png)

## ch05-2
增加測試網頁(public/qa/tests-about.js)

### ch05-3 , javascript測試

* 綱頁測試
  mocha

* 跨頁測試
  zombie.js

* 測試流程
1. 先帶起node
node meadowlark.js

2. 再帶mocha
mocha -u tdd -R spec qa/tests-crosspage.js 2>/dev/null



// webpack打包的入口
// 按需导入使用{}
import {addFn} from './add/add.js'
import {getArrSum} from './tool/tool.js'



console.log(addFn(10, 20));
console.log(getArrSum([1, 2, 3, 4, 5]));

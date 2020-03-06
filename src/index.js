import { MyMappingClass } from './MyMappingClass';

var m = new MyMappingClass();
m.setupMap();
var arr = m.createConvexHull(15);
console.log(arr);

 
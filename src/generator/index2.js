function* say() {
    let a = yield '1';
    console.log(a);
    let b = yield '2';
    console.log(b);
}
let it = say();//返回迭代器
console.log(it.next());//输出{value:'1',done:false}  a的值并非该返回值，而是下次next参数

console.log(it.next('我是被传进来的1'));//我是被传进来的1 { value: '2', done: false }
console.log(it.next('我是被传进来的2'));//我是被传进来的2 { value: undefined, done: true }

const a=[1,2,3,4,5,6,7,8,9];
const b=a.filter(i=>i%2===0)
console.log(b);
const c=b.map(i=>i*i)
console.log(c)
const d=c.reduce((i,s)=>s+i)
// const d=c.reduce((i,s)=>s+i,2)
console.log(d)
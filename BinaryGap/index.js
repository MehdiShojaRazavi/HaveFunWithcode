function solution(N){
  let stack = [];
  if (Number.isInteger(N) && (N >=1 && N<=2147483647)){
    const bi = (N >>> 0).toString(2);
    const len = bi.length;
    let hasOne = false;
    let zero = 0;

    for (let i = 0; i<len; i++){
      if (bi[i] == 1){
        if (!hasOne){
          hasOne = true;
          continue;
        }
        stack.push(zero);
        zero = 0;
        continue;
      }
      zero++;
    }
  }  
  
  return  Boolean(stack?.length) ? stack.reduce((a,b)=>{return Math.max(a,b)}) : 0 ;
  // return Boolean(stack?.length) ? Math.max(...stack) : 0;
  // return  Boolean(stack?.length) ? Math.max.apply(null, stack) : 0;
  // return  Boolean(stack?.length) ? stack.reduce((a,b)=>{return Math.max(a,b)}) : 0 ;
}



console.log(solution(1041)); // 5
console.log(solution(32)); // 0
console.log(solution(9)); // 2
console.log(solution(529)); // 4
console.log(solution(20)); // 4
console.log(solution(15)); // 4
console.log(solution(0)); // 4


function solution1(start, stop, step){
  let s='';
  for (let i = start; i <= stop; i += step){
    for (let j = 0; j <= i; j++){
      s += '*';
    }
    s += '\n';
  }
  return s
}

function solution2(start, stop, step){
  let s='';
  for (let i = start; i >= stop; i += step){
    for (let j = 0; j <= i; j++){
      s += '*';
    }
    s += '\n';
  }
  return s
}

function solution3(n){
  let s = '';
  for (let i = n; i >= 0; i--){
    for (let j = 0; j <= n - i; j++){
      s += ' ';
    }
    for (let j =0; j <= (2 * i - 1); j++){
      s += '*';
    }
    s += '\n';
  }
  return s;
}
// **********
//  ********
//   ******
//    ****
//     **



function solution4(n){
  let i = 0;
  if (Number.isInteger(n)){
    while(n > 0){
      n = Math.floor(n / 10);
      i++;
    }
  }
  return i;
}


function fibo1(n){
  let a = 0;
  let b = 1;
  let c = 0;
  while(a <= n){
    c = a + b; 
    console.log(c);
    a = b;
    b = c;
  }
}

function fibo2(n){
  let c = 0;
  if (n <= 1)
    return 1;
  c = fibo2(n-1) + fibo2(n-2);
  return c;
}

function fibo3(mem, num){
  mem = mem || {};

  let c = 0;
  if (n <= 1)
    return 1;
  c = fibo2(n-1) + fibo2(n-2);
  return c;
}


function solution5(n){
if (n==0) return 1;
let nums = [];
nums[0] = 1;
let total;
let x = [1, 3, 5];
for (let i = 1; i <= n; i++){
  total = 0;
  x.forEach((j) => {
    if (i - j >= 0)
      total += nums[i - j];
    console.log(j);
  });
  nums[i] = total;
}
console.log('nums : ', nums);
console.log('nums[n] : ', nums[n]);
}


function solution6(n){
  if (n == 0) return 1;
  let total = 0;
  let x = [1, 3, 5];
  x.forEach((j) => {
    if (n - i >= 0)
      total += solution6(n - i);
  })
}

solution6(7);
// solution5(7)
// console.log(fibo2(5));
// fibo1(20);
// console.log(solution4(200));
// console.log(solution3(5));
// console.log(solution1(0, 10, 1));
// console.log(solution2(10, 0, -1));




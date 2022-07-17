function solution(arr){
  let a = [...arr];
  let i = 0;
  a.forEach(element => {
    pairIndex = a.indexOf(element, i + 1);
    if (pairIndex > -1){
      a.splice(pairIndex, 1);
    }else{
      // console.log(element, a, i, arr);
      return;
    }
    i++;
  });
}

solution([9,5,5,9,3,1,6,7,3,6,7,8])
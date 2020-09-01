interface lpu{
  title:string,
  course:string,
};

interface uwe{
  title:string,
  course:string,
};


function printlpu(xxx:lpu){
  console.log(`title:${xxx.title}, course:${xxx.course}`);
}
function printuwe(xxx:uwe){
  //console.log('${xxx.title}${xxx.course}');
  console.log(xxx.title , xxx.course);
}


let c={//obj//
title:'Hello Angular',
course:'BCA',
}
let d={//obj//
title:'Hello Typescript',
course:'BSC',
}

printlpu(c);
printlpu(d);

printuwe(c);


console.log(c);
console.log(d);

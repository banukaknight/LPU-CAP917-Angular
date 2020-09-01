interface lpu{
  title:string,
  course:string,
  price:number,
  publisher?:string,
  SSdn?:number
};

function bookName(details:lpu){
  console.log('${detail.title}${detail.course}${detail.price}');
}

let b={//obj//
title:'Hello Java',
course:'BCA',
price:44
};

bookBame(b); passing obj as parameter

;
;
function printlpu(xxx) {
    console.log("title:" + xxx.title + ",course:" + xxx.course);
}
function printuwe(xxx) {
    //console.log('${xxx.title}${xxx.course}');
    console.log(xxx.title, xxx.course);
}
var c = {
    title: 'Hello Angular',
    course: 'BCA'
};
var d = {
    title: 'Hello Typescript',
    course: 'BSC'
};
printlpu(c);
printlpu(d);
printuwe(c);
console.log(c);
console.log(d);

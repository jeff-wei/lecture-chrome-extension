console.log('start content.js ...') ;

var bdy = document.getElementsByTagName('body') ;

var word      = '颱風'  ;
var template  = '<b style="color:red">'+word+'</b>';
var segments  = bdy[0].innerHTML.split(word) ;

var result    = '' ;
if( segments.length > 0 ){
    result = segments[0] ;
    for( var i=1 ; i<segments.length-1 ; i++){
        result = result + template+ segments[i] ;
    }
}
bdy[0].innerHTML = result ;

console.log('end content.js !') ;
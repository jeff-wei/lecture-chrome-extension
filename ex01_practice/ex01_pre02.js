function go(){
    
    console.log('start go() ...') ;

    var h2 = document.getElementsByTagName('h2') ;

    for( var i=0 ; i<h2.length; i++){
        h2[i].style = 'background-color:yellow;'
    }
    
    console.log('end go() !') ;

}
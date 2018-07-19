$(document).ready(function()
 {
     // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
    /* $('.selectable').qtip({
         content: 'test',
         position: {
             target: 'mouse',
             adjust: { mouse: false }
         },
         show: {
             event: 'mouseup'
         },
         hide: {
             event: 'unfocus'
         }
     });*/
 
 let selObj = window.getSelection();
 $('.getText')[0].innerHTML = selObj;

 });
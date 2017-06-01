/**
 * 
 * @authors Whelam (whelamc@gmail.com)
 * @date    2017-06-01 18:33:57
 * @version $Id$
 */

(function(){
    document.getElementById("weixin").onmouseover = function(){  
        var ewmimg = document.getElementById("ewmimg")  
        ewmimg.style.display="block";  
        this.onmouseout = function (){  
            ewmimg.style.display="none";  
        }  
    }  
})()

window.onload = function(){

/*导航栏效果  获取nav  102*/
let nav = document.querySelector('nav');
let sflag=true;
window.onscroll = function(){
  let sh = document.body.scrollTop;

   if(sh>=102){
       if(sflag){
           sflag=false;
           nav.style.cssText="position:fixed;top:0;left:0;z-index:9999999";
           console.log(1);
       }


   }else if(sh<102){

       if(!sflag){
           sflag=true;
           nav.style.cssText='';
           console.log(2);
       }
   }
}
//轮播效果
//获取banner-box  img circle-box li
    let bbox = document.querySelector('.banner-box');
    let imgs = bbox.querySelectorAll('.bimg>a');
    let cbox = document.querySelector('.circle-box');
    let lis = cbox.querySelectorAll('li');
    let cw = imgs[0].offsetWidth;
    let now=0,next=0;
    let btnl = document.querySelector('.btnl');
    let btnr = document.querySelector('.btnr');
    let flag = true;
    let t = setInterval(fn,3000);
    function fn(){
    	next++;
    	if(next==imgs.length){
    		next = 0;
    	}
       imgs[next].style.left = cw+'px';
       animate(imgs[now],{left:-cw});
       lis[now].style.background = '#fff';
       animate(imgs[next],{left:0},function(){flag=true});
       lis[next].style.background = '#F13F4B';
       now = next;
    }
    
    bbox.onmouseenter = function(){
    	clearInterval(t)
    }
    bbox.onmouseleave = function(){
     t = setInterval(fn,3000);
    }
/*点击*/
    for(let i=0;i<imgs.length;i++){
    	lis[i].onclick = function(){
    		if(now==i){
    			return;
    		}
    		if(now<i){
	    		imgs[i].style.left = cw+'px';
			    animate(imgs[now],{left:-cw});
			    lis[now].style.background = '#fff';
			    animate(imgs[i],{left:0});
			    lis[i].style.background = '#F13F4B';	
    		}else if(now>i){
	    		imgs[i].style.left = -cw+'px';
			    animate(imgs[now],{left:cw});
			    lis[now].style.background = '#fff';
			    animate(imgs[i],{left:0});
			    lis[i].style.background = '#F13F4B';		
    		}
    		now = next = i;
    	}
    }

/*左右按钮*/
    btnl.onclick = function(){
        if(flag){
            flag = false;
            fn();
        }
    }
    btnr.onclick = function(){
        if(flag){
            flag = false;
            fn1();
        }
    }
    function fn1(){
        next--;
        if(next<0){
            next = imgs.length-1;
        }
       imgs[next].style.left = -cw+'px';
       animate(imgs[now],{left:cw});
       lis[now].style.background = '#fff';
       animate(imgs[next],{left:0},function(){flag=true});
       lis[next].style.background = '#F13F4B';
       now = next;
    }

/*案例展示页面*/

//系列效果   获取yizi fright
  let yizi = document.querySelectorAll('.yizi');
  let fright = document.querySelectorAll('.fright');
  let nows = 0;
//console.log(yizi,fright)
  for(let i=0;i<yizi.length;i++){
     yizi[nows].classList.add('color');
     yizi[i].onclick = function(){
        if(nows==i){
            return;
        }
        fright[nows].style.display = 'none';
        yizi[nows].classList.remove('color');
        fright[i].style.display = 'block';
        yizi[i].classList.add('color');
        nows = i;
     }
  }

    
}

let an=2;
function1(an);



function function1(hn){
    an=hn;
    bn=document.getElementsByClassName("a");
    en=document.getElementsByClassName("d");
    fn=document.getElementById("left");
    gn=document.getElementById("right");
    if(an==0){
        fn.style.display="none";
    }
    else if(an==bn.length-1){
        gn.style.display="none";
    }
    else{
        fn.style.display="flex";
        gn.style.display="flex";
    }
    jn=window.getComputedStyle(one);
    kn=jn.getPropertyValue("width");
    ln=parseFloat(kn)*an;
    for(let i=0; i<bn.length;i++){
        bn[i].style.transform="translateX(-"+ln.toString()+"px)";
    }
}

function function2(dn){
    an=an+dn;
    function1(an);
}

main=document.getElementById("main");
main.addEventListener("mouseover",func1);
main.addEventListener("mouseout",func2);
image=document.getElementsByClassName("image");
boxover=document.getElementsByClassName("boxover");
left1=document.getElementById("left1");
right1=document.getElementById("right1");
box=document.getElementsByClassName("box");
a=null;
b=null;
b=0;
func2();
function func1(){
    clearInterval(a);
}
function func2(){
    a=setInterval(func3, 1500);
}
function func3(){
    f=window.getComputedStyle(main);
    e=f.getPropertyValue("width");
    g=parseFloat(e);
    if (g>=700){
        c=b*g/3;
        d=c.toString();
        for(i=0;i<image.length;i++){
            box[i].style.transform="translateX(-"+d+"px)";
            image[i].style.transform="rotate3d(0,0,0,0deg)";
            boxover[i].style.transform="rotate3d(0,0,0,0deg)";
            image[i].style.height="400px";
            boxover[i].style.height="450px";
            boxover[i].style.left="0";
            boxover[i].style.right="0";
        }
        image[b].style.transform="rotate3d(0,1,0,45deg)";
        image[b+2].style.transform="rotate3d(0,1,0,-45deg)";
        boxover[b].style.transform="rotate3d(0,1,0,45deg)";
        boxover[b+2].style.transform="rotate3d(0,1,0,-45deg)";
        image[b+1].style.height="450px";
        boxover[b+1].style.height="500px";
        boxover[b].style.left="5%";
        boxover[b+2].style.left="-5%";
    }
    else{
        c=b*g;
        d=c.toString()
        for(i=0;i<image.length;i++){
            box[i].style.transform="translateX(-"+d+"px)";
        }
    }
    if(b==image.length-3){
        b=0;
    }
    else{
        b=b+1;
    }
}

for (p= 0; p< boxover.length; p++) {
    boxover[p].addEventListener('mouseover', function func6(e){
        for(z=0;z<image.length;z++){
        if(e.target==boxover[z]){
            boxover[z].style.display="none";
        }
    }
    });
}
for (p= 0; p< boxover.length; p++) {
    image[p].addEventListener('mouseover', function func6(e){
        for(z=0;z<image.length;z++){
        if(e.target==image[z]){
            boxover[z].style.display="none";
        }
    }
    });
}
for (w= 0; w < boxover.length; w++) {
    image[w].addEventListener('mouseout', function func5(e){
        for(q=0;q<image.length;q++){
            boxover[q].style.display="flex";
        }
    });
}
for (w= 0; w < boxover.length; w++) {
    boxover[w].addEventListener('mouseout', function func5(e){
        for(q=0;q<image.length;q++){
            boxover[q].style.display="flex";
        }
    });
}
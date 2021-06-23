function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
docReady(function() {
    document.getElementById('crowd').volume=0;
    document.getElementById('crowd').play();
});
document.documentElement.style.setProperty('--perspect','300px');
document.documentElement.style.setProperty('--origin','650px');
document.documentElement.style.setProperty('--positionX','0px');
document.documentElement.style.setProperty('--positionZ','0px');
document.documentElement.style.setProperty('--cpositionX','650px');
document.documentElement.style.setProperty('--cpositionZ','0px');
var shooting=false;
var eventkey
var covering
var runtime=0;
var boombox=500;
var boomboz=-800;
document.getElementsByClassName('button')[0].onclick =()=> {
    if(runtime>24){
        covering=window.setInterval((()=>{
            runtime--;
            if(runtime==0){
                clearInterval(covering);
            }
            document.getElementsByClassName('coverer')[0].style['transform']=('translateX('+(-400+runtime*16)+'px)')
            document.getElementsByClassName('coverer2')[0].style['transform']=('translateX('+(-2000+runtime*80)+'px)')
        }),1);
    }
    else{
        covering=window.setInterval((()=>{
            runtime++;
            if(runtime>24){
                clearInterval(covering);
            }
            document.getElementsByClassName('coverer')[0].style['transform']=('translateX('+(-400+runtime*16)+'px)')
            document.getElementsByClassName('coverer2')[0].style['transform']=('translateX('+(-2000+runtime*80)+'px)')
        }),1);
    }
};
document.onkeydown=(e) => {
    document.getElementById('crowd').loop=true;
    if(shooting)return;
    shooting=true;
    var code=e.code;
    console.log(shooting)
    eventkey=window.setInterval(( () => {
        console.log("hi")
        var distant=document.documentElement.style.getPropertyValue('--perspect')
        var ori=document.documentElement.style.getPropertyValue('--origin')
        var posX=document.documentElement.style.getPropertyValue('--positionX')
        var posZ=document.documentElement.style.getPropertyValue('--positionZ')
        var cposX=document.documentElement.style.getPropertyValue('--cpositionX')
        var cposZ=document.documentElement.style.getPropertyValue('--cpositionZ')
        var cz=parseInt(posZ.slice(0,-2));
        var cx=parseInt(posX.slice(0,-2))
        function distance(x1,x2,y1,y2) {
            var min=100;
            return Math.log10((x1/min-x2/min)*(x1/min-x2/min)+(y1/min-y2/min)*(y1/min-y2/min))
        }
        if(distance(cx,boombox,cz,boomboz)==NaN){
            document.getElementById('crowd').volume=0;
        }
        else if(distance(cx,boombox,cz,boomboz)<1){
            document.getElementById('crowd').volume=1;
        }
        else{
            document.getElementById('crowd').volume=1/distance(cx,boombox,cz,boomboz)
        }
        console.log(document.getElementById('crowd').volume);
        switch(code){
            case"KeyW":
            document.documentElement.style.setProperty('--perspect',parseInt(distant.slice(0,-2))-1+'px');
            document.documentElement.style.setProperty('--positionZ',parseInt(posZ.slice(0,-2))+10+'px');
            document.documentElement.style.setProperty('--cpositionZ',parseInt(cposZ.slice(0,-2))-10+'px');
            break;
            case"KeyA":
            var char=document.getElementById("character")
            char.style['backgroundImage']=('url(../images/doll2.png)')
            document.documentElement.style.setProperty('--origin',parseInt(ori.slice(0,-2))-1+'px');
            document.documentElement.style.setProperty('--positionX',parseInt(posX.slice(0,-2))+10+'px');
            document.documentElement.style.setProperty('--cpositionX',parseInt(cposX.slice(0,-2))-10+'px');
            break;
            case"KeyS":
            document.documentElement.style.setProperty('--perspect',parseInt(distant.slice(0,-2))+1+'px');
            document.documentElement.style.setProperty('--positionZ',parseInt(posZ.slice(0,-2))-10+'px');
            document.documentElement.style.setProperty('--cpositionZ',parseInt(cposZ.slice(0,-2))+10+'px');
            break;
            case"KeyD":var char=document.getElementById("character")
            char.style['backgroundImage']=('url(../images/doll1.png)')
            document.documentElement.style.setProperty('--origin',parseInt(ori.slice(0,-2))+1+'px');
            document.documentElement.style.setProperty('--positionX',parseInt(posX.slice(0,-2))-10+'px');
            document.documentElement.style.setProperty('--cpositionX',parseInt(cposX.slice(0,-2))+10+'px');
            break;
        }})
        , 10);
};
document.onkeyup=(e)=>{
    clearInterval(eventkey);
    shooting=false;
};
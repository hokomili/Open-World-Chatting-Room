document.documentElement.style.setProperty('--perspect','200px');
document.documentElement.style.setProperty('--origin','650px');
document.documentElement.style.setProperty('--positionX','0px');
document.documentElement.style.setProperty('--positionZ','0px');
document.documentElement.style.setProperty('--cpositionX','500px');
document.documentElement.style.setProperty('--cpositionZ','0px');
var shooting=false;
var eventkey
document.onkeydown=(e) => {
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
        switch(code){
            case"KeyW":
            document.documentElement.style.setProperty('--perspect',parseInt(distant.slice(0,-2))-1+'px');
            document.documentElement.style.setProperty('--positionZ',parseInt(posZ.slice(0,-2))+2+'px');
            document.documentElement.style.setProperty('--cpositionZ',parseInt(cposZ.slice(0,-2))-2+'px');
            break;
            case"KeyA":
            document.documentElement.style.setProperty('--origin',parseInt(ori.slice(0,-2))-1+'px');
            document.documentElement.style.setProperty('--positionX',parseInt(posX.slice(0,-2))+10+'px');
            document.documentElement.style.setProperty('--cpositionX',parseInt(cposX.slice(0,-2))-10+'px');
            break;
            case"KeyS":
            document.documentElement.style.setProperty('--perspect',parseInt(distant.slice(0,-2))+1+'px');
            document.documentElement.style.setProperty('--positionZ',parseInt(posZ.slice(0,-2))-2+'px');
            document.documentElement.style.setProperty('--cpositionZ',parseInt(cposZ.slice(0,-2))+2+'px');
            break;
            case"KeyD":
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
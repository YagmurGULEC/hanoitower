
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frame=0;
const staggerFrames=2;

function animate() {
    let pos=Math.floor(frame/staggerFrames)%200;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(pos, canvas.height/2, 50, 50);
    frame++;
    requestAnimationFrame(animate);
}

window.addEventListener('DOMContentLoaded', event => {
    
    animate();
 
    
   
});

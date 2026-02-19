const layer = document.getElementById("heartsLayer");

function spawnHeart(){
  if(!layer) return;

  const heart = document.createElement("div");
  heart.textContent = "💗";

  const size = 14 + Math.random() * 22;
  const startX = Math.random() * window.innerWidth;
  const duration = 3500 + Math.random() * 2500;
  const drift = (Math.random() * 120) - 60;

  heart.style.position = "absolute";
  heart.style.left = `${startX}px`;
  heart.style.top = `${window.innerHeight + 30}px`;
  heart.style.fontSize = `${size}px`;
  heart.style.opacity = "0.85";
  heart.style.filter = "drop-shadow(0 6px 10px rgba(0,0,0,0.25))";

  layer.appendChild(heart);

  const anim = heart.animate([
    { transform: `translate(0, 0)`, opacity: 0 },
    { transform: `translate(${drift}px, -${window.innerHeight * 0.4}px)`, opacity: 0.9, offset: 0.2 },
    { transform: `translate(${drift}px, -${window.innerHeight + 120}px)`, opacity: 0 }
  ], { duration, easing: "linear" });

  anim.onfinish = () => heart.remove();
}

setInterval(spawnHeart, 220);

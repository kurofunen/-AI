
<div id="cursor-dot" class="fixed w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"></div>
<div id="cursor-circle" class="fixed w-10 h-10 border border-black/20 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"></div>

<script>
    const dot = document.getElementById('cursor-dot');
    const circle = document.getElementById('cursor-circle');
    
    let circleX = 0, circleY = 0;
    let dotX = 0, dotY = 0;

    window.addEventListener('mousemove', (e) => {
        dotX = e.clientX;
        dotY = e.clientY;
        dot.style.left = dotX + 'px';
        dot.style.top = dotY + 'px';
    });

    // Smooth circle movement
    const animate = () => {
        circleX += (dotX - circleX) * 0.15;
        circleY += (dotY - circleY) * 0.15;
        circle.style.left = circleX + 'px';
        circle.style.top = circleY + 'px';
        requestAnimationFrame(animate);
    };
    animate();

    // Hover effect
    document.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
            circle.style.transform = 'translate(-50%, -50%) scale(1.5)';
            circle.style.backgroundColor = 'rgba(0,0,0,0.05)';
        } else {
            circle.style.transform = 'translate(-50%, -50%) scale(1)';
            circle.style.backgroundColor = 'transparent';
        }
    });
</script>

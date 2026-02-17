
<section class="relative w-full h-screen overflow-hidden bg-white">
  <div id="hero-container" class="relative w-full h-full">
    <?php
    $slides = [
      ['image' => 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?q=80&w=2000', 'title' => 'LOST CORNER', 'subtitle' => '6th Album 2024.08.21 Release'],
      ['image' => 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2000', 'title' => 'SAYONARA MATA ITSUKA!', 'subtitle' => 'New Single Out Now'],
      ['image' => 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2000', 'title' => 'JUNK TOUR 2025', 'subtitle' => 'Live Tour Coming Soon']
    ];
    foreach ($slides as $i => $slide):
    ?>
    <div class="hero-slide absolute inset-0 transition-opacity duration-[1500ms] ease-in-out <?php echo $i === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'; ?>">
      <div class="relative w-full h-full overflow-hidden">
        <img src="<?php echo $slide['image']; ?>" class="w-full h-full object-cover ken-burns">
        <div class="absolute inset-0 bg-black/10"></div>
        <div class="absolute inset-0 hero-gradient"></div>
      </div>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <div class="text-center slide-content opacity-0 translate-y-10 transition-all duration-1000 delay-500">
          <h1 class="text-4xl md:text-8xl font-serif-jp font-light tracking-[0.2em] mb-6 uppercase drop-shadow-2xl"><?php echo $slide['title']; ?></h1>
          <p class="text-[10px] md:text-xs tracking-[0.6em] font-light uppercase mb-12 opacity-80"><?php echo $slide['subtitle']; ?></p>
          <a href="#" class="inline-block px-12 py-4 border border-white/40 text-[10px] tracking-[0.4em] uppercase font-bold transition-all duration-500 backdrop-blur-sm hover:bg-white hover:text-black">View Details</a>
        </div>
      </div>
    </div>
    <?php endforeach; ?>
  </div>

  <div class="absolute bottom-16 left-0 w-full px-12 flex justify-between items-end z-30">
    <div id="slide-indicators" class="flex items-center space-x-6">
      <?php foreach ($slides as $i => $slide): ?>
      <button class="indicator group relative h-8 flex items-center" data-index="<?php echo $i; ?>">
        <span class="text-[9px] mr-3 font-mono transition-opacity duration-300 <?php echo $i === 0 ? 'opacity-100' : 'opacity-30'; ?>">0<?php echo $i+1; ?></span>
        <div class="w-12 h-[1px] bg-white transition-all duration-700 origin-left <?php echo $i === 0 ? 'scale-x-100' : 'scale-x-[0.5] opacity-20'; ?>"></div>
      </button>
      <?php endforeach; ?>
    </div>
    <div class="flex items-center space-x-8">
        <button id="prev-slide" class="text-white/40 hover:text-white transition-colors"><i data-lucide="chevron-left" size="32"></i></button>
        <button id="next-slide" class="text-white/40 hover:text-white transition-colors"><i data-lucide="chevron-right" size="32"></i></button>
    </div>
  </div>
</section>

<script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    const showSlide = (idx) => {
        slides.forEach((s, i) => {
            if (i === idx) {
                s.classList.add('opacity-100', 'z-10');
                s.classList.remove('opacity-0', 'z-0');
                s.querySelector('.slide-content').classList.remove('opacity-0', 'translate-y-10');
                s.querySelector('.slide-content').classList.add('opacity-100', 'translate-y-0');
                indicators[i].querySelector('span').classList.replace('opacity-30', 'opacity-100');
                indicators[i].querySelector('div').classList.remove('scale-x-[0.5]', 'opacity-20');
                indicators[i].querySelector('div').classList.add('scale-x-100');
            } else {
                s.classList.remove('opacity-100', 'z-10');
                s.classList.add('opacity-0', 'z-0');
                s.querySelector('.slide-content').classList.add('opacity-0', 'translate-y-10');
                s.querySelector('.slide-content').classList.remove('opacity-100', 'translate-y-0');
                indicators[i].querySelector('span').classList.replace('opacity-100', 'opacity-30');
                indicators[i].querySelector('div').classList.add('scale-x-[0.5]', 'opacity-20');
                indicators[i].querySelector('div').classList.remove('scale-x-100');
            }
        });
        currentSlide = idx;
    };

    // Initial trigger
    showSlide(0);

    document.getElementById('next-slide').addEventListener('click', () => showSlide((currentSlide + 1) % slides.length));
    document.getElementById('prev-slide').addEventListener('click', () => showSlide((currentSlide - 1 + slides.length) % slides.length));
    indicators.forEach((ind, i) => ind.addEventListener('click', () => showSlide(i)));

    setInterval(() => showSlide((currentSlide + 1) % slides.length), 8000);
</script>

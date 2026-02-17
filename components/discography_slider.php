
<div class="relative py-40 overflow-hidden">
  <div class="absolute top-20 left-12 select-none pointer-events-none opacity-[0.03] z-0">
    <span class="text-[15vw] font-serif-jp italic font-bold tracking-tighter uppercase leading-none whitespace-nowrap">Discography</span>
  </div>

  <div class="max-w-[1800px] mx-auto px-12 relative z-10">
    <div class="flex flex-col mb-16">
      <div class="flex items-center space-x-8">
        <h2 class="text-2xl md:text-3xl font-serif-jp font-bold tracking-[0.3em] uppercase">Discography</h2>
        <div class="w-24 h-[1px] bg-white/20"></div>
      </div>
    </div>

    <div class="flex space-x-8 md:space-x-12 overflow-x-auto pb-16 snap-x no-scrollbar">
      <?php
      $albums = [
        ['title' => 'LOST CORNER', 'date' => '2024.08.21', 'type' => 'ALBUM', 'img' => 'https://picsum.photos/seed/lost/600/600'],
        ['title' => 'がらくた', 'date' => '2024.07.26', 'type' => 'SINGLE', 'img' => 'https://picsum.photos/seed/garakuta/600/600'],
        ['title' => '毎日', 'date' => '2024.05.27', 'type' => 'SINGLE', 'img' => 'https://picsum.photos/seed/mainichi/600/600'],
        ['title' => 'さよーならまたいつか！', 'date' => '2024.04.12', 'type' => 'SINGLE', 'img' => 'https://picsum.photos/seed/sayonara/600/600'],
        ['title' => 'STRAY SHEEP', 'date' => '2020.08.05', 'type' => 'ALBUM', 'img' => 'https://picsum.photos/seed/stray/600/600']
      ];
      foreach ($albums as $album):
      ?>
      <a href="#" class="flex-shrink-0 w-[280px] md:w-[380px] snap-start group">
        <div class="relative aspect-square mb-8 overflow-hidden bg-white/5">
          <img src="<?php echo $album['img']; ?>" class="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105">
          <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="text-[10px] tracking-[0.5em] font-bold border border-white px-4 py-2 uppercase">View <?php echo $album['type']; ?></span>
          </div>
        </div>
        <div class="space-y-3 px-1 text-white">
          <span class="text-[10px] md:text-[11px] font-mono opacity-40 tracking-widest block"><?php echo $album['date']; ?></span>
          <h3 class="text-lg md:text-xl font-serif-jp font-light tracking-widest uppercase leading-tight group-hover:text-white/80 transition-colors"><?php echo $album['title']; ?></h3>
        </div>
      </a>
      <?php endforeach; ?>
      <a href="#" class="flex-shrink-0 w-[280px] md:w-[380px] snap-start flex flex-col items-center justify-center border border-white/5 hover:bg-white/[0.02] transition-all duration-500 aspect-square text-white">
        <span class="text-[10px] tracking-[0.5em] uppercase font-bold opacity-30">View All</span>
        <div class="w-12 h-[1px] bg-white/10 my-6"></div>
        <span class="handwritten text-4xl opacity-20 italic">Archives</span>
      </a>
    </div>

    <div class="flex items-center space-x-4 mt-8 opacity-20 text-white">
      <div class="w-12 h-[1px] bg-white"></div>
      <span class="text-[9px] tracking-[0.4em] uppercase font-bold">Scroll to explore</span>
    </div>
  </div>
</div>

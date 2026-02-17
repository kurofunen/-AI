
<div class="max-w-7xl mx-auto px-6 py-32">
  <div class="flex items-center space-x-12 mb-20">
    <h2 class="text-6xl font-serif-jp font-light tracking-widest uppercase italic">News</h2>
    <div class="h-[1px] flex-grow bg-black/5"></div>
    <a href="#" class="text-[10px] tracking-[0.4em] font-bold hover:underline opacity-50 flex items-center">
      VIEW ALL <i data-lucide="chevron-right" size="12" class="ml-2"></i>
    </a>
  </div>

  <div class="grid grid-cols-1 gap-0">
    <?php
    $news = [
      ['date' => '2024.11.15', 'title' => '「さよーならまたいつか！」NHK紅白歌合戦 出場決定', 'cat' => 'NEWS'],
      ['date' => '2024.10.02', 'title' => '新曲「アズール」配信リリース', 'cat' => 'RELEASE'],
      ['date' => '2024.09.20', 'title' => '2025 TOUR / JUNK 開催概要発表', 'cat' => 'LIVE'],
      ['date' => '2024.08.11', 'title' => 'LOST CORNER アルバム特設サイトオープン', 'cat' => 'WEB'],
      ['date' => '2024.07.05', 'title' => '映画『ラストマイル』主題歌「がらくた」解禁', 'cat' => 'NEWS']
    ];
    foreach ($news as $item):
      $parts = explode('.', $item['date']);
    ?>
    <a href="#" class="group relative flex flex-col md:flex-row items-start md:items-center py-12 border-b border-black/10 hover:bg-black/[0.02] transition-colors px-6 -mx-6">
      <div class="flex flex-col md:w-48 mb-4 md:mb-0">
        <span class="text-2xl font-serif-jp font-light tracking-tighter opacity-80 mb-1"><?php echo "{$parts[1]}.{$parts[2]}"; ?></span>
        <span class="text-[10px] font-mono opacity-30"><?php echo $parts[0]; ?></span>
      </div>
      <div class="flex-grow flex items-center space-x-8">
        <span class="text-[9px] px-3 py-1 bg-black text-white tracking-widest font-bold self-start md:self-center"><?php echo $item['cat']; ?></span>
        <h3 class="text-lg md:text-2xl font-light tracking-wider leading-relaxed group-hover:pl-4 transition-all duration-500 font-serif-jp"><?php echo $item['title']; ?></h3>
      </div>
      <div class="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
        <i data-lucide="chevron-right" size="24" strokeWidth="1"></i>
      </div>
    </a>
    <?php endforeach; ?>
  </div>
</div>

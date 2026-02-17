
<nav id="main-nav" class="fixed top-0 left-0 w-full z-50 transition-all duration-700 bg-transparent py-10">
  <div class="max-w-[1800px] mx-auto px-8 flex justify-between items-center">
    <a href="/" id="nav-brand" class="text-2xl font-bold tracking-[0.4em] hover:opacity-60 transition-opacity uppercase font-serif-jp text-white">
      Kenshi Yonezu
    </a>

    <div class="hidden lg:flex items-center space-x-10">
      <?php
      $links = [
        ['label' => 'NEWS', 'path' => '#news'],
        ['label' => 'DISCOGRAPHY', 'path' => '#discography'],
        ['label' => 'VIDEO', 'path' => '#video'],
        ['label' => 'LIVE', 'path' => '#live'],
        ['label' => 'GOODS', 'path' => '#goods'],
        ['label' => 'PROFILE', 'path' => '#profile'],
      ];
      foreach ($links as $link) {
        echo "<a href='{$link['path']}' class='nav-link text-[9px] tracking-[0.5em] font-bold hover:opacity-50 transition-opacity uppercase text-white'>{$link['label']}</a>";
      }
      ?>
    </div>

    <button id="mobile-toggle" class="lg:hidden p-2 z-50 text-white transition-colors">
      <i data-lucide="menu" size="32"></i>
    </button>
  </div>
</nav>

<div id="mobile-menu" class="fixed inset-0 bg-white z-[60] flex flex-col items-center justify-center transition-all duration-700 ease-in-out opacity-0 translate-y-full pointer-events-none">
    <button id="mobile-close" class="absolute top-10 right-10 p-2 text-black">
        <i data-lucide="x" size="32"></i>
    </button>
    <div class="flex flex-col space-y-10 text-center">
        <?php foreach ($links as $link): ?>
            <a href="<?php echo $link['path']; ?>" class="mobile-nav-link text-4xl tracking-[0.4em] font-serif-jp font-thin opacity-0 translate-y-10 transition-all duration-700">
                <?php echo $link['label']; ?>
            </a>
        <?php endforeach; ?>
    </div>
    <div class="absolute bottom-16 text-center opacity-30">
        <p class="text-[10px] tracking-widest font-light">© REISSUE RECORDS INC.</p>
    </div>
</div>

<script>
    const toggle = document.getElementById('mobile-toggle');
    const close = document.getElementById('mobile-close');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    toggle.addEventListener('click', () => {
        menu.classList.remove('opacity-0', 'translate-y-full', 'pointer-events-none');
        menu.classList.add('opacity-100', 'translate-y-0');
        mobileLinks.forEach((link, i) => {
            setTimeout(() => {
                link.classList.remove('opacity-0', 'translate-y-10');
                link.classList.add('opacity-100', 'translate-y-0');
            }, 100 * i);
        });
    });

    const closeMenu = () => {
        menu.classList.add('opacity-0', 'translate-y-full', 'pointer-events-none');
        menu.classList.remove('opacity-100', 'translate-y-0');
        mobileLinks.forEach(link => {
            link.classList.add('opacity-0', 'translate-y-10');
            link.classList.remove('opacity-100', 'translate-y-0');
        });
    };

    close.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
</script>

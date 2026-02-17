
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kenshi Yonezu - Official Site Clone</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Noto+Sans+JP:wght@300;400;700&family=Noto+Serif+JP:wght@200;400;700&family=Caveat&display=swap" rel="stylesheet">
    <style>
      * { cursor: none !important; }
      body {
        font-family: 'Inter', 'Noto Sans JP', sans-serif;
        background-color: #ffffff;
        color: #000000;
        overflow-x: hidden;
      }
      .font-serif-jp { font-family: 'Noto Serif JP', serif; }
      .handwritten { font-family: 'Caveat', cursive; }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      .ken-burns { animation: kenburns 30s infinite alternate; }
      @keyframes kenburns {
        from { transform: scale(1.0); }
        to { transform: scale(1.15); }
      }
      .hero-gradient {
        background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(255,255,255,1) 100%);
      }
      .fade-in-section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 1.2s ease-out;
      }
      .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
    </style>
</head>
<body>
    <?php include './components/custom_cursor.php'; ?>
    <?php include './components/navigation.php'; ?>

    <main>
        <?php include './components/hero.php'; ?>
        
        <div class="relative bg-white z-20 shadow-[0_-40px_100px_rgba(0,0,0,0.1)]">
            <section id="news" class="bg-white fade-in-section">
                <?php include './components/news_list.php'; ?>
            </section>
            
            <?php include './components/illust_divider.php'; ?>
            
            <section id="discography" class="bg-[#080808] text-white fade-in-section">
                <?php include './components/discography_slider.php'; ?>
            </section>
            
            <section id="profile" class="fade-in-section">
                <?php include './components/profile.php'; ?>
            </section>
        </div>
        
        <?php include './components/footer.php'; ?>
    </main>

    <script>
        // Lucide Icons Initialization
        lucide.createIcons();

        // Scroll Reveal Animation
        const observerOptions = { threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });

        // Navigation Scroll Effect
        const nav = document.getElementById('main-nav');
        const navBrand = document.getElementById('nav-brand');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-white/95', 'backdrop-blur-md', 'py-6', 'shadow-sm', 'border-b', 'border-black/5');
                nav.classList.remove('bg-transparent', 'py-10');
                navBrand.classList.add('text-black');
                navBrand.classList.remove('text-white');
                document.querySelectorAll('.nav-link').forEach(link => link.classList.add('text-black'));
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('text-white'));
            } else {
                nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'py-6', 'shadow-sm', 'border-b', 'border-black/5');
                nav.classList.add('bg-transparent', 'py-10');
                navBrand.classList.remove('text-black');
                navBrand.classList.add('text-white');
                document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('text-black'));
                document.querySelectorAll('.nav-link').forEach(link => link.classList.add('text-white'));
            }
        });
    </script>
</body>
</html>

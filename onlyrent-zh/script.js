document.addEventListener('DOMContentLoaded', function () {
    // 輪播圖等功能
    const images = [
        "images/only rent 1.webp",
        "images/only rent 2.webp",
        "images/only rent 3.webp",
        "images/only rent 4.webp",
        "images/only rent 5.webp",
        "images/only rent 6.webp",
        "images/only rent 7.webp",
        "images/only rent 8.webp",
        "images/only rent 9.webp",
        "images/only rent 10.webp"
    ];

    let current = 0;
    const imgEl = document.querySelector('.mockup-image');
    const dots = document.querySelectorAll('.dot');
    let intervalId = null;

    function showImage(idx) {
        imgEl.src = images[idx];
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === idx);
        });
    }

    function nextImage() {
        current = (current + 1) % images.length;
        showImage(current);
    }

    function startCarousel() {
        if (intervalId === null) {
            intervalId = setInterval(nextImage, 2000);
        }
    }

    function stopCarousel() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // 滑鼠移入停止輪播
    imgEl.addEventListener('mouseenter', stopCarousel);
    // 滑鼠移出繼續輪播（先切換下一張，再啟動輪播）
    imgEl.addEventListener('mouseleave', function() {
        nextImage();
        startCarousel();
    });

    imgEl.addEventListener('click', nextImage);
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            current = i;
            showImage(current);
        });
    });

    // 確保載入時顯示第一張圖片並啟動輪播
    showImage(current);
    startCarousel();

    // 服務條款展開
    const footerToggle = document.getElementById('footer-toggle');
    const footerContent = document.getElementById('footer-content');
    const footerClose = document.getElementById('footer-close');
    if (footerToggle && footerContent && footerClose) {
        footerToggle.addEventListener('click', function () {
            footerContent.classList.toggle('active');
        });
        footerClose.addEventListener('click', function () {
            footerContent.classList.remove('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // --- Video Slider Logic ---
    const videoTrack = document.querySelector('.video-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (videoTrack && prevBtn && nextBtn) {
        const scrollAmount = 300;
        let videoPaused = false;

        // Button Event Listeners
        prevBtn.addEventListener('click', () => {
            videoTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            // Check if we are near the end
            if (videoTrack.scrollLeft + videoTrack.clientWidth >= videoTrack.scrollWidth - 10) {
                videoTrack.scrollTo({ left: 0, behavior: 'smooth' }); // Loop to start
            } else {
                videoTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });

        // Video Auto-Scroll Interval
        setInterval(() => {
            if (!videoPaused) {
                if (videoTrack.scrollLeft + videoTrack.clientWidth >= videoTrack.scrollWidth - 10) {
                    videoTrack.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    videoTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        }, 3000);

        // Pause on interaction
        videoTrack.addEventListener('mouseenter', () => videoPaused = true);
        videoTrack.addEventListener('mouseleave', () => videoPaused = false);
        videoTrack.addEventListener('touchstart', () => videoPaused = true);
        videoTrack.addEventListener('touchend', () => setTimeout(() => videoPaused = false, 2000));
    }

    // --- Google Analytics Tracking ---
    window.trackClick = function () {
        if (typeof gtag === 'function') {
            gtag('event', 'affiliate_click', {
                'event_category': 'engagement',
                'event_label': 'shopee_link'
            });
            console.log('GA Event "affiliate_click" tracked.');
        } else {
            console.log('GA snippet not loaded. Event simulated.');
        }
    };

    // --- Testimonial Auto-Scroll Logic ---
    const testimonialTrack = document.querySelector('.testimonial-track');

    if (testimonialTrack) {
        let isPaused = false;

        setInterval(() => {
            if (!isPaused) {
                if (testimonialTrack.scrollLeft + testimonialTrack.clientWidth >= testimonialTrack.scrollWidth - 10) {
                    testimonialTrack.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    testimonialTrack.scrollBy({ left: 330, behavior: 'smooth' });
                }
            }
        }, 3000);

        testimonialTrack.addEventListener('mouseenter', () => isPaused = true);
        testimonialTrack.addEventListener('mouseleave', () => isPaused = false);
        testimonialTrack.addEventListener('touchstart', () => isPaused = true);
        testimonialTrack.addEventListener('touchend', () => setTimeout(() => isPaused = false, 2000));
    }
});

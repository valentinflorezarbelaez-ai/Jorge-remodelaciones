/* ==========================================================================
   Jorge Remodelaciones & Acabados — Interactive Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initSplitSliders();
    initGalleryFilter();
    initLightbox();
    initFloatingWhatsApp();
    initParticles();
    initMetricCounters();
});

/* --------------------------------------------------------------------------
   1. Interactive Spatial Particle Canvas (Google Antigravity Inspired)
   -------------------------------------------------------------------------- */
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    // Respect prefers-reduced-motion for vestibular health
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particleCount = Math.min(Math.floor(width * 0.025), 32);
    const particles = [];
    const colors = ['#FFFFFF', '#E2E8F0', '#94A3B8', '#3B82F6'];

    let mouseX = width / 2;
    let mouseY = height / 2;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.22,
            vy: (Math.random() - 0.5) * 0.22,
            size: Math.random() * 1.6 + 0.8,
            baseAlpha: Math.random() * 0.35 + 0.12,
            alpha: Math.random() * 0.35 + 0.12,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // On mobile devices, draw static stars once and do not run animation loop (prevents movement/jitter)
    if (window.innerWidth < 768) {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < Math.min(particles.length, 18); i++) {
            const p = particles[i];
            ctx.save();
            ctx.globalAlpha = 0.22;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        return;
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            const dx = mouseX - p.x;
            const dy = mouseY - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Subtle mouse avoidance / repulsion
            if (dist < 150) {
                const force = (1 - dist / 150) * 0.8;
                p.x -= (dx / dist) * force * 1.2;
                p.y -= (dy / dist) * force * 1.2;
                p.alpha = Math.min(0.9, p.baseAlpha + (1 - dist / 150) * 0.5);
            } else {
                p.alpha += (p.baseAlpha - p.alpha) * 0.04;
            }

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Connect lines between nearby particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const lineDist = Math.hypot(p.x - p2.x, p.y - p2.y);

                if (lineDist < 120) {
                    ctx.save();
                    ctx.globalAlpha = (1 - lineDist / 120) * 0.12;
                    ctx.strokeStyle = p.color;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

/* --------------------------------------------------------------------------
   2. Header Scroll Backdrop Blur
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 30) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if (!navToggle || !mainNav) return;

    navToggle.addEventListener('click', () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!isExpanded));
        mainNav.classList.toggle('is-open');
    });

    mainNav.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('is-open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !navToggle.contains(e.target) && mainNav.classList.contains('is-open')) {
            navToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('is-open');
        }
    });
}

/* --------------------------------------------------------------------------
   4. Animated Metric Counters
   -------------------------------------------------------------------------- */
function initMetricCounters() {
    const metricElements = document.querySelectorAll('.metric-number');
    if (!metricElements.length) return;

    const animateCount = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1800;
        const stepTime = 20;
        const steps = duration / stepTime;
        const increment = target / steps;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = `${target.toLocaleString('es-CO')}${suffix}`;
                clearInterval(timer);
            } else {
                el.textContent = `${Math.floor(current).toLocaleString('es-CO')}${suffix}`;
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCount(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    metricElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. Interactive Before/After Split Comparison Sliders
   -------------------------------------------------------------------------- */
function initSplitSliders() {
    const sliders = document.querySelectorAll('[data-split-slider]');

    sliders.forEach(slider => {
        const beforeLayer = slider.querySelector('[data-before-layer]');
        const handle = slider.querySelector('[data-split-handle]');
        const rangeInput = slider.querySelector('[data-split-input]');

        if (!beforeLayer || !handle || !rangeInput) return;

        const updatePosition = (val) => {
            const percent = `${val}%`;
            beforeLayer.style.width = percent;
            handle.style.left = percent;
        };

        rangeInput.addEventListener('input', (e) => {
            updatePosition(e.target.value);
        });

        // Mouse hover interaction for desktop
        let isDragging = false;
        const getPercentFromEvent = (e) => {
            const rect = slider.getBoundingClientRect();
            const clientX = e.clientX || (e.touches && e.touches[0].clientX);
            if (clientX === undefined) return 50;
            const x = clientX - rect.left;
            return Math.max(0, Math.min(100, (x / rect.width) * 100));
        };

        slider.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);

        slider.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const percent = getPercentFromEvent(e);
            rangeInput.value = percent;
            updatePosition(percent);
        });
    });
}

/* --------------------------------------------------------------------------
   6. Gallery Filter Tabs
   -------------------------------------------------------------------------- */
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            const filter = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('is-hidden');
                } else {
                    card.classList.add('is-hidden');
                }
            });
        });
    });
}

/* --------------------------------------------------------------------------
   7. Fullscreen Interactive Lightbox
   -------------------------------------------------------------------------- */
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const triggers = document.querySelectorAll('.gallery-card__trigger');

    if (!lightbox || !lightboxImg) return;

    let lastFocusedElement = null;

    const openModal = (src, title, desc) => {
        lastFocusedElement = document.activeElement;
        lightboxImg.src = src;
        lightboxImg.alt = title || 'Vista ampliada del proyecto';
        lightboxTitle.textContent = title || '';
        lightboxDesc.textContent = desc || '';
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
    };

    const closeModal = () => {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300);
        lastFocusedElement?.focus();
    };

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const src = trigger.getAttribute('data-src');
            const title = trigger.getAttribute('data-title');
            const desc = trigger.getAttribute('data-desc');
            if (src) openModal(src, title, desc);
        });
    });

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeModal();
        }
    });
}

/* --------------------------------------------------------------------------
   8. Floating WhatsApp Scroll Visibility Controller
   -------------------------------------------------------------------------- */
function initFloatingWhatsApp() {
    const fab = document.querySelector('.floating-whatsapp');
    if (!fab) return;

    const handleScroll = () => {
        // Only show floating button after user scrolls past the Hero buttons (320px)
        if (window.scrollY > 320) {
            fab.classList.add('is-visible');
        } else {
            fab.classList.remove('is-visible');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}



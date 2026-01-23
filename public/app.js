(function () {
    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function initMobileMenu() {
        var toggle = document.querySelector('[data-menu-toggle]');
        var panel = document.querySelector('[data-mobile-nav]');
        if (!toggle || !panel) return;

        function setOpen(isOpen) {
            toggle.setAttribute('aria-expanded', String(isOpen));
            if (isOpen) {
                panel.hidden = false;
            } else {
                panel.hidden = true;
            }
        }

        setOpen(false);

        toggle.addEventListener('click', function () {
            var isOpen = toggle.getAttribute('aria-expanded') === 'true';
            setOpen(!isOpen);
        });

        panel.addEventListener('click', function (e) {
            var t = e.target;
            if (!t || !t.closest) return;
            var link = t.closest('a[href^="#"]');
            if (link) setOpen(false);
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });
    }

    function initSmoothScroll() {
        var links = document.querySelectorAll('a[href^="#"]');
        if (!links.length) return;

        links.forEach(function (link) {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href');
                if (!href || href === '#') return;

                var id = href.slice(1);
                var target = document.getElementById(id);
                if (!target) return;

                e.preventDefault();

                var topbar = document.querySelector('.lp-topbar');
                var offset = topbar ? topbar.offsetHeight + 10 : 10;
                var y = target.getBoundingClientRect().top + window.pageYOffset - offset;

                if (prefersReducedMotion()) {
                    window.scrollTo(0, y);
                } else {
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }

                history.pushState(null, '', href);
            });
        });
    }

    function initYear() {
        var el = document.getElementById('year');
        if (!el) return;
        var now = new Date();
        el.textContent = String(now.getFullYear());
    }

    function initImageFallback() {
        var imgs = document.querySelectorAll('img');
        if (!imgs.length) return;

        imgs.forEach(function (img) {
            img.addEventListener('error', function () {
                var parent = img.parentElement;
                if (parent) {
                    parent.classList.add('is-fallback');
                    if (getComputedStyle(parent).position === 'static') {
                        parent.style.position = 'relative';
                    }
                }
                img.style.opacity = '0';
            });
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initMobileMenu();
        initSmoothScroll();
        initYear();
        initImageFallback();
    });
})();

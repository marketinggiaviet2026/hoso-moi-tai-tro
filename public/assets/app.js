document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // MOBILE MENU TOGGLE
    // ========================================
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // ========================================
    // SPONSOR FINDER INTERACTIVE
    // ========================================
    
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetAmount = document.getElementById('budgetAmount');
    const goalInputs = document.querySelectorAll('input[name="sponsorGoal"]');
    const businessInputs = document.querySelectorAll('input[name="businessType"]');
    const resultPackage = document.getElementById('resultPackage');
    const packageBadge = document.getElementById('packageBadge');
    const packageName = document.getElementById('packageName');
    const packagePrice = document.getElementById('packagePrice');
    const benefitsList = document.getElementById('benefitsList');
    const reasonsList = document.getElementById('reasonsList');
    const resultRecommendation = document.getElementById('resultRecommendation');
    const resultEmailBtn = document.getElementById('resultEmailBtn');
    
    // Package data
    const packages = {
        gold: {
            badge: '⭐ GOLD',
            name: 'Tài trợ Vàng',
            price: '30.000.000 VNĐ',
            minBudget: 30,
            benefits: [
                '✓ Logo trung tâm, kích thước lớn trên mọi ấn phẩm',
                '✓ Giới thiệu trên Website, Fanpage & Booklet (½ trang A4)',
                '✓ Video quảng bá 03 phút tại tất cả hội trường',
                '✓ 03 bàn quầy triển lãm',
                '✓ Tham dự Gala Dinner · Nhận hoa & quà trên sân khấu'
            ],
            emailSubject: 'Đề xuất tài trợ Vàng - Mekong TESOL 2026'
        },
        silver: {
            badge: '🥈 SILVER',
            name: 'Tài trợ Bạc',
            price: '25.000.000 VNĐ',
            minBudget: 25,
            benefits: [
                '✓ Logo hàng thứ hai, kích thước trung bình',
                '✓ Giới thiệu trên Website & Fanpage',
                '✓ Video quảng bá 02 phút',
                '✓ 02 bàn quầy triển lãm',
                '✓ Tham dự Gala Dinner · Nhận hoa & quà trên sân khấu'
            ],
            emailSubject: 'Đề xuất tài trợ Bạc - Mekong TESOL 2026'
        },
        bronze: {
            badge: '🥉 BRONZE',
            name: 'Tài trợ Đồng',
            price: '20.000.000 VNĐ',
            minBudget: 20,
            benefits: [
                '✓ Logo hàng thứ ba trên ấn phẩm',
                '✓ Giới thiệu trên Website & Fanpage',
                '✓ Video quảng bá 01 phút',
                '✓ 01 bàn quầy triển lãm',
                '✓ Tham dự Gala Dinner · Nhận hoa & quà trên sân khấu'
            ],
            emailSubject: 'Đề xuất tài trợ Đồng - Mekong TESOL 2026'
        },
        engagement: {
            badge: '🤝 ĐỒNG HÀNH',
            name: 'Gói Đồng Hành',
            price: '8.000.000 VNĐ',
            minBudget: 8,
            benefits: [
                '✓ 01 bàn quầy triển lãm',
                '✓ Phát leaflet/brochure',
                '✓ Logo trên website hội nghị',
                '✗ Logo trên backdrop/video',
                '✗ Gala Dinner'
            ],
            emailSubject: 'Đề xuất gói Đồng hành - Mekong TESOL 2026'
        },
        academic: {
            badge: '🎓 HỌC THUẬT',
            name: 'Tài trợ Học thuật',
            price: 'Linh hoạt',
            minBudget: 0,
            benefits: [
                '✓ Tài trợ diễn giả phiên song song',
                '✓ Logo gắn tên phiên báo cáo',
                '✓ Tài trợ giải Best Presentation',
                '✓ Tài trợ học liệu/sách/tài khoản',
                '✓ Ghi nhận đóng góp học thuật'
            ],
            emailSubject: 'Đề xuất tài trợ học thuật - Mekong TESOL 2026'
        }
    };
    
    // Notes based on goal and business type (formal/academic tone)
    const recommendations = {
        visibility: {
            publisher: 'Nhà xuất bản/Học liệu thường ưu tiên các hạng mục nhận diện trên ấn phẩm và kênh truyền thông chính thức của hội nghị.',
            edtech: 'EdTech/AI thường ưu tiên các hạng mục nhận diện kết hợp cơ hội giới thiệu giải pháp trong bối cảnh học thuật.',
            education: 'Du học/Tư vấn thường ưu tiên các hạng mục nhận diện và cơ hội kết nối với đội ngũ giáo viên và đơn vị đào tạo.',
            academic: 'Đối tác học thuật thường ưu tiên các hạng mục ghi nhận uy tín và gắn kết học thuật.'
        },
        leads: {
            publisher: 'Nhà xuất bản/Học liệu thường quan tâm hạng mục quầy triển lãm và hoạt động giới thiệu học liệu trong khuôn khổ hội nghị.',
            edtech: 'EdTech/AI thường quan tâm hạng mục quầy triển lãm và cơ hội trao đổi với lãnh đạo/giáo viên về bối cảnh triển khai.',
            education: 'Du học/Tư vấn thường quan tâm hạng mục quầy triển lãm và hoạt động trao đổi trực tiếp theo nhu cầu.',
            academic: 'Đối tác học thuật thường quan tâm hoạt động kết nối chuyên môn và cơ hội hợp tác học thuật.'
        },
        academic: {
            publisher: 'Nhà xuất bản/Học liệu có thể cân nhắc tài trợ học thuật (giải thưởng/phiên báo cáo/học liệu) để ghi nhận đóng góp chuyên môn.',
            edtech: 'EdTech/AI có thể cân nhắc tài trợ học thuật nhằm đồng hành với chủ đề học thuật liên quan đổi mới và công nghệ.',
            education: 'Du học/Tư vấn có thể cân nhắc gói phù hợp ngân sách, kết hợp nội dung ghi nhận/hiện diện theo khuôn khổ hội nghị.',
            academic: 'Đối tác học thuật phù hợp với các hạng mục tài trợ học thuật theo hình thức thỏa thuận.'
        },
        network: {
            publisher: 'Nhà xuất bản/Học liệu thường quan tâm cơ hội kết nối với cộng đồng giảng dạy và quản lý giáo dục.',
            edtech: 'EdTech/AI thường quan tâm cơ hội kết nối để hình thành hợp tác thử nghiệm và triển khai.',
            education: 'Du học/Tư vấn thường quan tâm cơ hội kết nối để mở rộng hợp tác với đơn vị đào tạo.',
            academic: 'Đối tác học thuật thường quan tâm cơ hội kết nối chuyên môn và hợp tác nghiên cứu/đào tạo.'
        }
    };
    
    function updateSponsorFinder() {
        if (!budgetSlider) return;
        
        const budget = parseInt(budgetSlider.value);
        const goal = document.querySelector('input[name="sponsorGoal"]:checked')?.value || 'visibility';
        const business = document.querySelector('input[name="businessType"]:checked')?.value || 'publisher';
        
        // Update budget display
        if (budgetAmount) {
            budgetAmount.textContent = (budget * 1000000).toLocaleString('vi-VN');
        }
        
        // Determine package based on budget and preferences
        let selectedPackage;
        
        // Special case for academic goal with academic business
        if (goal === 'academic' && business === 'academic') {
            selectedPackage = 'academic';
        } else if (budget >= 30) {
            selectedPackage = 'gold';
        } else if (budget >= 25) {
            selectedPackage = 'silver';
        } else if (budget >= 20) {
            selectedPackage = 'bronze';
        } else {
            // For lower budgets, suggest engagement or academic based on business type
            if (business === 'academic' || goal === 'academic') {
                selectedPackage = 'academic';
            } else {
                selectedPackage = 'engagement';
            }
        }
        
        // Update result display
        const pkg = packages[selectedPackage];
        
        if (resultPackage) {
            resultPackage.className = 'result-package ' + selectedPackage;
        }
        if (packageBadge) {
            packageBadge.textContent = pkg.badge;
        }
        if (packageName) {
            packageName.textContent = pkg.name;
        }
        if (packagePrice) {
            packagePrice.textContent = pkg.price;
        }
        
        // Update benefits list
        if (benefitsList) {
            benefitsList.innerHTML = pkg.benefits.map(b => `<li>${b}</li>`).join('');
        }

        // Update reasons list (formal)
        if (reasonsList) {
            const reasons = [];

            if (goal === 'visibility') {
                reasons.push('Cấu phần nhận diện thương hiệu phù hợp với mục tiêu ưu tiên (logo/ấn phẩm/video theo gói).');
                reasons.push('Mức ngân sách tương thích với nhóm quyền lợi hiện diện tại hội nghị.');
                if (selectedPackage === 'gold') reasons.push('Bao gồm giới thiệu trên booklet (½ trang A4), phù hợp khi cần mức độ hiện diện cao.');
            }

            if (goal === 'leads') {
                reasons.push('Gói có hạng mục quầy triển lãm, thuận tiện cho việc giới thiệu sản phẩm/dịch vụ và trao đổi trực tiếp.');
                reasons.push('Có thể triển khai hoạt động tương tác tại khu vực hội nghị (theo quyền lợi gói).');
            }

            if (goal === 'academic') {
                reasons.push('Có lựa chọn gắn kết học thuật (tài trợ phiên báo cáo/giải Best Presentation/học liệu).');
                reasons.push('Phù hợp khi ưu tiên đóng góp chuyên môn và ghi nhận trong hệ sinh thái học thuật của hội nghị.');
            }

            if (goal === 'network') {
                reasons.push('Các quyền lợi trong ngày hội nghị tạo điều kiện kết nối với cộng đồng giảng dạy và quản lý giáo dục.');
                reasons.push('Phù hợp với mục tiêu mở rộng hợp tác và thiết lập quan hệ đối tác dài hạn.');
            }

            // de-duplicate and cap 3 bullets for readability
            const uniqueReasons = Array.from(new Set(reasons)).slice(0, 3);
            reasonsList.innerHTML = uniqueReasons.map(r => `<li>${r}</li>`).join('');
        }
        
        // Update recommendation (formal)
        if (resultRecommendation) {
            const rec = recommendations[goal]?.[business];
            const baseNote = 'Kết quả tham chiếu được tổng hợp theo ngân sách và mục tiêu ưu tiên. Ban Tổ chức trân trọng sẵn sàng trao đổi để thống nhất phương án phù hợp nhu cầu cụ thể.';
            resultRecommendation.innerHTML = rec
                ? `<p><strong>Ghi chú:</strong> ${rec} ${baseNote}</p>`
                : `<p><strong>Ghi chú:</strong> ${baseNote}</p>`;
        }
        
        // Update email button
        if (resultEmailBtn) {
            resultEmailBtn.href = `mailto:mekongtesol@gmail.com?subject=${encodeURIComponent(pkg.emailSubject)}`;
        }
        
        // Highlight corresponding pricing card
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.classList.remove('highlighted');
        });
        const matchingCard = document.querySelector(`.pricing-card[data-package="${selectedPackage}"]`);
        if (matchingCard) {
            matchingCard.classList.add('highlighted');
        }
    }
    
    // Event listeners for sponsor finder
    if (budgetSlider) {
        budgetSlider.addEventListener('input', updateSponsorFinder);
    }
    
    goalInputs.forEach(input => {
        input.addEventListener('change', updateSponsorFinder);
    });
    
    businessInputs.forEach(input => {
        input.addEventListener('change', updateSponsorFinder);
    });
    
    // Initialize sponsor finder
    updateSponsorFinder();
    
    // ========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ========================================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or empty
            if (href === '#' || href === '') {
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Get the top bar height for offset
                const topBar = document.querySelector('.top-bar');
                const offset = topBar ? topBar.offsetHeight : 0;
                
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // ACTIVE MENU HIGHLIGHTING ON SCROLL
    // ========================================
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"], .mobile-menu nav a[href^="#"]');
    
    function highlightActiveSection() {
        const scrollPosition = window.pageYOffset;
        const topBar = document.querySelector('.top-bar');
        const offset = topBar ? topBar.offsetHeight + 50 : 50;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - offset;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Run on scroll with throttling for performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            highlightActiveSection();
        });
    });
    
    // Run once on page load
    highlightActiveSection();
    
    // ========================================
    // TAB FUNCTIONALITY FOR FLEXIBLE PACKAGES
    // ========================================
    
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // ========================================
    // STICKY HEADER SHADOW ON SCROLL
    // ========================================
    
    const topBar = document.querySelector('.top-bar');
    
    if (topBar) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 10) {
                topBar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            } else {
                topBar.style.boxShadow = 'none';
            }
        });
    }
    
});

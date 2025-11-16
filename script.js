// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'hsla(220, 25%, 5%, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'var(--background)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Timeline Data
const timelineData = [
    
    {
        id: 2,
        title: "Đăng ký",
        date: "05/11 - 18/11/2025",
        description: "Thời gian đăng ký tham gia cuộc thi",
    },
    {
        id: 3,
        title: "Warm-Up",
        date: "15/11/2025",
        description: "Buổi giới thiệu và làm quen với format cuộc thi",
    },
    {
        id: 4,
        title: "Vòng sơ loại",
        date: "11/11 - 21/11/2025",
        description: "Nộp bài dự thi vòng sơ loại",
    },
    {
        id: 5,
        title: "Workshop 1",
        date: "22/11/2025",
        description: "Workshop 1: AI trong thiết kế UI/UX",
    },
    {
        id: 6,
        title: "Vòng bán kết",
        date: "22/11 - 28/11/2025",
        description: "30 đội xuất sắc nhất tranh tài",
    },
    {
        id: 7,
        title: "Workshop 2",
        date: "29/11/2025",
        description: "Workshop 2: Từ Coder đến UI/UX Designer",
    },
    {
        id: 8,
        title: "Chung kết",
        date: "06/12/2025",
        description: "10 đội xuất sắc nhất thực hiện thử thách trực tiếp",
    },
];

// Timeline Desktop
let activeTimelineIndex = 0;
const timelinePoints = document.getElementById('timelinePoints');
const timelineProgress = document.getElementById('timelineProgress');

function renderTimelineDesktop() {
    if (!timelinePoints) return;
    
    timelinePoints.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-point" data-index="${index}">
            <div class="timeline-dot ${index <= activeTimelineIndex ? 'active' : ''}"></div>
            <div class="timeline-card ${index === activeTimelineIndex ? 'active' : ''}">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${index <= activeTimelineIndex ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>' : '<circle cx="12" cy="12" r="10"/>'}
                </svg>
                <h4>${item.title}</h4>
                <p class="date">${item.date}</p>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');
    
    // Update progress bar
    const progress = (activeTimelineIndex / (timelineData.length - 1)) * 100;
    timelineProgress.style.width = `${progress}%`;
    
    // Add hover listeners
    document.querySelectorAll('.timeline-point').forEach((point, index) => {
        point.addEventListener('mouseenter', () => {
            activeTimelineIndex = index;
            renderTimelineDesktop();
        });
    });
}

// Timeline Mobile
const timelineMobile = document.getElementById('timelineMobile');

function renderTimelineMobile() {
    if (!timelineMobile) return;
    
    timelineMobile.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-marker">
                <div class="timeline-circle ${index === 0 ? '' : 'inactive'}">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${index === 0 ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>' : '<circle cx="12" cy="12" r="10"/>'}
                    </svg>
                </div>
                ${index < timelineData.length - 1 ? '<div class="timeline-line-mobile"></div>' : ''}
            </div>
            <div class="timeline-content">
                <div class="timeline-content-card">
                    <h4>${item.title}</h4>
                    <p class="date">${item.date}</p>
                    <p>${item.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

renderTimelineDesktop();
renderTimelineMobile();

// Rounds Carousel Data
const roundsData = [
    {
        number: "01",
        title: "Vòng Đăng ký",
        description: "Đăng ký tham gia cuộc thi theo đội 3 thành viên. Các đội đăng ký qua form của BTC.",
        date: "05/11 - 18/11/2025",
        participants: "Không giới hạn",
    },
    {
        number: "02",
        title: "Vòng Sơ loại",
        description: "Thí sinh nộp bài thiết kế theo yêu cầu từ BTC. Ban giám khảo sẽ chọn ra 30 đội xuất sắc nhất để vào vòng bán kết.",
        date: "11/11 - 21/11/2025",
        participants: "Top 30",
    },
    {
        number: "03",
        title: "Vòng Bán kết",
        description: "30 đội được chọn sẽ tham gia workshop và phát triển dự án UI/UX hoàn chỉnh. Nộp bài thi theo yêu cầu của BTC.",
        date: "22/11 - 28/11/2025",
        participants: "Top 10",
    },
    {
        number: "04",
        title: "Chung kết",
        description: "10 đội xuất sắc nhất sẽ trình bày dự án và thực hiện thử thách trực tiếp trước Ban giám khảo.",
        date: "06/12/2025",
        participants: "Ai sẽ là Quán quân ?",
    },
];

let currentSlide = 0;
const carouselTrack = document.getElementById('carouselTrack');
const carouselDots = document.getElementById('carouselDots');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

function renderCarousel() {
    if (!carouselTrack) return;
    
    carouselTrack.innerHTML = roundsData.map(round => `
        <div class="carousel-slide">
            <div class="round-card">
                <div class="round-number">${round.number}</div>
                <h3>${round.title}</h3>
                <p>${round.description}</p>
                <div class="round-details">
                    <div class="round-detail">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <path d="M16 2v4M8 2v4M3 10h18"/>
                        </svg>
                        <span>${round.date}</span>
                    </div>
                    <div class="round-detail">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        <span>${round.participants}</span>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    carouselDots.innerHTML = roundsData.map((_, index) => `
        <div class="carousel-dot ${index === currentSlide ? 'active' : ''}" data-index="${index}"></div>
    `).join('');
    
    updateCarousel();
    
    // Add dot click listeners
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });
}

function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

carouselPrev.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + roundsData.length) % roundsData.length;
    updateCarousel();
});

carouselNext.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % roundsData.length;
    updateCarousel();
});

renderCarousel();

// Auto-play carousel
setInterval(() => {
    currentSlide = (currentSlide + 1) % roundsData.length;
    updateCarousel();
}, 1000005000);

// Videos Data
const videosData = [
    {
        id: 1,
        title: "Warm-up UI/UX NextGen Interface 2025",
        thumbnail: "src/assets/uiuxnextgen2025.png",
        url: "https://www.youtube.com/embed/D_lmZoCooCw?si=t8t8BdnzRZaS5jX3",
    },
    {
        id: 2,
        title: "Highlight UI/UX Hackathon 2022",
        thumbnail: "src/assets/uiuxhackathon2022.jpg",
        url: "https://www.youtube.com/embed/MNl4KmVLRPw?si=_9TCiQu2doxursoQ",
    },
    {
        id: 3,
        title: "Workshop UI Design",
        thumbnail: "src/assets/workshopui2022.webp",
        url: "https://www.youtube.com/embed/-cpebxkZxYM?si=I0iAZF2t1Zb0rsZ4",
    },
    {
        id: 4,
        title: "Phỏng vấn từ các đội thi 2022",
        thumbnail: "src/assets/chiasequanquan2022.jpg",
        url: "https://www.youtube.com/embed/5IELN985zVc?si=QoAzju7chlxM6MvT",
    },
];

let selectedVideo = videosData[0];
const mainVideoFrame = document.getElementById('mainVideoFrame');
const mainVideoTitle = document.getElementById('mainVideoTitle');
const videoThumbnails = document.getElementById('videoThumbnails');

function renderVideoThumbnails() {
    if (!videoThumbnails) return;
    
    videoThumbnails.innerHTML = videosData.map(video => `
        <div class="video-thumb ${video.id === selectedVideo.id ? 'active' : ''}" data-id="${video.id}" data-url="${video.url}" data-title="${video.title}">
            <img src="${video.thumbnail}" alt="${video.title}">
            <div class="video-thumb-overlay">
                <div class="video-play-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <polygon points="5 3 19 12 5 21 5 3"/>
                    </svg>
                </div>
            </div>
            <div class="video-thumb-title">
                <p>${video.title}</p>
            </div>
        </div>
    `).join('');
    
    // Add click listeners
    document.querySelectorAll('.video-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            const videoId = parseInt(thumb.dataset.id);
            selectedVideo = videosData.find(v => v.id === videoId);
            mainVideoFrame.src = thumb.dataset.url;
            mainVideoTitle.textContent = thumb.dataset.title;
            renderVideoThumbnails();
        });
    });
}

renderVideoThumbnails();

// Gallery Data
const galleryData = [
    {
        id: 1,
        url: "src/warmup2025/IMG_6788.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 7,
        url: "src/warmup2025/IMG_6795.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 8,
        url: "src/warmup2025/IMG_6935.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 9,
        url: "src/warmup2025/IMG_6945.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 10,
        url: "src/warmup2025/IMG_7106.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 11,
        url: "src/warmup2025/IMG_7216.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 12,
        url: "src/warmup2025/IMG_7085.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 13,
        url: "src/warmup2025/IMG_7471.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 14,
        url: "src/warmup2025/IMG_7499.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 15,
        url: "src/warmup2025/IMG_7702.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 16,
        url: "src/warmup2025/IMG_7566.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    
    {
        id: 2,
        url: "src/warmup2025/IMG_7667.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 3,
        url: "src/warmup2025/IMG_7744.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 4,
        url: "src/warmup2025/IMG_7761.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 5,
        url: "src/warmup2025/IMG_7777.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    },
    {
        id: 6,
        url: "src/warmup2025/IMG_7792.jpg",
        alt: "Warm-up UI/UX NextGen Interface 2025",
        category: "workshop",
    }    
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function renderGallery() {
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = galleryData.map(image => `
        <div class="gallery-item" data-id="${image.id}" data-url="${image.url}" data-alt="${image.alt}" data-category="${image.category}">
            <img src="${image.url}" alt="${image.alt}">
            <div class="gallery-item-overlay">
                <div class="gallery-item-info">
                    <h4>${image.alt}</h4>
                    <p>${image.category}</p>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            lightboxImage.src = item.dataset.url;
            lightboxCaption.textContent = item.dataset.alt;
            lightbox.classList.add('active');
        });
    });
}

renderGallery();

// Lightbox controls
lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        school: document.getElementById('school').value,
        message: document.getElementById('message').value,
    };
    
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn sớm.');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .stat-card, .feature-card, .award-card, .special-award-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#00ff9d"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#00ff9d",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 0.5
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });

    // Handle responsive adjustments for radar
    function handleRadarPosition() {
        const radarContainer = document.querySelector('.radar-container');
        if (!radarContainer) return;

        if (window.innerWidth < 1024) {
            radarContainer.style.position = 'relative';
            radarContainer.style.right = 'auto';
            radarContainer.style.top = 'auto';
            radarContainer.style.transform = 'none';
            radarContainer.style.margin = '3rem auto';
            radarContainer.style.width = '300px';
            radarContainer.style.height = '300px';
        } else {
            radarContainer.style.position = 'absolute';
            radarContainer.style.right = '10%';
            radarContainer.style.top = '50%';
            radarContainer.style.transform = 'translateY(-50%)';
            radarContainer.style.width = '400px';
            radarContainer.style.height = '400px';
            radarContainer.style.margin = '0';
        }
    }

    // Initialize and set up resize listener
    handleRadarPosition();
    window.addEventListener('resize', handleRadarPosition);
});

// Fallback if particles.js fails to load
window.onload = function() {
    if (typeof particlesJS === 'undefined') {
        console.error('Particles.js failed to load - using fallback background');
        document.getElementById('particles-js').style.background = `
            radial-gradient(circle at 75% 30%, rgba(0, 255, 157, 0.05) 0%, transparent 25%),
            linear-gradient(to bottom, #0a0a0a, #050505)
        `;
    }
};

// Animate skill bars when scrolled into view
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.querySelector('.skills-card');
    
    if (!skillsSection) return;
    
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    
    if (sectionTop < window.innerHeight && sectionBottom > 0) {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-percent');
            bar.style.width = width;
        });
        window.removeEventListener('scroll', animateSkills);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Add skill animation trigger
    window.addEventListener('scroll', animateSkills);
    animateSkills(); // Run once on load in case already in view
});

// Hexagon hover effect
document.querySelectorAll('.hexagon-mask').forEach(hexagon => {
    hexagon.addEventListener('mouseenter', function() {
        this.style.transform = 'rotate(5deg) scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    hexagon.addEventListener('mouseleave', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Portfolio Filtering
    const filterButtons = document.querySelectorAll('.portfolio-filters .cyber-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project Card Hover Effects
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const glow = this.querySelector('.glow');
            if (glow) {
                glow.style.transform = 'translateX(100%)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const glow = this.querySelector('.glow');
            if (glow) {
                glow.style.transform = 'translateX(-100%)';
            }
        });
    });
    
    // Matrix Rain Effect
    const matrixRain = document.querySelector('.matrix-rain');
    if (matrixRain) {
        const characters = "01";
        const columns = Math.floor(window.innerWidth / 20);
        let drops = [];
        
        // Initialize drops
        for (let i = 0; i < columns; i++) {
            drops[i] = Math.floor(Math.random() * -100);
        }
        
        function drawMatrix() {
            let output = '';
            for (let i = 0; i < drops.length; i++) {
                const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
                output += `<span style="opacity: ${Math.random() * 0.5 + 0.1}; transform: translateY(${drops[i]}px);">${randomChar}</span>`;
                
                if (drops[i] * 10 > window.innerHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            matrixRain.innerHTML = output;
        }
        
        setInterval(drawMatrix, 50);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Simulate secure connection establishment
    const connectionStatus = document.querySelector('.connection-status');
    const statusText = document.querySelector('.status-text');
    
    setTimeout(() => {
        statusText.textContent = "SECURE CHANNEL ESTABLISHED";
        connectionStatus.style.animation = "none";
    }, 2000);
    
    // Encryption status toggle
    const encryptionStatus = document.querySelector('.encryption-status');
    const encryptionIndicator = document.querySelector('.encryption-indicator');
    const encryptionLevel = document.querySelector('.encryption-level');
    const testEncryptionBtn = document.querySelector('.test-encryption');
    
    testEncryptionBtn.addEventListener('click', function() {
        encryptionStatus.classList.add('active');
        encryptionLevel.textContent = "ACTIVE (PGP)";
        
        // Create encryption animation
        const form = document.getElementById('secure-contact-form');
        form.style.position = 'relative';
        
        const encryptionOverlay = document.createElement('div');
        encryptionOverlay.className = 'encryption-overlay';
        encryptionOverlay.innerHTML = `
            <div class="encryption-animation">
                <div class="lock-icon">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="encryption-progress">
                    <div class="progress-bar"></div>
                </div>
                <div class="encryption-text">ENCRYPTING MESSAGE...</div>
            </div>
        `;
        form.appendChild(encryptionOverlay);
        
        setTimeout(() => {
            encryptionOverlay.style.opacity = '0';
            setTimeout(() => {
                form.removeChild(encryptionOverlay);
            }, 500);
        }, 1500);
    });
    
    // Form submission
    const contactForm = document.getElementById('secure-contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!encryptionStatus.classList.contains('active')) {
            alert('Please test encryption before sending message');
            return;
        }
        
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ENCRYPTING & SENDING...';
        
        // Simulate encryption and sending
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> MESSAGE SECURED';
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'cyber-alert success';
            successMessage.innerHTML = `
                <i class="fas fa-shield-alt"></i>
                <span>Message encrypted and sent successfully</span>
            `;
            contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);
            
            // Reset form
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Fade out success message
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    setTimeout(() => {
                        successMessage.remove();
                    }, 500);
                }, 3000);
            }, 1500);
        }, 2000);
    });
    
    // Generate random session ID
    const sessionId = document.getElementById('session-id');
    if (sessionId) {
        const generateId = () => {
            return 'xxxx-xxxx-xxxx'.replace(/[x]/g, function() {
                return Math.floor(Math.random() * 16).toString(16);
            });
        };
        sessionId.textContent = generateId() + '-' + generateId();
    }
    
    // PGP key download
    const downloadKeyBtn = document.querySelector('.download-key');
    downloadKeyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> GENERATING KEY...';
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> KEY DOWNLOADED';
            
            // Simulate download
            const blob = new Blob(["-----BEGIN PGP PUBLIC KEY BLOCK-----\n...\n-----END PGP PUBLIC KEY BLOCK-----"], 
                                {type: 'text/plain'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'public-key.asc';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            
            setTimeout(() => {
                this.innerHTML = '<span class="glow"></span><span class="text"><i class="fas fa-download"></i> DOWNLOAD PUBLIC KEY</span>';
            }, 2000);
        }, 1000);
    });
});


// Navbar Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
});
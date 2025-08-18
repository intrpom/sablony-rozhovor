export class Navigation {
    constructor() {
        this.isDarkMode = false;
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.addEventListener('scroll', () => {
            this.updateActiveNav();
        });

        document.addEventListener('DOMContentLoaded', () => {
            this.updateActiveNav();
        });
    }

    updateActiveNav() {
        const chapters = document.querySelectorAll('.chapter');
        const navLinks = document.querySelectorAll('.toc-link');
        
        let currentSection = '';
        
        chapters.forEach(chapter => {
            const rect = chapter.getBoundingClientRect();
            const offset = 150;
            if (rect.top <= offset && rect.bottom >= offset) {
                currentSection = chapter.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    toggleTheme() {
        document.body.classList.toggle('dark');
        this.isDarkMode = !this.isDarkMode;
        
        const button = document.querySelector('.theme-toggle');
        const icon = button.querySelector('i');
        
        if (this.isDarkMode) {
            icon.className = 'fas fa-sun';
            button.innerHTML = '<i class="fas fa-sun"></i> Světlý režim';
        } else {
            icon.className = 'fas fa-moon';
            button.innerHTML = '<i class="fas fa-moon"></i> Tmavý režim';
        }
    }

    render() {
        return `
            <nav class="nav">
                <div class="nav-container">
                    <div class="nav-title">
                        <i class="fas fa-book-open"></i>
                        <span class="nav-text">Šablony pro rozhovor</span>
                    </div>
                    <div class="nav-controls">

                        <button class="theme-toggle" onclick="navigation.toggleTheme()">
                            <i class="fas fa-moon"></i>
                            <span class="theme-text">Tmavý režim</span>
                        </button>
                    </div>
                </div>
            </nav>
        `;
    }
} 
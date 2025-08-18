import { Hero } from '../components/Hero.js';
import { Navigation } from '../components/Navigation.js';
import { Checklist } from '../components/Checklist.js';

export class App {
    constructor() {
        this.hero = new Hero();
        this.navigation = new Navigation();
        this.init();
    }

    init() {
        this.render();
        this.setupAutoReload(); // Re-enabled with longer interval
    }

    render() {
        // Hero sekce
        const heroContainer = document.getElementById('hero-container');
        if (heroContainer) {
            heroContainer.innerHTML = this.hero.render();
        }

        // Navigation (only if container exists)
        const navContainer = document.getElementById('nav-container');
        if (navContainer) {
            navContainer.innerHTML = this.navigation.render();
        }

        // Checklisty
        this.renderChecklists();
    }

    renderChecklists() {
        const checklistData = {
            'priprava-checklist': [
                'Vyberte správný čas a místo',
                'Ujasněte si své cíle',
                'Připravte si klíčové body',
                'Zkontrolujte svůj emocionální stav',
                'Mějte plán B pro případ eskalace'
            ]
        };

        Object.entries(checklistData).forEach(([id, items]) => {
            const container = document.getElementById(id);
            if (container) {
                container.innerHTML = Checklist.render(items);
            }
        });
    }

    setupAutoReload() {
        // Auto-reload system with longer interval (30 seconds)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            let lastModified = Date.now();
            
            // Check for file changes every 10 seconds
            setInterval(() => {
                fetch(window.location.href + '?t=' + Date.now(), {
                    method: 'HEAD',
                    cache: 'no-cache'
                })
                .then(response => {
                    const currentModified = new Date(response.headers.get('last-modified')).getTime();
                    if (currentModified > lastModified) {
                        console.log('🔄 File changed, reloading...');
                        location.reload();
                    }
                })
                .catch(() => {
                    // Fallback: reload every 60 seconds if fetch fails
                    if (Date.now() - lastModified > 60000) {
                        console.log('🔄 Auto-reload fallback...');
                        location.reload();
                    }
                });
            }, 10000); // 10 seconds - good balance
        }
    }
} 
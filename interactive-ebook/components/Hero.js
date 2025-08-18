export class Hero {
    constructor() {
        this.render();
    }

    render() {
        return `
            <section class="hero">
                <div class="hero-content">
                    <div class="hero-badge">
                        <i class="fas fa-star"></i> Kompletní průvodce
                    </div>
                    
                    <h1>
                        <i class="fas fa-heart"></i> Šablony pro rozhovor s partnerem
                    </h1>
                    
                    <p>
                        Naučte se vést obtížné rozhovory ve vztazích s jistotou a empatií. 
                        Praktické šablony, které vám pomohou vyjádřit své pocity a najít řešení.
                    </p>
                    
                    <div class="hero-features">
                        <div class="hero-feature">
                            <i class="fas fa-check-circle"></i>
                            <span>Osvědčené šablony</span>
                        </div>
                        <div class="hero-feature">
                            <i class="fas fa-clock"></i>
                            <span>Okamžitě použitelné</span>
                        </div>
                        <div class="hero-feature">
                            <i class="fas fa-shield-alt"></i>
                            <span>Bezpečné formulace</span>
                        </div>
                    </div>
                    
                    <div class="hero-cta">
                        <a href="#priprava" class="hero-button">
                            <i class="fas fa-play"></i>
                            Začít číst
                        </a>
                    </div>
                    
                    <div class="hero-stats">
                        <div class="hero-stat">
                            <span class="hero-stat-number">5</span>
                            <span class="hero-stat-label">Hlavních kapitol</span>
                        </div>
                        <div class="hero-stat">
                            <span class="hero-stat-number">20+</span>
                            <span class="hero-stat-label">Praktických šablon</span>
                        </div>
                        <div class="hero-stat">
                            <span class="hero-stat-number">100%</span>
                            <span class="hero-stat-label">Osvědčené metody</span>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
} 
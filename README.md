# Šablony pro rozhovor - Interaktivní kniha

Interaktivní kniha o komunikaci ve vztazích s praktickými tipy, konkrétními frázemi a nástroji pro lepší komunikaci.

## 🚀 Rychlé spuštění

### Development server
```bash
cd interactive-ebook
python3 dev-server.py
```

Otevřete prohlížeč na: http://127.0.0.1:8001

### Statické nasazení
Projekt je statický web, který lze nasadit na jakýkoliv web hosting (GitHub Pages, Netlify, Vercel, atd.)

## 📁 Struktura projektu

```
sablony-rozhovor/
├── interactive-ebook/     # Hlavní webová aplikace
│   ├── components/        # JavaScript komponenty
│   ├── pages/            # Kapitoly knihy
│   ├── styles/           # CSS styly
│   ├── js/               # JavaScript logika
│   └── dev-server.py     # Development server
├── content/               # Markdown obsah
├── assets/                # Obrázky a média
└── backup/                # Zálohy
```

## 🛠️ Technologie

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Development**: Python HTTP server
- **Styling**: Moderní CSS s dark mode podporou
- **Architektura**: Modulární JavaScript, component-based design

## 📖 Obsah knihy

1. **Příprava** - Základy úspěšného rozhovoru
2. **Šablony** - Připravené formulace pro různé situace
3. **Formulace** - Umění správně formulovat
4. **Reakce** - Jak reagovat na odpovědi partnera
5. **Ukončení** - Typy ukončení a emocionální uzavření

## 🔧 Vývoj

### Auto-reload
Development server automaticky detekuje změny v souborech a reloaduje stránku.

### Komponenty
- `Hero.js` - Hlavní hero sekce
- `Navigation.js` - Navigace mezi kapitolami
- `Checklist.js` - Interaktivní checklisty

## 📱 Responsive design
Kniha je plně responzivní a funguje na všech zařízeních.

## 🚀 Nasazení

### GitHub Pages
1. Push kód do GitHub repozitáře
2. V Settings > Pages nastavte source na `main` branch
3. Deploy automaticky z `interactive-ebook/` složky

### Jiné platformy
- **Netlify**: Drag & drop `interactive-ebook/` složky
- **Vercel**: Import GitHub repozitáře
- **Jakýkoliv web hosting**: Upload `interactive-ebook/` obsahu

## 📄 Licence

MIT License - viz LICENSE soubor

## 👨‍💻 Autor

Aleš Kalina

---

**Poznámka**: Tento projekt je statický web, který nepotřebuje backend server pro produkční nasazení.

#!/usr/bin/env python3
"""
🚀 DEVELOPMENT SERVER PRO INTERACTIVE EBOOK

SPUŠTĚNÍ:
cd interactive-ebook && python3 dev-server.py

NEBO:
cd /Users/aleskalina/CascadeProjects/sablony-rozhovor/interactive-ebook
python3 dev-server.py

DŮLEŽITÉ: Server musí být spuštěn z interactive-ebook složky!

URL:
- Hlavní stránka: http://127.0.0.1:8001/index.html
- Dev server: http://127.0.0.1:8001

AUTO-RELOAD: Změny v souborech se automaticky detekují

je potřeba jít do adresáře, kde je kniha:
cd interactive-ebook && python3 dev-server.py

"""

import http.server
import socketserver
import os
import time
from datetime import datetime

class DevHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add headers to prevent caching
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Last-Modified', datetime.now().strftime('%a, %d %b %Y %H:%M:%S GMT'))
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom logging with timestamp - skip HEAD requests for auto-reload
        if 'HEAD' not in format:
            timestamp = datetime.now().strftime('%H:%M:%S')
            print(f"[{timestamp}] {format % args}")

if __name__ == "__main__":
    PORT = 8001
    
    # Change to the directory containing the HTML file
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("127.0.0.1", PORT), DevHTTPRequestHandler) as httpd:
        print(f"🚀 Development server running at http://127.0.0.1:{PORT}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"📖 Open: http://127.0.0.1:{PORT}/kniha-modular.html")
        print(f"⏰ Started at: {datetime.now().strftime('%H:%M:%S')}")
        print("🔄 Auto-reload enabled - changes will be detected automatically")
        print("Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped") 
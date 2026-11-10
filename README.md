# rokit Wissensdatenbank

Wissensdatenbank zu Normen und Gesetzen für das Projekt rokit. Die Inhalte liegen als Markdown unter `content/` und werden mit [Quartz](https://quartz.jzhao.xyz/) (v5) zu einer statischen Website gebaut.

## Inhalte bearbeiten

Benötigt: [Git](https://git-scm.com/) und [Obsidian](https://obsidian.md/).
Den Ordner `content/` in Obsidian als Vault öffnen und bearbeiten.

## Lokal ansehen

Benötigt Node.js ≥ 22.

```bash
npm ci
npx quartz plugin install   # einmalig: lädt die Quartz-Plugins nach .quartz/
npx quartz build --serve    # Vorschau auf http://localhost:8080
```

Das fertige Ergebnis (statische HTML/CSS/JS-Dateien) liegt nach `npx quartz build` im Ordner `public/`. Dieser Ordner kann auf jeden beliebigen Webserver kopiert werden.

## Veröffentlichung

Bei jedem Push auf `main` baut `.github/workflows/deploy.yml` die Seite und veröffentlicht sie auf GitHub Pages.

**Beim Umzug auf einen anderen Host anpassen:**

- `baseUrl` in `quartz.config.yaml` auf die neue Adresse setzen (ohne `https://`, bei Unterpfad inklusive Pfad). Sie wird für Sitemap, RSS und Vorschau-Links verwendet.
- Den Footer-Link in `quartz.config.yaml` (Plugin `footer`) prüfen.
- Das Deploy-Workflow-Skript anpassen oder ersetzen.

## Links prüfen

Der Workflow `.github/workflows/links.yml` prüft Links in `content/` und lässt sich auch manuell starten.

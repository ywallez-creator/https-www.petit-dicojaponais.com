# 辞書 Jisho-FR — Dictionnaire Japonais-Français

Un dictionnaire japonais-français couvrant les niveaux JLPT N5 à N1, avec support PWA (Progressive Web App) pour une utilisation hors ligne.

## 📁 Fichiers inclus

| Fichier | Rôle |
|---------|------|
| `index.html` | Interface principale |
| `data.js` | Base de données (~275 mots N5→N1) |
| `app.js` | Logique de l'application |
| `sw.js` | Service Worker (mode hors ligne) |
| `manifest.json` | Manifest PWA (installation) |

## 🚀 Utilisation

### En ligne (recommandé)
Hébergez les fichiers sur n'importe quel serveur HTTP statique :
- **GitHub Pages** : Poussez dans un repo et activez Pages
- **Netlify / Vercel** : Glissez-déposez le dossier
- **Serveur local** : `npx serve .` ou `python3 -m http.server 8080`

### Hors ligne
Une fois le site visité, le Service Worker met tout en cache automatiquement. L'application fonctionne ensuite sans connexion internet. Un badge **HORS LIGNE** apparaît dans l'en-tête.

### Installation (PWA)
Sur mobile ou bureau, une bannière d'installation apparaît automatiquement pour ajouter l'app à l'écran d'accueil / au bureau.

## ✨ Fonctionnalités

- **Recherche** : par kanji, lecture (hiragana), romaji ou traduction française
- **Filtres par niveau** : N5, N4, N3, N2, N1 ou tous
- **Filtres par catégorie** : Noms, Verbes, Adjectifs, Adverbes, Expressions
- **Vue grille / liste**
- **Fiches détaillées** : kanji, lecture, romaji, traduction, exemples de phrases
- **Favoris** : sauvegardés dans le navigateur (localStorage)
- **Mode hors ligne** complet via Service Worker
- **Installable** comme application native (PWA)

## 📚 Contenu

- **N5** (~60 mots) : vocabulaire de base, animaux, famille, verbes du quotidien
- **N4** (~55 mots) : émotions, travail, société, verbes courants
- **N3** (~55 mots) : concepts abstraits, politique, culture, relations sociales
- **N2** (~50 mots) : nuances, vocabulaire académique et professionnel
- **N1** (~55 mots) : vocabulaire littéraire, juridique, philosophique

## 🛠️ Personnalisation

Pour ajouter des mots, éditez `data.js` en suivant ce format :

```javascript
{
  id: 300,               // identifiant unique
  kanji: "言葉",          // mot japonais
  reading: "ことば",      // lecture hiragana
  romaji: "kotoba",      // translittération
  translation: "mot, langage",  // traduction française
  level: "N5",           // N5, N4, N3, N2 ou N1
  category: "nom",       // nom, verbe, adjectif, adverbe, expression
  examples: [
    { jp: "言葉を選ぶ。", fr: "Choisir ses mots." }
  ]
}
```

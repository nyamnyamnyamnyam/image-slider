# Fotógaléria – Image slider

Egyszerű React képgaléria a feladat mintaképe alapján.

## Indítás

1. A projekt mappájában futtasd: `npm install`
2. Indítsd el: `npm run dev`
3. Nyisd meg a terminálban megjelenő helyi címet.

## Működés

- A képek URL-jei a `src/data.js` fájlban találhatók.
- Az `App.jsx` tárolja az aktuális kép indexét (`currentIndex`).
- A `Header.jsx` írja ki a kép számát és az összes kép mennyiségét.
- A `Photo.jsx` mutatja az aktuális képet.
- A `Control.jsx` kezeli az előző / következő gombot. Az első képnél az előző gomb az utolsóra, az utolsónál a következő az elsőre lép.
- A gombok a HeroUI könyvtárból, a nyilak a react-icons könyvtárból származnak.

## Publikálás

A projektben már van egy helyi Git-commit. GitHub-ra feltöltéshez hozz létre egy üres repót, majd futtasd a következőket a projekt mappájában:

```bash
git branch -M main
git remote add origin https://github.com/FELHASZNALONEV/REPO-NEVE.git
git push -u origin main
```

A GitHubon tárolt repót a Netlify-on az **Add new project → Import an existing project** menüben tudod csatlakoztatni. A build parancs `npm run build`, a publikálandó mappa `dist`.

**Publikált Netlify-oldal:** még nincs publikálva; ide kell beírni a Netlify által adott linket.

**GitHub-repó:** ide kell beírni a létrehozott GitHub-repó linkjét.

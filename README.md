# Praha syysloma 2026

Staattinen GitHub Pages -sivu kolmen Prahan majoituskohteen vertailuun. Ilme on tehty alkuperäiseksi tsekkoslovakkilaisesta sosialistisen realismin julistetaiteesta ja surrealistisista elokuvajulisteista inspiroituneeksi moderniksi verkkosivuksi.

## Julkaisu GitHub Pagesiin

Tämä kansio on jo paikallinen git-repo ja muutokset on commitoitu.

Jos GitHub CLI on asennettu ja kirjautunut sisään:

```bash
gh repo create Praha --public --source=. --remote=origin --push
```

Sen jälkeen GitHubissa:

1. Avaa uuden repon `Settings` -> `Pages`.
2. Valitse lähteeksi `Deploy from a branch`.
3. Valitse branchiksi `main` ja kansioksi `/root`.
4. Tallenna.

Vaihtoehtoisesti luo repo GitHubissa käsin, kopioi sen remote-osoite ja aja:

```bash
git remote add origin <repo-url>
git push -u origin main
```

Sivusto ei tarvitse build-komentoa. Kartta käyttää OpenStreetMap/Leaflet-kirjastoa CDN:stä, ja kuvapaneelit latautuvat joko paikallisista `assets`-tiedostoista tai hostin julkisesta kuvasta.

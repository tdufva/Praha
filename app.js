const bookingSearchSuffix =
  "checkin=2026-10-10&checkout=2026-10-17&group_adults=10&req_adults=10&no_rooms=1&group_children=2&req_children=2&age=16&req_age=16&age=17&req_age=17";

const places = [
  {
    id: "airbnb",
    name: "Charles Bridge Historical APT 3 by Michal&Friends",
    shortName: "Charles Bridge APT 3",
    label: "Paras sijainti",
    rank: "1",
    recommendation:
      "Valitse tämä, jos matkan päätarkoitus on Praha itse: kävely, ravintolat, kahvilat ja vanhakaupunki.",
    summary:
      "Keskustavalinta Prague 1:ssä. Iso asunto, 6 makuuhuonetta ja kylpyhuone jokaisessa makuuhuoneessa tekevät arjesta helpompaa isolle ryhmälle.",
    address: "Prague 1, julkinen tarkka osoite ei näy ennen varausta",
    area: "Vanhakaupunki / Kaarlensillan vaikutuspiiri",
    dates: "Airbnb-linkissä 17.-24.10.2026",
    price: "Tarkista Airbnbista",
    priceNote: "M&F-sivulla alkaen 119 EUR / yö, mutta tämä ei ole ryhmän lopullinen Airbnb-kokonaishinta.",
    bedrooms: "6 makuuhuonetta",
    bathrooms: "6 kylpyhuonetta",
    capacity: "17 vuodetta, jopa iso seurue",
    image: "https://michalandfriends.com/wp-content/uploads/2024/03/Charles_Bridge_Historical_APT_3_by_MichalFriends_12-1024x682.jpg",
    imageLabel: "Kohdekuva: Michal&Friends",
    imageFallback: "Kuva ei latautunut. Avaa kohteen oma galleria linkistä.",
    link:
      "https://www.airbnb.fi/rooms/872177714278758849?adults=11&children=0&infants=0&pets=1&wishlist_item_id=11005978285951&check_in=2026-10-17&check_out=2026-10-24&source_impression_id=p3_1783785589_P3QDGgwaedCaJSwO&previous_page_section_name=1000",
    gallery: "https://michalandfriends.com/apartments/charles-bridge-historical-apt-3-by-michalfriends/",
    coords: [50.0872, 14.4179],
    markerNote: "Arvioitu sijainti Staroměstskán ja vanhankaupungin alueelle, ei tarkka oviosoite.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=50.0872,14.4179",
    distances: [
      ["Old Town Square", "noin 1-5 min kävellen"],
      ["Kaarlensilta", "noin 6-10 min kävellen"],
      ["Staroměstská metro/ratikka", "muutaman minuutin päässä"],
      ["Lentokenttä", "noin 40 min julkisilla lähteen mukaan"],
    ],
    features: [
      "6 yksityistä makuuhuonetta",
      "Oma kylpyhuone jokaisessa mh:ssa",
      "Keittiö",
      "Wi-Fi",
      "Pesukone",
      "Työtila",
      "Lemmikit sallittu",
      "Ei hissiä",
      "Ei kuntosalia mainittu",
    ],
    pros: [
      "Selvästi paras kävelysijainti keskustan nähtävyyksiin.",
      "Jokaisen makuuhuoneen oma kylpyhuone vähentää aamuruuhkaa.",
      "Hyvä ratkaisu ryhmälle, joka viettää päivät kaupungilla.",
    ],
    cons: [
      "2. kerros ilman hissiä voi rasittaa laukkujen ja koiran kanssa.",
      "Ei allasta, saunaa, biljardia tai kuntosalia mainittuna.",
      "Pinta-alatiedoissa on lähteissä ristiriita: liitteessä 184 m2, hostin sivulla 130 m2.",
    ],
    scores: {
      location: 5,
      space: 4,
      amenities: 3,
      ease: 4,
    },
    sources: [
      ["Airbnb-kohde", "https://www.airbnb.fi/rooms/872177714278758849"],
      ["Michal&Friends kohdesivu", "https://michalandfriends.com/apartments/charles-bridge-historical-apt-3-by-michalfriends/"],
    ],
  },
  {
    id: "villa",
    name: "Vila U Blaženky",
    shortName: "Vila U Blaženky",
    label: "Paras oma resort",
    rank: "2",
    recommendation:
      "Valitse tämä, jos haluatte viettää aikaa myös talolla: sauna, poreallas, sisäallas ja iso yksityinen kokonaisuus.",
    summary:
      "Selvästi varustelluin ja tilavin vaihtoehto. Sijainti on keskustaa kauempana, mutta majoitus itsessään on osa lomaa.",
    address: "U Blaženky 43, Malvazinky, Praha 5",
    area: "Praha 5 / Malvazinky",
    dates: "Booking-linkissä 10.-17.10.2026",
    price: "Ei varmistettua hintaa",
    priceNote: "Liitteen mukaan saatavuus tai kokoonpano pitää tarkistaa Bookingista.",
    bedrooms: "11 makuuhuonetta",
    bathrooms: "6 kylpyhuonetta",
    capacity: "Booking-/hotellikoosteissa jopa 16 hengelle",
    image: "assets/villa-illustrative.png",
    imageLabel: "Havainnekuva: ei varsinainen kohdekuva",
    imageFallback: "Avaa Bookingin tai kumppanisivun galleria varsinaisia kohdekuvia varten.",
    link: `https://www.booking.com/hotel/cz/vila-u-blazenky.sv.html?${bookingSearchSuffix}`,
    gallery: "https://www.praguehotels.info/en/property/vila-u-blazenky.html",
    coords: [50.0683138, 14.3853943],
    markerNote: "Osoite geokoodattu OpenStreetMapin mukaan.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=50.0683138,14.3853943",
    distances: [
      ["Keskusta / Old Town", "noin 3,3 km lähteissä"],
      ["Kaarlensilta", "noin 2,7-3,0 km"],
      ["Prague Castle", "noin 3,5 km reittiä lähteissä"],
      ["Julkinen liikenne", "tarve tarkistaa ryhmän arkeen"],
    ],
    features: [
      "11 makuuhuonetta",
      "6 kylpyhuonetta",
      "Sauna",
      "Poreallas",
      "Sisäallas",
      "Oma allas",
      "Puutarha / terassi",
      "Baari",
      "Pysäköinti",
      "Ilmastointi",
      "Lemmikit sallittu",
      "Ei kuntosalia mainittu",
    ],
    pros: [
      "Eniten tilaa ja paras varustelu isolle seurueelle.",
      "Sauna, allas ja poreallas tekevät majoituksesta oman lomakohteen.",
      "Pysäköinti ja piha/terassi helpottavat ryhmän arkea.",
    ],
    cons: [
      "Keskustaan ei ole yhtä spontaania kävellä kuin Airbnb-kohteesta.",
      "Hinta ja saatavuus pitää vahvistaa samalle kokoonpanolle.",
      "Jos loman idea on olla koko ajan kaupungilla, osa varustelusta voi jäädä vajaakäytölle.",
    ],
    scores: {
      location: 2,
      space: 5,
      amenities: 5,
      ease: 3,
    },
    sources: [
      ["Booking-kohde", "https://www.booking.com/hotel/cz/vila-u-blazenky.sv.html"],
      ["PragueHotels.info kohdesivu", "https://www.praguehotels.info/en/property/vila-u-blazenky.html"],
      ["Top Hotels Prague kohdesivu", "https://vila-u-blazenky.top-hotels-prague.com/en/"],
    ],
  },
  {
    id: "duplex",
    name: "Stylish Central Duplex by Wagnerstays",
    shortName: "Stylish Central Duplex",
    label: "Paras kompromissi",
    rank: "3",
    recommendation:
      "Valitse tämä, jos haluatte keskustan lähelle mutta ette aivan turistisimpaan ytimeen, ja biljardi tuntuu ryhmälle oikealta lisältä.",
    summary:
      "Anděl/Smíchov-alueen iso kaupunkiasunto. Biljardi ja helpot yhteydet tekevät siitä käytännöllisen, mutta sijainti häviää Airbnb:lle.",
    address: "Štefánikova 3, Smíchov, Praha 5",
    area: "Anděl / Smíchov",
    dates: "Booking-linkissä 10.-17.10.2026",
    price: "4 416,09 EUR",
    priceNote: "Liitteessä ollut Booking-hakutulos samalle viikolle, kokoonpanolle 10 aikuista + 2 nuorta.",
    bedrooms: "4 makuuhuonetta",
    bathrooms: "Kylpyhuonemäärä tarkistettava",
    capacity: "Iso ryhmä, varmistettava varausvaiheessa",
    image: "assets/duplex-illustrative.png",
    imageLabel: "Havainnekuva: ei varsinainen kohdekuva",
    imageFallback: "Avaa Bookingin tai kumppanisivun galleria varsinaisia kohdekuvia varten.",
    link: `https://www.booking.com/hotel/cz/cz-andel-duplex.sv.html?${bookingSearchSuffix}`,
    gallery: "https://wagner-stays-5bd-duplex-penthouse-billiard-whirlpool-cinema.prague-hotels.org/sv/",
    coords: [50.0724352, 14.403784],
    markerNote: "Osoite geokoodattu OpenStreetMapin mukaan.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=50.0724352,14.403784",
    distances: [
      ["Keskusta / Old Town", "noin 2,0-2,1 km"],
      ["Kaarlensilta", "noin 1,6 km lähteissä"],
      ["Anděl metro/ratikka", "lähellä"],
      ["Prahan linna", "noin 2,5-3 km reitistä riippuen"],
    ],
    features: [
      "4 makuuhuonetta",
      "Biljardi",
      "Ilmastointi",
      "Wi-Fi",
      "Pysäköinti",
      "Perhehuoneet",
      "Lemmikit sallittu",
      "Kotiteatteri mainittu kumppanisivuilla",
      "Ei kuntosalia mainittu",
    ],
    pros: [
      "Biljardi tekee asunnosta hyvän myös sadeiltoihin.",
      "Anděl/Smíchov on käytännöllinen alue ravintoloille, kaupalle ja julkisille.",
      "Hinta on kolmikon ainoa selvästi liitteessä näkyvä viikon kokonaishinta.",
    ],
    cons: [
      "Ei yhtä keskeinen kuin vanhankaupungin Airbnb.",
      "Makuuhuonemäärä näkyy eri lähteissä hieman ristiriitaisesti, tarkista ennen varausta.",
      "Ei allasta, saunaa tai villamaista omaa pihaa.",
    ],
    scores: {
      location: 3,
      space: 3,
      amenities: 4,
      ease: 4,
    },
    sources: [
      ["Booking-kohde", "https://www.booking.com/hotel/cz/cz-andel-duplex.sv.html"],
      ["Prague-hotels.org kohdesivu", "https://wagner-stays-5bd-duplex-penthouse-billiard-whirlpool-cinema.prague-hotels.org/sv/"],
      ["MyPragueHotels kohdesivu", "https://wagnerstays5bdduplexpenthousebilliardwhirlpool.mypraguehotels.com/en/"],
    ],
  },
];

const checks = [
  {
    title: "Ennen varaamista",
    items: [
      ["Varmista sama päivämäärä kaikille", "#top"],
      ["Tarkista lopullinen hinta veroineen ja siivousmaksuineen", "#vertailu"],
      ["Vahvista makuuhuoneet, kylpyhuoneet ja vuodepaikat suoraan kohdesivulta", "#kohteet"],
      ["Kysy palovaroittimet, häkävaroitin ja hissi/portaiden tilanne", "#kohteet"],
    ],
  },
  {
    title: "Kartta ja etäisyydet",
    items: [
      ["OpenStreetMap", "https://www.openstreetmap.org/"],
      ["Nominatim-geokoodaus", "https://nominatim.openstreetmap.org/"],
      ["Etäisyydet ovat käytännön päätöstä varten pyöristettyjä arvioita", "#kartta"],
    ],
  },
  {
    title: "Kohdesivut",
    items: places.flatMap((place) => place.sources.slice(0, 2)),
  },
];

const scoreLabels = [
  ["Sijainti", "location"],
  ["Tila", "space"],
  ["Varusteet", "amenities"],
  ["Helppous", "ease"],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function listText(items, limit = 4) {
  const visible = items.slice(0, limit).join(", ");
  return items.length > limit ? `${visible}...` : visible;
}

function renderRecommendations() {
  const host = document.querySelector("#recommendationCards");
  host.innerHTML = places
    .map(
      (place) => `
        <article class="pick-card">
          <span class="label">${escapeHtml(place.label)}</span>
          <h3>${escapeHtml(place.shortName)}</h3>
          <p>${escapeHtml(place.recommendation)}</p>
          <a class="button secondary" href="#${escapeHtml(place.id)}">
            <i data-lucide="arrow-down-right"></i>
            Avaa tiedot
          </a>
        </article>
      `,
    )
    .join("");
}

function renderScoreCards() {
  const host = document.querySelector("#scoreCards");
  host.innerHTML = places
    .map((place) => {
      const rows = scoreLabels
        .map(([label, key]) => {
          const score = place.scores[key];
          return `
            <div class="score-row">
              <span>${escapeHtml(label)}</span>
              <div class="bar" aria-hidden="true"><span style="width: ${score * 20}%"></span></div>
              <strong>${score}/5</strong>
            </div>
          `;
        })
        .join("");

      return `
        <article class="score-card">
          <h3>${escapeHtml(place.shortName)}</h3>
          ${rows}
        </article>
      `;
    })
    .join("");
}

function renderComparisonRows() {
  const host = document.querySelector("#comparisonRows");
  host.innerHTML = places
    .map(
      (place) => `
        <tr>
          <td>
            <span class="table-name">${escapeHtml(place.shortName)}</span>
            <span class="table-note">${escapeHtml(place.label)}</span>
          </td>
          <td>${escapeHtml(place.area)}<span class="table-note">${escapeHtml(place.distances[0][1])}</span></td>
          <td>${escapeHtml(place.bedrooms)}<span class="table-note">${escapeHtml(place.bathrooms)}</span></td>
          <td>${escapeHtml(listText(place.features, 5))}</td>
          <td><strong>${escapeHtml(place.price)}</strong><span class="table-note">${escapeHtml(place.priceNote)}</span></td>
          <td>${escapeHtml(place.recommendation)}</td>
        </tr>
      `,
    )
    .join("");
}

function renderPlaces() {
  const host = document.querySelector("#placeList");
  host.innerHTML = places
    .map((place) => {
      const featureTags = place.features
        .map((feature) => `<span class="feature">${escapeHtml(feature)}</span>`)
        .join("");
      const pros = place.pros.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      const cons = place.cons.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
      const distances = place.distances
        .map(
          ([label, value]) => `
            <div class="distance-item">
              <span>${escapeHtml(label)}</span>
              <strong>${escapeHtml(value)}</strong>
            </div>
          `,
        )
        .join("");

      return `
        <article class="place-card" id="${escapeHtml(place.id)}">
          <div class="place-layout">
            <div class="media-frame">
              <img
                src="${escapeHtml(place.image)}"
                alt="${escapeHtml(place.shortName)} - ${escapeHtml(place.imageLabel)}"
                loading="lazy"
                decoding="async"
                onerror="this.closest('.media-frame').classList.add('image-failed'); this.remove()"
              />
              <span class="image-badge">${escapeHtml(place.imageLabel)}</span>
              <div class="image-fallback">
                <h4>${escapeHtml(place.shortName)}</h4>
                <p>${escapeHtml(place.imageFallback)}</p>
              </div>
            </div>
            <div class="place-content">
              <div class="place-topline">
                <span class="rank">Sija ${escapeHtml(place.rank)}</span>
                <span class="price-chip">${escapeHtml(place.price)}</span>
              </div>
              <h3>${escapeHtml(place.name)}</h3>
              <p class="place-summary">${escapeHtml(place.summary)}</p>

              <div class="meta-grid">
                <div class="meta-box">
                  <span>Sijainti</span>
                  <strong>${escapeHtml(place.address)}</strong>
                </div>
                <div class="meta-box">
                  <span>Päivämäärä</span>
                  <strong>${escapeHtml(place.dates)}</strong>
                </div>
                <div class="meta-box">
                  <span>Makuuhuoneet</span>
                  <strong>${escapeHtml(place.bedrooms)}</strong>
                </div>
                <div class="meta-box">
                  <span>Kylpyhuoneet / kapasiteetti</span>
                  <strong>${escapeHtml(place.bathrooms)} · ${escapeHtml(place.capacity)}</strong>
                </div>
              </div>

              <div class="feature-wrap">${featureTags}</div>

              <div class="pros-cons">
                <div class="pc-panel">
                  <h4>Hyvät puolet</h4>
                  <ul>${pros}</ul>
                </div>
                <div class="pc-panel cons">
                  <h4>Huonot puolet / tarkista</h4>
                  <ul>${cons}</ul>
                </div>
              </div>

              <div class="distance-grid">${distances}</div>

              <div class="place-actions">
                <a class="button primary" href="${escapeHtml(place.link)}" target="_blank" rel="noreferrer">
                  <i data-lucide="external-link"></i>
                  Varaussivu
                </a>
                <a class="button secondary" href="${escapeHtml(place.gallery)}" target="_blank" rel="noreferrer">
                  <i data-lucide="images"></i>
                  Kuvat / galleria
                </a>
                <a class="button secondary" href="${escapeHtml(place.mapUrl)}" target="_blank" rel="noreferrer">
                  <i data-lucide="map-pin"></i>
                  Avaa kartassa
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderMapNotes() {
  const host = document.querySelector("#mapNotes");
  host.innerHTML = places
    .map(
      (place) => `
        <article class="map-note">
          <h3>${escapeHtml(place.shortName)}</h3>
          <p><strong>${escapeHtml(place.area)}.</strong> ${escapeHtml(place.markerNote)}</p>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  const host = document.querySelector("#sourceList");
  host.innerHTML = checks
    .map((group) => {
      const links = group.items
        .map(
          ([label, href]) => `
            <li><a href="${escapeHtml(href)}" target="${href.startsWith("#") ? "_self" : "_blank"}" rel="noreferrer">${escapeHtml(label)}</a></li>
          `,
        )
        .join("");
      return `
        <article class="source-card">
          <h3>${escapeHtml(group.title)}</h3>
          <ul>${links}</ul>
        </article>
      `;
    })
    .join("");
}

function initMap() {
  const mapEl = document.querySelector("#map");
  if (!mapEl || !window.L) {
    mapEl.textContent = "Karttaa ei voitu ladata. Käytä kohdekorttien karttalinkkejä.";
    return;
  }

  const map = L.map("map", {
    scrollWheelZoom: false,
  }).setView([50.0785, 14.4045], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  places.forEach((place) => {
    L.marker(place.coords)
      .addTo(map)
      .bindPopup(`
        <span class="popup-title">${escapeHtml(place.shortName)}</span>
        ${escapeHtml(place.area)}<br />
        ${escapeHtml(place.distances[0][1])}<br />
        <a class="popup-link" href="${escapeHtml(place.link)}" target="_blank" rel="noreferrer">Avaa kohde</a>
      `);
  });

  const landmarks = [
    ["Old Town Square", [50.0874453, 14.4209714]],
    ["Charles Bridge", [50.0865, 14.4114]],
    ["Prague Castle", [50.0909, 14.4005]],
  ];

  landmarks.forEach(([name, coords]) => {
    L.circleMarker(coords, {
      radius: 6,
      color: "#15503f",
      fillColor: "#fff1df",
      fillOpacity: 1,
      weight: 2,
    })
      .addTo(map)
      .bindPopup(`<span class="popup-title">${escapeHtml(name)}</span>Nähtävyys`);
  });
}

function init() {
  renderRecommendations();
  renderScoreCards();
  renderComparisonRows();
  renderPlaces();
  renderMapNotes();
  renderSources();
  initMap();

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.addEventListener("DOMContentLoaded", init);

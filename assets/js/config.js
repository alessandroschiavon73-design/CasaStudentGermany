window.STUDENTBNB_CONFIG = {
  brandLine: "Base & Belong",
  countryCode: "DE", countryName: "Deutschland", locale: "de-DE", currency: "EUR", domain: "student-bnb.de",
  apiBaseUrl: "/api/v1", apiEnabled: false, analyticsEnabled: false,
  routes: { city:"stadt.html", listing:"anzeige.html", publish:"inserieren.html", request:"ich-suche.html", students:"studierende.html", solidarity:"wohnen-mit-hilfe.html", privacy:"datenschutz.html", confirm:"email-bestaetigen.html" },
  networkSites: [
    {code:"IT",label:"Italia",flag:"🇮🇹",url:"https://studentbnb.it/"},
    {code:"ES",label:"España",flag:"🇪🇸",url:"https://studentbnb.es/"},
    {code:"PT",label:"Portugal",flag:"🇵🇹",url:"https://studentbnb.pt/"},
    {code:"FR",label:"France",flag:"🇫🇷",url:"https://studentbnb.fr/"},
    {code:"DE",label:"Deutschland",flag:"🇩🇪",url:"https://student-bnb.de/"},
    {code:"PL",label:"Polska",flag:"🇵🇱",url:"https://studentbnb.pl/"}
  ],
  ui: {
    select:"Auswählen", allCities:"Alle Städte", allZones:"Alle Stadtteile", domainPending:"Deutsche Domain noch einzutragen",
    checkEmail:"Prüfe deine E-Mail, um die Verifizierung abzuschließen.", demoVerification:"Demo-Modus: Mit der Schaltfläche unten wird der E-Mail-Link simuliert.", genericError:"Der Vorgang konnte nicht abgeschlossen werden.", login:"Anmelden", verifiedEmail:"E-Mail verifiziert", monthShort:"Monat", expensesIncluded:"Nebenkosten inklusive", expensesExcluded:"Nebenkosten extra", expensesIncludedLong:"Nebenkosten sind in der Miete enthalten.", expensesExcludedLong:"Geschätzte Nebenkosten zusätzlich:", favorite:"Favorit speichern", offersFound:"Angebote gefunden", noOffers:"Noch keine passenden Angebote", noOffersHelp:"Veröffentliche dein Gesuch, damit Vermietende dich kontaktieren können.", publishRequest:"Gesuch veröffentlichen", contactProtected:"Anfrage gespeichert. Kontakte sind für verifizierte Nutzer geschützt.", contactStudent:"Studierende kontaktieren", profilesFound:"Profile gefunden", invalidLinkTitle:"Link ungültig oder abgelaufen", invalidLinkMessage:"Fordere einen neuen Verifizierungslink an und versuche es erneut.", emailConfirmedTitle:"E-Mail bestätigt", emailConfirmedPublished:"Der Eintrag wurde gespeichert und wird vor Veröffentlichung moderiert.", emailConfirmedLogin:"Das Konto wurde auf diesem Gerät verifiziert."
  }
};

(function(){
 const cfg=window.STUDENTBNB_CONFIG, sites=cfg.networkSites;
 function meta(k,v,c){let e=document.head.querySelector(`meta[${k}="${v}"]`);if(!e){e=document.createElement("meta");e.setAttribute(k,v);document.head.appendChild(e)}e.content=c}
 function link(rel,href,lang){let s=`link[rel="${rel}"]${lang?`[hreflang="${lang}"]`:""}`,e=document.head.querySelector(s);if(!e){e=document.createElement("link");e.rel=rel;if(lang)e.hreflang=lang;document.head.appendChild(e)}e.href=href}
 function apply(){
  document.querySelectorAll(".brand small").forEach(e=>{e.textContent="Base & Belong";e.style.fontStyle="italic"});
  const p=location.pathname.endsWith("/")?"":location.pathname.split("/").pop(), u=`https://${cfg.domain}/${p||""}`; link("canonical",u); meta("name","robots","index,follow,max-image-preview:large"); meta("property","og:site_name","StudentBnB — Base & Belong"); meta("property","og:title",document.title); meta("property","og:description",document.head.querySelector('meta[name="description"]')?.content||"Studentisches Wohnen in Europa."); meta("property","og:url",u); meta("name","twitter:card","summary_large_image");
  if(!p||p==="index.html"){sites.forEach(s=>link("alternate",s.url,s.code.toLowerCase()));link("alternate","https://studentbnb.eu/","x-default")}
  const b=document.querySelector(".footer-international .footer-country-links");if(b)b.innerHTML=sites.map(s=>`<a href="${s.url}"${s.code===cfg.countryCode?' aria-current="page"':' target="_blank" rel="noopener"'}><span aria-hidden="true">${s.flag}</span> ${s.label}</a>`).join("")+'<a href="https://studentbnb.eu/" target="_blank" rel="noopener">🇪🇺 Europa</a>';
  const i=document.querySelector(".footer-international");if(i&&!i.querySelector(".europe-contact")){const x=document.createElement("p");x.className="europe-contact";x.innerHTML='<a href="mailto:contact@studentbnb.eu">contact@studentbnb.eu</a> · <em>Base & Belong</em>';i.appendChild(x)}
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply);else apply();
})();

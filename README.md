# EXPO Event

Závěrečný projekt semestrálního kurzu [Staň se kodérkou PODZIM 2022](https://www.czechitas.cz/kurzy/stan-se-koderkou)

- [Minimální požadavky](#Minimální-požadavky)
- [Abstrakt](#Abstrakt)
- [Rozsah a realizace](#Rozsah-a-realizace)

## Minimální požadavky

Požadavky ze strany ogranizátorů kurzu pro uznání projektu (stav uspěla) a udělení certifikátu.

- vícestránkový web, který má minimálně **4 různé obsahové stránky**
- je **respozivní** - má mobilní a alespoň jednu další verzi (tablet, PC, ...)
- používá flexbox nebo CSS grid
- je postavený na generátoru statických webů **Eleventy** a používá **alespoň jednu šablonu**
- používá **alespoň jednu** z následujících 3 technik (stačí jedna, ale klidně v projektu použij všechny):
  - používá **BEM** jako metodologii pro pojmenování CSS tříd
  - (nebo) používá **Sass** pro lepší organizaci CSS a rozdělení kódu do menších souborů
  - (nebo) využívá **kolekce** pro vytvoření novinek, článků na blogu, apod., nebo obsah generovaný z dat (FAQ, seznam zaměstanců, poboček, produktů, apod.)


## Abstrakt

Hlavním tématem a cílem závěrečného projektu bylo vytvořit statický web pro událost EXPO a přenést informace uvedené v příspěvku do vícestránkového webu.

- informovat návštěvníka na úvodní straně webu o termínu a místu konání burzy
- vytvořit seznam předních partnerů a významných vystavovatelů formou loga - loga byla upravena do formátu *.svg* za použití programu CorelDraw
- umístit fotogalerii na podstránce Program a vytvořit seznam osobností
- oddělit informace určené pro návštěvníky a vystavovatele do podstránek webu
- umožnit kontaktovat organizátora akce prostřednictvím kontaktního formuláře


## Rozsah a realizace

Stručný výčet znalostí, které jsem v projektu využila.

- rozvržení layoutu webu CSS **flexboxem**
- responzivní layout - **mobile-first** a **media query**
- jednotky pro tvorbu webu (**em, rem**, %, px, vh, vw)
- pojmenování CSS tříd metodikou **BEM**
- organizace a rozdělení CSS za pomocí **Sass** - proměnné a zanořování
- obsahový web postavený na generátoru statických webu **Eleventy** s použitím šablon (oddělený obsah od společných prvků stránky)
- **animace a transformace** CSS vlastností
- **HTML formulář** a CSS nastylování
- SVG ikony v externím **SVG sprite**
- **Favicon** - ikona webu
- použití hotové **javascriptové knihovy** ([Glide](https://glidejs.com/), [Lightbox](https://fslightbox.com/))
- uložení projektu v repozitáři na **GitHubu** a jeho publikování na hostingovou službu **Netlify**

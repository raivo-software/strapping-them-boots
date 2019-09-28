const express = require('express');
const app = express();
const port = 3001;

const data = {
  slogans: ['Kuumimmat uutiset!', 'Nopeimmat uutiset!', 'THE UUTISET!'],
  trending: [
    {
      headline: '”Rinteen kätyrihallitus vie teiltä leivän pöydästä”, pelottelee perussuomalainen - työperäinen maahanmuutto on kuuma peruna',
      isNew: true,
      textContent: 'Melkoisella varmuudella voi sanoa, että yksi tulevan vaalikauden ja tulevien vaalien kiistakysymyksistä tulee olemaan työperäisen maahanmuuton lisääminen. Asetelma on yksinkertainen, muut vastaan perussuomalaiset, mutta sillä voi olla pitkäkantoisia poliittisia vaikutuksia. Antti Rinteen (sd) kansanrintamahallitus on luvannut helpottaa työperäistä maahanmuuttoa muun muassa nopeuttamalla työperäisten oleskelulupien käsittelyaikoja. Tämä tarkoittaa EU- ja ETA-alueiden ulkopuolelta tulevan työvoimaa, EU:n sisällähän on työvoiman vapaa liikkuvuus.'
    },
    {
      headline: 'Ravintolakeikka tuli kalliiksi - pomo käräytti ”sairaan” työntekijän aamuyöllä paikallisessa kapakassa',
      isNew: true,
      textContent: 'Koneenkäyttäjänä toiminut mies oli pyytänyt ja saanut vapaata yövuorosta kuumeeseen vedoten. Tehtaan tuotantopäällikkö kuitenkin näki miehen yöllä paikallisessa ravintolassa kaveriseurueessa. Päijät-Hämeen käräjäoikeus on hylännyt työntekijän nostaman kanteen työsuhteen perusteettomasta päättämisestä. Työntekijä joutuu maksamaan käräjille haastamansa työnantajan oikeuskulut.'
    },
    {
      headline: '6-vuotias amerikkalaispoika säästi yli vuoden koiranpentuun ja sitten hänet yllätettiin: Katso pojan liikuttava reaktio',
      isNew: false,
      textContent: 'Amerikkalaispoika sai kauan toivomansa koiranpennun isovanhemmiltaan. Xander Mellorin äiti Natalia Ellenburgin mukaan 6-vuotias Xander oli toivonut yli puolitoista vuotta koiranpentua. Hän oli jopa säästänyt kaikki kolikkonsa yli vuoden ajan ostaakseen koiran vaikka itse. Uskomaton lahja tuli lopulta isovanhemmilta.'
    },
    {
      headline: 'Kylmähyllyn ”vapaan lehmän maito” ei tarkoita laitumella kirmaavia lehmiä – kansanedustajat haluavat tiukempia vaatimuksia tuottajille',
      isNew: false,
      textContent: 'Vihreiden kansanedustajat Satu Hassi, Jenni Pitko, Emma Kari ja Outi Alanko-Kahiluoto jättivät hallitukselle kirjallisen kysymyksen, jossa he tiedustelevat, aikooko hallitus säätää vaatimukset sille, millä tavalla tuotettua maitoa saa markkinoida ”vapaan lehmän” maitona. Kaksi yritystä, Juustoportti ja Valio ovat tuoneet markkinoille ”vapaan lehmän” maidon, mutta yhtiöiden käsitykset ”vapaan lehmän maidon” kriteereistä eroavat merkittävästi toisistaan.'
    }
  ],
  homeland: [
    {
      headline: 'Jättimäinen uroskarhu näytti kieltä Ömerin kameralle – tällaisissa lähikuvissa karhuja näkee äärimmäisen harvoin',
      isNew: true,
      textContent: 'Kouvolalainen hammaslääkäri Ömer Acar on tänä vuonna kuvannut Kuhmossa neljä kertaa. Tuoreimmalla reissullaan hän halusi kuviin jotain sellaista, jota kojukuvissa ei nähdä. Niitä on netissä jo pilvin pimein. –Karhuthan menevät pian talvilevoille. Viimeisiä päiviä niitä tuolla pyörii. Kokeilin kamera-ansalla kuvaamista, ja tosi isosta uroskarhusta tuli tällaisia lähikuvia.'
    },
    {
      headline: 'Mopoauto suistui tieltä katolleen ojaan – kyydissä seitsemän alaikäistä nuorta',
      isNew: false,
      textContent: 'Mopoauton kuljettaja ajautui ajoneuvollaan tieltä ulos lauantaina Rauman Lapissa sillä seurauksella, että ajoneuvo päätyi katolleen ojaan. Onnettomuus tapahtui metsäautotiellä noin kello 23 . Nuorella kuljettajalla ei ollut ajo-oikeutta kuljettaa mopoautoa. Mopoautossa oli kuljettajan lisäksi kuusi henkilöä kyydissä, mikä ei poliisin mukaan voinut olla vaikuttamatta ajoneuvon suistumiseen tieltä.'
    },
    {
      headline: 'Koskelan sairaalan palveluasuntolassa tulipalo – potilaita evakuoitiin',
      isNew: false,
      textContent: 'Koskelan sairaalan A-rakennuksen keittiössä syttyi sunnuntaiaamuna tulipalo. Savua levisi rakennuksen yläpuolisiin tiloihin. Pelastuslaitokselta kerrotaan Iltalehdelle, että palo syttyi Koskelan sairaalan palveluasuntoyksikössä. Palo sai alkunsa keittiön liesituulettimesta, josta se levisi keittiön kaapistoon. Palo aiheutti voimakasta savua. Palveluasuntoyksikön asukkaita evakuoitiin alempiin kerroksiin. Pelastuslaitoksen mukaan palo on sammutettu ja tiloja tuuletetaan.'
    }
  ],
  sports: [
    {
      headline: 'FC Barcelonan pelaajilta joukkopako nöyryyttävän illan jälkeen – mahtijoukkueella surkein alkukausi 25 vuoteen',
      isNew: true,
      textContent: 'Viidestä ottelusta seitsemän pistettä. FC Barcelonan alkukausi La Ligassa on ollut tuskaista korpivaellusta. Katalonialaisjätti kärsi nöyryyttävän 0–2-tappion lauantai-iltana Granadan kotikentällä. Liiganousija meni johtoon jo toisella peliminuutilla, ja ratkaisi homman toisen puoliajan rangaistuspotkumaalilla. Espanjalaislehti Marca huomautti ottelun jälkeen, että FC Barcelona on viimeksi aloittanut näin huonosti liigassa kaudella 1994–1995.'
    },
    {
      headline: 'Hurjasta taistelusta ei tullut palkintoa – Suomen taival EM-lentopallossa päättyi',
      isNew: false,
      textContent: 'Suomi kiusasi EM-isäntää pitkään Nantesin kamppailussa, kunnes joutui taipumaan 0–3 (16–25, 23–25, 21–25) -tappioon. Suomi sai oman saumansa toisessa erässä karattuaan parhaimmillaan jo 17–13-johtoon ja piinaamalla Ranskaa loppuun asti. Hieno taistelu päättyi Ranskan hakkurin Stephen Boyerin vastustamattomaan lyöntiin. Boyer täräytti ratkaisevan pisteen omista korkeuksistaan. Myös kolmas erä oli Suomelta erittäin miehekäs. Euroopan mestaruutta metsästävä Ranska joutui panemaan parasta pöytään varmistaakseen jatkopaikan.'
    }
  ],
  newsSnippets: [
    {
      headline: 'Kotimaan uutiset',
      textContent: 'Harvinainen päikkönelilö nousi keräilyhuutokaupan kalleimmaksi tuotteeksi – katso kuva 21 000:lla eurolla myydystä harvinaisuudesta',
      readMoreUrl: 'https://www.iltalehti.fi',
      time: '16:40 21/09/2019'
    },
    {
      headline: 'Ulkomaan uutiset',
      textContent: 'Göteborgissa tapahtui yöllä voimakas räjähdys asuinalueella',
      readMoreUrl: 'https://www.iltalehti.fi',
      time: '12:25 21/09/2019'
    },
    {
      headline: 'Talous',
      textContent: 'Tuore raportti paljastaa: Valtionyhtiöissä huolta johdon liian kehnosta palkitsemisesta – ”Haaste saada hyviä ammattilaisia”',
      readMoreUrl: 'https://www.iltalehti.fi',
      time: '10:55 21/09/2019'
    },
    {
      headline: 'Sääuutiset',
      textContent: 'Tänään on aurinkoista mutta koleaa – ensi viikolla sää viilenee entisestään',
      readMoreUrl: 'https://www.iltalehti.fi',
      time: '09:49 21/09/2019'
    }
  ]
}

app.get('/news/', (req, res) => res.send(data));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
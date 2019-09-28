import React from 'react';
import './SnippetContainer.css';
import { NewsSnippet } from './NewsSnippet';

/*
  TEHTÄVÄ 4A:
  Toteuta SnippetContainer -komponentti, joka luo jokaista propseissa tulevaa uutisartikkelia vastaavan NewsSnippet komponentin

  Vaatimukset:
  - Uutisartikkelit löytyvät props.newsSnippets -kentästä.
  - Jokainen newsSnippets -kentän alkio sisältää kentät "headline", "textContent", "readMoreUrl" ja "time", jotka tulee välittää NewsSnippet -komponeteille

  Vinkki!
  Tämä on hyvin samankaltainen komponentti, kuin NewsContainer, joten jos olet toteuttanut jo sen, niin voit kopioida sen suurimmilta osin
*/

export const SnippetContainer = (props) => {
  return (
    <div className="snippet-container">
      {/* KIRJOITA KOODISI TÄMÄN ALAPUOLELLE */}




      {/* KIRJOITA KOODISI TÄMÄN YLÄPUOLELLE */}
    </div>
  )
}
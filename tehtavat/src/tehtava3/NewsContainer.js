import React from 'react';
import { NewsPost } from './NewsPost';
import './NewsContainer.css';

/*
  TEHTÄVÄ 3A:
  Toteuta NewsContainer -komponentti, joka luo jokaista propseissa tulevaa uutisartikkelia vastaavan NewsPost komponentin

  Vaatimukset:
  - Uutisartikkelit löytyvät props.newsPosts -kentästä.
  - Jokainen newsPosts -kentän alkio sisältää kentät "headline", "textContent" ja "isNew", jotka tulee välittää NewsPost -komponeteille
*/

export const NewsContainer = (props) => {
  return(
    <div className="news-container" id={props.id}>
      {/* KIRJOITA KOODISI TÄMÄN ALAPUOLELLE */}
      
      
      
      {/* KIRJOITA KOODISI TÄMÄN YLÄPUOLELLE */}
    </div>
  )
}
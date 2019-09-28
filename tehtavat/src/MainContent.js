import React, { Component } from 'react';
import { Title } from './tehtava2/Title';
import { SnippetContainer } from './tehtava4/SnippetContainer';
import { NewsContainer } from './tehtava3/NewsContainer';

export class MainContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slogans: [],
      trending: [],
      homeland: [],
      sports: [],
      newsSnippets: []
    }
  }
  
  componentDidMount() {
    fetch('/news/')
      .then(data => data.json())
      .then(json => { this.setState({
        slogans: json.slogans,
        trending: json.trending,
        homeland: json.homeland,
        sports: json.sports,
        newsSnippets: json.newsSnippets
      })})
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9" id="home">
            <Title slogans={this.state.slogans} />
            <NewsContainer id="trending" topic="Suosituimmat" newsPosts={this.state.trending} />
            <NewsContainer id="homeland" topic="Kotimaa" newsPosts={this.state.homeland} />
            <NewsContainer id="sports" topic="Urheilu" newsPosts={this.state.sports} />
          </div>
          <div className="col-md-3">
            <SnippetContainer newsSnippets={this.state.newsSnippets} />
          </div>
        </div>
      </div>
    )
  }
}


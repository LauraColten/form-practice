import React, { Component } from 'react';

class Form extends Component {

  state = {
    searchTerm: '',
    articles: []
  }

  handleInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(news => {
        this.setState({ searchTerm: '', articles: news.hits })
      })
  }

  render() {

    return (
      <div>
        <h1>News Articles</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter a search term..."
            onChange={this.handleInput}
            value={this.state.searchTerm}
            name="searchTerm" />
          <button type="submit">Search</button>
        </form>
        <div className="article-list">
          {this.state.articles.map((a, i) => {
            return (
              <div key={i} className="article">
                <p>{a.title}</p>
                <a target="_blank" href={a.url}>Read More</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Form;
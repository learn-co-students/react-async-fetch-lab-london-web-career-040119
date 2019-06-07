import React, { Component } from 'react'

export default class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    return fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          people: json.people
        })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        {
          this.state.people.length === 0
            ? <em>Loading...</em>
            : this.state.people.map(person => <div key={person.name}>{person.name} on {person.craft}</div>)
        }
      </div>
    )
  }
}

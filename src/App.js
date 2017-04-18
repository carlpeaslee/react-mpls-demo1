import React, {Component} from 'react'
import {getAllArtists} from 'graphql'

export default class App extends Component {

  state = {
    artists: []
  }

  async componentWillMount() {
    try {
      let artists = await getAllArtists()
      this.setState(
        (prevState, props) => {
          return {
            artists
          }
        },
        () => {
          console.log('callback', this.state)
        }
      )

    } catch (error) {

    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.artists.map(artist => {
            return (
              <li
                key={artist.name}
              >{artist.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

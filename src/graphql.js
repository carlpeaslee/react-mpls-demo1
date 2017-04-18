const simpleApi = 'https://api.graph.cool/simple/v1/bt-api'

export const getAllArtists = async () => {

  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        query: `{
          allArtists (
            first: 999
          ) {
            id
            name
            imageUrl
          }
        }`
      }
    )
  }

  try {
    let result = await fetch(simpleApi, options)
    let response = await result.json()
    return response.data.allArtists
  } catch (error) {

  }
}

export const updateArtist = async (artistId, imageUrl) => {

  let options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(
      {
        query: `
          mutation {
            updateArtist (
              id: "${artistId}"
              imageUrl: "${imageUrl}"
            ) {
              id
              name
              imageUrl
            }
          }
        `
      }
    )
  }

  try {
    let result = await fetch(simpleApi, options)
    let response = await result.json()
    return response.data.updateArtist
  } catch (error) {

  }
}

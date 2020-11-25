// This function makes a fetch to cors-anywhere who makes another fetch to the image URL passed by param, cors-anywhere returns an https URL with the image resource

async function getImage (imageUrl) {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

  try {
    const fetchRuslt = await fetch(proxyUrl + imageUrl)
    return fetchRuslt.url
  } catch (error) {
    console.log('Error: ', error)
    return 'Not found'
  }
}

export { getImage }

const KEY = `${process.env.REACT_APP_UNSPlASH_API}`
const URL = 'https://api.unsplash.com/photos/'

const fetchImages = async page => {
  const response = await fetch(
    `${URL}?client_id=${KEY}&per_page=28&page=${page}`
  )
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.errors)
  }
  return data
}

const fetchImageStats = async id => {
  const response = await fetch(`${URL}/?client_id=${KEY}/:${id}`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.errors)
  }

  return data
}

export { fetchImages, fetchImageStats }

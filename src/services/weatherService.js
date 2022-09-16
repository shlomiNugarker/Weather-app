import { storageService } from './storageService.js'
import { makeId } from './utilService.js'
import axios from 'axios'

export const weatherService = {
  getLocationKey,
  getCurrentWeather,
  getLocationAutoComplete,
  loadfromStorage,
  getFiveDaysDailyForcast,
}

const STORAGE_KEY = 'weather'
const API_KEY = 'iRLFvsQPAdFIsRttg2GNGzUUUWtNT06T'

let gWeatherData = loadfromStorage()

async function getLocationKey(cityTxt) {
  try {
    if (gWeatherData?.locations && gWeatherData?.locations[cityTxt]) {
      console.log('city exist !')
      return { key: gWeatherData.locations[cityTxt].Key, cityTxt }
    }
    console.log('city not exist.. finding...')
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityTxt}`
    )

    gWeatherData.locations = {
      ...gWeatherData.locations,
      [cityTxt]: res.data[0],
    }
    storageService.store(STORAGE_KEY, gWeatherData)

    return { key: gWeatherData.locations[cityTxt].Key, cityTxt }
  } catch (err) {
    console.log('err- weatherService-> getLocationKey:', err)
  }
}

async function getCurrentWeather({ key, cityTxt }) {
  try {
    if (gWeatherData?.currentWeather && gWeatherData?.currentWeather[cityTxt]) {
      console.log('currentWeather exist !')
      return gWeatherData.currentWeather[cityTxt]
    }

    console.log('currentWeather not exist.. finding..')
    const res = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_KEY}`
    )
    gWeatherData.currentWeather = {
      ...gWeatherData.currentWeather,
      [cityTxt]: { ...res.data[0], locationKey: key },
    }
    storageService.store(STORAGE_KEY, gWeatherData)
    return gWeatherData.currentWeather[cityTxt]
  } catch (err) {
    console.log('err- weatherService-> getCurrentWeather:', err)
  }
}

async function getFiveDaysDailyForcast({ key, cityTxt }) {
  try {
    if (
      gWeatherData?.fiveDaysDailyForcast &&
      gWeatherData?.fiveDaysDailyForcast[cityTxt]
    ) {
      console.log('getFiveDaysDailyForcast, city exist !')
      return gWeatherData.fiveDaysDailyForcast[cityTxt]
    }

    console.log('getFiveDaysDailyForcast not exist.. finding..')
    const res = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
    )
    gWeatherData.fiveDaysDailyForcast = {
      ...gWeatherData.fiveDaysDailyForcast,
      [cityTxt]: { ...res.data, locationKey: key },
    }
    storageService.store(STORAGE_KEY, gWeatherData)

    return gWeatherData.fiveDaysDailyForcast[cityTxt]
  } catch (err) {
    console.log('err- weatherService-> getFiveDaysDailyForcast:', err)
  }
}

async function getLocationAutoComplete(txt) {
  try {
    if (
      gWeatherData?.autoCompleteWords &&
      gWeatherData?.autoCompleteWords[txt]
    ) {
      console.log('getLocationAutoComplete, txt exist !')
      return gWeatherData.autoCompleteWords[txt]
    }

    console.log('getLocationAutoComplete not exist.. finding..')

    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${txt}`
    )

    const wordsToReturn = res.data.map((city) => city.LocalizedName)

    gWeatherData.autoCompleteWords = {
      ...gWeatherData.autoCompleteWords,
      [txt]: wordsToReturn,
    }

    storageService.store(STORAGE_KEY, gWeatherData)

    return wordsToReturn
  } catch (err) {
    console.log('err- weatherService-> getLocationAutoComplete:', err)
  }
}

function loadfromStorage() {
  const weatherData = storageService.load(STORAGE_KEY)
  const dataToReturn = !weatherData ? {} : weatherData
  return dataToReturn
}

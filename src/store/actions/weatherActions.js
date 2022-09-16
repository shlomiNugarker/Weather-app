import { weatherService } from '../../services/weatherService'

export function getCurrentWeather(cityTxt) {
  return async (dispatch, getState) => {
    try {
      cityTxt = cityTxt.toLowerCase()
      const location = await weatherService.getLocationKey(cityTxt)
      dispatch({
        type: 'SET_LOCATION_KEY',
        location: { locationKey: location.key, cityTxt: location.cityTxt },
      })

      const currentWeather = await weatherService.getCurrentWeather(location)
      dispatch({
        type: 'SET_CURRENT_WEATHER',
        currentWeather: { cityTxt, data: currentWeather },
      })

      const fiveDaysDailyForcast = await weatherService.getFiveDaysDailyForcast(
        location
      )
      console.log({ fiveDaysDailyForcast })
      dispatch({
        type: 'SET_FIVE_DAYS_DAILY_FORCAST',
        fiveDaysDailyForcast: { cityTxt, data: fiveDaysDailyForcast },
      })

      return { currentWeather, fiveDaysDailyForcast }
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function getLocationAutoComplete(txt) {
  return async (dispatch, getState) => {
    try {
      const autoCompleteWords = await weatherService.getLocationAutoComplete(
        txt
      )
      dispatch({
        type: 'SET_AUTO_COMPLETE_WORDS',
        autoCompleteWords,
      })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

export function loadExistDataFromStorage() {
  return async (dispatch, getState) => {
    try {
      const data = await weatherService.loadfromStorage()
      dispatch({
        type: 'SET_DATA_FROM_STORAGE',
        data,
      })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

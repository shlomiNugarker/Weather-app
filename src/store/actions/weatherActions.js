import { weatherService } from '../../services/weatherService'

export function getWeather(cityTxt) {
  return async (dispatch, getState) => {
    try {
      cityTxt = cityTxt.toLowerCase()

      const locationData = await weatherService.getLocationKey(cityTxt)
      dispatch({
        type: 'SET_LOCATION_KEY',
        locationData,
      })

      console.log(locationData)

      const currentWeatherData = await weatherService.getCurrentWeather(
        locationData
      )

      // console.log(currentWeatherData)

      dispatch({
        type: 'SET_CURRENT_WEATHER',
        currentWeatherData,
      })

      const fiveDaysDailyForcastData =
        await weatherService.getFiveDaysDailyForcast(locationData)

      // console.log(fiveDaysDailyForcastData)

      dispatch({
        type: 'SET_FIVE_DAYS_DAILY_FORCAST',
        fiveDaysDailyForcastData: {
          ...fiveDaysDailyForcastData,
          locationKey: locationData.Key,
        },
      })

      dispatch({
        type: 'SET_MAIN_LOCATION_TO_SHOW',
        locationKey: locationData.Key,
      })

      return {
        locationData,
        currentWeatherData,
        fiveDaysDailyForcastData,
        locationKey: locationData.Key,
      }
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

      // console.log(autoCompleteWords)

      dispatch({
        type: 'SET_AUTO_COMPLETE_WORDS',
        autoCompleteWords,
      })
    } catch (err) {
      console.log('err:', err)
    }
  }
}

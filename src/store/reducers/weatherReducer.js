const INITIAL_STATE = {
  locationKeys: {},
  currentWeather: {},
  autoCompleteWords: [],
  fiveDaysDailyForcast: {},
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION_KEY':
      return {
        ...state,
        locationKeys: {
          ...state.locationKeys,
          [action.locationData.Key]: action.locationData,
        },
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          [action.currentWeatherData.locationKey]: action.currentWeatherData,
        },
      }
    case 'SET_AUTO_COMPLETE_WORDS':
      return {
        ...state,
        autoCompleteWords: action.autoCompleteWords,
      }
    case 'SET_DATA_FROM_STORAGE':
      return {
        ...state,
        locations: action.data.locations,
        currentWeather: action.data.currentWeather,
      }
    case 'SET_FIVE_DAYS_DAILY_FORCAST':
      return {
        ...state,
        fiveDaysDailyForcast: {
          ...state.fiveDaysDailyForcast,
          [action.fiveDaysDailyForcastData.locationKey]:
            action.fiveDaysDailyForcastData,
        },
      }

    default:
      return state
  }
}

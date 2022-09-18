const INITIAL_STATE = {
  locationsKeys: {},
  currentWeathers: {},
  autoCompleteWords: [],
  fiveDaysDailyForcasts: {},
  mainLocationKeyToShow: null,
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION_KEY':
      return {
        ...state,
        locationsKeys: {
          ...state.locationsKeys,
          [action.locationData.Key]: action.locationData,
        },
      }
    case 'SET_MAIN_LOCATION_TO_SHOW':
      return {
        ...state,
        mainLocationKeyToShow: action.locationKey,
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeathers: {
          ...state.currentWeathers,
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
        fiveDaysDailyForcasts: {
          ...state.fiveDaysDailyForcasts,
          [action.fiveDaysDailyForcastData.locationKey]:
            action.fiveDaysDailyForcastData,
        },
      }

    default:
      return state
  }
}

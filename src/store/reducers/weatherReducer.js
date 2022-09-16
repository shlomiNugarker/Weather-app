const INITIAL_STATE = {
  locations: {},
  currentWeather: {},
  autoCompleteWords: ['TEl Aviv', 'Jerusalem', 'Haifa'],
  fiveDaysDailyForcast: {},
}

export function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_LOCATION_KEY':
      return {
        ...state,
        locations: {
          ...state.locations,
          [action.location.cityTxt]: action.location.locationKey,
        },
      }
    case 'SET_CURRENT_WEATHER':
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          [action.currentWeather.cityTxt]: action.currentWeather.data,
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
          [action.fiveDaysDailyForcast.cityTxt]:
            action.fiveDaysDailyForcast.data,
        },
      }

    default:
      return state
  }
}

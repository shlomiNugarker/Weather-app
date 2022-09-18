import { storageService } from './storageService.js'
import { makeId } from './utilService.js'
import axios from 'axios'

export const weatherService = {
  getLocationKey,
  getCurrentWeather,
  getLocationAutoComplete,
  getFiveDaysDailyForcast,
}

const STORAGE_KEY = 'weather'
const API_KEY = 'iRLFvsQPAdFIsRttg2GNGzUUUWtNT06T'

async function getLocationKey(cityTxt) {
  try {
    // const res = await axios.get(
    //   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${cityTxt}`
    // )

    const res = { data: [tempLocationKeyData] }
    // console.log(res.data[0])

    return res.data[0]
  } catch (err) {
    console.log('err- weatherService-> getLocationKey:', err)
  }
}

async function getCurrentWeather(locationData) {
  try {
    // const res = await axios.get(
    //   `http://dataservice.accuweather.com/currentconditions/v1/${locationData.Key}?apikey=${API_KEY}`
    // )

    const res = { data: [tempCurrWeatherData] }

    return { ...res.data[0], locationKey: locationData.Key }
  } catch (err) {
    console.log('err- weatherService-> getCurrentWeather:', err)
  }
}

async function getFiveDaysDailyForcast(locationData) {
  try {
    // const res = await axios.get(
    //   `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationData.Key}?apikey=${API_KEY}`
    // )

    const res = { data: tempFiveDailyDaysData }

    // console.log(res.data)

    return res.data
  } catch (err) {
    console.log('err- weatherService-> getFiveDaysDailyForcast:', err)
  }
}

async function getLocationAutoComplete(txt) {
  try {
    // const res = await axios.get(
    //   `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${txt}`
    // )
    const res = { data: tempLocationAutoCompleteData }

    // console.log(res.data)

    const wordsToReturn = res.data.map((city) => city.LocalizedName)
    return wordsToReturn
  } catch (err) {
    console.log('err- weatherService-> getLocationAutoComplete:', err)
  }
}

const tempLocationAutoCompleteData = [
  // t:
  {
    Version: 1,
    Key: '226396',
    Type: 'City',
    Rank: 10,
    LocalizedName: 'Tokyo',
    Country: {
      ID: 'JP',
      LocalizedName: 'Japan',
    },
    AdministrativeArea: {
      ID: '13',
      LocalizedName: 'Tokyo',
    },
  },
  {
    Version: 1,
    Key: '106770',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Taiyuan',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SX',
      LocalizedName: 'Shanxi',
    },
  },
  {
    Version: 1,
    Key: '106780',
    Type: 'City',
    Rank: 11,
    LocalizedName: 'Tianjin',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'TJ',
      LocalizedName: 'Tianjin',
    },
  },
  {
    Version: 1,
    Key: '58491',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongren',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'GZ',
      LocalizedName: 'Guizhou',
    },
  },
  {
    Version: 1,
    Key: '102324',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tangshan',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'HE',
      LocalizedName: 'Hebei',
    },
  },
  {
    Version: 1,
    Key: '59573',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Taizhou',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'JS',
      LocalizedName: 'Jiangsu',
    },
  },
  {
    Version: 1,
    Key: '60198',
    Type: 'City',
    Rank: 13,
    LocalizedName: 'Tongliao',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'NM',
      LocalizedName: 'Inner Mongolia',
    },
  },
  {
    Version: 1,
    Key: '106571',
    Type: 'City',
    Rank: 13,
    LocalizedName: "Tai'an",
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'SD',
      LocalizedName: 'Shandong',
    },
  },
  {
    Version: 1,
    Key: '58055',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Tianshui',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'GS',
      LocalizedName: 'Gansu',
    },
  },
  {
    Version: 1,
    Key: '2333653',
    Type: 'City',
    Rank: 15,
    LocalizedName: 'Taizhou',
    Country: {
      ID: 'CN',
      LocalizedName: 'China',
    },
    AdministrativeArea: {
      ID: 'ZJ',
      LocalizedName: 'Zhejiang',
    },
  },
]

const tempFiveDailyDaysData = {
  Headline: {
    EffectiveDate: '2022-09-18T20:00:00+03:00',
    EffectiveEpochDate: 1663520400,
    Severity: 7,
    Text: 'Warm Sunday night',
    Category: 'heat',
    EndDate: '2022-09-19T08:00:00+03:00',
    EndEpochDate: 1663563600,
    MobileLink:
      'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2022-09-18T07:00:00+03:00',
      EpochDate: 1663473600,
      Temperature: {
        Minimum: {
          Value: 76,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 84,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=1&lang=en-us',
    },
    {
      Date: '2022-09-19T07:00:00+03:00',
      EpochDate: 1663560000,
      Temperature: {
        Minimum: {
          Value: 76,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 83,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=2&lang=en-us',
    },
    {
      Date: '2022-09-20T07:00:00+03:00',
      EpochDate: 1663646400,
      Temperature: {
        Minimum: {
          Value: 75,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 84,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=3&lang=en-us',
    },
    {
      Date: '2022-09-21T07:00:00+03:00',
      EpochDate: 1663732800,
      Temperature: {
        Minimum: {
          Value: 74,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 82,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: 'Partly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=4&lang=en-us',
    },
    {
      Date: '2022-09-22T07:00:00+03:00',
      EpochDate: 1663819200,
      Temperature: {
        Minimum: {
          Value: 72,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 82,
          Unit: 'F',
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: 'Mostly clear',
        HasPrecipitation: false,
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/haifa/213181/daily-weather-forecast/213181?day=5&lang=en-us',
    },
  ],
}

const tempCurrWeatherData = {
  LocalObservationDateTime: '2022-09-18T14:57:00+03:00',
  EpochTime: 1663502220,
  WeatherText: 'Partly sunny',
  WeatherIcon: 3,
  HasPrecipitation: false,
  PrecipitationType: null,
  IsDayTime: true,
  Temperature: {
    Metric: {
      Value: 28.9,
      Unit: 'C',
      UnitType: 17,
    },
    Imperial: {
      Value: 84,
      Unit: 'F',
      UnitType: 18,
    },
  },
  MobileLink:
    'http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us',
  Link: 'http://www.accuweather.com/en/il/haifa/213181/current-weather/213181?lang=en-us',
}

const tempLocationKeyData = {
  Version: 1,
  Key: '213181',
  Type: 'City',
  Rank: 31,
  LocalizedName: 'Haifa',
  EnglishName: 'Haifa',
  PrimaryPostalCode: '',
  Region: {
    ID: 'MEA',
    LocalizedName: 'Middle East',
    EnglishName: 'Middle East',
  },
  Country: {
    ID: 'IL',
    LocalizedName: 'Israel',
    EnglishName: 'Israel',
  },
  AdministrativeArea: {
    ID: 'HA',
    LocalizedName: 'Haifa',
    EnglishName: 'Haifa',
    Level: 1,
    LocalizedType: 'District',
    EnglishType: 'District',
    CountryID: 'IL',
  },
  TimeZone: {
    Code: 'IDT',
    Name: 'Asia/Jerusalem',
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: '2022-10-29T23:00:00Z',
  },
  GeoPosition: {
    Latitude: 32.812,
    Longitude: 34.999,
    Elevation: {
      Metric: {
        Value: 101,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 331,
        Unit: 'ft',
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    'AirQualityCurrentConditions',
    'AirQualityForecasts',
    'Alerts',
    'DailyPollenForecast',
    'ForecastConfidence',
    'FutureRadar',
    'MinuteCast',
  ],
}

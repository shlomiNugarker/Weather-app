import { useEffect, useState } from 'react'
import { makeId } from '../services/utilService'

export function MainWeatherDetails({
  currentWeathers,
  fiveDaysDailyForcasts,
  locationsKeys,
  mainLocationKeyToShow,
}) {
  const [currWeather, setcurrWeather] = useState(null)
  const [currLocation, setcurrLocation] = useState(null)
  const [fiveDailyDaysforcast, setFiveDailyDaysforcast] = useState(null)

  useEffect(() => {
    // console.log(fiveDaysDailyForcasts[mainLocationKeyToShow])
    // console.log(locationsKeys[mainLocationKeyToShow])
    setcurrLocation(locationsKeys[mainLocationKeyToShow])
    setcurrWeather(currentWeathers[mainLocationKeyToShow])

    setFiveDailyDaysforcast(
      fiveDaysDailyForcasts[mainLocationKeyToShow]?.DailyForecasts
    )
  }, [currentWeathers, fiveDaysDailyForcasts, mainLocationKeyToShow])

  if (
    !currentWeathers ||
    !locationsKeys ||
    !fiveDaysDailyForcasts ||
    !mainLocationKeyToShow ||
    !currWeather ||
    !currLocation
  )
    return

  return (
    <section className="main-weather-details">
      <div className="title">
        <h1>
          {currLocation?.EnglishName},{currLocation?.Country.EnglishName}
        </h1>
        <p>{currLocation?.Region.EnglishName}</p>
      </div>

      <div className="top">
        <div className="city-name">
          <div className="container">
            <div>
              <div className="icon">
                WeatherIcon: {currWeather?.WeatherIcon} <br />
                IsDayTime: {currWeather?.IsDayTime ? 'true' : 'false'}
              </div>
              <div className="Temperature">
                <p>
                  {currWeather?.Temperature?.Imperial.Value}
                  <span>{currWeather?.Temperature?.Imperial.Unit}</span>
                </p>
                <span> </span>
              </div>
            </div>
          </div>
        </div>
        <div className="favorite-btn">
          <div>
            <span title="Add to favorites">❤️</span>
          </div>
        </div>
      </div>

      <div className="description">
        <div className="WeatherText">
          <h1>{currWeather?.WeatherText}</h1>
        </div>
      </div>

      <div className="list">
        {fiveDailyDaysforcast.map((forcast) => (
          <div key={makeId()}>
            <div>
              <p>{new Date(forcast.Date).toLocaleDateString()}</p>
              <div>
                <p>
                  {forcast?.Temperature?.Minimum?.Value}
                  {forcast?.Temperature?.Minimum.Unit} -
                  {forcast?.Temperature?.Maximum.Value}{' '}
                  {forcast?.Temperature?.Maximum.Unit}
                </p>
                <p>-Day-</p>
                <p>icon:{forcast.Day.Icon}</p>
                <p>{forcast.Day.IconPhrase}</p>
              </div>
              <div>
                <p>-Night-</p>
                <p>icon:{forcast.Night.Icon}</p>
                <p>{forcast.Night.IconPhrase}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

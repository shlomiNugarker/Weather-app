import { useEffect } from 'react'

export function MainWeatherDetails({ currentWeather, fiveDaysDailyForcast }) {
  useEffect(() => {
    console.log({ currentWeather })
    console.log({ fiveDaysDailyForcast })

    return () => {}
  }, [currentWeather, fiveDaysDailyForcast])

  if (!currentWeather) return

  return (
    <section className="main-weather-details">
      <div className="top">
        <div className="city-name">
          <div className="container">
            <div>
              <div className="icon">icon </div>
              <div className="Temperature">
                <span> </span>
              </div>
              <div className="WeatherText">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="favorite-btn">
          <p>right-top</p>
        </div>
      </div>
      <div className="description">
        <p>middle</p>
      </div>
      <div className="list">
        <p>list</p>
      </div>
    </section>
  )
}

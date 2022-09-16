import { useEffect } from 'react'

export function MainWeatherDetails({ currWeather, fiveDaysDailyForcast }) {
  useEffect(() => {
    console.log(currWeather)

    return () => {}
  }, [currWeather])

  return (
    <section className="main-weather-details">
      <div className="top">
        <div className="city-name">
          <p>left-top</p>
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

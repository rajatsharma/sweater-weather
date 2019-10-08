import Marquee from 'react-marquee';

export default ({ headerData }) => (
  <div style={{ whiteSpace: 'nowrap', width: '100vw' }}>
    <Marquee
      hoverToStop
      loop
      text={[
        `Condition: ${headerData.condition.text}`,
        `Sunrise: ${headerData.astronomy.sunrise}`,
        `Sunset: ${headerData.astronomy.sunset}`,
        `Humidity: ${headerData.atmosphere.humidity}`,
        `Pressure: ${headerData.atmosphere.pressure}`,
        `WindChill: ${headerData.wind.chill}`,
        `WindDirection: ${headerData.wind.direction}`,
        `WindSpeed: ${headerData.wind.speed}`,
        `City: ${headerData.location.city}`,
        `Region: ${headerData.location.region}`,
        `Country: ${headerData.location.country}`,
        `Are you still looking at this?`,
        `Condition: ${headerData.condition.text}`,
        `Sunrise: ${headerData.astronomy.sunrise}`,
        `Sunset: ${headerData.astronomy.sunset}`,
        `Humidity: ${headerData.atmosphere.humidity}`,
        `Pressure: ${headerData.atmosphere.pressure}`,
        `WindChill: ${headerData.wind.chill}`,
        `WindDirection: ${headerData.wind.direction}`,
        `WindSpeed: ${headerData.wind.speed}`,
        `City: ${headerData.location.city}`,
        `Region: ${headerData.location.region}`,
        `Country: ${headerData.location.country}`,
        `Are you still looking at this?`,
      ].join(' . ')}
    />
  </div>
);

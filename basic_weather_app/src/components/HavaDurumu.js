import React from 'react'

function HavaDurumu(props) {
    const {weather} = props;
    if(!weather) return (<h2>Yükleniyor...</h2>);
  return (
    <div className="weather">
        <h3><span>Lokasyon: </span>{weather.name}</h3>
        <h3><span>Durum: </span>{weather.weather.map(data => data.description).join(', ')}</h3>
        <h3><span>Sıcaklık: </span>{weather.main.temp} °C</h3>
        <h3><span>Tarih: </span>{new Date(weather.dt * 1000).toLocaleDateString()} </h3>
    </div>
  )
}

export default HavaDurumu
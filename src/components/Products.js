import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Product EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn.britannica.com/66/145866-050-921B75D7/Temple-Prambanan-Yogyakarta-Indon-Java.jpg'
              text='Paket Wisata Yogyakarta'
              label='Yogyakarta'
              path='/sign-up'
            />
            <CardItem
              src='https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg'
              text='Paket Wisata Bali'
              label='Bali'
              path='/sign-up'
            />
            <CardItem
              src='https://res.klook.com/image/upload/Mobile/City/rv76yqukp2hey0fckh99.jpg'
              text='Paket Wisata Labuan Bajo'
              label='Labuan Bajo'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/11-hal-seru-ini-wajib-dicoba-saat-berkunjung-ke-ntt-nggak-akan-kecewa/padar-rinca-kanawa.jpg'
              text='Paket Wisata NTT'
              label='Nusa Tenggara Timur'
              path='/sign-up'
            />
            <CardItem
              src='https://asset.kompas.com/crops/0BvAr2C8D3dzwWo93ZlurCkUYJg=/0x0:780x520/750x500/data/photo/2021/03/21/605753630590a.jpg'
              text='Paket Wisata Raja Ampat'
              label='Raja Ampat'
              path='/sign-up'
            />
            <CardItem
              src='https://blog.tiket.com/wp-content/uploads/2019/05/4.-Siger-Tower.jpg'
              text='Paket Wisata Lampung'
              label='Lampung'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
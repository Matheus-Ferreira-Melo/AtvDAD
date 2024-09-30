import{ useState } from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header.jsx';
import Promo from '../components/Promo/Promo.jsx';
import Hero from '../components/Hero/Hero.jsx';
import Subtitle from '../components/Subtitle/Subtitle.jsx';
import SectionBar from '../components/SectionBar/SectionBar.jsx'
import Footer from '../components/Footer/Footer.jsx'
import FlashItems from '../components/FlashItems/FlashItems.jsx';

function App() {
  const sub1 = "Today's"
  const titulo1 = "Flash Sales"
  const days = "03"
  const hours = "23"
  const minutes = "19"
  const seconds = "56"
  return (
    <>
    <Promo />
    <Header />
    <Hero />
    <Subtitle sub ={sub1}/>
    <SectionBar title = {titulo1} days ={days} hours = {hours} minutes = {minutes} seconds = {seconds} /> 
    <FlashItems />
    <Footer />
    </>
  );
}

export default App;

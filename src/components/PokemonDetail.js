import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetPokemon } from '../apollo/queries'
import Loading from './Loading'
import { Card, Carousel } from 'antd';

function PokemonDetail() {

  const {key} = useParams()
  const {loading, data} = useGetPokemon(key)
  if(loading) return <Loading />
 
  return (
    <>
      <div className="detail-container">
      <div className="carousel-container">
        <Carousel autoplay dotPosition={'right'}>
          <div><img className='carousel-image' src={data.getPokemon.backSprite} alt="Carousel 1" /></div>
          <div><img className='carousel-image' src={data.getPokemon.sprite} alt="Carousel 2" /></div>
          <div><img className='carousel-image' src={data.getPokemon.shinyBackSprite} alt="Carousel 3" /></div>
          <div><img className='carousel-image' src={data.getPokemon.shinySprite} alt="Carousel 3" /></div>
        </Carousel>
      </div>
      <div className="card-container">
        <Card className='antd-card' title={<span style={{fontSize: 25, fontWeight: 'bold', color: '#654321'}}>{data.getPokemon.key}</span>} bordered={true}>
          <p><b>Height: </b> {data.getPokemon.height}</p>
          <p><b>Weight: </b> {data.getPokemon.weight}</p>
          <p><b>Color: </b> {data.getPokemon.color}</p>
          <p><b>Species: </b> {data.getPokemon.species}</p>
          <p><b>Smogon Tier: </b> {data.getPokemon.smogonTier}</p>
          <a style={{color: '#FF5733'}} href={data.getPokemon.smogonPage}>
            <i><b><u>For more somogon details below here </u></b></i></a>
          <p><b>Total numbers: </b> {data.getPokemon.num}</p>
          {data.getPokemon.types[0] && data.getPokemon.types[1] && (
            <p><b>Types: </b> {data.getPokemon.types[0].name} & {data.getPokemon.types[1].name} </p>
            )}  
          <b>Base Stats</b> 
          <p> Attack:  {data.getPokemon.baseStats.attack} &nbsp; &nbsp; 
              Defense: {data.getPokemon.baseStats.defense} &nbsp; &nbsp; 
              HP:      {data.getPokemon.baseStats.hp}  &nbsp; &nbsp;
              Speed:   {data.getPokemon.baseStats.speed}</p>
           {data.getPokemon.abilities.first && (
                <>
                <b>Ability </b>
                <p>Name: {data.getPokemon.abilities.first.name} &nbsp; &nbsp;
                  Description: {data.getPokemon.abilities.first.shortDesc} &nbsp; &nbsp;</p>
                <a style={{ color: '#FF5733' }} href={data.getPokemon.abilities.first.bulbapediaPage}><i><b><u>For more ability details click here</u></b></i></a>
                </>    
            )}
       </Card>
      </div>
    </div>
    </>
  )
}

export default PokemonDetail
import React from 'react'
import { Avatar, List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';

function PokemonList({pokemons}) {
    const position = 'bottom'
    const align = 'center'
    return (
        <List
            itemLayout="horizontal"
            pagination={{ position, align }}
            dataSource={pokemons}
            renderItem={(item) => (
            <List.Item style={{color: '#654321'}}>
                <Skeleton loading={false}>
                    <List.Item.Meta 
                        avatar={
                            <Avatar size={100} src={`${item.sprite}`} />
                          }
                        title={<Link style={{color: '#654321'}} to={`/${item.key}`}>{item.key}</Link>}
                        description={
                        <div style={{color: '#654321'}}>
                          <b>Height: </b> {item.height}
                           <br/>
                           <b>Weight: </b> {item.weight}
                        </div>}
                    />
                    <div>
                        <b>Specie: </b> {item.species}
                    </div>
                </Skeleton>       
            </List.Item>
            )}
        />
  )
}

export default PokemonList
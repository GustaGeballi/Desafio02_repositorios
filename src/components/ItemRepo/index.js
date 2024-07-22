import React from 'react'
import { ItemContainer } from "./style";

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.stopPropagation(); // Para evitar acionar outros eventos no container
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className='Buttons'>
        <a href={repo.html_url} target="_blank" rel="noreferrer" className='repositorie'> Acessar repositório </a>
        <a href="#" className='remove' onClick={handleRemove}> REMOVER </a>
      </div>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;

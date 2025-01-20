import React from 'react'

function Recipes({data}) {
  return (
    <div>
      <div className='row'>
        {data.map(data => <div className='col-md-4'>
            <div className='card'>
                <img className='card-img-top' src={data.image} alt={data.name} />
                <div className='card-body'>
                  <h5 className='card-title'>{data.name}</h5>
                  <p className='card-text'>{data.description}</p>
                </div>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default Recipes

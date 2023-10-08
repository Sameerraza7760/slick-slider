import React from 'react'

function App() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
  return (
    <div className='multiple-items' ><div>1</div>
    <div>2</div>
    <div>3</div></div>
  )
}

export default App
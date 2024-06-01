import mainIMG from '/mainIMG.jpg'
const Main = () => {
  return (
    <main>
      <picture className='main__picture'>
        <img src={mainIMG} alt="main img" className='main__img'/>
      </picture>
    </main>
  )
}

export default Main

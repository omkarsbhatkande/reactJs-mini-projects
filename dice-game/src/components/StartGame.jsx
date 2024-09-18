import styled from 'styled-components'

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="" />
      </div>
      <div  className='content'>
        <h1>
          Dice Game
        </h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame



const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
align-items: center;
height: 100vh;

.content h1{
font-size: 96px;
white-space: nowrap;
}



`;


const Button = styled.button`

padding: 10px 24px;
background: #000000;
border-radius: 5px;
color: white;
min-width: 200px;
cursor: pointer;
border: none;
font-size: 18px;
border: transparent;

&:hover{
background: white;
border: 1px solid #000000;
color: #000000;
transition: 0.5s background ease-in-in;
}
`
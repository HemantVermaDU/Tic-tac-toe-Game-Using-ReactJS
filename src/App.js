 import './App.css';
 import React, {useState} from 'react'
 import { Button,Container, Card, CardBody, Row, Col } from 'reactstrap';
 import 'bootstrap/dist/css/bootstrap.css';
 
const tiktacArray = new Array(9).fill("")
function App() {

  const[isCross, setIsCross] = useState(true)
  const[winMessage, setWinMessage] = useState();
 

  const playAgain=()=>{
    setIsCross(true)
    setWinMessage("")
    tiktacArray.fill("")
  }
 
const findWinner=()=>{
  if(tiktacArray[0]==tiktacArray[1] && tiktacArray[0]==tiktacArray[2] && tiktacArray[0]!=""){
    setWinMessage(tiktacArray[0]+"has won")
  }
  else if(tiktacArray[3]== tiktacArray[4] && tiktacArray[3]==tiktacArray[5] && tiktacArray[3]!=""){
    setWinMessage(tiktacArray[3]+" has won")
}
else if(tiktacArray[6]== tiktacArray[7] && tiktacArray[6]==tiktacArray[8] && tiktacArray[6]!=""){
    setWinMessage(tiktacArray[6]+" has won")
}
else if(tiktacArray[0]== tiktacArray[3] && tiktacArray[0]==tiktacArray[6] && tiktacArray[0]){
    setWinMessage(tiktacArray[0]+" has won")
}
else if(tiktacArray[1]== tiktacArray[4] && tiktacArray[1]==tiktacArray[7] && tiktacArray[1]){
    setWinMessage(tiktacArray[1]+" has won")
}
else if(tiktacArray[2]== tiktacArray[5] && tiktacArray[2]==tiktacArray[8] && tiktacArray[2]){
    setWinMessage(tiktacArray[2]+" has won")
}
else if(tiktacArray[2]== tiktacArray[4] && tiktacArray[2]==tiktacArray[6] && tiktacArray[2]){
    setWinMessage(tiktacArray[2]+" has won")
}
else if(tiktacArray[0]== tiktacArray[4] && tiktacArray[0]==tiktacArray[8] && tiktacArray[0]){
    setWinMessage(tiktacArray[0]+" has won")
}
else if(tiktacArray[0] && tiktacArray[2]&&tiktacArray[3]&&tiktacArray[4]&&tiktacArray[5]&&
  tiktacArray[6]&&tiktacArray[7]&&tiktacArray[8]!=null){
  setWinMessage("Draw")
}
}
const changeItem = (index)=>{
  if(winMessage){
      return alert("Game has already got over", {type: "success"})
  }
  if(tiktacArray[index] == ""){
      tiktacArray[index] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
  }
  else{
      return alert("Open your eyes dude where are you tapping", {type: "error"})
  }
  findWinner()
}

const Icon = ({choice})=>{
  switch(choice){
      case "cross":
          return "X";
      case "circle": 
          return "O";
      default:
          return "";
  }
}
  return (
    <>
    <h1 className='heading'>Tic Tac Toe Game Using React Js</h1>
    <Container className="p-5"> 
    <Row> 

<Col md={6} className="offset-md-3"> 
   {
     winMessage? (
         <div>
         <h1 className="text-center"> 
         {winMessage}
         </h1>
         <Button className='mb-1' onClick={playAgain}> Play Again</Button>
         </div>
     ) : (
         <h1>
             {isCross? "Cross's Turn": "Circle's Turn"}
         </h1>
     )
   }
  <div className="grid"> 
        {tiktacArray.map((value,index)=>(
            <Card onClick={()=>changeItem(index)}> 
                <CardBody className="box"> 
                    <Icon choice={tiktacArray[index]}/>
                </CardBody>
            </Card>
        ))}
   </div>
 </Col>
</Row>
</Container>
    </>
  );
}

export default App;

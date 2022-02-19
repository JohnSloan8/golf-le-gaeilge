import { getWords } from "../data-words";
import { Link, Outlet } from "react-router-dom";
import { Container } from 'react-bootstrap';

export default function Dictionary() {
  let words = getWords()
  console.log('words:', words)
  return (
     <Container>
	{words.map(word => (
	       <Container style={{margin: '2px', backgroundColor: '#eeeeff'}}>	
		       	<p>{word.irish} <span style={{fontFamily: 'helvetica'}}>({word.english})</span></p>
	          	<p>{word.exampleIrish} - {word.exampleEnglish}</p>
               </Container>     
  	))}
     </Container>
  );
}

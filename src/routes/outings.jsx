import { getOutings } from "../data-outings";
import { Link, Outlet } from "react-router-dom";
import { Container, Image } from 'react-bootstrap';

export default function Outings() {
  let outings = getOutings()
  console.log('outings:', outings)
  return (
     <Container>
	{outings.map(outing => (
	       <Container className="text-center" style={{margin: '2px', backgroundColor: '#eeeeff'}}>	
			<h2>{outing.location}</h2>
		       	<p>{outing.date}</p>
			<Image
			  fluid
			  src={outing.img}
			  style={{ height: '350px' }}
			  className="mx-auto"
			/>
			<h3>Imreoirí</h3>
			<ul>
				{outing.players.map(player => (
	          			<li>{player}</li>
				))}
			</ul>
               </Container>     
  	))}
     </Container>
  );
}

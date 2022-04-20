import { useParams } from 'react-router-dom';
import { getCourse } from '../data-courses';
import { Image, Container, Card, Button } from 'react-bootstrap';
import { getPlayersByCourse } from '../data-players';

export default function Course() {
  let params = useParams();
  let course = getCourse(params.courseName);
  let players = getPlayersByCourse(params.courseName);

  console.log('course:', course);
  return (
    <Card style={{ width: '100%' }}>
      <Container className="text-center">
        <Image
          fluid
          src={course.logoURL}
          style={{ height: '150px' }}
          className="mx-auto"
        />
      </Container>
      <Card.Body>
        <Card.Title className="text-center">
          <h3>{course.name}</h3>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">
          {course.county}
        </Card.Subtitle>
        <Container className="p-3">
          <Card.Text className="text-center">Imreorí</Card.Text>
          {players.map((player) => (
            <Container className="text-center" style={{ backgroundColor: '#eeeeff', margin: '4px', padding: "1em" }}>
		<Image
		  fluid
		  src='/blank-profile.jpg'
		  style={{ height: '150px', margin: '5px' }}
		/>
	    	<p>ainm: {player.firstName} {player.surname}</p>
	    	<p>Gaeilge: {player.IrishLevel}</p>
	    	<p>handicap: {player.handicap}</p>
		<Button className="btn-secondary" style={{color: "white"}}>request game</Button>
	    </Container>
          ))}
        </Container>
      </Card.Body>
    </Card>
    // <div style={{ padding: '1rem' }}>
    //   <h4>{course.name}</h4>
    //   <div style={{ padding: '1rem' }}>
    //     <Image fluid src={course.logoURL} style={{maxHeight: '200px'}}/>
    //   </div>
    //   <p>{course.county}</p>
    //   <p>Galf le Gaeilge imreoirí: {course.members}</p>
    // </div>
  );
}

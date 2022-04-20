import { Container, Card } from 'react-bootstrap'

export default function Home() {
  return (
      <Card style={{ width: '100%', padding: '0px' }}>
        <Card.Img variant="top" src="/src/images/Golf.png" style={{ maxWidth: '300px'}} className="mx-auto" />
        <Card.Body>
          <Card.Title>Cad é sin?</Card.Title>
          <Card.Text>
            Tá Galf le Gaeilge....
		  Is cumann agus pobal gailf nua muid a thagann le chéile chun Gaeilge a labhairt ar an gcúrsa.  Má tá tú líofa nó ag foghlaim - is cuma - tá fáilte roimh cách. Amach anseo beimid ag dul ar thurais chuig cúrsaí gailf ar fud na hÉireann. Bunaíodh é i gClub Gailf Bhaile na Stacaí (Stackstown G.C.) i rith Seachtain na Gaeilge i 2022.
          </Card.Text>
          <Card.Text>
	<span style={{fontFamily: 'helvetica'}}>
We are a golf society and community who come together to speak Irish whilst enjoying a round a golf. If you are fluent or just learning - no matter - céad míle fáilte.The plan will be to play on various courses through out Ireland through the year. Our opening event was in Stackstown Golf Club during Seachtain na Gaeilge 2022.
		</span>
		</Card.Text>
        </Card.Body>
      </Card>
  );
}

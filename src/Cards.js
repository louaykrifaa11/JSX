import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
function App() {
  const nom ="Malek";

  return (
    

    <Card style={{ width: '18rem' }}>
    
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
      <p>Hello louay</p>
      {  nom  ? <img src='https://play-lh.googleusercontent.com/HGfb2ClmDEA6xydDMJRQtQ5JfQcHiOJT2PKCBlNTkgJZv6igmrHHFmz4010OCq2Q8cY'/> : 'There'}

    </Card>
  );
}

export default App;
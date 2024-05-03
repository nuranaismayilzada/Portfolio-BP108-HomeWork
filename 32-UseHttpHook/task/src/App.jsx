import { useForm } from 'react-hook-form';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useProductManagement } from './useProductManagement';

function App() {
  const { data, deleteData, postData } = useProductManagement();







  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    postData(formData);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder='Write title ' {...register("title")} />
        <input type="text" placeholder='Write price ' {...register("unitPrice")} />
        <Button variant="primary" type="submit">Add card</Button>{' '}
      </form>
      <div>
        {
          data.map((elem) => (
            <Card style={{ width: '25rem' }} className='cards' key={elem.id}>
              <Card.Img variant="top" style={{ width: '15rem', height: '15rem' }} src={'https://i.pinimg.com/236x/95/60/34/9560344f728da02d9e19f3c9dd939c07.jpg'} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title>
                <Card.Title>{elem.quantityPerUnit}</Card.Title>
                <Card.Text>
                  {`${elem.unitPrice} Azn`}
                </Card.Text>
                <Button variant="primary">Add basket</Button>
                <Button variant="danger" onClick={() => deleteData(elem.id)}>Delete</Button>{' '}
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </>
  );
}

export default App;

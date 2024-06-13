import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { isBefore, startOfDay } from 'date-fns';

function App() {
  const [date, setDate] = useState('');
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const selectedDate = new Date(date);
    const today = new Date();
  
    if (isBefore(selectedDate, startOfDay(today))) {
        
      setError('A data selecionada já passou.');
      return;
    }
  
    if (smallDogs <= 0 && largeDogs <= 0) {
      setError('Você deve adicionar pelo menos um cão pequeno ou grande.');
      return;
    }
  
    if (smallDogs < 0 || largeDogs < 0) {
      setError('O número de cachorros não pode ser negativo.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/api/best-petshop', {
        date,
        smallDogs: parseInt(smallDogs),
        largeDogs: parseInt(largeDogs),
      });
      setResult(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Ocorreu um erro ao buscar os dados.');
    }
  };  

  return (
    <Container className="mt-5">
      <h1 className="text-center">Petshop Selector</h1>
      <h6 className="text-center">Encontre o Melhor Petshop</h6>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Form.Group as={Row} controlId="formDate">
          <Form.Label column sm={2}>
            Data:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formSmallDogs">
          <Form.Label column sm={2}>
            Cães Pequenos:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={smallDogs}
              onChange={(e) => setSmallDogs(Math.max(0, e.target.value))}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formLargeDogs">
          <Form.Label column sm={2}>
            Cães Grandes:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={largeDogs}
              onChange={(e) => setLargeDogs(Math.max(0, e.target.value))}
              required
            />
          </Col>
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <Button id="bt" variant="primary" type="submit" className="mt-3">
          Encontrar Melhor Petshop
        </Button>
      </Form>

      {result && (
        <Alert variant="success" className="mt-4">
          <h4>Melhor Petshop: {result.petshop}</h4>
          <p>Preço Total: R${result.price}</p>
        </Alert>
      )}
    </Container>
  );
}

export default App;

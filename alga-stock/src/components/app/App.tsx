import React from 'react';
import './App.css';
import Header from '../Header';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
import Products from '../../shared/Table/Table.mockdata';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Form from '../../shared/Form';

const headers: TableHeader[] = [
  { key: 'id', value: '#' },
  { key: 'name', value: 'Product' },
  { key: 'price', value: 'Price', right: true },
  { key: 'stock', value: 'Available Stock', right: true }
]

function App() {
  function handleSubmitForm (data: any) {
    console.log(data)
  }
  return (
    <div className="App">
      <Header title="Stock" />

      <Container>
        <Table headers={headers} data={Products} />

        <Form title="Product form" onSubmit={handleSubmitForm}>
          <Input label="Name" placeholder="E.g.: Cookie" />
          <Input label="Price" type="number" step="0.01" min="0" placeholder="E.g.: 1.25" />
          <Input label="Stock" type="number" min="0" placeholder="E.g.: 15" />

          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
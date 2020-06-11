import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import api from '../../services/api';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { NewProductContainer, Main, Container } from './styles';

const NewProduct = () => {
  const formRef = useRef(null);
  const [ufs, setUfs] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);

      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      })
  }, [selectedUf]);

  function handleSelectUf(event) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectCity(event) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  async function handleSubmit(data, {reset}) {
    const formData = {
      name: data.name,
      category: data.category,
      price: data.price,
      uf: selectedUf,
      city: selectedCity,
      description: data.description
    }

    const response = await api.post('/product', formData)
    console.log(response)
  }


  return (
    <NewProductContainer>
      <Header goBack={true}>
        <a href="/products" className="button">Veja os produtos</a>
      </Header>

      <Main>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            
            <div className="field-group">
              <div className="field">
                <label htmlFor="name">Nome do produto</label>
                <Input type="text" id="name" name="name"/>
              </div>

              <div className="field">
                <label htmlFor="category">Categoria</label>
                <Input type="text" id="category" name="category"/>
              </div>
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="price">Valor do produto</label>
                <Input type="text" id="price" name="price" />
              </div>

              <div className="field">
                <label htmlFor="uf">UF</label>
                <select 
                  id="uf" 
                  name="uf"
                  value={selectedUf}
                  onChange={handleSelectUf}
                >
                  <option>Selecione um UF</option>
                  {ufs.map(uf => (
                    <option key={uf} value={uf}>{uf}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select 
                  id="city" 
                  name="city"
                  value={selectedCity}
                  onChange={handleSelectCity}
                >
                  <option>Selecione uma Cidade</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="description">Descrição</label>
              <Textarea type="text" id="description" name="description"/>
            </div>

            <button type="submit">Publicar</button>
          </Form>
        </Container>
      </Main>

      <Footer />
    </NewProductContainer>
  );
}

export default NewProduct;
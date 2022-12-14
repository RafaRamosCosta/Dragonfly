import React, { useState } from 'react';
import axios from 'axios';
import { CadDiv, Form, Button } from './CadastroStyle';

export default function Cadastro() {
  const [novaEmpresa, setNovaEmpresa] = useState({
    nmFantasia: '',
    rzSocial: '',
    login: '',
    senha: '',
    cnpj: '',
  });

  const handleInputChange = (e) => {
    setNovaEmpresa({ ...novaEmpresa, [e.target.name]: e.target.value });
    console.log(novaEmpresa);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:8080/DragonflyAPI/rest/empresa/',
      headers: {
        'Content-Type': 'application/json',
      },
      data: novaEmpresa,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          window.location.href = '/cadastroEnderecoEmpresa';
        } else {
          alert('Erro ao cadastrar empresa, informe dados válidos');
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          alert('Erro ao conectar com o servidor');
        } else if (error.request) {
          console.log(error.request);
          alert('Erro ao conectar com o servidor');
        } else {
          console.log('Error', error.message);
        }
      });
  };

  return (
    <CadDiv>
      <Form method="post" onSubmit={handleSubmit}>
        <h1>Cadastre sua empresa!</h1>
        <label htmlFor="nmFantasia">Nome Fantasia</label>
        <input
          type="text"
          name="nmFantasia"
          placeholder="Nome Fantasia"
          onChange={handleInputChange}
        />

        <label htmlFor="rzSocial">Razão Social</label>
        <input
          type="text"
          name="rzSocial"
          placeholder="Razão Social"
          onChange={handleInputChange}
        />

        <label htmlFor="cnpj">CNPJ</label>
        <input
          type="number"
          name="cnpj"
          placeholder="XXXXXXXXXXXXXX"
          onChange={handleInputChange}
        />

        <label htmlFor="login">Login</label>
        <input
          type="text"
          name="login"
          placeholder="Login"
          onChange={handleInputChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          placeholder="Senha"
          onChange={handleInputChange}
        />

        <div className="divButtons">
          <Button type="submit">Cadastrar</Button>
          <Button type="reset">Limpar</Button>
        </div>
      </Form>
    </CadDiv>
  );
}

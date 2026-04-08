import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/ListaCarros.css';
import { useNavigate } from 'react-router-dom';



function ListaCarros() {
  const [carros, setCarros] = useState([]);
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const buscarCarros = () => {
    api.get('/carros')
      .then((res) => {
        setCarros(res.data);
      })
      .catch(() => setErro('Erro ao carregar carros'));
  };

  useEffect(() => {
    buscarCarros();
  }, []);

  const deletar = (id) =>{
    api.delete(`/carros/${id}`).then(() =>{
      setMensagem('Carro excluído com sucesso');
      buscarCarros();
      setTimeout(() => setMensagem(''), 3000);
    }).catch(() => setErro('Erro ao deletar carro'))
  }

  return (
    <div className="container">
      <h2 className="titulo">Lista de Carros</h2>

      {erro && <p className="erro">{erro}</p>}
      {mensagem && <p className="mensagem">{mensagem}</p>}

      <table className="tabela">
        <thead>
          <tr>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Cor</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {carros.length === 0 ? (
            <tr>
              <td colSpan="7" className="vazio">
                Nenhum carro
              </td>
            </tr>
          ) : (
            carros.map((carro) => (
              <tr key={carro.id}>
                <td>{carro.id}</td>
                <td>{carro.marca}</td>
                <td>{carro.modelo}</td>
                <td>{carro.ano}</td>
                <td>{carro.cor}</td>
                <td>R$ {parseFloat(carro.preco).toFixed(2)}</td>
                <td>
                  <button onClick={() => navigate(`/detalhes/${carro.id}`)} className='btn-ver'>Ver</button>
                  <button onClick={() => navigate(`/editar/${carro.id}`)} className='btn-editar'>Editar</button>
                  <button onClick={() => deletar(carro.id)} className='btn-deletar'>Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListaCarros;
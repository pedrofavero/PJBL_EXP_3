import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/DetalhesCarro.css';

function DetalhesCarro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carro, setCarro] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    api.get(`/carros/${id}`)
      .then((res) => setCarro(res.data))
      .catch(() => setErro('arro não encontrado'));
  }, [id]);

  if (erro) return <p className="erro">{erro}</p>;
  if (!carro) return <p className="loading">Carregando...</p>;

  return (
    <div className="container-detalhes">
      <h2 className="titulo-detalhes">Detalhes do Carro</h2>

      <table className="tabela-detalhes">
        <tbody>
          {[
            ['ID', carro.id],
            ['Marca', carro.marca],
            ['Modelo', carro.modelo],
            ['Ano', carro.ano],
            ['Cor', carro.cor],
            ['Preço', `R$ ${parseFloat(carro.preco).toFixed(2)}`],
          ].map(([label, valor]) => (
            <tr key={label}>
              <td className="label">{label}</td>
              <td>{valor}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="acoes">
        <button
          onClick={() => navigate(`/editar/${carro.id}`)}
          className="btn btn-editar"
        >
          Editar
        </button>

        <button
          onClick={() => navigate('/')}
          className="btn btn-voltar"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}

export default DetalhesCarro;
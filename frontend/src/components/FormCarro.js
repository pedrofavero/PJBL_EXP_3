import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import '../styles/FormCarro.css';

function FormCarro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const ehEdicao = !!id;

  const [form, setForm] = useState({
    marca: '',
    modelo: '',
    ano: '',
    cor: '',
    preco: ''
  });
  const [erro, setErro] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (ehEdicao) {
      api.get(`/carros/${id}`)
        .then((res) => setForm(res.data))
        .catch(() => setErro('Erro ao carregar carro'));
    }
  }, [id, ehEdicao]);

  const eventoMudanca = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const enviar = (e) => {
    e.preventDefault();
    setErro('');

    const acao = ehEdicao
      ? api.put(`/carros/${id}`, form)
      : api.post('/carros', form);

    acao
      .then(() => {
        setMensagem(
          ehEdicao
            ? 'Carro atualizado com sucesso!'
            : 'Carro cadastrado com sucesso!'
        );
        setTimeout(() => navigate('/'), 1500);
      })
      .catch((err) => {
        setErro(err.response?.data?.erro || 'Erro ao salvar carro.');
      });
  };

  return (
    <div className="container-form">
      <h2 className="titulo-form">
        {ehEdicao ? 'Editar Carro' : 'Cadastrar Carro'}
      </h2>

      {erro && <p className="erro">{erro}</p>}
      {mensagem && <p className="mensagem">{mensagem}</p>}

      <form onSubmit={enviar} className="formulario">
        <div className="grupo-form">
          <label className="label-form">Marca</label>
          <input
            name="marca"
            value={form.marca}
            onChange={eventoMudanca}
            className="input-form"
            required
          />
        </div>

        <div className="grupo-form">
          <label className="label-form">Modelo</label>
          <input
            name="modelo"
            value={form.modelo}
            onChange={eventoMudanca}
            className="input-form"
            required
          />
        </div>

        <div className="grupo-form">
          <label className="label-form">Ano</label>
          <input
            name="ano"
            type="number"
            value={form.ano}
            onChange={eventoMudanca}
            className="input-form"
            required
          />
        </div>

        <div className="grupo-form">
          <label className="label-form">Cor</label>
          <input
            name="cor"
            value={form.cor}
            onChange={eventoMudanca}
            className="input-form"
            required
          />
        </div>

        <div className="grupo-form">
          <label className="label-form">Preço (R$)</label>
          <input
            name="preco"
            type="number"
            step="0.01"
            value={form.preco}
            onChange={eventoMudanca}
            className="input-form"
            required
          />
        </div>

        <div className="acoes-form">
          <button type="submit" className="btn btn-salvar">
            {ehEdicao ? 'Atualizar' : 'Cadastrar'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn btn-cancelar"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCarro;
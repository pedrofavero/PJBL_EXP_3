import { conexao } from "../config/db.js";


// get all maroto
const listar = (_, res) => {
  conexao.query('SELECT * FROM carros ORDER BY id DESC', (err, dados) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao buscar carros.' });
    }

    return res.status(200).json(dados);
  });
};

const deletar = (payload, res) => {
  const { id } = payload.params;
  conexao.query('DELETE FROM carros WHERE id = ?', [id], (err, result) => {
    if(err){
      return res.status(500).json({ erro: 'Erro ao buscar carros' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: 'Carro não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Carro deletado com sucesso!' });
  });
}

const buscarPorId = (payload, res) =>{
  const {id} = payload.params;

  conexao.query('SELECT * FROM carros WHERE id = ?', [id], (err, result) =>{
    if(err){
      return res.status(500).json({ erro: 'Erro ao buscar carro' });
    }

    if(result.length == 0){
      return res.status(404).json({ erro: 'Carro não encontrado' });
    }

    res.status(200).json(result[0])
  }
)
}

const criar = (payload, res) =>{
  const { marca, modelo, ano, cor, preco } = payload.body;

  if (!marca || !modelo || !ano || !cor || !preco) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }
  if (isNaN(ano) || ano < 1900 || ano > new Date().getFullYear() + 1) {
    return res.status(400).json({ erro: 'Ano inválido' });
  }

  if (isNaN(preco) || preco <= 0) {
    return res.status(400).json({ erro: 'Preço inválido' });
  }

  conexao.query(
    'INSERT INTO carros (marca, modelo, ano, cor, preco) VALUES (?, ?, ?, ?, ?)',
    [marca, modelo, ano, cor, preco],
    (err, result) => {
      if (err){
       return res.status(500).json({ erro: 'Erro ao cadastrar carro.' });
      }
      res.status(201).json({ mensagem: 'Carro cadastrado com sucesso!', id: result.insertId });
    }
  );

}


const atualizar = (req, res) => {
  const { id } = req.params;
  const { marca, modelo, ano, cor, preco } = req.body;

  if (!marca || !modelo || !ano || !cor || !preco) {
    return res.status(400).json({ erro: 'Todos os campos são obrigatórios' });
  }
  if (isNaN(ano) || ano < 1900 || ano > new Date().getFullYear() + 1) {
    return res.status(400).json({ erro: 'Ano inválido' });
  }
  if (isNaN(preco) || preco <= 0) {
    return res.status(400).json({ erro: 'Preço inválido' });
  }

  conexao.query(
    'UPDATE carros SET marca=?, modelo=?, ano=?, cor=?, preco=? WHERE id=?',
    [marca, modelo, ano, cor, preco, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao atualizar carro.' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ erro: 'Carro não encontrado.' });
      }
      res.json({ mensagem: 'Carro atualizado com sucesso!' });
    }
  );

};



export default {
  listar,
  deletar,
  buscarPorId,
  criar,
  atualizar
};


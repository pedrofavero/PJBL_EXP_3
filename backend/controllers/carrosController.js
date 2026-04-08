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
      return res.status(500).json({ erro: 'Erro ao buscar carros.' });
    }

    if (result.affectedRows === 0) {
      console.log("caiu aqui")
      return res.status(404).json({ erro: 'Carro não encontrado.' });
    }

    res.status(200).json({ mensagem: 'Carro deletado com sucesso!' });
  });
}




export default {
  listar,
  deletar
};


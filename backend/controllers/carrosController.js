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


export default {
  listar
};

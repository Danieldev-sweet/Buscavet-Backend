import { EntitySchema } from 'typeorm';
import EspecializacaoModel from '../models/EspecializacaoModel.js';

export default new EntitySchema({
  name: 'EspecializacaoModel',
  tableName: 'ESPECIALIZACOES',
  target: EspecializacaoModel,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    nome: {
      type: 'text',
    },
  },
});

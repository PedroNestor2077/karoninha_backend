import { Model } from 'mongoose';
import DatabaseConfig from '../config/DatabaseConfig';

DatabaseConfig();
export default {
  async create(data: Object, Schema: Model<any>): Promise<boolean> {
    const result: Promise<boolean> = new Schema(data)
      .save()
      .then(() => true)
      .catch((e: any) => {
        /* eslint-disable-next-line no-console */
        console.error(`Erro ao salvar no banco de dados: ${e.message}`);
        return false;
      });
    return result;
  },
  async findOne(data: Object, Schema: Model<any>): Promise<any> {
    const result: Promise<boolean> = Schema.findOne(data).catch((e: any) => {
      /* eslint-disable-next-line no-console */
      console.error(`Erro ao salvar no banco de dados: ${e.message}`);
      return false;
    });
    return result;
  },
  async createOrUpdate(
    data: Object,
    Schema: Model<any>,
    query: Object,
  ): Promise<boolean> {
    const doc = await Schema.findOne(query);
    if (doc) {
      doc.overwrite(data);
      const result = await doc
        .save()
        .then(() => true)
        .catch((e: any) => {
          /* eslint-disable-next-line no-console */
          console.error(`Erro ao salvar no banco de dados: ${e.message}`);
          return false;
        });
      return result;
    }
    const result: Promise<boolean> = new Schema(data)
      .save()
      .then(() => true)
      .catch((e: any) => {
        /* eslint-disable-next-line no-console */
        console.error(`Erro ao salvar no banco de dados: ${e.message}`);
        return false;
      });
    return result;
  },
};

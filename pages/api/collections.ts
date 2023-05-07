import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../services/db';

type ResponseData = any[] | number | bigint | { error: string };

function getAllCollections() {
  return db.get('Collections') as any[];
}

function createCollection(data: any) {
  return db.create('Collections', data);
}

/**
 * Collections API -- Get/Create
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  switch (req.method) {
    case 'GET':
      try {
        const collections = getAllCollections();
        res.status(200).json(collections);
      } catch(err) {
        res.status(500).json({ error: 'Unexpected server error while fetching collections' });
      }
      break;
    case 'POST':
      try {
        // TODO - server-side validation
        const data = JSON.parse(req.body);
        const newId = createCollection(data);
        res.status(201).send(newId);
      } catch(err) {
        res.status(500).json({ error: 'Unexpected server error while creating new collection' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not supported by this endpoint' });
  }
}

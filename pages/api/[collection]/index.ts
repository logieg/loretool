import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../services/db';

type ResponseData = any | { error: string };

function getCollection(id: number | bigint) {
  return db.get('Collections', id) as any;
}

function updateCollection(id: number | bigint, data: any) {
  return db.update('Collections', id, data);
}

function deleteCollection(id: number | bigint) {
  return db.remove('Collections', id);
}

/**
 * Collections API -- Get/Update/Remove
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { collection } = req.query;
  const id = parseInt(collection as string);
  
  switch (req.method) {
    case 'GET':
      try {
        const collection = getCollection(id);
        res.status(200).json(collection);
      } catch(err) {
        res.status(500).json({ error: 'Unexpected server error while fetching collection' });
      }
      break;
    case 'PUT':
      try {
        // TODO - server-side validation
        const data = JSON.parse(req.body);
        updateCollection(id, data);
        res.status(200).send({});
      } catch(err) {
        res.status(500).json({ error: 'Unexpected server error while creating new collection' });
      }
      break;
    case 'DELETE':
      try {
        const deleted = deleteCollection(id);
        if (deleted)
          res.status(200).json({});
        else
          res.status(404).json({ error: 'Unable to remove: collection not found' });
      } catch(err) {
        res.status(500).json({ error: 'Unexpected server error while deleting collection' });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not supported by this endpoint' });
  }
}

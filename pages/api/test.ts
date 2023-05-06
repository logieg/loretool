import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../services/db';

type ResponseData = {
  message: string
};

/** TEMP -- Test function! */
function test() {
  // Create
  const collectionId = db.create('Collections', {
    name: 'Test Pile!',
    description: 'Just a pile of test data, for testing'
  });
  console.log('Created collection #' + collectionId);

  // Get (all)
  const collections = db.get('Collections');
  console.log('Retrieved all collections: ' + JSON.stringify(collections));

  // Get (single)
  const collection = db.get('Collections', collectionId);
  console.log('Retrieved specific collection: ' + JSON.stringify(collection));

  // Update
  db.update('Collections', collectionId, {
    name: 'Test Heap!'
  });
  console.log('Updated collection #' + collectionId);
  const updatedCollection = db.get('Collections', collectionId);
  console.log('>> Updated:', JSON.stringify(updatedCollection));

  // Remove
  db.remove('Collections', collectionId);
  console.log('Deleted collection #' + collectionId);
  console.log('>> All collections:', JSON.stringify(db.get('Collections')));

  return updatedCollection;
}

/**
 * Test API for testing DB functions
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  try {
    const result = test();
    res.status(200).json(result as any);
  } catch(err) {
    res.status(500).json({ message: 'ERROR running test function!' });
    console.error(err);
  }
}

import { useRef, useState } from "react";
import Text from "../components/common/Text";

export default function TestPage() {
  const [response, setResponse] = useState('No response yet');
  const createdCollections = useRef<number[]>([]);

  const createCollection = () => {
    fetch(
      '/api/collections',
      {
        method: 'POST',
        body: JSON.stringify({
          name: 'Test collection ' + Math.floor(Math.random() * 100),
          description: 'Just a test collection!'
        })
      }
    )
      .then(res => res.text())
      .then(newId => {
        createdCollections.current.push(parseInt(newId));
        setResponse(`Created collection ${newId}!`);
      });
  }

  const getCollections = () => {
    fetch('/api/collections')
      .then(res => res.json())
      .then(data => setResponse(JSON.stringify(data, undefined, 2)));
  }

  const getLastCollection = () => {
    fetch(`/api/${createdCollections.current.at(-1) || 0}`)
      .then(res => res.json())
      .then(data => setResponse(JSON.stringify(data, undefined, 2)));
  }

  const updateLastCollection = () => {
    fetch(
      `/api/${createdCollections.current.at(-1) || 0}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          name: 'Updated collection'
        })
      }
    )
      .then(res => res.json())
      .then(() => setResponse('Updated last collection!'));
  }

  const removeLastCollection = () => {
    fetch(
      `/api/${createdCollections.current.pop()}`,
      { method: 'DELETE' }
    )
      .then(() => setResponse('Deleted last collection!'));
  }

  return (
    <>
      <Text variant='h2'>
        Test page!
      </Text>

      <button onClick={createCollection}>
        New Collection
      </button>
      <button onClick={getCollections}>
        Get Collections
      </button>
      <button onClick={getLastCollection}>
        Get Last Collection
      </button>
      <button onClick={updateLastCollection}>
        Update Last Collection
      </button>
      <button onClick={removeLastCollection}>
        Remove Last Collection
      </button>

      <Text>
        {response}
      </Text>
    </>
  );
}

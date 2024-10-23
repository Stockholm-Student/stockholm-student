// src/components/ItemList.tsx
import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { Item, NewItem } from '../types/item';

const API_BASE_URL = 'http://localhost:5000/api';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<NewItem>({ name: '', description: '' });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get<Item[]>(`${API_BASE_URL}/items`);
      setItems(response.data);
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message || 'Failed to fetch items');
      console.error('Error fetching items:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate input
    if (!newItem.name.trim() || !newItem.description.trim()) {
      setError('Name and description are required');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      await axios.post<Item>(`${API_BASE_URL}/items`, newItem);
      setNewItem({ name: '', description: '' });
      await fetchItems();
    } catch (err) {
      const error = err as AxiosError;
      setError(error.message || 'Failed to create item');
      console.error('Error creating item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Items List</h1>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Add Item Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Item name"
            value={newItem.name}
            onChange={handleInputChange}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <input
            type="text"
            name="description"
            placeholder="Item description"
            value={newItem.description}
            onChange={handleInputChange}
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && !items.length && (
        <div className="text-center text-gray-600">Loading items...</div>
      )}

      {/* Items List */}
      <div className="grid gap-4">
        {items.map((item) => (
          <div key={item._id} className="border p-4 rounded shadow hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-500">
              Created: {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {!isLoading && !items.length && (
        <div className="text-center text-gray-600">
          No items found. Add your first item above!
        </div>
      )}
    </div>
  );
};

export default ItemList;

// src/App.tsx

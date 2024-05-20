import React, { useState, useEffect } from 'react';
import { createPrevention, getPreventionById, updatePrevention } from '../services/preventionService';
import { useParams, useNavigate } from 'react-router-dom';

const PreventionForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchPrevention();
    }
  }, [id]);

  const fetchPrevention = async () => {
    try {
      const response = await getPreventionById(id);
      setTitle(response.data.title);
      setContent(response.data.content);
    } catch (error) {
      console.error('Failed to fetch prevention', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { title, content };

    try {
      if (id) {
        await updatePrevention(id, data);
      } else {
        await createPrevention(data);
      }
      navigate('/'); // Redirect to prevention list
    } catch (error) {
      console.error('Failed to save prevention', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit' : 'Create'} Prevention</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default PreventionForm;

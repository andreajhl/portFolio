'use client';

import { useMemo, useState } from 'react';
import Toast from '@components/ui/toast';
import wordings from '@wordings';
import { sendEmail } from 'queries';
import './styles.scss';

const Form = () => {
  const { contact: { form: { name, email, message, send, alert } } } = wordings;
  const emailRegex = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}';

  const [toastData, setToastData] = useState({
    isVisible: false,
    message: '',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const isFormComplete = useMemo(() => (
    Object.values(formData).every(item => !!item.length)
  ), [formData]);

  const handleChange = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value });

  const handleClose = () => setToastData({ isVisible: false, message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { success } = await sendEmail(formData);

    setToastData({
      isVisible: true,
      message: success ? alert.success : alert.error,
      type: success ? 'success' : 'error',
    });
  
    if (success) setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Toast
        {...toastData}
        onClose={handleClose}
      />
      <form onSubmit={handleSubmit} className='form'>
        <label
          className='form-label'
          htmlFor='name'
        >
          {name}
        </label>
        <input
          required
          id='name'
          name='name'
          className='form-input'
          value={formData.name}
          onChange={handleChange}
        />
        <label
          className='form-label'
          htmlFor='email'
        >
          {email}
        </label>
        <input
          required
          id='email'
          name='email'
          type='email'
          pattern={emailRegex}
          className='form-input'
          value={formData.email}
          onChange={handleChange}
        />
        <label
          className='form-label'
          htmlFor='message'
        >
          {message}
        </label>
        <textarea
          required
          name='message'
          onChange={handleChange}
          value={formData.message}
          className='form-textarea'
        />
        <button
          type='submit'
          className='form-btn'
          disabled={!isFormComplete}
        >
          {send}
        </button>
      </form>
    </>
  );
};

export default Form;
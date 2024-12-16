import { createCustomError } from 'utils/error';

const url = process.env.NEXT_PUBLIC_SITE_URL;

export const sendEmail = async (formData) => {
  try {
    const response = await fetch(`${url}/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) throw createCustomError('Failed to send message.');

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending contact form:', error);
    return { success: false, message: error.message || 'There was an error. Please try again later.' };
  }
};

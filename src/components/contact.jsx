import React, { useState } from 'react';
import supabase from '../db/supabase';
import { useToast } from '@/components/ui/use-toast'; // Adjust the path accordingly
import { BeatLoader } from 'react-spinners';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast(); // Corrected hook usage

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('contact')
        .insert([{ name, email, subject, message }]);

      if (error) {
        console.error('Error details:', error);
        throw error;
      }

      toast({
        title: 'Message sent successfully.'
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center gap-10 p-4">
      <div className="w-full flex justify-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          <span className="text-[#adb1b9]">Say Hi!</span> and tell me
          <br /> about your idea
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <p className="text-lg sm:text-lg text-center px-4 sm:px-0">
          Have a nice work? Reach out and let's chat.
        </p>
      </div>
      <div className="w-full flex justify-center">
        <form className="flex flex-col gap-6 w-full max-w-lg px-4 sm:px-0" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="font-bold">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name..."
                className="border-b-2 h-10 outline-none w-full"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="font-bold">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your email..."
                className="border-b-2 h-10 outline-none w-full"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-bold">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Your subject..."
              className="border-b-2 h-10 outline-none w-full"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="message" className="font-bold">Message</label>
            <textarea
              id="message"
              className="border w-full h-20 outline-none p-2"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="px-4 py-2 border-2 border-black rounded-full text-lg sm:text-xl font-bold" type="submit">
              {loading ? <BeatLoader size={10} /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

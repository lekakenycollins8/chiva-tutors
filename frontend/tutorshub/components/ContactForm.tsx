'use client';

import { useState } from 'react';
import { TextField, Box, Alert, Paper } from '@mui/material';
import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqaklozp");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return (
      <Box className="max-w-2xl mx-auto">
        <Alert severity="success" className="mb-4">
          Thanks for reaching out! We&apos;ll get back to you soon.
        </Alert>
      </Box>
    );
  }

  return (
    <Paper className="max-w-2xl mx-auto p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit}>
        <Box className="space-y-6">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            variant="outlined"
          />
          
          <Box className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={state.submitting}
              className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-48 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {state.submitting ? 'Sending...' : 'Send Message'}
              </span>
            </button>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, Container, Typography } from '@mui/material';
import { useAddSurveyMutation } from '../store';
import { useNavigate } from 'react-router-dom';
import { useFetchUsersQuery } from '../store';

const validationSchema = yup.object({
  body: yup
    .string('Enter email`s body')
    .min(8, 'Body should be of minimum 8 characters length')
    .required('Body is required'),
  recipients: yup
    .string('Enter comma separated email addreses')
    .required('Recipients are required'),
  campain: yup
    .string('Enter the campain`s title')
    .min(8, 'Title should be of minimum 8 characters length')
    .required('Campain must have a title'),
  subject: yup
    .string('Enter the email`s subject')
    .required('Campain must have a subject'),
});

export const SurveyForm = ({ refetchUsers }) => {
  const [addSurvey, results] = useAddSurveyMutation();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      body: 'My email`s body',
      recipients: 'foo@foo.com,other@foo.com,another@other.com,...',
      campain: 'My campain',
      subject: 'Email`s subject',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (step === 0) {
        setStep(1);
        return;
      }
      const survey = {
        title: values.campain,
        body: values.body,
        subject: values.subject,
        recipients: values.recipients,
      };
      try {
        await addSurvey(survey);
        refetchUsers();
        navigate('/surveys');
      } catch (error) {
        navigate('/servererror', { state: error });
      }
    },
  });

  return (
    <Container maxWidth="md" sx={{ mt: '15px' }}>
      <form onSubmit={formik.handleSubmit}>
        {step === 0 && (
          <Box>
            <TextField
              fullWidth
              id="campain"
              name="campain"
              label="Campain Title"
              type="text"
              value={formik.values.campain}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.campain && Boolean(formik.errors.campain)}
              helperText={formik.touched.campain && formik.errors.campain}
            />
            <TextField
              sx={{ mt: '8px' }}
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              type="text"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
            <TextField
              sx={{ mt: '8px' }}
              fullWidth
              id="body"
              name="body"
              label="Email body"
              type="text"
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.body && Boolean(formik.errors.body)}
              helperText={formik.touched.body && formik.errors.body}
            />
            <TextField
              sx={{ mt: '8px' }}
              fullWidth
              id="recipients"
              name="recipients"
              label="Recipients list"
              type="text"
              value={formik.values.recipients}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.recipients && Boolean(formik.errors.recipients)
              }
              helperText={formik.touched.recipients && formik.errors.recipients}
            />
          </Box>
        )}
        {step === 1 && (
          <Box>
            <Typography variant="h4" gutterBottom>
              Please confirm your entries
            </Typography>
            <Box sx={{ mb: '8px' }}>
              <Typography variant="h6" gutterBottom>
                Campain Title
              </Typography>
              <Typography variant="body1">{formik.values.campain}</Typography>
            </Box>
            <Box sx={{ mb: '8px' }}>
              <Typography variant="h6" gutterBottom>
                Subject
              </Typography>
              <Typography variant="body1">{formik.values.subject}</Typography>
            </Box>
            <Box sx={{ mb: '8px' }}>
              <Typography variant="h6" gutterBottom>
                Email body
              </Typography>
              <Typography variant="body1">{formik.values.body}</Typography>
            </Box>
            <Box sx={{ mb: '8px' }}>
              <Typography variant="h6" gutterBottom>
                Recipients list
              </Typography>
              <Typography variant="body1">
                {formik.values.recipients}
              </Typography>
            </Box>
          </Box>
        )}
        <Box display="flex" justifyContent="space-between" sx={{ mt: '8px' }}>
          {step === 1 && (
            <Button
              variant="contained"
              color="error"
              onClick={() => setStep(0)}
            >
              Back
            </Button>
          )}
          <Button color="primary" variant="contained" type="submit">
            {step === 0 ? 'Next' : 'Submit'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

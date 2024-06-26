import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Box,
  Container,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  List,
} from "@mui/material";
import { useAddSurveyMutation } from "../store";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  body: yup
    .string("Enter email`s body")
    .min(8, "Body should be of minimum 8 characters length")
    .required("Body is required"),
  recipients: yup
    .array()
    .transform((value) => value.trim().split(",")) // Handle spaces around commas
    .of(yup.string().email("Enter a valid email").required())
    .required("Email is required"),
  campain: yup
    .string("Enter the campain`s title")
    .min(8, "Title should be of minimum 8 characters length")
    .required("Campain must have a title"),
  subject: yup
    .string("Enter the email`s subject")
    .required("Campain must have a subject"),
});

export const SurveyForm = ({ refetchUsers }) => {
  const [addSurvey, results] = useAddSurveyMutation();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      body: "My email`s body",
      recipients: "foo@foo.com,other@foo.com,another@other.com,...",
      campain: "My campain",
      subject: "Email`s subject",
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
        navigate("/surveys");
      } catch (error) {
        navigate("/servererror", { state: error });
      }
    },
  });

  return (
    <Container maxWidth="md" sx={{ mt: "15px" }}>
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
              onFocus={() => formik.setFieldValue("campain", "")}
              error={formik.touched.campain && Boolean(formik.errors.campain)}
              helperText={formik.touched.campain && formik.errors.campain}
            />
            <TextField
              sx={{ mt: "8px" }}
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              type="text"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldValue("subject", "")}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
            <TextField
              sx={{ mt: "8px" }}
              fullWidth
              id="body"
              name="body"
              label="Email body"
              type="text"
              value={formik.values.body}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldValue("body", "")}
              error={formik.touched.body && Boolean(formik.errors.body)}
              helperText={formik.touched.body && formik.errors.body}
            />
            <TextField
              sx={{ mt: "8px" }}
              fullWidth
              id="recipients"
              name="recipients"
              label="Recipients list"
              type="text"
              value={formik.values.recipients}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onFocus={() => formik.setFieldValue("recipients", "")}
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
            <List>
              <ListItem>
                <ListItemText
                  primary="Campain Title"
                  secondary={formik.values.campain}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Subject"
                  secondary={formik.values.subject}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Email body"
                  secondary={formik.values.body}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText
                  primary="Recipients list"
                  secondary={formik.values.recipients}
                />
              </ListItem>
            </List>
          </Box>
        )}
        <Box display="flex" justifyContent="space-between" sx={{ mt: "8px" }}>
          {step === 1 && (
            <Button
            sx={{ ml: '15px' }}
              variant="contained"
              color="error"
              onClick={() => setStep(0)}
            >
              Back
            </Button>
          )}
          <Button color="primary" variant="contained" type="submit">
            {step === 0 ? "Next" : "Submit"}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

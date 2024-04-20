import React from 'react';
import { Link } from 'react-router-dom';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Stack, FormLabel, Button } from '@mui/material';
export const UserOption = ({ currentCredits, isHeader }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Link
        to={'/payments'}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Button variant="contained" startIcon={<CreditCardIcon />}>
          Add 5 credits
        </Button>
      </Link>

      {currentCredits > 0 && (
        <Link
          to={'/surveys/new'}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Button variant="contained" startIcon={<NoteAddIcon />}>
            Add survey
          </Button>
        </Link>
      )}
      {isHeader && (
        <FormLabel
          sx={{
            alignItems: 'center',
            color: 'inherit',
            fontFamily: 'monospace',
            fontWeight: 700,
          }}
        >
          Credits: {currentCredits || 0}
        </FormLabel>
      )}
    </Stack>
  );
};

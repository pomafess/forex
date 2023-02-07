import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const StyledInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: '#FFFFFF',
    border: '1px solid #949494',
    fontSize: 16,
    maxWidth: 'auto',
    padding: '10px 12px',
    marginTop: theme.spacing(2),
    transition: theme.transitions.create(['border-color', 'background-color']),
    '&:focus': {
      borderColor: '#949494',
    },
  },
}));
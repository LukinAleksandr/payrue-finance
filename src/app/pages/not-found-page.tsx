import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NotFoundPage() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'grey.200',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5">Page not found</Typography>
    </Box>
  );
}

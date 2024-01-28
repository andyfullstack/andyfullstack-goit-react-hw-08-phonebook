import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from 'components/Loader/Loader';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Typography from '@mui/material/Typography';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectError, selectIsLoading } from 'store/root/selectors';
import { Filter } from '@mui/icons-material';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Box
      sx={{
        marginTop: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h2" variant="h4">
        Phonebook
      </Typography>
      <ContactsForm />
      <Typography component="h2" variant="h4">
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Box>
  );
};

export default Contacts;

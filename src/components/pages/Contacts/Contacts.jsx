import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Loader from 'components/Loader/Loader';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Typography from '@mui/material/Typography';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectError, selectIsLoading } from 'store/root/selectors';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Box
      sx={{
        margin: '60px 30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography component="h2" variant="h5" mr={23} mb={2} color={'teal'}>
        Phonebook
      </Typography>
      <ContactsForm />
      <Typography
        component="h2"
        variant="h5"
        mr={26}
        mb={2}
        mt={3}
        color={'teal'}
      >
        Contacts
      </Typography>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Box>
  );
};

export default Contacts;

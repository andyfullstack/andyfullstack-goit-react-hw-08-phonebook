import ContactsForm from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/operations';
import { selectError, selectIsLoading } from 'store/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 style={{ margin: '30px auto', maxWidth: '300px' }}>Phonebook</h1>
      <ContactsForm />
      <h2 style={{ margin: '30px auto', maxWidth: '300px' }}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      <ContactsList />
    </>
  );
};

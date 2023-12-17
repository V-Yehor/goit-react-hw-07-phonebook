import { useDispatch, useSelector } from 'react-redux';
import { FilterText } from './Filter.styled';
import { setStoreFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const currentFilter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const onSetFilter = newSearch => {
    dispatch(setStoreFilter(newSearch));
  };
  return (
    <>
      <FilterText>Find contact by name</FilterText>
      <input
        type="text"
        name="search"
        placeholder="Type name"
        value={currentFilter}
        onChange={evt => onSetFilter(evt.target.value)}
      />
    </>
  );
};

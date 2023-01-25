import {
  NavBox,
  SearchbarCss,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBox.styled';
import { ReactComponent as Icon } from 'icons/zoom.svg';
export const SearchBox = ({ searchRef, handleSubmit }) => {
  return (
    <NavBox>
      <SearchbarCss>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <Icon />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            ref={searchRef}
            type="text"
            placeholder="Search movies"
            required
          />
        </SearchForm>
      </SearchbarCss>
    </NavBox>
  );
};

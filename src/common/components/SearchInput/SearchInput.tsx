// vendors
import React, { useContext, ChangeEvent } from 'react';

// components
import Icon from '../Icon/Icon';

// context
import { ThemeContext } from 'styled-components';

// styles
import { SerachContainer, FieldContainer, Field, Button } from './searchInput.styled';

type Props = {
  //** search placeholder */
  placeholder: string,
  //** search aria-label */
  ariaLabel: string,
  //** search name */
  name?: string,
  //** value */
  value?: string | number,
  //** search onChange */
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void,
  //** search onClick */
  handleClick?: () => void
}

const SearchInput = (props: Props): JSX.Element => {
  const {
    placeholder,
    ariaLabel,
    name,
    value,
    handleChange,
    handleClick
  } = props;
  const { spaces } = useContext(ThemeContext);

  return (
    <SerachContainer>
      <FieldContainer>
        <Field
          type="text"
          placeholder={placeholder}
          aria-label={ariaLabel}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </FieldContainer>
      <Button onClick={handleClick} >
        <Icon
          icon="ic_search"
          alt="Buscar"
          width={spaces.xl}
          height={spaces.xl}
          islarge
        />
      </Button>
    </SerachContainer>
  );
};

export default SearchInput;

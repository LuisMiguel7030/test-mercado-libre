// vendors
import React, { FormEvent, useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// context
import { ThemeContext } from 'styled-components';
// components
import { Icon, SearchInput } from '../../common';
// styles
import { HeaderContainer, Content, FormContainer } from './header.styled';
// constants
import { HOME_ROUTE, SEARCH_ROUTE } from '../../constants/routes';

const Header = (): JSX.Element => {
  const { spaces } = useContext(ThemeContext);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    router.push(SEARCH_ROUTE + `?search=${query}`);
  };

  return (
    <HeaderContainer>
      <Content>
        <Link href={HOME_ROUTE} passHref>
          <a>
            <Icon
              icon="logo_ml"
              alt="Logo mercado libre"
              islarge
              width={60}
              height={spaces.headerHeight}
            />
          </a>
        </Link>

        <FormContainer onSubmit={handleSubmit}>
          <SearchInput
            name="search"
            placeholder="Nunca dejes de buscar"
            ariaLabel="Ingresa tu producto"
            handleChange={(event) => setQuery(event.target.value)}
          />
        </FormContainer>
      </Content>
    </HeaderContainer>
  );
};

export default Header;

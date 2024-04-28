import React from 'react';
import * as S from './MainPage.styles';
import SearchUser from '../../components/SearchUser/SearchUser.jsx';
import SortUsers from '../../components/SortUsers/SortUsers.jsx';

export const MainPage = () => {
  return (
    <S.ContainerMain>
      <S.HeaderMain>
        <S.HeaderLogo src="assets/img/logo.png" alt="logo" />
        <S.HeaderTitle>Найди пользователя</S.HeaderTitle>
      </S.HeaderMain>
      <SearchUser />
      <SortUsers/>
    </S.ContainerMain>
  );
};

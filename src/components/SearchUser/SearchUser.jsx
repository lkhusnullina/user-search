import * as S from './SearchUser.styles.js';

function SearchUser() {
  return (
    <S.SearchBlock>
      <S.SearchInput type="search" placeholder="Введите логин пользователя" />
      <S.SearchButton>Найти</S.SearchButton>
    </S.SearchBlock>
  );
}

export default SearchUser
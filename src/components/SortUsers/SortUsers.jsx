import * as S from './SortUsers.styles.js';

function SortUsers() {
  return (
    <S.SortBlock>
        <S.SortTitle>Сортировка репозиториев:</S.SortTitle>
        <S.SortButton>По возрастанию</S.SortButton>
        <S.SortButton>По убыванию</S.SortButton>
    </S.SortBlock>
  );
}

export default SortUsers
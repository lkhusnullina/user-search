import * as S from './SortUsers.styles.js';

function SortUsers() {
  return (
    <S.SortBlock>
        <S.SortTitle>Сортировка репозиториев по:</S.SortTitle>
        <S.SortButton>возрастанию</S.SortButton>
        <S.SortButton>убыванию</S.SortButton>
    </S.SortBlock>
  );
}

export default SortUsers
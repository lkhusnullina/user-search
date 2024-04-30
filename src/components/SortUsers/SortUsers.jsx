import { useDispatch, useSelector } from 'react-redux';
import * as S from './SortUsers.styles.js';
import { setSort } from '../../store/usersSlice.js';

function SortUsers() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.users.sort);

  return (
    <S.SortBlock>
        <S.SortTitle>Сортировка:</S.SortTitle>
        <S.SortButton onClick={() => dispatch(setSort({sort:null}))} $isActive={sort === null}>По умолчанию</S.SortButton>
        <S.SortButton onClick={() => dispatch(setSort({sort:'asc'}))} $isActive={sort === 'asc'}>По возрастанию</S.SortButton>
        <S.SortButton onClick={() => dispatch(setSort({sort:'desc'}))} $isActive={sort === 'desc'}>По убыванию</S.SortButton>
    </S.SortBlock>
  
  );
}

export default SortUsers
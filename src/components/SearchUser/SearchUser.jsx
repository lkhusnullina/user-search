import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyGetUsersQuery } from '../../service/gitApi.js';
import { resetPage, setUsers } from '../../store/usersSlice';
import * as S from './SearchUser.styles.js';

function SearchUser() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.users.page);
  const sort = useSelector((state) => state.users.sort);
  const [username, setUsername] = useState('');
  const [trigger, { data: users }] = useLazyGetUsersQuery({username, page, sort});

  useEffect(() => {
    if (!users) return;
    dispatch(setUsers({users}))
    console.log(users);
  }, [users])

  useEffect(() => {
    console.log(22);
    console.log(page);  
    if (!username) return;
    console.log("trg");
    trigger({username, page, sort});
  }, [page, sort])

  const searchClick = () => {
    dispatch(resetPage());
    trigger({username, page, sort});
  }

  return (
    <S.SearchBlock>
      <S.SearchInput type="search" placeholder="Введите логин пользователя" value={username} onChange={e => setUsername(e.target.value)}/>
      <S.SearchButton onClick={searchClick} disabled={username == ""}>Найти</S.SearchButton>
    </S.SearchBlock>
  );
}

export default SearchUser
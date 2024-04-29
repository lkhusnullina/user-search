import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyGetUsersQuery } from '../../service/gitApi.js';
import { setUsers } from '../../store/usersSlice';
import * as S from './SearchUser.styles.js';

function SearchUser() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [trigger, { data: users }] = useLazyGetUsersQuery(username);

  useEffect(() => {
    if (!users) return;
    dispatch(setUsers({users}))
    console.log(users);
  }, [users])



  return (
    <S.SearchBlock>
      <S.SearchInput type="search" placeholder="Введите логин пользователя" value={username} onChange={e => setUsername(e.target.value)}/>
      <S.SearchButton onClick={() => trigger(username)} disabled={username == ""}>Найти</S.SearchButton>
    </S.SearchBlock>
  );
}

export default SearchUser
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyGetUsersQuery } from '../../service/gitApi.js';
import { clearStore, resetPage, setUsers } from '../../store/usersSlice';
import * as S from './SearchUser.styles.js';

function SearchUser() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.users.page);
    const sort = useSelector((state) => state.users.sort);
    const totalCount = useSelector((state) => state.users.totalCount);
    const [username, setUsername] = useState('');
    const [trigger, { data: users, isLoading, error }] = useLazyGetUsersQuery({
        username,
        page,
        sort,
    });

    useEffect(() => {
        if (!users) return;
        dispatch(setUsers({ users }));
    }, [users]);

    useEffect(() => {
        if (!username) return;
        trigger({ username, page, sort });
    }, [page, sort]);

    const searchClick = () => {
        dispatch(resetPage());
        trigger({ username, page, sort });
    };

    useEffect(() => {
      if (!username) {
        dispatch(clearStore());
      }
    }, [username]);

    return (
        <S.SearchBlock>
            <S.SearchInput
                type="search"
                placeholder="Введите логин пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <S.SearchButton
                onClick={searchClick}
                disabled={isLoading || username === ''}
            >
                {isLoading ? 'Поиск...' : 'Найти'}
            </S.SearchButton>
        </S.SearchBlock>
    );
}

export default SearchUser;

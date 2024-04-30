import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLazyGetUsersQuery } from '../../service/gitApi.js';
import { clearStore, resetPage, setUsers } from '../../store/usersSlice';
import * as S from './SearchUser.styles.js';

function SearchUser() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.users.page);
    const sort = useSelector((state) => state.users.sort);
    const [username, setUsername] = useState('');
    const [errorName, setErrorName] = useState(null);
    const [trigger, { data: users, isLoading, error }] = useLazyGetUsersQuery({
        username,
        page,
        sort,
    });

    function isValidUsername(username) {
        return /^[a-zA-Z0-9-]*$/.test(username);
    }

    const handleChange = (event) => {
        setErrorName(event.target.value);
        if (!isValidUsername(event.target.value)) {
            setErrorName('Логин пользователя может состоять только из латинских букв, цифр, дефисов');
        } else {
            setErrorName(null);
        }
    };

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
            <S.SearchForm>
                <S.SearchInput
                    type="search"
                    placeholder="Введите логин пользователя"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        handleChange(e);
                    }}
                />
                <S.SearchButton
                    onClick={searchClick}
                    disabled={isLoading || username === '' || errorName}
                >
                    {isLoading ? 'Поиск...' : 'Найти'}
                </S.SearchButton>
            </S.SearchForm>
            {errorName && <h4 style={{ color: 'red' }}>{errorName}</h4>}
            {error && <span style={{ color: 'red' }}>{error.code}</span>}
        </S.SearchBlock>
    );
}

export default SearchUser;

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
    const [validationError, setValidationError] = useState(null);
    const [trigger, { data: users, isLoading, error }] = useLazyGetUsersQuery({
        username,
        page,
        sort,
    });
    const [errorStatus, setErrorStatus] = useState('');

    useEffect(() => {
        if (error) {
            if (error.status === 403) {
                setErrorStatus('Превышен лимит, попробуй позже');
            } else {
                setErrorStatus('Произошла ошибка. Попробуйте позже.');
            }
        }
    }, [error]);

    function isValidUsername(username) {
        return /^[a-zA-Z0-9-._]*$/.test(username);
    }

    const handleChange = (event) => {
        setValidationError(event.target.value);
        if (!isValidUsername(event.target.value)) {
            setValidationError(
                'Логин пользователя может состоять только из латинских букв, цифр, дефисов',
            );
        } else {
            setValidationError(null);
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
                    disabled={isLoading || username === '' || validationError}
                >
                    {isLoading ? 'Поиск...' : 'Найти'}
                </S.SearchButton>
            </S.SearchForm>
            {validationError && (
                <h4 style={{ color: 'red' }}>{validationError}</h4>
            )}
            {error && <span style={{ color: 'red' }}>{errorStatus}</span>}
        </S.SearchBlock>
    );
}

export default SearchUser;

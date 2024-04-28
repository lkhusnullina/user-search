import { useSelector } from 'react-redux';
import User from '../User/User.jsx';
import * as S from './ListUsers.styles.js';

function ListUsers() {
    const users = useSelector((state) => state.users.users);
    console.log(users);

    return (
        <S.ListUsersBlock>
            {users && users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user} />)
            ) : (
                <h3>Запрос не сделан</h3>
            )}
        </S.ListUsersBlock>
    );
}

export default ListUsers;

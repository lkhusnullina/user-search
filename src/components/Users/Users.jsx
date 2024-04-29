import { useSelector } from 'react-redux';
import User from '../User/User.jsx';
import * as S from './Users.styles.js';

function Users() {
    const users = useSelector((state) => state.users.users);

    return (
        <S.UsersBlock>
            {users && users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user} />)
            ) : (
                <h3>Запрос не сделан</h3>
            )}
        </S.UsersBlock>
    );
}

export default Users;

import { useSelector } from 'react-redux';
import User from '../User/User.jsx';
import * as S from './Users.styles.js';
import ModalUser from '../ModalUser/ModalUser.jsx';

function Users() {
    const users = useSelector((state) => state.users.users);
    const selectedUser = useSelector((state) => state.users.selectedUser);
    const totalCount = useSelector((state) => state.users.totalCount);

    return (
        <S.UsersBlock>
            {totalCount < 0 ? (
                <h3 style={{ color: '#00c1ff' }}>Введите логин для поиска</h3>
            ) : users && users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user} />)
            ) : (
                <h3 style={{ color: 'red' }}>Пользователь не найден</h3>
            )}
            {selectedUser && <ModalUser user={selectedUser} />}
        </S.UsersBlock>
    );
}

export default Users;

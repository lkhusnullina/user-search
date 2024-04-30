import { useSelector } from 'react-redux';
import User from '../User/User.jsx';
import * as S from './Users.styles.js';
import ModalUser from '../ModalUser/ModalUser.jsx';

function Users() {
    const users = useSelector((state) => state.users.users);
    const selectedUser = useSelector((state) => state.users.selectedUser);

    return (
        <S.UsersBlock>
            {users && users.length > 0 ? (
                users.map((user) => <User key={user.id} user={user}/>)
            ) : (
                <h3>Сделай запрос для поиска</h3>
            )}
            {selectedUser && <ModalUser user={selectedUser}/>}
        </S.UsersBlock>
    );
}

export default Users;

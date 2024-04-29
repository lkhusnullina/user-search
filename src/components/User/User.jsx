import * as S from './User.styles.js';
import { useDispatch } from 'react-redux';
import { selectUser } from '../../store/usersSlice.js';

function User({ user }) {
    const dispacth = useDispatch();
    return (
        <S.UserBlock onClick={() => dispacth(selectUser({ user }))}>
            <S.UserAvatar src={user.avatar_url} alt="avatar" />
            <S.UserName>{user.login}</S.UserName>
        </S.UserBlock>
    );
}

export default User;

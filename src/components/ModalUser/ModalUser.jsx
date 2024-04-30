import { useDispatch, useSelector } from 'react-redux';
import * as S from './ModalUser.styles.js';
import { deselectUser } from '../../store/usersSlice.js';

function ModalUser() {
    const dispacth = useDispatch();
    const user = useSelector((state) => state.users.selectedUser);

    return (
        <S.ModalBlock>
            <S.ModalDiv>
                <S.ModalClose src="assets/img/close.svg" alt="closeButton" onClick={() => dispacth(deselectUser({ user }))}/>
                <S.ModalAvatar src={user.avatar_url} alt="avatar" />
                <S.ModalName>{user.login}</S.ModalName>
                <S.ModalLink to={user.html_url} target="_blank">Перейти на GitHub пользователя</S.ModalLink>
            </S.ModalDiv>
        </S.ModalBlock>
    );
}

export default ModalUser;

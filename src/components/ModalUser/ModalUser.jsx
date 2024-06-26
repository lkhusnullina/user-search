import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './ModalUser.styles.js';
import { deselectUser } from '../../store/usersSlice.js';

function ModalUser() {
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users.selectedUser);

    const closeModal = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            dispatch(deselectUser({ user }));
        }
    };

    return (
        <S.ModalBlock onClick={closeModal}>
            <S.ModalDiv ref={modalRef}>
                <S.ModalClose
                    src="assets/img/close.svg"
                    alt="closeButton"
                    onClick={() => dispatch(deselectUser({ user }))}
                />
                <S.ModalAvatar src={user.avatar_url} alt="avatar" />
                <S.ModalName>{user.login}</S.ModalName>
                <S.ModalLink to={user.html_url} target="_blank">
                    Перейти на GitHub пользователя
                </S.ModalLink>
            </S.ModalDiv>
        </S.ModalBlock>
    );
}

export default ModalUser;

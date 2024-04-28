import * as S from './User.styles.js';

function User(user) {
    return (
        <S.UserBlock>
            <S.UserLogo src="assets/img/logo.png" alt="logo" />
        </S.UserBlock>
    );
}

export default User;

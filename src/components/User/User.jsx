import * as S from './User.styles.js';

function User({user}) {
    return (
        <S.UserBlock>
            <S.UserAvatar src={user.avatar_url} alt="avatar" />
            <S.UserName>{user.login}</S.UserName>
        </S.UserBlock>
    );
}

export default User;

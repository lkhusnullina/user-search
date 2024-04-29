import * as S from './MainPage.styles';
import SearchUser from '../../components/SearchUser/SearchUser.jsx';
import SortUsers from '../../components/SortUsers/SortUsers.jsx';
import Users from '../../components/Users/Users.jsx';
import { useGetAllUsersQuery } from '../../service/gitApi';
import { useSelector } from 'react-redux';

export const MainPage = () => {

    return (
        <S.ContainerMain>
            <S.HeaderMain>
                <S.HeaderLogo src="assets/img/logo.png" alt="logo" />
                <S.HeaderTitle>Найди пользователя на GutHub</S.HeaderTitle>
            </S.HeaderMain>
            <SearchUser />
            <SortUsers />
            <Users/>
        </S.ContainerMain>
    );
};

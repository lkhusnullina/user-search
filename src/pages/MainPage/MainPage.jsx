import * as S from './MainPage.styles';
import SearchUser from '../../components/SearchUser/SearchUser.jsx';
import SortUsers from '../../components/SortUsers/SortUsers.jsx';
import ListUsers from '../../components/ListUsers/ListUsers.jsx';
import { useGetAllUsersQuery } from '../../service/gitApi';

export const MainPage = () => {
    const { data: users } = useGetAllUsersQuery();
    console.log(users);

    return (
        <S.ContainerMain>
            <S.HeaderMain>
                <S.HeaderLogo src="assets/img/logo.png" alt="logo" />
                <S.HeaderTitle>Найди пользователя на GutHub</S.HeaderTitle>
            </S.HeaderMain>
            <SearchUser />
            <SortUsers />
            <ListUsers />
        </S.ContainerMain>
    );
};

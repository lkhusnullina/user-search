import * as S from './MainPage.styles';
import SearchUser from '../../components/SearchUser/SearchUser.jsx';
import SortUsers from '../../components/SortUsers/SortUsers.jsx';
import Paginate from '../../components/Paginate/Paginate.jsx';
import Users from '../../components/Users/Users.jsx';
import { useSelector } from 'react-redux';

export const MainPage = () => {
    const maxPage = useSelector((state) => state.users.maxPage);
    
    return (
        <S.ContainerMain>
            <S.HeaderMain>
                <S.HeaderLogo src="assets/img/logo.png" alt="logo" />
                <S.HeaderTitle>Найди пользователя на GutHub</S.HeaderTitle>
            </S.HeaderMain>
            <SearchUser />
            <SortUsers />
            <Users />
            {maxPage > 1 ? (<Paginate />) : ''}
        </S.ContainerMain>
    );
};

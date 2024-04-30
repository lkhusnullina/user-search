import { useDispatch, useSelector } from 'react-redux';
import { setNextPage, setPrevPage } from '../../store/usersSlice.js';
import * as S from './Paginate.styles.js';

function Paginate() {
    const dispatch = useDispatch();
    const page = useSelector((state) => state.users.page);
    const maxPage = useSelector((state) => state.users.maxPage);

    return (
        <S.PaginateBlock>
            <S.PaginateButtons>
                <S.PaginateButton onClick={() => dispatch(setPrevPage())} disabled={page <= 1}>Назад</S.PaginateButton>
                <S.PaginateButton onClick={() => dispatch(setNextPage())} disabled={page === maxPage}>Вперед</S.PaginateButton>
            </S.PaginateButtons>
        </S.PaginateBlock>
    );
}

export default Paginate;

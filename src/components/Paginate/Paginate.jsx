import { useDispatch } from 'react-redux';
import { setNextPage, setPrevPage } from '../../store/usersSlice.js';
import * as S from './Paginate.styles.js';

function Paginate() {
    const dispatch = useDispatch();
    return (
        <S.PaginateBlock>
            <S.PaginateButtons>
                <S.PaginateButton onClick={() => dispatch(setPrevPage())}>Назад</S.PaginateButton>
                <S.PaginateButton onClick={() => dispatch(setNextPage())}>Вперед</S.PaginateButton>
            </S.PaginateButtons>
        </S.PaginateBlock>
    );
}

export default Paginate;

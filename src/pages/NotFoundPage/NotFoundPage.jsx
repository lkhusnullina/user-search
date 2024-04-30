import { Link } from 'react-router-dom';
import * as S from './NotFounPage.styles.js';

export const NotFoundPage = () => {
    return (
        <S.ContainerNotFound>
            <S.TitleNotFound>Страница не найдена</S.TitleNotFound>
            <Link to='/'>Вернуться на главную</Link>
        </S.ContainerNotFound>
    )
}
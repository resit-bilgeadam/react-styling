import style from './Card.module.scss';

const Card = ({children}) => {
    return (
        <div className={style.red}>
            {children}
        </div>
    )
}

export default Card;

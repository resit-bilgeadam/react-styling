import style from './Button.module.scss'

const Button = ({
    children, 
    color = 'primary',
    variant = 'regular', // regular | outline
}) => {
    const classes = `${style[`btn-${variant}-${color}`]}` // 'btn-outline-primary'

    return (
        <button className={classes}>
            {children}
        </button>
    )
}

export default Button;

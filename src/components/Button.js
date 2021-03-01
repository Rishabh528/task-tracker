const Button = (props) => {

    return (
        <button className="btn" style={{ backgroundColor: props.color}} onClick={props.onClick} >{props.text}</button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'black'
}

export default Button;
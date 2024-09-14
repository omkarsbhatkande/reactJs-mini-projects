import style from './Button.module.css'


const Button = (props) => {

  const {isOutline , text , icon , ...rest} = props;
  
  
  return (
    <button {...rest} className={isOutline ? style.outline_button : style.primary_button}>
      {icon}
      {text}
    </button>
  )
}

export default Button

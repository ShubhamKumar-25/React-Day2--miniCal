
import styles from './Button.module.css'

const Button = () => {


    const buttonsNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8',, '/', '9', '0', '=', '.'];

    return(
        <div className={styles.buttons}>

            {buttonsNames.map((btnName) => (
                <button className={styles.button}>{btnName}</button>
            ))}
      </div>
    )
}

export default Button;
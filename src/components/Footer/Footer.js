import classes from './Footer.module.css'
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsFillPinMapFill } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"

const Footer = () => {
    return (
        <div className={classes.footer}>
            <span className={classes.icon}>
                < BsFillTelephoneFill />
            </span>
            <span className={classes.icon}>
                < BsFacebook />
            </span>
            <span className={classes.icon}>
                < BsInstagram />
            </span>
            <span className={classes.icon}>
                < BsFillPinMapFill />
            </span>
            
        </div>
    )
}

export default Footer

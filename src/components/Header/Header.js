import classes from './Header.module.css';
import logo from '../../images/logo.png';
import PageTab from './PageTab';

const Header = () => {

    return (
        <header 
        className={classes.header}>   
            <div className={classes.topHeader}>
                <span className={classes.heading}>
                     Motus
                </span>
                <span>
                    <img className={classes.logo} src={logo} alt="Logo"/>
                </span>
                <span className={classes.heading}>
                    Osteo
                </span>
            </div>
            <div className={classes.bottomHeader}>
                <span className={classes.one}>
                    <PageTab tabName="About Us" path="/"/>
                </span>

                <span className={classes.three}>
                    <PageTab tabName="Appointments" path="/appointments"/>
                </span>
                
                <span className={classes.two}>
                    <PageTab tabName="Our Team" path="/team"/>
                </span>


            </div>
        </header>
    )
}

export default Header
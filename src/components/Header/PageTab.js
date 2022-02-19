import classes from './PageTab.module.css'

const PageTab = (props) => {

    const componentClass = props.component;

    return (
        <a href={props.path} className={classes.tab}>{props.tabName}</a>
    )
}

export default PageTab
import styles from './ButtonNavigationCollapsible.module.scss'
import Link from 'next/link'
import {useState} from "react";
import React from "react";


const ButtonNavigationCollapsible = ({children, title, stopPropagation, hide, active, activeLink, links}) => {
    const [open, setOpen] = useState(false);

    function handleClick () {
        setOpen((prev) => !prev)
    }
    return (

        /*onClick={(e) => stopPropagation == 'true' ? e.stopPropagation() : null*/
        <div className={[styles.button, hide && active && styles.button_closed].join(' ')}>
            {
                stopPropagation === 'true' ?

                    <div className={active ? [styles.button__link, styles.button__linkActive].join(' ') : styles.button__link}>
                        <span className={styles.button__title}>{title}</span>
                        {children}
                    </div>
                    :
                    <Link className={activeLink ? [styles.button__link, styles.button__linkActiveMenuBase].join(' ') : styles.button__link} href={""} onClick={() => handleClick()}>
                        <span className={styles.button__title}>{title}</span>
                        {children}
                    </Link>
            }
            <div className={styles.container}>
                <div className={open ? styles.opened : styles.closed}>
                    {
                        open && (
                            Object.entries(links).map(([title, props]) => (
                                <Link className={activeLink ? [styles.button__link, styles.button__linkActiveMenuBase].join(' ') : styles.button__link} href={props.link}>
                                    <span>{title}</span>
                                    {props.icon}
                                </Link>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default ButtonNavigationCollapsible;
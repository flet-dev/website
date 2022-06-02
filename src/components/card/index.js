
import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function Card(props) {

    return <a
        href={props.href}
        className={clsx('card padding--lg', styles.cardContainer)}>
        {props.children}
    </a>
};
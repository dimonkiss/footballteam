import React from 'react';
import styles from './ClubInfo.module.css';

interface ClubInfoProps {
    clubInfo: {
        name: string;
        city: string;
        foundationDate: string;

    };
}

const ClubInfo: React.FC<ClubInfoProps> = ({ clubInfo }) => {
    return (
        <div className={styles['info-container']}>
            <h2>{clubInfo.name}</h2>
            <p>City: {clubInfo.city}</p>
            <p>Founded: {clubInfo.foundationDate}</p>
        </div>
    );
};

export default ClubInfo;

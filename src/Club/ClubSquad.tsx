import React from 'react';
import styles from './ClubSquad.module.css';

interface ClubSquadProps {
    squad: {
        name: string;
        position: string;
    }[];
}

const ClubSquad: React.FC<ClubSquadProps> = ({ squad }) => {
    return (
        <div className={styles['squad-container']}>
            <h2>Current Squad</h2>
            <ul>
                {squad.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClubSquad;

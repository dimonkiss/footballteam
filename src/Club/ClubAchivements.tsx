import React from 'react';
import styles from './ClubAchivements.module.css';

interface ClubAchievementsProps {
    achievements: {
        medals: number;
        cups: number;
        goalsScored: number;
    };
}

const ClubAchievements: React.FC<ClubAchievementsProps> = ({ achievements }) => {
    return (
        <div className={styles['achievements-container']}>
            <h2>Achievements</h2>
            <p>Medals: {achievements.medals}</p>
            <p>Cups: {achievements.cups}</p>
            <p>Goals Scored: {achievements.goalsScored}</p>
        </div>
    );
};

export default ClubAchievements;

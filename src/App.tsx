import React from 'react';
import ClubInfo from './Club/ClubInfo';
import ClubAchievements from './Club/ClubAchivements';
import ClubSquad from './Club/ClubSquad';

const clubsData = [
    {
        id: 1,
        name: 'Football Club 1',
        city: 'City 1',
        foundationDate: '01-01-1900',
        achievements: {
            medals: 5,
            cups: 3,
            goalsScored: 100,
        },
        squad: [
            { name: 'Player 1', position: 'Forward' },
            { name: 'Player 2', position: 'Midfielder' },
            { name: 'Player 3', position: 'Defender' },
        ],
    },
    {
        id: 2,
        name: 'Football Club 2',
        city: 'City 2',
        foundationDate: '02-02-1910',
        achievements: {
            medals: 3,
            cups: 2,
            goalsScored: 80,
        },
        squad: [
            { name: 'Player A', position: 'Forward' },
            { name: 'Player B', position: 'Midfielder' },
            { name: 'Player C', position: 'Defender' },
        ],
    },
];

function App() {
    return (
        <div>
            {clubsData.map((club) => (
                <div key={club.id}>
                    <ClubInfo clubInfo={club} />
                    <ClubAchievements achievements={club.achievements} />
                    <ClubSquad squad={club.squad} />
                </div>
            ))}
        </div>
    );
}

export default App;

import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2025 = { '2024-12-29': 1, '2024-12-30': 1, '2024-12-31': 1 };
const until2025Dec31 = '2025-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2025 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2025</h1>
            <Calendar values={val2025} until={until2025Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2025;

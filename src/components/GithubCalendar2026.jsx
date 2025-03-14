import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2026 = { '2025-12-28': 1, '2025-12-29': 1, '2025-12-30': 1, '2025-12-31': 1 };
const until2026Dec31 = '2026-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2026 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2026</h1>
            <Calendar values={val2026} until={until2026Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2026;

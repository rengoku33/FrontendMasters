import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2025 = { '2024-12-29': 3, '2024-12-30': 3, '2024-12-31': 3,
// march
'2025-03-30': 1,

// april
'2025-04-13':1, '2025-04-14':1, '2025-04-15':1, '2025-04-17':4

 };
const until2025Dec31 = '2025-12-31';
const panelColors = ['#EEEEEE', '#f9d501', '#43d93f', 'white', '#aa26d1'];

const GithubCalendar2025 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2025</h1>
            <Calendar values={val2025} until={until2025Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2025;

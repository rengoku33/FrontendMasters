import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2027 = { '2026-12-27': 1, '2026-12-28': 1, '2026-12-29': 1, '2026-12-30': 1, '2026-12-31': 1 };
const until2027Dec31 = '2027-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2027 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2027</h1>
            <Calendar values={val2027} until={until2027Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2027;

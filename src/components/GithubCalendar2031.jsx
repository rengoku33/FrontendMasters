import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2031 = { '2030-12-29': 1, '2030-12-30': 1, '2030-12-31': 1 };
const until2031Dec31 = '2031-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2031 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2031</h1>
            <Calendar values={val2031} until={until2031Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2031;

import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2030 = { '2029-12-30': 1, '2029-12-31': 1 };
const until2030Dec31 = '2030-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2030 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2030</h1>
            <Calendar values={val2030} until={until2030Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2030;

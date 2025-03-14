import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2028 = { '2028-01-01': 1 };
const until2028Dec31 = '2028-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2028 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2028</h1>
            <Calendar values={val2028} until={until2028Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2028;

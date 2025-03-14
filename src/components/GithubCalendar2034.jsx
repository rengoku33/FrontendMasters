import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2034 = { '2034-10-08': 1, '2034-10-09': 1, '2034-10-10': 1, '2034-10-11': 1, '2034-10-12': 1, '2034-10-13': 1, '2034-10-14': 1 };
const until2034Dec31 = '2034-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2034 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2034</h1>
            <Calendar values={val2034} until={until2034Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2034;

import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2032 = { '2031-12-28': 1, '2031-12-29': 1, '2031-12-30': 1, '2031-12-31': 1 };
const until2032Dec31 = '2032-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2032 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2032</h1>
            <Calendar values={val2032} until={until2032Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2032;

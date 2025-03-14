import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2033 = { '2032-12-25': 1, '2032-12-26': 1, '2032-12-27': 1, '2032-12-28': 1, '2032-12-29': 1, '2032-12-30': 1, '2032-12-31': 1 };
const until2033Dec31 = '2033-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2033 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2033</h1>
            <Calendar values={val2033} until={until2033Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2033;

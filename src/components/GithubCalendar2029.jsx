import React from 'react';
import Calendar from 'react-github-contribution-calendar';

const val2029 = { '2028-12-31': 1 };
const until2029Dec31 = '2029-12-31';
const panelColors = ['#EEEEEE', 'white', '#FF0000'];

const GithubCalendar2029 = () => {
    return (
        <div className="border p-4 rounded">
            <h1 className="text-xl font-bold">2029</h1>
            <Calendar values={val2029} until={until2029Dec31} panelColors={panelColors} />
        </div>
    );
};

export default GithubCalendar2029;

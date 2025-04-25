import React from 'react';
import GithubCalendar2024 from './components/GithubCalendar2024';
import GithubCalendar2025 from './components/GithubCalendar2025';
import GithubCalendar2026 from './components/GithubCalendar2026';
import GithubCalendar2027 from './components/GithubCalendar2027';
import GithubCalendar2028 from './components/GithubCalendar2028';
import GithubCalendar2029 from './components/GithubCalendar2029';
import GithubCalendar2030 from './components/GithubCalendar2030';
import GithubCalendar2031 from './components/GithubCalendar2031';
import GithubCalendar2032 from './components/GithubCalendar2032';
import GithubCalendar2033 from './components/GithubCalendar2033';
import GithubCalendar2034 from './components/GithubCalendar2034';

const GithubCalendar = () => {
    return (
        <div className="grid grid-cols-2 gap-7 p-4">
            <GithubCalendar2024 />
            <GithubCalendar2025 />
            <div className='flex gap-3 justify-center col-span-2'>
                <div className='w-7 h-7 bg-purple-500'></div> = DNF 
                <div className='w-7 h-7 bg-yellow-400'></div> = Qualify
                <div className='w-7 h-7 bg-green-400'></div> = Fastest Lap 
            </div>
            <div className='flex gap-3 justify-center col-span-2'>
                Mission:
                <ul>
                    <li>1. 5AM and 7PM two training sessions</li>
                    <li>2. software enginner by May 2025</li>
                    <li>3. hunt senior software enginner at Zoho, Google, Microsoft by 2027</li>
                </ul>
            </div>
            
            <GithubCalendar2026 />
            <GithubCalendar2027 />
            <GithubCalendar2028 />
            <GithubCalendar2029 />
            <GithubCalendar2030 />
            <GithubCalendar2031 />
            <GithubCalendar2032 />
            <GithubCalendar2033 />
            <GithubCalendar2034 />
        </div>
    );
};

export default GithubCalendar;

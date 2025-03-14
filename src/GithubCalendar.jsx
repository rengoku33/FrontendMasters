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
                <div className='w-7 h-7 bg-red-700'></div> = Progress towards mission
                <div className='w-7 h-7 bg-yellow-500'></div> = Progress towards business / kingdom
            </div>
            <div className='flex gap-3 justify-center col-span-2'>
                I am taking 3 constants with me from the CBE mission:
                <ul>
                    <li>5AM. The 5 Morning Ritual - eye ex, routine, stretch, cardio, DSA / Tech News</li>
                    <li>6PM. Wrestling Discipline - eye ex, warm up, strength training</li>
                    <li>8PM. The Primeagen - prime time / tech stack</li>
                </ul>
            </div>
            <div className='flex gap-3 justify-center col-span-2'>
                Mission:
                <ul>
                    <li>1. software enginner by May 2025 (chennai or remote)</li>
                    <li>2. Google, Microsoft, Zoro by 2027</li>
                    <li>3. FullTime kingdom of science by 2033</li>
                </ul>
            </div>
            <div className='flex gap-3 justify-center col-span-2'>
                making money should be like watching grass grow, establish a business and keep building kingdom of science
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

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, selectActiveTab } from '../../Store/Slices/TabSlice';

import './Header.css';

const DownHeader = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);

  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
  };

  const navLinks = [
    { index: 0, content: 'Football' },
    { index: 1, content: 'Tennis' },
    { index: 2, content: 'Cricket' },
    { index: 3, content: 'Esoccer' },
    { index: 4, content: 'Horse Racing' },
    { index: 5, content: 'Table Tennis' },
    { index: 6, content: 'Greyhound Racing' },
    { index: 7, content: 'Basketball' },
    { index: 8, content: 'Volleyball' },
    { index: 9, content: 'Kabaddi' },
    { index: 10, content: 'Badminton' },
    { index: 11, content: 'American Football' },
    { index: 12, content: 'Futsal' },
    { index: 13, content: 'E Games' },
    { index: 14, content: 'Snooker' },
  ];

  return (
    <header className="text-white">
      <div className="flex justify-between items-center">
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.index}
             
              onClick={() => handleTabClick(link.index)}
              className={`animation-nav hover:text-gray-900 text-[18px] font-bold ${
                activeTab === link.index ? 'active' : ''
              }`}
            >
              {link.content}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DownHeader;

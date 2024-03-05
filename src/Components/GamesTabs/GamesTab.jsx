import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab, selectActiveTab } from '../../Store/Slices/TabSlice';

const GamesTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(selectActiveTab);
  const tabs = [
    'Football',
    'Tennis',
    'Cricket',
    'Esoccer',
    'Horse Racing',
    'Table Tennis',
    'Greyhound Racing',
    'Basketball',
    'Volleyball',
    'Kabaddi',
    'Badminton',
    'American Football',
    'Futsal',
    'E Games',
    'Snooker',
  ];

  const handleTabClick = (index) => {
    dispatch(setActiveTab(index));
  };

  return (
    <div className="flex mt-3 px-1 addinSamall flex-wrap gap-1">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`cursor-pointer px-8 py-2 border-2 rounded ${activeTab === index ? 'text-white bg-[#04A1A6]' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default GamesTab;

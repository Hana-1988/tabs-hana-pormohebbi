import React, { useState, useEffect } from 'react';
import './index.css';


const tabs = [
  { id: 'tab1', title: 'Home', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
  { id: 'tab2', title: 'About Us', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  { id: 'tab3', title: 'Contact Us', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' },
  { id: 'tab4', title: 'Projects', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' },
];
function App(){
  const [activeTab, setActiveTab] = useState('');
  useEffect(()=>{
    const lastTab = localStorage.getItem('activeTab');
    if (lastTab) {
      setActiveTab(lastTab);
    } else {
      setActiveTab(tabs[0].id);
    }
  },[]);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem('activeTab', tabId);
  }
  return(
    <>
    <h1>Tabs Component With React</h1>
    <div className='container'>
      <div className='tabs'>
        {tabs.map((tab)=>(
          <div  key={tab.id}
          className={`tab ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className='content'>
      {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
    </>
  );
}
export default App

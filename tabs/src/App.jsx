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
}
export default App

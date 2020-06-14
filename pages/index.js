import React, { useState } from 'react';
import { TabUi } from '../components/tabUi';
import { tab as untitled01 } from '../tabs/untitled-01';
import { tab as untitled02 } from '../tabs/untitled-02';

export default function Index() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'untitled-01', date: '2020-04-29', tab: untitled01 },
    { title: 'untitled-02', date: '2020-06-13', tab: untitled02 },
  ];

  return (
    <Container>
      <h1>tabs</h1>

      <div>
        {tabs.map((tab, index) => {
          return (
            <div key={index} style={{ marginBottom: '16px' }}>
              <a style={{ color: 'blue', textDecoration: 'underline', fontSize: '18px' }} onClick={() => setActiveTab(index)}>{index + 1}. Load "{tab.title}"</a>
            </div>
          );
        })}
      </div>

      <TabUi 
        title={tabs[activeTab].title}
        date={tabs[activeTab].date}
        tab={tabs[activeTab].tab}
      />

      <style jsx global>{`
        * {
          box-sizing: border-box;
          font-family: monospace;
        }
      `}</style>
    </Container>
  );
};

const Container = ({ children }) => {
  return (
    <div style={{ width: '100%', maxWidth: '1800px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

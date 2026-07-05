import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [leads, setLeads] = useState(() => {
    const saved = localStorage.getItem('ragda_web_leads');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('ragda_web_leads', JSON.stringify(leads));
  }, [leads]);

  const addLead = (leadData) => {
    const newLead = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...leadData
    };
    setLeads(prev => [newLead, ...prev]);
  };

  return (
    <AppContext.Provider value={{ leads, addLead }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}

import React from 'react';
  import ItemList from './components/ItemList';
  
  const App: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <ItemList />
      </div>
    );
  };
  
  export default App;
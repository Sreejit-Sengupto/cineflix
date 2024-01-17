import React from 'react';
import Navbar from './components/Topbar/Navbar';
import MovieList from './components/MovieList/MovieList';
import { ItemProvider } from './Context/CartItemContext';

function App() {
  return (
    <ItemProvider>
      <div className="flex flex-col w-full">
        <Navbar />
        <MovieList />
      </div>
    </ItemProvider>
  );
}

export default App;

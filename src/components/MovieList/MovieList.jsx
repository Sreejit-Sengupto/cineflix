import React from 'react';
import { data } from '../../../data.js';
import MovieCard from './MovieCard.jsx';
import ClipLoader from 'react-spinners/ClipLoader';

const MovieList = () => {
  const [offset, setOffset] = React.useState(0); // To control number of movie tile to be displayed
  const [loading, setLoading] = React.useState(false);

  // This function increments the offset value by ten, so that it can be used to get ten movies at a time.
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setOffset((prevState) => prevState + 10);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      <div className="w-full p-10 flex flex-col lg:flex-row justify-between items-center flex-wrap">
        {/* Keep getting ten movies at a time from the array and display them */}
        {data.slice(0, offset + 10).map((item) => {
          return (
            <MovieCard
              id={item.id}
              thumbnail={item.thumbnail}
              title={item.title}
              genre={item.genres[0]}
              rating={item.rating}
              price={item.thumbnail_height}
              year={item.year}
              description={item.extract}
              key={item.id}
            />
          );
        })}
      </div>
      <button
        onClick={load}
        className="text-white border border-gray-700 w-[12rem] px-3 py-2 rounded block mx-auto mb-10"
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader color="#FFD62C" loading={loading} size={'1.5em'} />
            <span className="ml-2">Loading</span>
          </div>
        ) : (
          'Load more movies'
        )}
      </button>
    </div>
  );
};

export default MovieList;

import React, { Suspense } from 'react';
import { selector, useRecoilState } from 'recoil';

const dogPicApi = 'https://dog.ceo/api/breeds/image/random/3';

const dogsState = selector({
  key: 'dogsState',
  get: async ({ get }) => {
    const res = await fetch(dogPicApi);
    const json = res.json();
    return json.message;
  },
});

export const DogsLoaded = () => {
  const dogs = useRecoilValue(dogsState);
  return (
    <>
      {dogs.map((src, i) => (
        <img src={src} alt={`dog${i}`} key={`dog${i}`} />
      ))}
    </>
  );
};

export const Dogs = () => {
  return (
    <div className="example">
      <Suspense fallback={<>Loading...</>}>{}</Suspense>
    </div>
  );
};

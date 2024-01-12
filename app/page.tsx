'use client'

import React from 'react';
import StyleSection from './ui/main/section';
import Slider from './ui/main/slider';

const Page: React.FC = () => {
  return (
    <>
      <header></header>
      <main>
        <StyleSection>
          <h1>Полезные материалы</h1>
          <p>Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</p>
          <Slider />
        </StyleSection>
      </main>
      <footer></footer>
    </>
  );
}

export default Page;

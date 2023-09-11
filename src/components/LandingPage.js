import React, { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import { useTransition, a } from '@react-spring/web';
import shuffle from 'lodash/shuffle';
import img1 from '../assets/images/1.jpg'
import img2 from '../assets/images/2.jpg'
import img3 from '../assets/images/3.jpg'
import img4 from '../assets/images/4.jpg'
import img5 from '../assets/images/5.jpg'
import img6 from '../assets/images/6.jpg'
import img7 from '../assets/images/7.jpg'
import img8 from '../assets/images/8.png'
import img9 from '../assets/images/9.jpg'
import img10 from '../assets/images/10.jpg'
import img11 from '../assets/images/11.jpg'
import img12 from '../assets/images/12.jpg'
import img13 from '../assets/images/13.jpg'
import img14 from '../assets/images/14.jpg'


import useMedia from './useMedia';

import styles from './styles.module.css';

function Masonry() {
  const data= [
    { css: img1, height: 400 },
    { css: img2, height: 300 },
    { css: img3, height: 300 },
    { css: img4, height: 500 },
    { css: img5, height: 300 },
    { css: img6, height: 400 },
    { css: img7, height: 200 },
    { css: img8, height: 600 },
    { css: img9, height: 200 },
    { css: img10, height: 400 },
    { css: img11, height: 300 },
    { css: img12, height: 300 },
    { css: img13, height: 400 },
    { css: img14, height: 500 },
    
  ];
  
  // Hook1: Tie media queries to the number of columns
  const columns = useMedia(['(min-width: 1500px)', '(min-width: 1000px)', '(min-width: 600px)'], [5, 4, 3], 2);
  // Hook2: Measure the width of the container element
  const [ref, { width }] = useMeasure();
  // Hook3: Hold items
  const [items, set] = useState(data);
  // Hook4: shuffle data every 2 seconds
  useEffect(() => {
    const t = setInterval(() => set(shuffle), 2000);
    return () => clearInterval(t);
  }, []);
  // Hook5: Form a grid of stacked items using width & columns we got from hooks 1 & 2
  const [heights, gridItems] = useMemo(() => {
    let heights = new Array(columns).fill(0); // Each column gets a height starting with zero
    let gridItems = items.map((child, i) => {
      const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
      const x = (width / columns) * column; // x = container width / number of columns * column index,
      const y = (heights[column] += child.height / 2) - child.height / 2; // y = it's just the height of the current column
      return { ...child, x, y, width: width / columns, height: child.height / 2 };
    });
    return [heights, gridItems];
  }, [columns, items, width]);
  // Hook6: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const transitions = useTransition(gridItems, {
    key: (item) => item.css,
    from: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 0 }),
    enter: ({ x, y, width, height }) => ({ x, y, width, height, opacity: 1 }),
    update: ({ x, y, width, height }) => ({ x, y, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  // Render the grid
  return (
    <div ref={ref} className={styles.list} style={{ height: Math.max(...heights),zIndex:'10' }}>
      {transitions((style, item) => (
        <a.div style={{...style , opacity:0.05}}>
          <div style={{ backgroundImage: `url(${item.css}?auto=compress&dpr=2&h=500&w=500)` }} />
        </a.div>
      ))}
    </div>
  );
}

export default function LandingPage() {
  return <Masonry />;
}

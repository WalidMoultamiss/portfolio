import React, { useState, useEffect } from 'react';
import Portfolio from '../Items/Portfolio';

const filters = [
  {
    id: 1,
    name: 'All Projects',
  },
  {
    id: 2,
    name: 'Fullstack',
  },
  {
    id: 3,
    name: 'Frontend',
  },
  {
    id: 4,
    name: 'Backend',
  },
];

const allData = [
  {
    id: 1,
    name: 'StackSync',
    category: ['fullstack'],
    image: 'images/portfolio/1.png',
    slug: 'stacksync',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 2,
    name: 'CenSync',
    category: ['fullstack'],
    image: 'images/portfolio/2.png',
    slug: 'censync',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 3,
    name: 'SASS Architecture',
    category: ['frontend'],
    image: 'images/portfolio/3.png',
    slug: 'sass-architecture',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 4,
    name: 'MarocShip',
    category: ['backend'],
    image: 'images/portfolio/4.png',
    slug: 'marocship',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 5,
    name: 'Marjane-System',
    category: ['backend'],
    image: 'images/portfolio/5.png',
    slug: 'marjane-system',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 6,
    name: 'Marjane-Management',
    category: ['frontend'],
    image: 'images/portfolio/6.png',
    slug: 'marjane-management',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 7,
    name: 'Creative Art',
    category: ['creative'],
    image: 'images/portfolio/1.png',
    slug: 'creative-art',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 8,
    name: 'Apple USB',
    category: ['creative', 'design'],
    image: 'images/portfolio/2.png',
    slug: 'apple-usb',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
  {
    id: 9,
    name: 'Work Space',
    category: ['branding'],
    image: 'images/portfolio/3.png',
    slug: 'work-space',
    url: 'https://github.com/KhomsiAdam/StackSync',
  },
];

function Portfolios() {
  const [getAllItems] = useState(allData);
  const [dataVisibleCount, setDataVisibleCount] = useState(6);
  const [dataIncrement] = useState(3);
  const [activeFilter, setActiveFilter] = useState('');
  const [visibleItems, setVisibleItems] = useState([]);
  const [noMorePost, setNoMorePost] = useState(false);

  useEffect(() => {
    setActiveFilter(filters[0].name.toLowerCase());
    setVisibleItems(getAllItems.filter((item) => item.id <= 6));
  }, [getAllItems]);

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    let targetFilter = e.target.value
      ? e.target.value.toLowerCase()
      : e.target.textContent.toLowerCase();
    setActiveFilter(targetFilter);
    let tempData;
    if (targetFilter === filters[0].name.toLowerCase()) {
      tempData = getAllItems.filter((data) => data.id <= dataVisibleCount);
    } else {
      tempData = getAllItems.filter((data) => {
        return (
          data.category.includes(targetFilter) && data.id <= dataVisibleCount
        );
      });
    }
    setVisibleItems(tempData);
  };

  const handleLoadmore = (e) => {
    e.preventDefault();
    let tempCount = dataVisibleCount + dataIncrement;

    if (tempCount > getAllItems.length) {
      setNoMorePost(true);
    } else {
      setDataVisibleCount(tempCount);
      if (activeFilter === filters[0].name.toLowerCase()) {
        setVisibleItems(getAllItems.filter((data) => data.id <= tempCount));
      } else {
        let items = getAllItems.filter((data) => {
          return data.category.includes(activeFilter) && data.id <= tempCount;
        });
        setVisibleItems(items);
      }
    }
  };

  return (
    <>
      <ul className='portfolio-filter list-inline'>
        {filters.map((filter) => (
          <li
            className={
              filter.name.toLowerCase() === activeFilter
                ? 'list-inline-item current'
                : 'list-inline-item'
            }
            key={filter.id}
            onClick={handleChange}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className='pf-filter-wrapper mb-4'>
        <select
          className='portfolio-filter-mobile'
          onChange={(e) => handleChange(e)}
        >
          {filters.map((filter) => (
            <option value={filter.name} key={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className='row portfolio-wrapper'>
        {visibleItems.map((item) => (
          <div className='col-md-4 col-sm-6 grid-item' key={item.id}>
            <Portfolio portfolio={item} />
          </div>
        ))}
      </div>

      {noMorePost ? null : (
        <div className='load-more text-center mt-4'>
          <a
            href='#!'
            className='btn btn-default'
            onClick={(e) => handleLoadmore(e)}
          >
            <i className='fas fa-circle-notch'></i> Load more
          </a>
        </div>
      )}
    </>
  );
}

export default Portfolios;

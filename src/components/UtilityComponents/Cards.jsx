import { Link, useNavigate } from 'react-router-dom';

require('./Utility.css')

const Cards = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div className="container flex-row wrap">
      {data.map((item, index) => (
         <Link 
         className="text-white active:text-white"
         to={item.link}>
          <div key={index} className="card">
          <div
            className="cardImg"
            style={{
              backgroundImage: `url(${item.url})`
            }}
          />
          <span className="cardLabel">{item.label}</span>
        </div>
         </Link>
        
      ))}
    </div>
  );
};

export default Cards;

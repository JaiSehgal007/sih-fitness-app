require('./Utility.css')

const Cards = ({ data }) => {
  return (
    <div className="container flex-row wrap">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div
            className="cardImg"
            style={{
              backgroundImage: `url(${item.url})`
            }}
          />
          <span className="cardLabel">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Cards;

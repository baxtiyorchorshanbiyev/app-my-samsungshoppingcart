import React, {useState} from 'react';

const TopProducrs = (props) => {
  const {topProducts} = props;
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="row border my-5 for__hover">
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 ">
      <div className="w-100 text-center for__scale my-3">
        <img className="w-50" src={topProducts.img} alt="" />
      </div>
    </div>
    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
      <h3 className="my-3">{topProducts.tite}</h3>
      <p>{readMore ? topProducts.info : `${topProducts.info.substring(0, 100)} . . .`}</p>
      <button type="button"
      className="btn btn-read"
      onClick ={() => setReadMore(!readMore)}>{topProducts.btn}
      </button>
    </div>
  
  </div>
  );
};

export default TopProducrs;
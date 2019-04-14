import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Loading(props) {
  const { visible } = props;
  return (visible &&
    <div className="loading-con">
      <div className="loading-content">
        <div className="loading-animate">
          {
            Array.apply(1, new Array(4)).map((_n, idx) => {
              return <div className={`icon ${idx % 2 === 0 ? 'warm' : 'cool'}`} key={`icon_${idx}`}>
                <img src={`https://m.city.cn/static/icons/loading${idx % 2 === 0 ? 1 : 2}.png`} alt="" />
              </div>;
            })
          }
        </div>
        <p className="info">加载中...</p>
      </div>
    </div>);
}
Loading.proptypes = {
  visible: PropTypes.bool
};
Loading.defaultProps = {
  visible: true
};

import React, { Component } from 'react';
import './Banner.scss';

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
      currentBannerIndex: 0,
    };
  }

  changeImage = () => {
    const { currentBannerIndex } = this.state;

    this.setState({
      currentBannerIndex: currentBannerIndex ? 0 : 1,
    });
  };

  render() {
    const { currentBannerIndex } = this.state;

    return (
      <section className="bannerSection" onClick={this.changeImage}>
        <img
          src={bannerList[currentBannerIndex]}
          alt="benner"
          className="bennerImage"
        />
      </section>
    );
  }
}

const bannerList = [
  'https://cdn.pixabay.com/photo/2016/07/24/21/01/thermometer-1539191_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/06/26/23/47/poison-1481596_960_720.jpg',
];

import React from 'react';
import './JustInfo.scss';

export default function JustInfo() {
  return (
    <section className="justInfoSection">
      <div className="heightLine"></div>
      <p className="desc">라이프 큐레이션 코스메틱</p>
      <h1 className="brand">DUFT&DOFT</h1>
      <dl className="subDesc">
        <dd>아침부터 저녁까지 쉴 틈 없이 돌아가는</dd>
        <dd>현대 도시인의 삶.</dd>
        <dd>문장에도 쉼표가 필요하듯</dd>
        <dd>우리의 삶에도 쉼이 필요해요.</dd>
        <dd>좋아하는 향의 제품으로 케어해보세요.</dd>
        <dd> 지친 하루 끝, 향기로운 위로로 다가갈게요.</dd>
      </dl>
      <p className="viewMore">VIEW MORE</p>
      <img
        className="productImage"
        src="https://cdn.pixabay.com/photo/2021/01/28/08/51/girl-5957398_960_720.jpg"
        alt="product"
      />
    </section>
  );
}

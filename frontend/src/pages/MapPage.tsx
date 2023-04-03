import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';

import KoreaMap from '../components/KoreaMap';
import CardList from '../components/CardList';
import { MapPageProps } from '../types/PagePropsType';

function MapPage({ isMine, cardsLeft, cardsRight, scrollRef }: MapPageProps) {
  const params = useParams();
  const [user, setUser] = useState<any>(params.userId);
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(`/record/${user}`);
  };

  return (
    <div className="map-page">
      <div className="map-page__header">
        <MdArrowBack onClick={onClickBack} />
      </div>
      <div className="mappage__map__container card">
        <div className="whole__map">
          <KoreaMap />
        </div>
      </div>
      <CardList
        isMine={isMine}
        cardsLeft={cardsLeft}
        cardsRight={cardsRight}
        scrollRef={scrollRef}
      />
    </div>
  );
}

export default MapPage;

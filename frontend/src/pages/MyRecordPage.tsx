import React from 'react';

import Card from '../components/PhotoCard';
import Profile from '../components/Profile';
import SearchBox from '../components/SearchBox';
import MoveToMap from '../components/MoveToMap';
import CardList from '../components/CardList';
import { MyRecordPageProps } from '../types/PagePropsType';

function MyRecordPage({
  tags,
  cardsLeft,
  cardsRight,
  keyword,
  handleKeywordChange,
  handleSearch,
  handleTagDelete,
}: MyRecordPageProps) {
  return (
    <div className="my-record-page">
      <Profile />
      <MoveToMap />
      <SearchBox
        tags={tags}
        keyword={keyword}
        handleKeywordChange={handleKeywordChange}
        handleSearch={handleSearch}
        handleTagDelete={handleTagDelete}
      />
      <CardList cardsLeft={cardsLeft} cardsRight={cardsRight} />
    </div>
  );
}

export default MyRecordPage;

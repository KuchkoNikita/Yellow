import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import { toDate } from './../../utils';

import Card from './Card/Card';
import { ReactComponent as AddSvg } from './../../assets/add.svg';

import './style.scss';
import './../../styles/common.scss';

const Cards = ({ setIsOpenForm, isOpenFilter, cards, filterStart, filterEnd }) => {
  const handleClick = () => setIsOpenForm(true);

  const filterCards = isOpenFilter
    ? useMemo(
        () =>
          cards.filter((card) =>
            moment(toDate(card.date), 'DD.MM.YYYY').isBetween(filterStart, filterEnd)
          ),
        [cards, filterStart, filterEnd]
      )
    : cards;

  return (
    <>
      <div className="cards">
        {filterCards.map(({ id, distance, time, date }) => {
          return (
            <Card
              key={id}
              distance={distance}
              time={time}
              date={moment(date).format('DD.MM.YYYY')}
              speed={Math.floor(distance / (time / 60))}
            />
          );
        })}
      </div>
      <button onClick={handleClick} className="icon-button add-icon">
        <AddSvg />
      </button>
    </>
  );
};

Cards.propTypes = {
  isOpenFilter: PropTypes.bool,
  filterStart: PropTypes.object,
  filterEnd: PropTypes.object,
  cards: PropTypes.array,
  setIsOpenForm: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isOpenFilter: state.filter.isOpenFilter,
  filterStart: state.filter.filterStart,
  filterEnd: state.filter.filterEnd,
});

export default connect(mapStateToProps)(Cards);

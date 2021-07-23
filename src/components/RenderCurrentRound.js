import React from 'react';
import PropTypes from 'prop-types';

import NormalRound from './NormalRound';
import MusicRound from './MusicRound';
import RandomRound from './RandomRound';

import propertyTypes from '../data/propertyTypes';

const RenderCurrentRound = ({
  currentPage, updateScore, r1info, r2info, r3info, r4info, r5info, r6info, r7info,
}) => {
  if (currentPage === 1) {
    return (
      <NormalRound
        updater={updateScore}
        info={r1info}
        key="r1"
      />
    );
  }
  if (currentPage === 2) {
    return (
      <MusicRound
        updater={updateScore}
        info={r2info}
      />
    );
  }
  if (currentPage === 3) {
    return (
      <NormalRound
        updater={updateScore}
        info={r3info}
        key="r3"
      />
    );
  }
  if (currentPage === 4) {
    return (
      <NormalRound
        updater={updateScore}
        info={r4info}
        key="r4"
      />
    );
  }
  if (currentPage === 5) {
    return (
      <NormalRound
        updater={updateScore}
        info={r5info}
        key="r5"
      />
    );
  }
  if (currentPage === 6) {
    return (
      <NormalRound
        updater={updateScore}
        info={r6info}
        key="r6"
      />
    );
  }
  if (currentPage === 7) {
    return (
      <RandomRound
        updater={updateScore}
        info={r7info}
      />
    );
  }
  return null;
};

RenderCurrentRound.propTypes = {
  currentPage: PropTypes.number.isRequired,
  updateScore: PropTypes.func.isRequired,
  r1info: PropTypes.shape(propertyTypes.roundInfo).isRequired,
  r2info: PropTypes.shape(propertyTypes.specialRoundInfo).isRequired,
  r4info: PropTypes.shape(propertyTypes.roundInfo).isRequired,
  r3info: PropTypes.shape(propertyTypes.roundInfo).isRequired,
  r5info: PropTypes.shape(propertyTypes.roundInfo).isRequired,
  r6info: PropTypes.shape(propertyTypes.roundInfo).isRequired,
  r7info: PropTypes.shape(propertyTypes.specialRoundInfo).isRequired,
};

export default RenderCurrentRound;

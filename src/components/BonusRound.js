
import styled from 'styled-components';
import BonusQuestion from './BonusQuestion';

const bonusRounds = [1, 3, 4, 6, 7];

const BonusRound = () => (
  <Wrapper>
    <BonusHeader>Bonus Questions</BonusHeader>
    {bonusRounds.map((round) => <BonusQuestion roundNumber={round} key={round} />)}
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 0.5rem;
`;

const BonusHeader = styled.div`
  font-weight: 700;
  margin-bottom: 1rem;
`;

export default BonusRound;

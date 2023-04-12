const initialState = {
  currentPage: 1,
  joker: '',
  r1info: {
    round: 1,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
  r2info: {
    round: 2,
    scores: Array(16).fill(null),
    answers: Array(16).fill(''),
    score: 0,
  },
  r3info: {
    round: 3,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
  r4info: {
    round: 4,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
  r5info: {
    round: 5,
    special: false,
    scores: Array(8).fill(null),
    answers: Array(8).fill(''),
    score: 0,
  },
  r6info: {
    round: 6,
    special: true,
    scores: Array(16).fill(null),
    answers: Array(16).fill(''),
    score: 0,
  },
  r7info: {
    round: 7,
    scores: Array(16).fill(null),
    answers: Array(16).fill(''),
    score: 0,
  },
};

export default initialState;

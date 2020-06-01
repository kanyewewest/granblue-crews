export interface EmojiPick {
  unicode: string;
  votes: number;
  isAlreadyVoted: boolean;
}

export const mockEmojiPicks: EmojiPick[] = [
  {
    unicode: '1F602',
    votes: 1000,
    isAlreadyVoted: true,
  },
  {
    unicode: '1F914',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F4A9',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F62E',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F633',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F60E',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F620',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F97A',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '1F621',
    votes: 0,
    isAlreadyVoted: false,
  },
  {
    unicode: '2753',
    votes: 0,
    isAlreadyVoted: false,
  },
];

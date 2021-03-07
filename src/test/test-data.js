export const response = () => ({
  group_ids: null,
  num_pages: 1000,
  num_posts: 1000,
  per_page: 1,
  last_listings_view: null,
  posts: [
    {
      outcome: null,
      user_id: 1116939,
      post_id: 32787223,
      footer: null,
      url: 'https://trashnothing.com/post/32787223/skirt-size-22-n17-tottenham-n17-london',
      title: 'Skirt size 22 - N17 Tottenham (N17, London)',
      longitude: -0.1277583,
      content: 'Skirt size 22. The elastic at the top is a bit stretched out but stop fine to wear. \n\n**PLEASE NOTE** \n\nPick up from Northumberland Park, Tottenham. \n\nPreference given to the person who can collect the soonest, not the first person who messages me as I need this stuff out of the house ASAP. My apologies. I also don’t have time to reply to everyone like I usually do so I’ll only be replying to the person who can collect the soonest and will update the listing when it’s promised and again when it’s collected.\n\n\nhttps://trashnothing.com/pics/VZQgnod',
      photos: null,
      expiration: '2021-06-05T17:20:37',
      date: '2021-03-07T17:20:37',
      latitude: 51.5073509,
      group_id: null,
      type: 'offer',
      source: 'trashnothing',
    },
  ],
  page: 1,
  start_index: 1,
  end_index: 1,
});

export const data = ({ posts }) => posts;

export const initialState = {
  posts: {
    posts: [],
  },
};

export const loadedState = {
  posts: {
    posts: data(response()),
  },
};

export const fakeAction = () => (
  {
    type: 'FAKE_ACTION',
  }
);

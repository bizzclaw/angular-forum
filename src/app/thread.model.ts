export class Thread {
  static allThreads = [];

  static PlaceHolderPosts = [
    [
      {
        id: 0,
        data: {
          author: 'Arthur',
          date: '12-12-2012',
          message: 'Yo guys. What\'s up?'
        }
      },
      {
        id: 1,
        data: {
          author: 'Arturo',
          date: '12-13-2012',
          message: 'Notmuchyou?'
        }
      }
    ],
    [
      {
        id: 1,
        data: {
          author: 'Futuro',
          date: '12-13-2045',
          message: 'I\'m in the future!'
        }
      }
    ]
  ];

  static PlaceHolderThreads = [
    new Thread({
      category: 0,
      title: 'Sup?',
      placeholder: true
    }),
    new Thread({
      category: 1,
      title: 'Woah Guys',
      placeholder: true
    })
  ];

  data: Object;
  id: number;
  posts: Object[];

  static find(id) {
    return Thread.allThreads[id];
  }

  constructor(threadData) {
    this.data = threadData;
    if (threadData.placeholder) {
      this.save();
      this.posts = Thread.PlaceHolderPosts[this.id];

    }
  }

  save() {
    this.id = Thread.allThreads.length;
    Thread.allThreads.push(this);
  }

  makePost(postData) {
    this.posts.push({
      id: this.posts.length,
      data: postData
    });
  }
}

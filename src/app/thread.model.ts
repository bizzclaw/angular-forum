export class Thread {
  static allThreads = [
    {
      id: 0,
      data: {
        category: 0,
        title: 'Sup?'
      },
      posts: [
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
      ]
    },
    {
      id: 1,
      data: {
        title: 'Woah guys',
        category: 1,
      },
      posts: [
        {
          id: 0,
          data: {
            author: 'suprisedperson',
            date: '12-13-2050',
            message: 'Guys! Guys! I\'m in the future!!!!!'
          }
        }
      ]
    }
  ];


  data: Object = {};
  posts = [];
  id: number;
  constructor(threadData) {
    this.data = threadData;
  }

  // save() {
  //   this.id = Thread.allThreads.length;
  //   Thread.allThreads.push(this);
  // }

  post(postData) {
    this.posts.push({
      id: this.posts.length,
      data: postData
    });
  }
}

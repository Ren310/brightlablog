const arraySliderImages = [
  {
    slide1: "http://britishwave.ru/images/upload/articles//IMG24e49-1bde5.jpg"
  },
  {
    slide2: "http://britishwave.ru/images/upload/articles//IMG24e49-1be2b.jpg"
  },
  {
    slide3: "http://britishwave.ru/images/upload/articles//IMG24e49-1bea6.jpg"
  },
  {
    slide4: "http://britishwave.ru/images/upload/articles//IMG24e49-1be86.jpg"
  }
];

const firstTextBlock = `Photographer have now a great platform that makes their business
development easy and it also the best way to connect and communicate 
with customers. Besides, photographers are able to diversify their 
business into other genres without risks. For example, a wedding 
photographer can upload family portfolio and therefore to find more 
different customer and increase their income.
If you are going to marry, waiting a baby or you just want to save 
amazing moments not only in the memory but also in the photos, 
ShuttrPlace is the place where your ideal photographer lives`;

const secondTextBlock = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
 non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export const dataBlog = [
  {
    title: "Content name Content Desription",
    day: 15,
    month: "June",
    year: 2019,
    text: firstTextBlock
  },
  {
    title: "Lorem Ipsum",
    day: 28,
    month: "January",
    year: 2018,
    text: secondTextBlock
  },
  {
    title: "New title for new post",
    day: 5,
    month: "May",
    year: 2016,
    text: secondTextBlock
  },
  {
    title: "React JS, Angular JS, Vue JS",
    day: 19,
    month: "November",
    year: 2014,
    text: firstTextBlock
  }
];

export const postDataBlog = [
  {
    globalArticlesDate: "June 2019",
    articles: [
      {
        title: "Content name Content Desription",
        day: 15,
        month: "June", 
        year: 2019,
        text: firstTextBlock,
        sliderUrls: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150"
        ]
      },
      {
        title: "Content name Content Desription 2",
        day: 21,
        month: "June",
        year: 2019,
        text: firstTextBlock,
        sliderUrls: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150"
        ]
      }
    ]
  },
  {
    globalArticlesDate: "January 2018",
    articles: [
      {
        title: "Lorem Ipsum",
        day: 28,
        month: "January",
        year: 2018,
        text: secondTextBlock,
        sliderUrls: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150"
        ]
      },
      {
        title: "Lorem Ipsum 2",
        day: 5,
        month: "January",
        year: 2018,
        text: secondTextBlock,
        sliderUrls: []
      }
    ]
  },
  {
    globalArticlesDate: "October 2017",
    articles: [
      {
        title: "Designing bright for the hype",
        day: 24,
        month: "October",
        year: 2017,
        text: firstTextBlock,
        sliderUrls: []
      },
      {
        title: "What is this: Ludum Dare, Hackathon, Google Code Jam?",
        day: 7,
        month: "October",
        year: 2017,
        text: secondTextBlock,
        sliderUrls: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150"
        ]
      }
    ]
  },
  {
    globalArticlesDate: "November 2016",
    articles: [
      {
        title: "React JS, Angular JS, Vue JS",
        day: 19,
        month: "November",
        year: 2016,
        text: firstTextBlock,
        sliderUrls:[]
      },
      {
        title: "How.js much.js frameworks.js did.js you.js know.js",
        day: 16,
        month: "November",
        year: 2016,
        text: secondTextBlock,
        sliderUrls: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
        ]
      }
    ]
  }
];

export { arraySliderImages, firstTextBlock, secondTextBlock };

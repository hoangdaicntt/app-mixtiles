import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  pageContent = {
    seo: {
      title: '',
      keywords: [],
      description: ''
    },
    banner: 'https://www.mixtiles.com/images/jobs/team.jpg',
    title: 'Software Development News',
    linkDetailTitle: 'View more',
    news: [
      {
        id: '23234',
        slug: 'test-news',
        title: 'As election looms, Netanyahu announces new construction',
        description: 'With eleven days to go until Israel\'s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191225170219-benjamin-netanyahu-file-super-169.jpg'
      }, {
        id: '23234',
        slug: 'test-news',
        title: 'As election looms, Netanyahu announces new construction',
        description: 'With eleven days to go until Israel\'s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191225170219-benjamin-netanyahu-file-super-169.jpg'
      }, {
        id: '23234',
        slug: 'test-news',
        title: 'As election looms, Netanyahu announces new construction',
        description: 'With eleven days to go until Israel\'s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191225170219-benjamin-netanyahu-file-super-169.jpg'
      }, {
        id: '23234',
        slug: 'test-news',
        title: 'As election looms, Netanyahu announces new construction',
        description: 'With eleven days to go until Israel\'s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191225170219-benjamin-netanyahu-file-super-169.jpg'
      }, {
        id: '23234',
        slug: 'test-news',
        title: 'As election looms, Netanyahu announces new construction',
        description: 'With eleven days to go until Israel\'s election, Prime Minister Benjamin Netanyahu has announced plans to build thousands of new homes in a part of Jerusalem that the international community',
        image: 'https://cdn.cnn.com/cnnnext/dam/assets/191225170219-benjamin-netanyahu-file-super-169.jpg'
      },
    ],
    nextText: 'Load more',
    prevPage: 1,
    nextPage: 2,
    hasNext: true,
    hasPrev: true,
  };

  constructor() {
  }

  ngOnInit() {
  }

}

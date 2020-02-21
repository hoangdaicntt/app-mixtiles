import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor() {
  }

  init(seo) {
    // title
    const title = seo.title;
    const metaTags = seo.metaTags;
    const headTag = document.querySelector('head');
    document.querySelector('title').innerText = title;
    metaTags.map(meta => {
      const metaTag = document.createElement('meta');
      for (let i = 0; i < meta.length; i++) {
        metaTag.setAttribute(meta[i].name, meta[i].value);
      }
      headTag.appendChild(metaTag);
      console.log(metaTag);
    });
  }
}

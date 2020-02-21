import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  init() {
    return new Observable(subscriber => {
      subscriber.next({
        settings: {
          backgroundColor: 'linear-gradient(#fff,#fafafa)',
          mainColor: '#ff0072',
        },
        // Home page
        home: {
          logoUrl: 'https://www.mixtiles.com/images/logo.png',
          description: 'Turn your photos into affordable, stunning wall art',
          videoUrl: 'https://fast.wistia.net/embed/iframe/twg93kgvh9?seo=false&amp;videoFoam=true',
          descriptionVideo: '"This is heaven"',
          videoIconUrl: 'https://www.mixtiles.com/images/pitch/pressLogo.jpg',
          sectionPrice: {
            title: 'Only US$11 each',
            description: 'Shipping is always free'
          },
          sectionReviews: {
            title: 'Millions Of Tiles Sold',
            desc: 'GRACING WALLS OF ALL KINDS',
            reviews: [
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              },
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              },
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              },
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              },
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              },
              {
                imageUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5833389264076800 (1).jpg',
                sourceIconUrl: 'https://mixtiles-json.s3.amazonaws.com/testimonials/instagram-logo.png',
                authorName: '@HeyItsJenna',
                comment: 'No messy nail holes and they can be easily moved ... the coolest!'
              }
            ]
          },
          sectionPrint: {
            title: 'One perfect size',
            description: 'Tiles are 8" by 8". They\'re removable, reusable and leave no marks.'
          },
          sectionRate: {
            imageUrl: 'https://www.mixtiles.com/images/pitch/stars.png',
            info: '4.8 STARS, 10,000+ APP STORE REVIEWS',
            description: 'You\'ll love our product or we\'ll return your money'
          },
          sectionMenuBottom: {
            desktop: [
              {
                isRouter: true,
                link: '/news',
                name: 'News'
              }, {
                isRouter: true,
                link: '/terms-of-use',
                name: 'Terms of use'
              }, {
                isRouter: true,
                link: '/privacy-policy',
                name: 'PRIVACY POLICY'
              }, {
                isRouter: true,
                link: '/impressum',
                name: 'IMPRESSUM'
              }, {
                isRouter: false,
                link: 'mail-to:test@gmail.com',
                name: 'CONTACT'
              }
            ],
            mobile: {},
          },
          languages: [
            {
              iconUrl: 'https://www.mixtiles.com/images/flags/en.svg',
              name: 'English',
              code: 'en'
            }, {
              iconUrl: 'https://www.mixtiles.com/images/flags/es.svg',
              name: 'Español',
              code: 'es'
            }, {
              iconUrl: 'https://www.mixtiles.com/images/flags/it.svg',
              name: 'Italiano',
              code: 'it'
            }
          ],
          startButton: 'Let\'s go',
        },
        // getstated page
        register: {
          title: 'Let\'s get to know you',
          backgroundImageUrl: 'https://cdn.filestackcontent.com/resize=width:720/uPgJkjZTMKRM42hqKG2x',
          controls: {
            inputFirstName: {placeholder: 'First Name'},
            inputLastName: {placeholder: 'Last Name'},
            inputEmail: {placeholder: 'Email'},
          },
          btnSubmit: {
            text: 'Pick Photos'
          }
        },
        header: {
          backIconUrl: 'https://www.mixtiles.com/images/icons/backButton.svg',
          menuIconUrl: 'https://www.mixtiles.com/images/icons/menuIcon.svg',
          webMenu: {
            logo: 'https://www.mixtiles.com//images/logo.png',
            menus: [
              {
                link: 'https://go.onelink.me/app/88a607f8',
                name: 'iPhone'
              }, {
                link: 'https://go.onelink.me/app/88a607f8',
                name: 'Android'
              }, {
                link: '/news',
                name: 'NEWS'
              }, {
                link: 'mailto:hi@mixtiles.com',
                name: 'CONTACT'
              },
            ]
          }
        },
        // Design page
        design: {
          styles: [
            {
              frameUrl: 'https://www.mixtiles.com/images/frames/white.svg',
              iconUrl: 'https://www.mixtiles.com/images/filters/cleanIcon.svg',
              name: 'clean',
              code: 'clean',
              isPadding: false,
            },
            {
              frameUrl: 'https://www.mixtiles.com/images/frames/white.svg',
              iconUrl: 'https://www.mixtiles.com/images/filters/everIcon.svg',
              name: 'ever',
              code: 'ever',
              isPadding: true,
            }, {
              frameUrl: 'https://www.mixtiles.com/images/frames/black.svg',
              iconUrl: 'https://www.mixtiles.com/images/filters/boldIcon.svg',
              name: 'bold',
              code: 'bold',
              isPadding: false,
            },
            {
              frameUrl: 'https://www.mixtiles.com/images/frames/black.svg',
              iconUrl: 'https://www.mixtiles.com/images/filters/classicIcon.svg',
              name: 'classic',
              code: 'classic',
              isPadding: true,
            }
          ],
          btnSubmit: {
            text: 'Checkout'
          },
          backgroundImageUrl: 'https://www.mixtiles.com/images/backgrounds/noTilesImage@2x.jpg',
          upload: {
            iconUrl: 'https://www.mixtiles.com/images/uploader/uploadIcon.svg',
            text: 'Upload photos'
          },
          title: 'Style Photos',
          zoomPopup: {
            done: 'Done',
            title: 'Adjust Image',
            pinchAndZoom: 'Pinch and zoom'
          },
          editMenuPopup: {
            show: false,
            menus: [
              {id: 'adjust', name: 'Adjust'},
              {id: 'remove', name: 'Remove', color: '#e64d00'},
              {id: 'cancel', name: 'Dismiss', color: '#8c8c8c', background: '#f2f2f2'}
            ]
          },
          checkoutPopup: {
            show: false,
            title: 'Checkout',
            links: {
              address: {
                icon: '',
                name: '',
                fields: [
                  {
                    id: 'fullname',
                    name: 'Full name',
                    value: '',
                    placeholder: '',
                    type: 'text',
                  }, {
                    id: 'address',
                    name: 'Address',
                    value: '',
                    placeholder: 'Stress, House, Number',
                    type: 'text',
                  }, {
                    id: 'addressOther',
                    name: 'Address 2',
                    value: '',
                    placeholder: '',
                    type: 'text',
                  }, {
                    id: 'city',
                    name: 'City',
                    value: '',
                    placeholder: '',
                    type: 'text',
                  }, {
                    id: 'state',
                    name: 'State',
                    value: '',
                    placeholder: '',
                    type: 'text',
                  }, {
                    id: 'zipcode',
                    name: 'Zip code',
                    value: '',
                    placeholder: '',
                    type: 'text',
                  }, {
                    id: 'country',
                    name: 'Country',
                    value: '',
                    placeholder: '',
                    type: 'select',
                    options: [
                      {id: 'VN', name: 'Việt Nam'},
                      {id: 'EN', name: 'Mexico'},
                    ]
                  },
                ]
              },
              payment: {
                icon: '',
                name: ''
              }
            }
          },
        },
        headerMenuPopup: {
          menus: [
            {id: 'questions', name: 'Frequent Questions'},
            {id: 'chat', name: 'Talk to Us'},
            {id: 'promotion', name: 'Add Promo Code'},
            {id: 'gift', name: 'Gift Card'}
          ],
          questions: {
            title: 'Frequent Questions',
            contents: [
              {
                question: 'How much do Mixtiles cost?',
                answer: 'Each tile is US$11. So for example, an order of 6 tiles would be US$66. Prices are in USD.'
              }, {
                question: 'How big are the tiles?',
                answer: 'They’re about 20 by 20 cm and 2 cm thick (8 by 8 inches and just under an inch thick).'
              }
            ]
          },
          promotion: {
            done: 'Done',
            title: 'Add Promo Code',
            label: 'Your code',
            inputPlaceholder: 'Input code...'
          }
        },
        gift: {
          titleCard: 'Mixtiles Gift Card',
          amount: ' Tiles',
          labelInput: 'Who is the gift for:',
          placeholderInput: 'Email',
          imageCards: 'https://www.mixtiles.com/images/giftCard/card-en.png',
          shipIconUrl: 'https://www.mixtiles.com/images/giftCard/checkIcon.svg', shipText: 'Shipping Included',
          submitButton: 'Buy', howItWork: 'How does it work?',
          contactUs: 'Any questions?<span class="contact-us-button">Contact us</span>',
          options: [
            {
              id: 'gift3',
              number: 3,
              title: '3 Tiles',
              price: 'US$33',
              selected: true,
            }, {
              id: 'gift6',
              number: 6,
              title: '6 Tiles',
              price: 'US$66'
            }, {
              id: 'gift8',
              number: 8,
              title: '8 Tiles',
              price: 'US$88'
            }, {
              id: 'gift12',
              number: 12,
              title: '12 Tiles',
              price: 'US$132'
            },
          ]
        }
      });
      subscriber.complete();
    });
  }

  upload(fileToUpload: File) {
    const endpoint = environment.host + '/upload.php';
    const formData: FormData = new FormData();
    formData.append('fileToUpload', fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData);
  }
}

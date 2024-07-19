export default {
    data: {
      type: 'event-detail',
      id: 'carmen-by-barrie-kosky',
      attributes: {
        slug: 'carmen-by-barrie-kosky',
        title: 'Carmen',
        runningTimeSummary: '3 hours 20 minutes with one interval',
        youtubeLink: 'https://www.youtube.com/embed/8N_tupPBtWQ',
        segments: [
          {
            name: 'Acts I and II',
            duration: '105',
          },
          {
            name: 'Interval',
            duration: '30',
          },
          {
            name: 'Act III',
            duration: '65',
          },
        ],
        guidance: 'Suitable for ages 12+',
        coProducers: [
          {
            title: '<p>Royal Dutch Opera</p>',
            description: '<p>Royal Dutch Opera co-produced by The Royal Opera, <em>Repons Foundation</em>, BAM and Les Théâtres de la Ville de Luxembourg</p>',
          },
          {
            intro: '<p>Co-producers:</p>',
            title: '<p>Royal Dutch Opera</p>',
            logo: 'https://s3-eu-west-1.amazonaws.com/static.roh.org.uk/support/Legacy.jpg',
            logoLink: 'https://www.operaballet.nl/en/ballet',
            description: '<p>Royal Dutch Opera co-produced by The Royal Opera, <em>Repons Foundation</em>, BAM and Les Théâtres de la Ville de Luxembourg</p>',
          },
        ],
        sponsors: [
          {
            intro: '<p><strong>Thanks to:</strong></p>',
            description: '<p>Aud Jebsen, Sir Lloyd and Lady Dorfman, Julia and Hans Rausing, Victoria Robey OBE, The Taylor Family Foundation and John and Susan Burns</p>',
          },
          {
            intro: '<p><strong>Generous philanthropic support from:</strong></p>',
            title: '<p>Rolex</p>',
            logo: 'https://s3-eu-west-1.amazonaws.com/static.roh.org.uk/supporters/rolex.gif',
            logoLink: 'https://www.youtube.com/watch?v=K88pe71gKRY',
            description: '<p>Telling the time, steadily, sensibly; never too quickly, never too slowly.</p>',
          },
        ],
        hashtag: '#ROHcarmen',
        shortDescription: "<p>Bizet's greatest opera tells the story of the enigmatic and seductive Carmen and the dangerous passions of Don José.</p>",
        description: "<p>Award-winning director Barrie Kosky provides a refreshing perspective on this well-known opera. He explores Carmen's ever-changing nature - marked by her series of contrasting costumes - and her vitality through dance. The pre-recorded voice of a narrator (perhaps Carmen herself) ensures that we experience the whole story from her perspective, and the production's unique performing edition (by Michael Rot) offers a chance for audience members to hear music Bizet omitted from the opera's first performances.</p><p><em>Carmen</em> had only lukewarm success at its 1875 premiere - perhaps due to its unconventional subject - but soon became immensely popular, and has remained so. Its glorious score boasts a host of wonderful melodies, including Carmen's sensual Habanera and Seguidilla, Don José's tender Flower Aria and Escamillo's rousing Toreador's Song. There are also passionate duologues, above all the intense, final confrontation between Carmen and Don José.</p>",
        carouselDescription: null,
        reviews: [
          {
            publication: 'The Guardian',
            link: 'https://...',
            stars: 3,
          },
        ],
        accessibility: {
          title: 'Accessibility',
          description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis, urna a molestie pulvinar, lacus lacus malesuada tortor, vel ultricies ipsum diam et ante.</p><p>Cras a tortor eu ante tempus fringilla non a elit. Phasellus in turpis ac urna luctus porttitor ac non mi. Nam vel nulla vel tellus laoreet blandit. <a href="mailto:boxoffice.access@roh.org.uk">boxoffice.access@roh.org.uk</a></p>',
        },
        sectionImages: {
          headerTicketsAndEvents: {
            desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
            mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
            altText: 'Promotional image for Test event',
          },
          headerDatesAndPrices: {
            desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
            mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
            altText: 'Promotional image for Test event',
          },
          reviews: {
            desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
            mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
            altText: 'Promotional image for Test event',
          },
          accessibility: {
            desktopPath: 'https://static.roh.org.uk/redesign/event-details-access-desktop.jpg',
            mobilePath: 'https://static.roh.org.uk/redesign/event-details-access-mobile.jpg',
            altText: 'The view towards the Main Entrance Foyer from within the Royal Opera House café',
          },
        },
        sourceType: 'event-detail',
      },
      relationships: {
        productions: {
          data: [{ type: 'productions', id: '38843' }, { type: 'productions', id: '38844' }, { type: 'productions', id: '38845' }, { type: 'productions', id: '38846' }, { type: 'productions', id: '38847' }],
        },
        runs: {
          data: [{ type: 'runs', id: '36701' }, { type: 'runs', id: '37038' }],
        },
        tags: {
          data: [{ type: 'tags', id: '921' }],
        },
        festival: {
          data: { type: 'festival', id: 'next-generation-festival' },
        },
      },
    },
    included: [
      {
        type: 'productions',
        id: '38843',
        attributes: {
          title: '<h4>Carmen</h4>',
          language: 'Sung in French with English surtitles',
          synopsis: '<p>Carmen declares that any man she loves should beware.</p><p>Don José soon abandons his sweetheart Micaëla and his army job for Carmen</p>',
          synopsisImage: {
            desktopPath: 'https://static.roh.org.uk/redesign/synopsis-dummy-desktop.jpg',
            mobilePath: 'https://static.roh.org.uk/redesign/synopsis-dummy-mobile.jpg',
            altText: 'Synopsis image alt text',
            caption: null,
          },
          galleryImages: [
            {
              desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
              mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
              altText: 'Promotional image for test event production',
              title: 'A title describing the event',
            },
          ],
        },
        relationships: {
          creatives: {
            data: [
              { type: 'creatives', id: '100' },
              { type: 'creatives', id: '127' },
              { type: 'creatives', id: '45' },
              { type: 'creatives', id: '999' },
            ],
          },
          tags: {
            data: [],
          },
        },
      },
      {
        type: 'productions',
        id: '38844',
        attributes: {
          title: '<h4>Carmen 2: electric boogaloo</h4>',
          language: 'Sung in Latin with hebrew subtitles',
          synopsis: '<p>Carmen declares that any man she loves should beware.</p><p>Don José soon abandons his sweetheart Micaëla and his army job for Carmen</p>',
          galleryImages: [
            {
              desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
              mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
              altText: 'Promotional image for test event production',
              title: 'A title explaining the picture',
            },
          ],
        },
        relationships: {
          creatives: {
            data: [
              { type: 'creatives', id: '100' },
              { type: 'creatives', id: '127' },
              { type: 'creatives', id: '45' },
            ],
          },
          tags: {
            data: [],
          },
        },
      },
      {
        type: 'productions',
        id: '38845',
        attributes: {
          title: '<h4>Carmen 3</h4>',
          language: 'Sung in Latin with hebrew subtitles',
          synopsis: [
            'Carmen declares that any man she loves should beware.',
            'Don José soon abandons his sweetheart Micaëla and his army job for Carmen',
          ],
          galleryImages: [
            {
              desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
              mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
              altText: 'Promotional image for test event production',
              title: 'A title explaining the picture',
            },
          ],
        },
        relationships: {
          creatives: {
            data: [
              { type: 'creatives', id: '100' },
              { type: 'creatives', id: '127' },
              { type: 'creatives', id: '45' },
            ],
          },
          tags: {
            data: [],
          },
        },
      },
      {
        type: 'productions',
        id: '38846',
        attributes: {
          title: '<h4>Carmen 4</h4>',
          language: 'Sung in Latin with hebrew subtitles',
          synopsis: [
            'Carmen declares that any man she loves should beware.',
            'Don José soon abandons his sweetheart Micaëla and his army job for Carmen',
          ],
          galleryImages: [
            {
              desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
              mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
              altText: 'Promotional image for test event production',
              caption: null,
            },
          ],
        },
        relationships: {
          creatives: {
            data: [
              { type: 'creatives', id: '100' },
              { type: 'creatives', id: '127' },
              { type: 'creatives', id: '128' },
              { type: 'creatives', id: '45' },
            ],
          },
          tags: {
            data: [],
          },
        },
      },
      {
        type: 'productions',
        id: '38847',
        attributes: {
          title: '<h4>Carmen 5</h4>',
          language: 'Sung in Latin with hebrew subtitles',
          synopsis: [
            'Carmen declares that any man she loves should beware.',
            'Don José soon abandons his sweetheart Micaëla and his army job for Carmen',
          ],
          galleryImages: [
            {
              desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
              mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
              altText: 'Promotional image for test event production',
              title: 'A title explanation',
            },
          ],
        },
        relationships: {
          creatives: {
            data: [
              { type: 'creatives', id: '100' },
              { type: 'creatives', id: '127' },
              { type: 'creatives', id: '128' },
              { type: 'creatives', id: '45' },
            ],
          },
          tags: {
            data: [],
          },
        },
      },
      {
        type: 'runs',
        id: '36701',
        attributes: {
          title: 'Autumn 2018',
        },
        relationships: {
          activities: {
            data: [{ type: 'activities', id: '37049' }],
          },
        },
      },
      {
        type: 'runs',
        id: '37038',
        attributes: {
          title: 'Summer 2019',
        },
        relationships: {
          activities: {
            data: [
              { type: 'activities', id: '37271' },
              { type: 'activities', id: '37279' },
            ],
          },
        },
      },
      {
        type: 'activities',
        id: '37049',
        attributes: {
          performanceType: 'schools-matinee',
          date: '2018-11-27T12:00:00',
          castChange: null,
        },
        relationships: {
          tags: {
            data: [],
          },
          locations: {
            data: [{ type: 'locations', id: '2' }],
          },
          performanceTimes: {
            data: [{ type: 'performanceTimes', id: '935' }],
          },
          cast: {
            data: [
              { type: 'castRoles', id: '1023' },
              { type: 'castRoles', id: '1512' },
            ],
          },
          bookingSeason: {
            data: {
              id: '937',
              type: 'bookingSeasons',
            },
          },
        },
      },
      {
        type: 'activities',
        id: '37271',
        attributes: {
          performanceType: 'standard',
          date: '2019-06-22T12:00:00',
          castChange:
            'Clémentine Margaine replaces the previously advertised Clémentine Margaine',
        },
        relationships: {
          tags: {
            data: [{ type: 'tags', id: '923' }],
          },
          locations: {
            data: [{ type: 'locations', id: '2' }],
          },
          performanceTimes: {
            data: [{ type: 'performanceTimes', id: '935' }],
          },
          cast: {
            data: [
              { type: 'castRoles', id: '1023' },
              { type: 'castRoles', id: '1512' },
              { type: 'castRoles', id: '1530' },
              { type: 'castRoles', id: '1531' },
              { type: 'castRoles', id: '1532' },
              { type: 'castRoles', id: '1533' },
              { type: 'castRoles', id: '1534' },
              { type: 'castRoles', id: '1535' },
              { type: 'castRoles', id: '1536' },
              { type: 'castRoles', id: '1537' },
              { type: 'castRoles', id: '1538' },
            ],
          },
          bookingSeason: {
            data: {
              id: '940',
              type: 'bookingSeasons',
            },
          },
        },
      },
      {
        type: 'creatives',
        id: '100',
        attributes: {
          role: 'Music',
          name: 'Georges Bizet',
          slug: 'georges-bizet',
        },
      },
      {
        type: 'creatives',
        id: '127',
        attributes: {
          role: 'Libretto',
          name: 'Henri Meilhac',
          slug: 'henri-meilhac',
        },
      },
      {
        type: 'creatives',
        id: '128',
        attributes: {
          role: 'Libretto',
          name: 'Ludovic Halévy',
          slug: 'ludovic-halevy',
        },
      },
      {
        type: 'creatives',
        id: '45',
        attributes: {
          role: 'Director',
          name: 'Barrie Kosky',
          slug: 'barrie-kosky',
        },
      },
      {
        type: 'creatives',
        id: '999',
        attributes: {
          role: 'Original Director',
          name: 'Susan Kosky',
          slug: 'susan-kosky',
        },
      },
      {
        type: 'castRoles',
        id: '1023',
        attributes: {
          role: 'Conducted by',
          name: 'Julia Jones',
          slug: 'julia-jones',
        },
      },
      {
        type: 'castRoles',
        id: '1512',
        attributes: {
          role: 'Carmen',
          name: 'Clémentine Margaine',
          slug: 'clementine-margaine',
        },
      },
      {
        type: 'castRoles',
        id: '1530',
        attributes: {
          role: 'Don José',
          name: 'Arsen Soghomonyan',
          slug: 'arsen-soghomonyan',
        },
      },
      {
        type: 'castRoles',
        id: '1531',
        attributes: {
          role: 'Escamillo',
          name: 'Rachel Willis-Sørensen',
          slug: 'rachel-willis-sorensen',
        },
      },
      {
        type: 'castRoles',
        id: '1532',
        attributes: {
          role: 'Micaëla',
          name: 'Ailyn Pérez',
          slug: 'ailyn-perez',
        },
      },
      {
        type: 'castRoles',
        id: '1533',
        attributes: {
          role: 'Zuniga',
          name: 'Michael Mofidian',
          slug: 'michael-mofidian',
        },
      },
      {
        type: 'castRoles',
        id: '1534',
        attributes: {
          role: 'Frasquita',
          name: 'Jacquelyn Stucker',
          slug: 'jacquelyn-stucker',
        },
      },
      {
        type: 'castRoles',
        id: '1535',
        attributes: {
          role: 'Mercédès',
          name: 'Hongni Wu',
          slug: 'hongni-wu',
        },
      },
      {
        type: 'castRoles',
        id: '1536',
        attributes: {
          role: 'Dancaïro',
          name: 'Hongni Wu',
          slug: 'hongni-wu',
        },
      },
      {
        type: 'castRoles',
        id: '1537',
        attributes: {
          role: 'Chorus Master',
          name: 'William Spaulding',
          slug: 'william-spaulding',
        },
      },
      {
        type: 'tags',
        id: '923',
        attributes: {
          title: 'Cinema broadcasts',
        },
      },
      {
        type: 'tags',
        id: '921',
        attributes: {
          title: 'Opera and music',
        },
      },
      {
        type: 'performanceTimes',
        id: '935',
        attributes: {
          title: 'Afternoon',
        },
      },
      {
        type: 'performanceTimes',
        id: '936',
        attributes: {
          title: 'Evening',
        },
      },
      {
        type: 'locations',
        id: '2',
        attributes: {
          title: 'Main Stage',
        },
      },
      {
        id: '937',
        type: 'bookingSeasons',
        attributes: {
          season: '18/19',
          bookingPeriod: 'Autumn',
        },
        relationships: null,
      },
      {
        id: '940',
        type: 'bookingSeasons',
        attributes: {
          season: '18/19',
          bookingPeriod: 'Summer',
        },
        relationships: null,
      },
      {
        id: 'next-generation-festival',
        type: 'festival',
        attributes: {
          slug: 'next-generation-festival',
          title: '<h4>Next Generation Festival</h4>',
          about: '<p>Some text about the next generation festival.</p>',
          shortDescription: '<p>Short description about the next generation festival.</p>',
          headerImage: {
            desktopPath: 'https://i.imgur.com/x9X5dZ1.png',
            mobilePath: 'https://i.imgur.com/x9X5dZ1.png',
            thumbPath: 'thumb-path',
            altText: 'An image',
          },
          galleryImages: [
            {
              desktopPath: 'https://live.staticflickr.com/4918/44093427820_89b814b847_h.jpg',
              mobilePath: 'https://live.staticflickr.com/4918/44093427820_d7d560fa5d_c.jpg',
              thumbPath: null,
              altText: 'Ballet Dots © 2018 ROH. Photograph by James Bellorini',
              caption: 'Ballet Dots © 2018 ROH. Photograph by James Bellorini',
            },
            {
              desktopPath: 'https://live.staticflickr.com/4913/45909137161_061eeceeea_h.jpg',
              mobilePath: 'https://live.staticflickr.com/4913/45909137161_1cb4a3dc22_c.jpg',
              thumbPath: null,
              altText: 'Ballet Dots © 2018 ROH. Photograph by James Bellorini',
              caption: 'Ballet Dots © 2018 ROH. Photograph by James Bellorini',
            },
          ],
          youtubeLink: 'https://youtu.be/TXMGu2d8c8g',
          ctaText: 'Next Generation',
        },
        relationships: {
          events: {
            data: [
              { type: 'event', id: 'carmen-by-barrie-kosky' },
            ],
          },
        },
      },
    ],
  };
  
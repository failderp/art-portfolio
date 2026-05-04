type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  title?: string;
  year?: number;
  mediums?: string[];
  referenceImages?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  }[];
  detailImages?: {
    src: string;
    width: number;
    height: number;
    alt?: string;
  }[];
};

type GallerySection = {
  name: string;
  slug: string;
  pieces: GalleryPhoto[];
};

export const galleryConfig: GallerySection[] = [
  {
    name: "Traditional",
    slug: 'traditional',
    pieces: [
      {
        src: '/images/gallery/traditional/Abby Figure Drawing Sketch - pencil on paper (Feb 2009).JPG',
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Abby Figure Drawing Sketch",
        alt: "pencil on paper (Feb 2009)",
        mediums: ["pencil on paper"]
      },
      {
        src: "/images/gallery/traditional/The Controller (full) - oil pastel on paper (circa 2009).JPG",
        width: 2048,
        height: 1536,
        year: 2009,
        title: "The Controller",
        alt: "oil pastel on paper (circa 2009)",
        mediums: ["oil pastel"],
      },
      {
        src: "/images/gallery/traditional/Basset Hound - acrylic painting on canvas (circa 2007).JPG",
        width: 1280,
        height: 960,
        year: 2007,
        title: "Basset Hound",
        alt: "acrylic painting on canvas (circa 2007)",
        mediums: ["acrylic on canvas"],
      },
      {
        src: "/images/gallery/traditional/Black Ballerina - chalk on chalkboard (April 2011).jpg",
        width: 1944,
        height: 2592,
        year: 2011,
        title: "Black Ballerina",
        alt: "chalk on chalkboard (April 2011)",
        mediums: ["chalk on chalkboard"],
      },
      {
        src: "/images/gallery/traditional/Bowling Alley Conversation (censored) - colored pencil on paper (circa 2008).JPG",
        width: 2048,
        height: 1536,
        year: 2008,
        title: "Bowling Alley Conversation",
        alt: "colored pencil on paper (circa 2008)",
        mediums: ["colored pencil on paper"],
        referenceImages: [
          {
            src: "/images/gallery/traditional/Bowling Alley Conversation (reference) - colored pencil on paper (circa 2008).jpg",
            width: 2048,
            height: 1536,
            alt: "reference image of Bowling Alley Conversation - colored pencil on paper (circa 2008)",
          },
        ],
      },
      {
        src: "/images/gallery/traditional/Chiaroscuro Portrait - charcoal (2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Chiaroscuro Portrait",
        alt: "charcoal (2009)",
        mediums: ["charcoal"],
      },
      {
        src: "/images/gallery/traditional/Classmate Figure Drawing - charcoal on paper (circa 2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Classmate Figure Drawing",
        alt: "charcoal on paper (circa 2009)",
        mediums: ["charcoal"],
      },
      {
        src: "/images/gallery/traditional/Classmate Portrait - ink wash on paper (circa 2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Classmate Portrait",
        alt: "ink wash on paper (circa 2009)",
        mediums: ["ink wash"],
      },
      {
        src: "/images/gallery/traditional/Concept Sketch of Kip from The Nest Archive (Erik Perez) - pencil on paper (April 2026).jpg",
        width: 3072,
        height: 4096,
        year: 2026,
        title: "Concept Sketch of Kip from The Nest Archive (Erik Perez)",
        alt: "pencil on paper (April 2026)",
        mediums: ["pencil on paper"],
        referenceImages: [
          {
            src: "/images/gallery/traditional/Concept Sketch of Kip (reference 1) from The Nest Archive (Erik Perez) - pencil on paper (April 2026).png",
            width: 2726,
            height: 4096,
            alt: "reference image for Concept Sketch of Kip from The Nest Archive (Erik Perez) - pencil on paper (April 2026)",
          },
          {
            src: "/images/gallery/traditional/Concept Sketch of Kip (reference 2) from The Nest Archive (Erik Perez) - pencil on paper (April 2026).png",
            width: 1600,
            height: 1600,
            alt: "reference image for Concept Sketch of Kip from The Nest Archive (Erik Perez) - pencil on paper (April 2026)",
          }
        ],
      },
      {
        src: "/images/gallery/traditional/Corkboard Mirror Self Portrait - pencil on paper (Jan 2012).jpg",
        width: 480,
        height: 640,
        year: 2012,
        title: "Corkboard Mirror Self Portrait",
        alt: "pencil on paper (Jan 2012)",
        mediums: ["pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Cresting Angel - pencil on paper (Feb 2020).jpg",
        width: 2080,
        height: 2435,
        year: 2020,
        title: "Cresting Angel",
        alt: "pencil on paper (Feb 2020)",
        mediums: ["pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Dachshund Diamond (censored) - pencil and colored pencil on paper (circa 2006).JPG",
        width: 1280,
        height: 960,
        year: 2006,
        title: "Dachshund Diamond",
        alt: "pencil and colored pencil on paper (circa 2006)",
        mediums: ["pencil", "colored pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Dorm Room Drunk - pencil on lined paper (circa 2010).jpg",
        width: 1536,
        height: 2048,
        year: 2010,
        title: "Dorm Room Drunk",
        alt: "pencil on lined paper (circa 2010)",
        mediums: ["pencil on lined paper"],
      },
      {
        src: "/images/gallery/traditional/Driveway Fish collaboration (censored) - sidewalk chalk (June 2011).JPG",
        width: 1944,
        height: 2592,
        year: 2011,
        title: "Driveway Fish collaboration",
        alt: "sidewalk chalk (June 2011)",
        mediums: ["sidewalk chalk"],
      },
      {
        src: "/images/gallery/traditional/Ducky Still Life (censored) - pencil on paper (circa 2006).JPG",
        width: 2048,
        height: 1536,
        year: 2006,
        title: "Ducky Still Life",
        alt: "pencil on paper (circa 2006)",
        mediums: ["pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Earthy Still Life (censored) - chalk pastel on paper (circa 2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Earthy Still Life",
        alt: "chalk pastel on paper (circa 2009)",
        mediums: ["chalk pastel on paper"],
      },
      {
        src: "/images/gallery/traditional/Eleventh Grade Chiaroscuro Self Portrait (censored) - pencil on paper (2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Eleventh Grade Chiaroscuro Self Portrait",
        alt: "pencil on paper (2009)",
        mediums: ["pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Esplanades, Montpellier - ballpoint pen on paper (April 2013).jpg",
        width: 480,
        height: 640,
        year: 2013,
        title: "Esplanades, Montpellier",
        alt: "ballpoint pen on paper (April 2013)",
        mediums: ["ballpoint pen on paper"],
      },
      {
        src: "/images/gallery/traditional/Gear - oil pastel on paper (circa 2009).JPG",
        width: 2048,
        height: 1536,
        year: 2009,
        title: "Gear",
        alt: "oil pastel on paper (circa 2009)",
        mediums: ["oil pastel on paper"],
      },
      {
        src: "/images/gallery/traditional/Gigi Portrait from memory - pencil on paper (March 2012).jpg",
        width: 480,
        height: 640,
        year: 2012,
        title: "Gigi Portrait from memory",
        alt: "pencil on paper (March 2012)",
        mediums: ["pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Golden Retriever Battle - colored pencil on paper (circa 2007).JPG",
        width: 1280,
        height: 960,
        year: 2007,
        title: "Golden Retriever Battle",
        alt: "colored pencil on paper (circa 2007)",
        mediums: ["colored pencil on paper"],
      },
      {
        src: "/images/gallery/traditional/Hairy Scary Tooth Fairy - water color and colored pencil (circa 2009).JPG",
        width: 1536,
        height: 2048,
        year: 2009,
        title: "Hairy Scary Tooth Fairy",
        alt: "water color and colored pencil (circa 2009)",
        mediums: ["water color", "colored pencil"],
        referenceImages: [
          {
            src: '/images/gallery/traditional/Hairy Scary Tooth Fairy (reference) - water color and colored pencil (circa 2009).png',
            width: 600,
            height: 800,
            alt: "reference image for Hairy Scary Tooth Fairy - water color and colored pencil (circa 2009)",
          }
        ]
      },
      {
        src: "/images/gallery/traditional/Hand-heart - pencil on paper (circa 2007).JPG",
        width: 1280,
        height: 960,
        year: 2007,
        title: "Hand-heart",
        alt: "pencil on paper (circa 2007)",
        mediums: ["pencil on paper"],
      },
    ],
  },
  {
    name: "Digital",
    slug: 'digital',
    pieces: [
      {
        src: "/images/gallery/digital/The Round Moon (recolor) - pencil on paper and digital recolor (Feb 2021).png",
        width: 3840,
        height: 2160,
        year: 2021,
        title: "The Round Moon (recolor)",
        alt: "pencil on paper and digital recolor (Feb 2021)",
        mediums: ["pencil on paper", "digital recolor"],
      },
    ],
  },
  {
    name: "Doodles",
    slug: 'doodles',
    pieces: [],
  },
  {
    name: "Mixed Media",
    slug: 'mixed-media',
    pieces: [
      // {
      //   src: "/images/gallery/mixed-media/",
      //   height: "",
      //   width: "",
      //   year: "",
      //   title: "",
      //   alt: "",
      //   mediums: [],
      //   referenceImages: [
      //     {
      //       src: "/images/gallery/mixed-media/",
      //       height: "",
      //       width: "",
      //       alt: "",
      //     }
      //   ],
      //   detailImages: [
      //     {
      //       src: "/images/gallery/mixed-media/",
      //       height: "",
      //       width: "",
      //       alt: "",
      //     }
      //   ]
      // },
      {
        src: "/images/gallery/mixed-media/Andrew's Swing Dance Duet - mullbery watercolor and ballpoint pen on paper (June 2011).jpg",
        width: 1944,
        height: 2592,
        year: 2011,
        title: "Andrew's Swing Dance Duet",
        alt: "personal summertime project - mullbery watercolor and ballpoint pen on paper (June 2011)",
        mediums: ["mulberry watercolor", "ballpoint pen"],
        referenceImages: [
          {
            src: "/images/gallery/mixed-media/Andrew's Swing Dance Duet [reference] - mullbery watercolor and ballpoint pen on paper (June 2011).jpg",
            width: 1944,
            height: 2592,
            alt: "photo of Andrew and his partner swing dancing at an event",
          },
        ],
        detailImages: [
          {
            src: "/images/gallery/mixed-media/Andrew's Swing Dance Duet [paint] - mullbery watercolor and ballpoint pen on paper (June 2011).jpg",
            width: 1944,
            height: 2592,
            alt: "personal summertime project reference image - paint only",
          },
        ],
      },
      {
        src: "/images/gallery/mixed-media/Backpack Strap - ballpoint pen on masking tape (circa 2009).jpg",
        width: 1280,
        height: 1024,
        year: 2009,
        title: "Backpack Strap",
        alt: "ballpoint pen on masking tape (circa 2009)",
        mediums: ["ballpoint pen"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/DerpSquad Mug - digital print on mug (June 2021).jpg",
        width: 2112,
        height: 4608,
        year: 2021,
        title: "DerpSquad Mug",
        alt: "digital print on mug (June 2021)",
        mediums: ["digital print"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Giraffe and the Sun (unfinished) - colored paper (circa 2010).jpg",
        width: 1024,
        height: 1280,
        year: 2010,
        title: "Giraffe and the Sun [unfinished]",
        alt: "colored paper (circa 2010)",
        mediums: ["colored paper"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Heart Wings (self-portrait) - ballpoint pen on jean (circa 2012).JPG",
        width: 1536,
        height: 2048,
        year: 2012,
        title: "Heart Wings (self-portrait)",
        alt: "ballpoint pen on jean (circa 2012)",
        mediums: ["ballpoint pen"],
        referenceImages: [
          {
            src: "/images/gallery/mixed-media/Heart Wings (reference) - ballpoint pen on jean (circa 2012).jpg",
            height: 2048,
            width: 1536,
            alt: "reference image of Heart Wings (self-portrait) - ballpoint pen on jean (circa 2012)",
          },
        ],
        detailImages: [
          {
            src: "/images/gallery/mixed-media/Heart Wings (detail) - ballpoint pen on jean (circa 2012).jpg",
            height: 2048,
            width: 1536,
            alt: "detail image of Heart Wings (self-portrait) - ballpoint pen on jean (circa 2012)",
          },
        ],
      },
      {
        src: "/images/gallery/mixed-media/Landscaped pathway - broken concrete (Aug 2023).jpg",
        width: 2112,
        height: 4608,
        year: 2023,
        title: "Landscaped pathway",
        alt: "broken concrete (Aug 2023)",
        mediums: ["concrete", "photography"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Pain Killers - soft block carving and colored pencil on paper (March 2009).JPG",
        width: 2048,
        height: 1536,
        year: 2009,
        title: "Pain Killers",
        alt: "soft block carving and colored pencil on paper (March 2009)",
        mediums: ["soft block carving", "colored pencil"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Seaweed Korra - seaweed on beach sand (July 2021).jpg",
        width: 4608,
        height: 2112,
        year: 2021,
        title: "Seaweed Korra",
        alt: "seaweed on beach sand (July 2021)",
        mediums: ["seaweed", "photography"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Trombone Table (detail) - acrylic paint on wood (Aug 2014).jpg",
        width: 2592,
        height: 1944,
        year: 2014,
        title: "Trombone Table (detail)",
        alt: "acrylic paint on wood (Aug 2014)",
        mediums: ["acrylic paint", "wood"],
        referenceImages: [],
        detailImages: [
          {
            src: "/images/gallery/mixed-media/Trombone Table - acrylic paint on wood (Aug 2014).JPG",
            width: 2592,
            height: 1944,
            alt: "full image of Trombone Table - acrylic paint on wood (Aug 2014)",
          },
        ],
      },
      {
        src: "/images/gallery/mixed-media/Upcycled Wallet (censored) - computer parts (circa 2012).JPG",
        width: 640,
        height: 480,
        year: 2012,
        title: "Upcycled Wallet",
        alt: "computer parts (circa 2012)",
        mediums: ["computer parts", "photography"],
        referenceImages: [],
        detailImages: [],
      },
      {
        src: "/images/gallery/mixed-media/Armdoodle Emo - marker on skin (circa 2010).jpg",
        width: 1280,
        height: 1024,
        year: 2010,
        title: "Armdoodle Emo",
        alt: "marker on skin (circa 2010)",
        mediums: ["marker"],
        referenceImages: [],
        detailImages: [],
      },
    ],
  },
];

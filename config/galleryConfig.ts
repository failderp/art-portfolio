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
  pieces: GalleryPhoto[];
};

export const galleryConfig: GallerySection[] = [
  {
    name: "Traditional",
    pieces: [],
  },
  {
    name: "Digital",
    pieces: [],
  },
  {
    name: "Doodles",
    pieces: [],
  },
  {
    name: "Mixed Media",
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

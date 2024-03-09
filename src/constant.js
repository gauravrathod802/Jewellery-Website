export const routes = [
    {
      name: "Home",
      link: "/Jewellery-Website/",
    },
      {
        name: "Shop by Category",
        link: "/Shop-by-category",
  
        subRoutes: [
          {
            name: "Rings",
            link: "/Jewellery-Website/category/Rings",
          },
          {
            name: "NeckLaces",
            link: "/Jewellery-Website/category/necklaces",
          },
          {
            name: "Earrings",
            link: "/Jewellery-Website/category/earrings",
          },
          {
            name: "Bracelets",
            link: "/Jewellery-Website/category/bracelets",
          },
        ],
  
      },
      {
        name: "Latest Collections",
        link: "/Jewellery-Website/latest-collections",
      },
      {
        name: "New Arrivals",
        link: "/Jewellery-Website/new-arrivals",
      },
  
      {
        name: "Offers",
        link: "/Jewellery-Website/offers",
      },
  
      {
        name: "Bestsellers",
        link: "/Jewellery-Website/best-sellers",
      },
      {
        name: "Login",
        link: "/Jewellery-Website/login",
      },
      {
        name: "Register",
        link: "/Jewellery-Website/sign-up",
      },
    ];

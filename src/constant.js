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
            link: "/category/Rings",
          },
          {
            name: "NeckLaces",
            link: "/category/necklaces",
          },
          {
            name: "Earrings",
            link: "/category/earrings",
          },
          {
            name: "Bracelets",
            link: "/category/bracelets",
          },
        ],
  
      },
      {
        name: "Latest Collections",
        link: "/latest-collections",
      },
      {
        name: "New Arrivals",
        link: "/new-arrivals",
      },
  
      {
        name: "Offers",
        link: "/offers",
      },
  
      {
        name: "Bestsellers",
        link: "/best-sellers",
      },
      {
        name: "Login",
        link: "/login",
      },
      {
        name: "Register",
        link: "/register",
      },
    ];

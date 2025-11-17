import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,
} from "./apiSimulator";


const runDashboard = () => {
  console.log("Starting dashboard...");

  
  fetchProductCatalog()
    .then((products) => {
      console.log("Product catalog:");
      console.log(products);

      const reviewPromises = products.map((product) =>
      fetchProductReviews(product.id)
        .then((reviews) => ({
          product,
          reviews,
        }))
        );
    return Promise.all(reviewPromises)
    })
    
    
    .then((productsWithReviews) => {
      console.log("Products with reviews:");
      console.log(productsWithReviews);

      return fetchSalesReport().then((salesReport) => ({
        productsWithReviews,
        salesReport,
      }));
    })
    .then((dashboardData) => {
      console.log("Full dashboard data (products, reviews, sales):");
      console.log(dashboardData);
    })
    .catch((error) => {
      console.error("Error while fetching product catalog:", error);
    })
    .finally(() => {
      console.log("Finished trying to load product catalog.\n");
    });
};

runDashboard();
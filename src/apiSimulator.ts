export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
            resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
            ]);
            }else {
            reject("Failed to fetch product catalog");
            }
        }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<{ productId: number; rating: number; comment: string }[]> => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() < 0.8;

            if (success) {
            resolve([
            { productId, rating: 4.5, comment: "Great product!" },
            { productId, rating: 4.0, comment: "Pretty good." },
            ]);
            } else {
            reject(`Failed to fetch reviews for product ID ${productId}`);
            }
        }, 1500);
  });
};

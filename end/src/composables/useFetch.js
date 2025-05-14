import { ref } from "vue";

export default function useFetch() {
    const products = ref([]);
    const loading = ref(false);

    async function fetchProducts() {
        try {
            loading.value = true;
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();

            products.value = data.products;
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            loading.value = false;
        }
    }


    return { products, loading, fetchProducts }
}
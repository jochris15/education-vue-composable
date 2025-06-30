import { ref } from "vue";

export default function useCounter() {
    const counter = ref(0);

    function increment() {
        counter.value++
    }


    return { counter, increment }
}
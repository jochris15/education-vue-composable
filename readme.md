# Vue Composable

## [What is Composable?](https://vuejs.org/guide/reusability/composables)
Dalam vue, composable adalah fungsi yang memanfaatkan Composition API untuk mengelola state dan logika dalam aplikasi Vue. Composable dapat digunakan untuk mengelola state, melakukan side effect, dan mengatur lifecycle hooks. Composable juga dapat digunakan untuk membuat reusable logic yang dapat digunakan di beberapa komponen.

## Why use Composable?
- Memudahkan dalam mengelola state dan logika dalam aplikasi Vue.
- Memudahkan dalam membuat reusable logic yang dapat digunakan di beberapa komponen.
- Memudahkan dalam mengelola side effect dan lifecycle hooks.

## Export Composable 
Composable dapat diekspor dengan menggunakan 2 cara yaitu :
- `export default` = hanya bisa mengekspor satu composable, importnya bisa menggunakan nama apapun
- `export` = bisa mengekspor beberapa composable, importnya harus sesuai dengan nama yang diekspor dengan cara destructuring.

## Composable vs Pinia
**Composeable** digunakan untuk mengelola state & logic yang bersifat reusable , tetapi perubahannya tetap secara lokal di dalam komponen yang menggunakannya. Contohnya digunakan untuk mengambil data dari API, mengelola form, dan lain-lain. Perubahan state di dalam composable tidak akan mempengaruhi komponen lain yang tidak menggunakan composable tersebut.

**Pinia** digunakan untuk mengelola state & logic yang bersifat global, perubahannya dilakukan didalam store sehingga bersifat global. Contohnya digunakan untuk mengelola state yang digunakan di beberapa komponen, seperti user authentication, theme, dan lain-lain. Perubahan state di dalam store akan mempengaruhi semua komponen yang menggunakan store tersebut.

## Demo 
Dalam demo ini kita akan menggunakan composable untuk mengambil data dari API

Step by step : 
1. Buat folder `composables` di dalam folder `src`
2. Buat file `useFetch.js` di dalam folder `composables`
3. Buat function `useFetch` di dalam file `useFetch.js`
4. Import `ref` dari `vue`
5. Pindahkan state `products` & `loading` ke dalam function `useFetch`
6. Pindahkan function `fetchProducts` di dalam function `useFetch`
7. Pastikan function useFetch mengembalikan state `products` & `loading` dan function `fetchProducts`
8. Pastikan export function `useFetch` di dalam file `useFetch.js`, bisa menggunakan `export default` / `export`
8. Import function `useFetch` di dalam file `ProductList.vue`
9. Destruktur `products` & `loading` dan function `fetchProducts` dari function `useFetch`
10. Panggil function `fetchProducts` dalam setup.
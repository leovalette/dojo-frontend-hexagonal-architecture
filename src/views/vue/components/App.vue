<template>
  <div class="p-8 text-center">
    <h1 class="mb-16 text-5xl font-bold">Bike shop</h1>
    <div class="flex justify-between gap-4">
      <div class="flex flex-1 flex-col items-center bg-blue-100 rounded p-4">
        <h2 class="mb-6 text-2xl font-bold">Available products</h2>
        <Products @product-click="onProductClick" />
      </div>
      <div class="flex flex-1 flex-col items-center bg-blue-100 rounded p-4">
        <h2 class="mb-6 text-2xl font-bold">Your cart</h2>
        <Cart
          v-if="cart"
          :cart="cart"
          @remove-product-click="onRemoveProductClick"
        />
        <div class="text-xl text-red-500">Price : {{ totalPrice }}€</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { cartDomainAdapter } from '../../adapters/cart-adapter';
import { CartUI } from '../../models/cartUI';
import { ProductUI } from '../../models/productUI';
import Cart from './Cart.vue';
import Products from './Products.vue';

const cart = ref<CartUI>();

onMounted(async () => {
  cart.value = await cartDomainAdapter.createCart();
});

const totalPrice = computed<ProductUI['price']>(() =>
  cart.value ? cartDomainAdapter.getTotalPrice(cart.value) : 0
);

const onRemoveProductClick = (product: ProductUI) => {
  if (!cart.value) {
    return;
  }
  cartDomainAdapter
    .removeProductFromCart(cart.value, product)
    .then((newCart) => {
      cart.value = newCart;
    });
};

const onProductClick = (product: ProductUI) => {
  if (!cart.value) {
    return;
  }
  cartDomainAdapter.addProductToCart(cart.value, product).then((newCart) => {
    cart.value = newCart;
  });
};
</script>

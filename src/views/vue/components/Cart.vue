<template>
  <div class="flex flex-wrap gap-2 justify-center">
    <div
      v-for="product in cart.products"
      :key="product.id"
      class="rounded bg-purple-400 w-32 h-32 p-2 flex flex-col items-center justify-between text-center"
    >
      <div>{{ product.name }}</div>
      <div>{{ product.price }}€</div>
      <button
        class="cursor-pointer bg-red-500 text-xs p-2"
        @click="onRemoveProductClick(product)"
      >
        Remove product
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { CartUI } from '../../models/cartUI';
import { ProductUI } from '../../models/productUI';

type CartProps = {
  cart: CartUI;
};
defineProps<CartProps>();
const emit = defineEmits<{
  (e: 'removeProductClick', product: ProductUI): void;
}>();

const onRemoveProductClick = (product: ProductUI) => {
  emit('removeProductClick', product);
};
</script>

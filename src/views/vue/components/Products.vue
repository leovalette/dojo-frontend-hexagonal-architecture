<template>
  <div class="flex flex-wrap gap-2 justify-center">
    <div
      v-for="product in products"
      :key="product.id"
      @click="onProductClick(product)"
      class="cursor-pointer rounded bg-orange-400 w-28 h-20 flex flex-col items-center justify-center text-center"
    >
      <div>{{ product.name }}</div>
      <div>{{ product.price }}€</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { productDomainAdapter } from '../../adapters/product-adapter';
import { ProductUI } from '../../models/productUI';

const emit = defineEmits<{
  (e: 'productClick', product: ProductUI): void;
}>();
const { data: products } = useQuery({
  queryKey: ['products'],
  queryFn: productDomainAdapter.getProducts,
  initialData: [],
});

const onProductClick = (product: ProductUI) => {
  emit('productClick', product);
};
</script>

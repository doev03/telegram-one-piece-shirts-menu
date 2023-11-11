import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { AppState } from '$lib/app_state';
import { page } from '$app/stores';

export const load: PageLoad = ({ params }) => {
  console.log(params);
  const id = '0';
  if (id) {
    const product = AppState.instance.getProduct(id);
    if (product) {
      return product
    }
  }

	throw error(404, 'Not found');
};
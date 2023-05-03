import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useSanityClient } from 'astro-sanity';
import { createImageBuilder } from 'astro-sanity';

export const imageBuilder = createImageBuilder(useSanityClient());

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}

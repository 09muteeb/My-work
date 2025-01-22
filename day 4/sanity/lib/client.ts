// sanity/lib/client.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '13g9t4g4', // Replace with your actual project ID
  dataset: 'production', // Replace with your actual dataset
  useCdn: true,
  apiVersion: '2023-01-01',
});

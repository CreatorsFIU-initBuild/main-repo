import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
  host: 'http://127.0.0.1:7700', // Replace with your Meilisearch host if different
  apiKey: 'your-api-key', // Replace with your Meilisearch API key if necessary
})

// Assuming your index is called "products"
const index = client.index('products') // Replace with your actual index name

export { index }

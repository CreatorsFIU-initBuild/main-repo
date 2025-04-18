import { MeiliSearch } from 'meilisearch'

// Initialize the MeiliSearch client
const client = new MeiliSearch({
  host: 'http://127.0.0.1:7700', // URL of your MeiliSearch server
})

const index = client.index('products') // The name of your index (you can choose any name)

const data = [
  {
    id: 1,
    title: 'NVIDIA GeForce RTX 4090',
    category: 'Graphics Card',
    price: 1599.99,
  },
  {
    id: 2,
    title: 'AMD Radeon RX 7900 XTX',
    category: 'Graphics Card',
    price: 999.99,
  },
  {
    id: 3,
    title: '2022 Tesla Model 3',
    category: 'Electric Vehicle',
    price: 38999.99,
  },
  {
    id: 4,
    title: '2023 Toyota Corolla',
    category: 'Car',
    price: 22999.99,
  },
  {
    id: 5,
    title: 'Intel Core i9-14900K Processor',
    category: 'CPU',
    price: 599.99,
  },
  {
    id: 6,
    title: 'Apple MacBook Pro 16-inch M3 Max',
    category: 'Laptop',
    price: 3499.0,
  },
  {
    id: 7,
    title: 'Ford F-150 Lightning',
    category: 'Electric Truck',
    price: 51999.0,
  },
  {
    id: 8,
    title: 'Asus ROG Strix Z790-E Motherboard',
    category: 'Motherboard',
    price: 379.99,
  },
  {
    id: 9,
    title: 'Sony PlayStation 5 Console',
    category: 'Gaming Console',
    price: 499.99,
  },
  {
    id: 10,
    title: 'Dell Ultrasharp 34” Curved Monitor',
    category: 'Monitor',
    price: 899.99,
  },
]

// Function to add documents to the index
async function addDocuments() {
  try {
    const response = await index.addDocuments(data) // Add data to the 'products' index
    console.log('Documents added:', response)
  } catch (error) {
    console.error('Error adding documents:', error)
  }
}

addDocuments()

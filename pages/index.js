import RestaurantList from '../components/RestaurantList';

export default function Home({ restaurants }) {
  return (
    <main className='container'>
      <RestaurantList restaurants={restaurants} />
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();

  return {
    props: {
      restaurants
    },
  }
}
import ArticlesSimilar from '@/components/ArticlesSimilar';
import Header from '@/components/Header';
import Product from '@/components/Product';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='px-8'>
        <Product />
        <ArticlesSimilar />
      </div>
    </main>
  );
}

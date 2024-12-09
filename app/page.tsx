import ArticlesSimilar from '@/components/ArticlesSimilar';
import Header from '@/components/Header';
import InterestsProducts from '@/components/InterestsProducts';
import Process from '@/components/Process';
import Product from '@/components/Product';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='px-8'>
        <Product />
        <ArticlesSimilar />
        <InterestsProducts />
        <Process />
      </div>
    </main>
  );
}

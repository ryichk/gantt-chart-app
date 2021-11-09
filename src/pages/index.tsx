import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className=''>
      <header className='flex justify-between p-5'>
        <Link href='/'>
          <a className='text-xl'>ガントチャートアプリ</a>
        </Link>
        <div className='flex'>
          <div className='mr-2 p-3'>
            <Link href='login'>
              <a className='link link-primary'>ログイン</a>
            </Link>
          </div>
          <Link href='signup'>
            <button className='btn btn-primary'>サインアップ</button>
          </Link>
        </div>
      </header>
      <section>
        <div className='max-w-lg m-auto pt-16'>
          <div className='mb-16'>
            <div>
              <h1 className='text-4xl mb-3'>ガントチャートアプリを利用してプロジェクトの進捗を管理しよう。</h1>
              <p className='text-lg'>今お使いのプロジェクト管理アプリに不満はありませんか。ガントチャートアプリはあなたのプロジェクト管理を効率化します。</p>
            </div>
          </div>
          <form>
            <input type='email' placeholder='Eメール' className='input input-bordered border-2 border-gray-300 w-96 mb-5' />
            <div>
              <button className='btn btn-primary text-lg'>アカウントを作成 - 無料です。</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;

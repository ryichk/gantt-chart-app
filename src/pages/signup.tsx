import { NextPage } from 'next';
import Link from 'next/link';

const Signup: NextPage = () => {
  return (
    <>
      <div className='text-center my-10'>
        <h1 className='text-2xl'>ガントチャートアプリ</h1>
      </div>
      <div className='card w-96 shadow-md m-auto py-5 px-8 rounded-sm'>
        <div className=''>
          <h1 className='text-gray-500 text-center mt-3 mb-8'>アカウントを作成</h1>
          <form>
            <input type='email' placeholder='メールアドレスを入力' className='input input-bordered border-2 border-gray-300 w-full' />
            <p className='text-xs my-5'>
              アカウントを作成することにより、
              <Link href='/legal'><a className='link-primary link-hover'>利用規約</a></Link>および
              <Link href='/privacy'><a className='link-primary link-hover'>プライバシーポリシー</a></Link>を読み、これに同意するものとします。
            </p>
            <button className='btn btn-primary w-full text-base'>続行</button>
          </form>
          <form>
            <div className='my-5 text-sm text-center'>または</div>
            <button className='btn border-transparent shadow-md w-full'>Googleアカウントで続ける</button>
          </form>
          <hr className='mt-8 mb-5'></hr>
          <div className='text-center text-sm'>
            <Link href='/login'>
              <a className='link-primary link-hover'>アカウントをお持ちの場合は、ログイン</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

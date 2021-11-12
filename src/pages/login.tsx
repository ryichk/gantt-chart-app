import { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => {
  return (
    <>
      <div className='text-center my-10'>
        <h1 className='text-2xl'>ガントチャートアプリ</h1>
      </div>
      <div className='card w-96 shadow-md m-auto py-5 px-8 rounded-sm'>
        <div className=''>
          <h1 className='text-gray-500 text-center mt-3 mb-8'>アプリにログイン</h1>
          <form>
            <input type='email' placeholder='メールアドレスを入力' className='input input-bordered border-2 border-gray-300 w-full mb-5' />
            <input type='email' placeholder='パスワードを入力' className='input input-bordered border-2 border-gray-300 w-full mb-5' />
            <button className='btn btn-primary w-full text-base'>ログイン</button>
          </form>
          <form>
            <div className='my-5 text-sm text-center'>または</div>
            <button className='btn border-transparent shadow-md w-full'>Googleアカウントで続ける</button>
          </form>
          <hr className='mt-8 mb-5'></hr>
          <div className='flex justify-center text-sm'>
            <Link href='/forgot'>
              <a className='link-primary link-hover'>ログインできない場合</a>
            </Link>
            ・
            <Link href='/signup'>
              <a className='link-primary link-hover'>アカウントを作成</a>
            </Link>
          </div>
        </div>
      </div>
      <ul className='flex justify-center w-96 my-4 mx-auto text-xs'>
        <li>
          <Link href='/privacy'><a className='link-primary link-hover'>プライバシーポリシー</a></Link>
        </li>
        ・
        <li>
          <Link href='/legal'><a className='link-primary link-hover'>サービス利用規約</a></Link>
        </li>
      </ul>
    </>
  );
};

export default Login;

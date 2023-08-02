import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { parseCookies } from "nookies";

export default function HomePage({ isLoggedIn }) {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/addresses');
    } else {
      router.replace('/sign-in');
    }
  }, [isLoggedIn]);

  return <div>Redirecting...</div>;
}

export async function getServerSideProps(context) {
  // perform authentication check here
  const cookies = parseCookies(context);
  const token = cookies.token;

  if(!token) {
    return {
        props: {
          isLoggedIn : false,
        },
      };
  } else {
    return {
        props: {
          isLoggedIn : true,
        },
      };
  }
}

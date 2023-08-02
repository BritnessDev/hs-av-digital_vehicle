function withAuth(getServerSidePropsFunc) {
  return async (context) => {
    const cookies = parseCookies(context);
    const token = cookies.token;

    if (!token) {
        return {
            redirect: {
              destination: '/sign-in',
              permanent: false,
            },
          };
    }
    // if user is authenticated, continue with normal page rendering
    return await getServerSidePropsFunc(context);
  };
}

export default withAuth;

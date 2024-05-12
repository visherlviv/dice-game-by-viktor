export async function getStaticProps() {
  return {
    redirect: {
      destination: "/game",
      permanent: false,
    },
  };
}

export default function IndexPage() {
  return null;
}

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin", // Redirige al inicio de sesión si no hay sesión
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Dashboard({ session }) {
  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <p>Hola, usuario!</p>
    </div>
  );
}
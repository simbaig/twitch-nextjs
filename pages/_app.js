import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "../components/Navbar";

function MyApp({ session, Component, pageProps }) {
	return (
		<SessionProvider session={session}>
			<Navbar />
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;

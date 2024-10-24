import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal"

export const metadata = {
  title: "Riga Aptos",
  description: "Creada por Daniel Romero",
};

const font = Nunito({
  subsets: ["latin"],

});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel="Enviar" title="Hola Mundo" isOpen />
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

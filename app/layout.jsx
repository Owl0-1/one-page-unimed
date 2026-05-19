import localFont from "next/font/local";
import "./globals.css";

const unimedSans = localFont({
  src: [
    {
      path: "../public/fonts/UnimedSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/UnimedSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/UnimedSans-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/UnimedSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/UnimedSans-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/UnimedSans-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-unimed-sans",
  display: "swap",
});

export const metadata = {
  title: "Unimed Urgente · Área Protegida · Aeromédico — Unimed Fortaleza",
  description:
    "Atendimento pré-hospitalar com remoção terrestre e aérea inter-hospitalar. Serviços opcionais Unimed Fortaleza.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={unimedSans.variable}>
      <body>{children}</body>
    </html>
  );
}

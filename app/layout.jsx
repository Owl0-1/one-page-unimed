import "./globals.css";

export const metadata = {
  title: "Unimed Urgente · Área Protegida · Aeromédico — Unimed Fortaleza",
  description:
    "Atendimento pré-hospitalar com remoção terrestre e aérea inter-hospitalar. Serviços opcionais Unimed Fortaleza.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}


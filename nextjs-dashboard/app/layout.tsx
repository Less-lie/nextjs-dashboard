import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${Caudex.className} antialiased'}>
        <h1> Este sera el titulo </h1>
        <div style={{border: '1px solid #000'}}>
          Esto es parte del Layout
         {children}
         <footer className='py-10 flex justify-center items-center'>
          Hecho con mucha paciencia, encerio.
        </footer>
        </div>
      </body>
    </html>
  );
}

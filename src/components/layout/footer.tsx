export function Footer() {
  return (
    <footer className="bg-background/80 border-t mt-16">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} TiengHanPhucLee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

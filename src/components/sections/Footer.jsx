import Container from "../layout/Container";

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <Container className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Spectrazex. All rights reserved.</p>
        <p>Cyber security awareness, workshops, and practical training.</p>
      </Container>
    </footer>
  );
}

export default Footer;

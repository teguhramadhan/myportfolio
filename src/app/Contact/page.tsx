export default function Contact() {
  return (
    <div className="max-w-6xl h-screen">
      <h2 className="text-2xl font-bold text-primary mb-4">Get In Touch</h2>
      <p className="text-muted mb-6">
        Currently open to new opportunities and collaborations.
      </p>
      <a
        href="mailto:teguh@example.com"
        className="inline-block border border-primary px-6 py-3 rounded text-primary hover:bg-primary hover:text-background transition"
      >
        Say Hello
      </a>
    </div>
  );
}

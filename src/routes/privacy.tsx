import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | MAYANK.DEV" },
      {
        name: "description",
        content: "Privacy policy for MAYANK.DEV and Mayank Ojha, Indore, covering contact data, WhatsApp and enquiry handling, and deletion requests.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground md:px-8">
      <div className="mx-auto max-w-3xl rounded-md border border-border bg-card p-6 shadow-sm md:p-10">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          MAYANK.DEV · Privacy Policy
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground md:text-base">
          <section>
            <h2 className="text-lg font-semibold text-foreground">Who we are</h2>
            <p className="mt-2">
              This website is operated by MAYANK.DEV / Mayank Ojha, based in Indore,
              Madhya Pradesh. For enquiries, contact us on email at mayankojha2228@gmail.com
              or by phone at +91 89629 72784.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
            <p className="mt-2">
              We may collect the information people share with us through WhatsApp, email,
              or other contact channels, including their name, phone number, and message
              content. This information is used only to answer enquiries and follow up on
              requests related to our work.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Data use and sharing</h2>
            <p className="mt-2">
              We do not sell personal data. We may use contact information to reply to
              messages, coordinate work, and continue communication about a request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Deleting your data</h2>
            <p className="mt-2">
              If you want us to delete the personal information you have shared with us,
              please email mayankojha2228@gmail.com and we will take that request into
              account as quickly as possible.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">AI-assisted replies</h2>
            <p className="mt-2">
              Messages may be processed by an AI service to help draft or improve replies.
              This is used only to support communication and to provide timely responses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground">Last updated</h2>
            <p className="mt-2">November 2026.</p>
          </section>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <a href="/" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Back to homepage
          </a>
        </div>
      </div>
    </main>
  );
}

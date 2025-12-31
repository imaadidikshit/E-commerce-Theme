

export const metadata = {
    title: "Terms of Service",
    description: "Read the terms and conditions for using the Aether website.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <header className="mb-12 text-center">
                 <h1 className="text-4xl md:text-5xl font-headline">Terms of Service</h1>
                 <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>
            <div className="prose dark:prose-invert max-w-4xl mx-auto p-8 bg-secondary/30 rounded-lg">
                <p>Welcome to Aether. By accessing or using our website and services, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. Please read them carefully.</p>
                
                <h2>1. Use of Our Service</h2>
                <p>You may use our service only for lawful purposes and in accordance with these Terms. You agree not to use the service in any way that violates any applicable federal, state, local, or international law or regulation. You must be at least 18 years old to make a purchase on our site.</p>
                
                <h2>2. Intellectual Property</h2>
                <p>The Service and its original content (including text, graphics, logos, images), features, and functionality are and will remain the exclusive property of Aether and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Aether.</p>

                <h2>3. Products & Orders</h2>
                <p>All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time. We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>
                
                <h2>4. Limitation of Liability</h2>
                <p>In no event shall Aether, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                <h2>5. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.</p>

                 <h2>6. Changes to Terms</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
            </div>
        </div>
    )
}

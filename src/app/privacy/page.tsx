

export const metadata = {
    title: "Privacy Policy",
    description: "Learn how Aether collects, uses, and protects your personal information.",
};


export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <header className="mb-12 text-center">
                 <h1 className="text-4xl md:text-5xl font-headline">Privacy Policy</h1>
                 <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </header>
            <div className="prose dark:prose-invert max-w-4xl mx-auto p-8 bg-secondary/30 rounded-lg">
                <p>Your privacy is important to us. It is Aether's policy to respect your privacy regarding any information we may collect from you across our website. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to protect it.</p>
                
                <h2>1. Information We Collect</h2>
                <p>We collect information from you when you place an order, subscribe to our newsletter, or fill out a form. This may include:</p>
                <ul>
                    <li><strong>Personal Identification Information:</strong> Name, email address, mailing address, phone number.</li>
                    <li><strong>Order Information:</strong> Products purchased, billing address, shipping address, and payment information (processed securely by our payment gateway, not stored by us).</li>
                    <li><strong>Usage Data:</strong> Information on how you interact with our website, such as pages visited and links clicked, collected through cookies and similar technologies.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes:</p>
                <ul>
                    <li>To process and fulfill your orders, including managing payments and shipping.</li>
                    <li>To communicate with you about your order or any inquiries you make.</li>
                    <li>To send periodic emails, such as newsletters and marketing communications, if you opt-in.</li>
                    <li>To improve our website, products, and customer service.</li>
                </ul>
                
                <h2>3. Data Security</h2>
                <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. All payment information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>
                
                <h2>4. Cookies</h2>
                <p>Our website uses "cookies" to enhance your experience. A cookie is a small file placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                
                <h2>5. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:care@aether.com">care@aether.com</a>.</p>
            </div>
        </div>
    )
}

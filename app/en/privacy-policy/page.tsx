import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
    title: "Privacy Policy | RemoverMarca.com",
    description: "Learn how we protect your data and images. Information about cookies, Google AdSense, and GDPR/LGPD compliance.",
    alternates: {
        canonical: "https://removermarca.com/en/privacy-policy"
    },
}

export default function PrivacyPolicyPageEn() {
    return (
        <div className="min-h-screen bg-white">
            <Header locale="en" />

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-20">

                {/* Header Section */}
                <header className="mb-16 border-b border-slate-100 pb-8">
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tighter">
                        Privacy <span className="text-blue-600">Policy</span>
                    </h1>
                    <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
                        Last Updated: January 2026
                    </p>
                </header>

                {/* Content Section */}
                <div className="space-y-12">

                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">01</span>
                            Information Collection
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed">
                                <strong className="text-slate-900">RemoverMarca.com</strong> collects only basic technical data necessary for the tool's operation, such as temporarily processed image URLs and non-identifiable usage data (browser, device type).
                                <span className="block mt-2 font-semibold text-blue-600">We do not require registration for basic removal functions.</span>
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">02</span>
                            Google AdSense and Cookies
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed mb-4">
                                We use <strong className="text-slate-900">Google AdSense</strong> to display ads. Google uses cookies (such as the DART cookie) to serve ads based on your previous visits to our website and other sites on the Internet.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <li>Google uses cookies to serve ads based on a user&apos;s prior visits.</li>
                                <li>Advertising cookies enable Google and its partners to serve ads based on visits to your sites and/or other sites on the Internet.</li>
                                <li>You may opt out of personalized advertising by visiting
                                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline ml-1">
                                        Google Ads Settings
                                    </a>.
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">03</span>
                            Data Protection Compliance
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed">
                                We ensure full transparency in compliance with GDPR and LGPD regulations.
                                <span className="block mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-800 font-medium rounded-r-xl">
                                    Maximum Security: Uploaded images are processed and automatically deleted from our servers after 1 hour of session inactivity.
                                </span>
                            </p>
                        </div>
                    </section>

                    <section className="group">
                        <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3 uppercase tracking-tight">
                            <span className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center text-sm">04</span>
                            Children's Privacy
                        </h2>
                        <div className="pl-11">
                            <p className="text-slate-600 leading-relaxed">
                                We do not knowingly collect information from children under the age of 13. If you are a parent or guardian and believe your child has provided us with data, please contact us immediately so we can remove such information from our records.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Footer Contact */}
                <div className="mt-20 pt-12 border-t border-slate-100 text-center">
                    <p className="text-slate-400 text-sm font-medium">
                        Questions about your privacy? Contact our team.
                    </p>
                </div>
            </main>
        </div>
    )
}
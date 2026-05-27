import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "@/styles/globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Bompelly Dinesh Chary | AWS DevOps & DevSecOps Engineer",
  description: "AWS DevOps & DevSecOps Engineer specializing in Kubernetes, secure CI/CD pipelines, Terraform Infrastructure as Code, AWS cloud infrastructure, and security automation.",
  keywords: [
    "Bompelly Dinesh Chary",
    "Dinesh Chary",
    "AWS DevOps",
    "DevSecOps",
    "Kubernetes Specialist",
    "Terraform IaC",
    "Jenkins Automation",
    "Trivy",
    "SonarQube",
    "Cloud Security",
    "Hyderabad DevOps"
  ],
  authors: [{ name: "Bompelly Dinesh Chary" }],
  metadataBase: new URL("https://bompelly-dineshchary.vercel.app"), // Placeholder, resolves Vercel absolute links
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bompelly-dineshchary.vercel.app",
    title: "Bompelly Dinesh Chary | AWS DevOps & DevSecOps Engineer",
    description: "AWS DevOps & DevSecOps Engineer specializing in Kubernetes, secure CI/CD pipelines, Terraform Infrastructure as Code, AWS cloud infrastructure, and security automation.",
    siteName: "B Dinesh Chary Portfolio",
    images: [
      {
        url: "/dinesh.png", // Fallback to profile avatar for OG sharing
        width: 800,
        height: 800,
        alt: "Bompelly Dinesh Chary - AWS DevOps / DevSecOps Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bompelly Dinesh Chary | AWS DevOps & DevSecOps Engineer",
    description: "AWS DevOps & DevSecOps Engineer specializing in Kubernetes, secure CI/CD pipelines, Terraform Infrastructure as Code, AWS cloud infrastructure, and security automation.",
    images: ["/dinesh.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-accent-cyan/30 selection:text-white">
        {children}
      </body>
    </html>
  )
}

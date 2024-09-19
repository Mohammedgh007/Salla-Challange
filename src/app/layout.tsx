import { RootLayout } from "@/Layouts/RootLayout"
import { Metadata } from "next"


/**
 * It calls the actual root layout; this setup is used to adhere with Next restrictions.
 */
export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  )
}

 
export function generateMetadata(): Metadata {
  
  return {
    title: "متجر التجربة الجميلة",
    description: "اكتشف أحدث صيحات الموضة والمنتجات العصرية في متجرنا الإلكتروني. تسوق بسهولة من مجموعة واسعة من العلامات التجارية المشهورة. استمتع بتجربة تسوق ممتعة ومريحة مع خدمة عملاء ممتازة."
  }
}

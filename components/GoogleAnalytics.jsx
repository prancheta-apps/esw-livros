import Script from "next/script";

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-73K8Q4M5SH"
      ></Script>
      <Script id="google-analytics">
        {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments)}
                     gtag('js', new Date());
 
                     gtag('config', 'G-73K8Q4M5SH');
                    `}
      </Script>
    </>
  );
}

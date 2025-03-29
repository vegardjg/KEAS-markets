'use client'

import { Search } from '@/components/search'
import localFont from 'next/font/local'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import Image from 'next/image'

const montserratAlt1 = localFont({
  src: '../public/fonts/MontserratAlt1-Regular.woff2',
  display: 'swap',
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className='min-h-screen bg-gradient-to-b from-[#d2e5f5] to-[#f5f9fd] flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32'>
        <div className='w-full max-w-4xl mx-auto flex flex-col items-center gap-8'>
          {/* Logo and Tagline */}
          <div className='text-center mb-8'>
            <h1 className={`${montserratAlt1.className} text-[#4484d4] text-7xl sm:text-8xl font-light tracking-[0.2em] mb-6`}>
              KEAS
            </h1>
            <p className={`${montserratAlt1.className} text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto`}>
              Your intelligent energy market assistant for real-time insights and notifications
            </p>
          </div>

          {/* Search Section */}
          <div className='w-full max-w-3xl'>
            <Search />
          </div>

          {/* Feature Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12'>
            <div className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-center mb-4'>
                <div className='bg-[#4484d4]/10 p-3 rounded-lg'>
                  <svg className="w-6 h-6 text-[#4484d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className={`${montserratAlt1.className} text-xl text-gray-800 ml-3`}>Market Intelligence</h3>
              </div>
              <p className='text-gray-600'>Real-time analysis of energy market trends and price movements</p>
            </div>

            <div className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-center mb-4'>
                <div className='bg-[#4484d4]/10 p-3 rounded-lg'>
                  <svg className="w-6 h-6 text-[#4484d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className={`${montserratAlt1.className} text-xl text-gray-800 ml-3`}>Smart Alerts</h3>
              </div>
              <p className='text-gray-600'>Customizable notifications for market conditions and events</p>
            </div>

            <div className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'>
              <div className='flex items-center mb-4'>
                <div className='bg-[#4484d4]/10 p-3 rounded-lg'>
                  <svg className="w-6 h-6 text-[#4484d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className={`${montserratAlt1.className} text-xl text-gray-800 ml-3`}>Data Visualization</h3>
              </div>
              <p className='text-gray-600'>Interactive charts and analytics for better decision making</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className='w-full mt-16 bg-white rounded-xl shadow-sm p-8'>
            <h2 className={`${montserratAlt1.className} text-[#4484d4] text-3xl font-light text-center mb-8`}>
              Frequently Asked Questions
            </h2>
            <Accordion type='single' collapsible className='w-full'>
              <AccordionItem value='item-1' className='border-b border-gray-200'>
                <AccordionTrigger className='hover:text-[#4484d4]'>What is the purpose of KEAS?</AccordionTrigger>
                <AccordionContent>
                  KEAS is a powerful tool to notify you about future events of interest in the energy market. Our application allows you to send in a prompt about a future event or condition that you want to be notified about, such as price thresholds or market trends.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2' className='border-b border-gray-200'>
                <AccordionTrigger className='hover:text-[#4484d4]'>How does KEAS work?</AccordionTrigger>
                <AccordionContent>
                  KEAS uses advanced algorithms and AI to deliver you notifications. Simply type your prompt in the search box, add your email address, and click submit. You'll receive a confirmation email that your prompt has been received and is being processed.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3' className='border-b border-gray-200'>
                <AccordionTrigger className='hover:text-[#4484d4]'>Is KEAS free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, KEAS is currently free for personal use with a limit of 1 notification per user. We're working on premium subscription plans that will offer more notifications and frequent checks.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Footer */}
        <footer className='w-full bg-white mt-16 py-8 border-t border-gray-100'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-center items-center gap-8'>
              <Link href='/about-us' className='text-gray-600 hover:text-[#4484d4] transition-colors'>
                About Us
              </Link>
              <Link href='/faq' className='text-gray-600 hover:text-[#4484d4] transition-colors'>
                FAQ
              </Link>
              <Link href='/advertising' className='text-gray-600 hover:text-[#4484d4] transition-colors'>
                Advertising
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}


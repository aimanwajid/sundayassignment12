import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="max-w-[1920px] py-16 px-4 sm:px-8 lg:px-[220px] bg-[#043873]">
        <div className="mx-auto max-w-7xl gap-10">
          <div className="flex flex-wrap items-center justify-between gap-10 md:items-start lg:flex-nowrap">
            {/* Logo and Description */}
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <Image
                src="/Logo.png"
                alt="logo"
                width={191}
                height={191}
              />
              <p className="my-4 text-white text-sm leading-relaxed">
                Whitepace was created for the new ways we live and work. We make better workspaces around the world.
              </p>
            </div>

            {/* Links Section */}
            <div className="w-full sm:w-1/2 md:w-2/3">
              <div className="grid grid-cols-2 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* Product Links */}
                <div>
                  <h3 className="font-bold uppercase text-white text-base">Product</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white">
                    <li><Link href="/#features">Overview</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li><Link href="/#faq">Customer stories</Link></li>
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="font-bold uppercase text-white text-base">Resources</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white">
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/guides">Guides & Tutorials</Link></li>
                    <li><Link href="/contact-us">Help Center</Link></li>
                  </ul>
                </div>

                {/* Company Links */}
                <div>
                  <h3 className="font-bold uppercase text-white text-base">Company</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white">
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/careers">Careers</Link></li>
                    <li><Link href="/media-kit">Media Kit</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-10 flex justify-center items-center text-sm text-white">
            <div>©2024 Whitepace LLC. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
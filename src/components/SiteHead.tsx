import React from "react";
import type { HeadFC } from "gatsby";

// Shared document <head> for every page, rendered via Gatsby's Head API.
// (Replaces the previous react-helmet usage in the Layout component.)
export const SiteHead: HeadFC = () => (
  <>
    <title>This Christography | Albuquerque Photographer</title>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/icons/apple-touch-icon.png?v=U8Opo8"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/icons/favicon-32x32.png?v=U8Opo8"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/icons/favicon-16x16.png?v=U8Opo8"
    />
    <link rel="manifest" href="/icons/site.webmanifest?v=U8Opo8" />
    <link
      rel="mask-icon"
      href="/icons/safari-pinned-tab.svg?v=U8Opo8"
      color="#2d89f0"
    />
    <link rel="shortcut icon" href="/icons/favicon.ico?v=U8Opo8" />
    <meta name="msapplication-TileColor" content="#2d89f0" />
    <meta
      name="msapplication-config"
      content="/icons/browserconfig.xml?v=U8Opo8"
    />
    <meta name="theme-color" content="#ffffff" />
    <meta
      name="description"
      content="Photographer in Albuquerque, NM specializing in portraits, senior portraits, automotive, engagement, weddings, and landscapes."
    />
    <meta
      name="keywords"
      content="photographers near me, photographer, albuquerque, portraits, landscape, senior pictures, car photography, engagement photos, wedding photography, this christography, this chris, christopher salinas"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script
      src="https://kit.fontawesome.com/1407f4e18d.js"
      crossOrigin="anonymous"
    />
  </>
);

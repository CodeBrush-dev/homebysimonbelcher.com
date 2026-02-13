// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.homebysimonbelcher.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.homebysimonbelcher.com/","title_tag":"Home Renovation Harpenden & Design | Home By Simon","meta_description":"Design-led home renovation Harpenden specialists offering home office conversion, kitchen and bathroom remodeling, custom staircases and start to finish service."},{"page_url":"https://www.homebysimonbelcher.com/projects-1","title_tag":"Property Restoration Harpenden Projects | Simon Belcher","meta_description":"Explore Harpenden builders project portfolio, from full property restoration Harpenden to kitchen remodeling with start to finish service and turn key solutions."},{"page_url":"https://www.homebysimonbelcher.com/projects","title_tag":"Property Restoration Harpenden | Old Coach House","meta_description":"See our Old Coach House property restoration Harpenden project, blending sensitive restoration with modern home design services and turn key solutions."},{"page_url":"https://www.homebysimonbelcher.com/surreyhome","title_tag":"Home Renovation & Design Services | Simon Belcher","meta_description":"Discover bespoke home design services, home decoration services and start to finish service from experienced Harpenden builders working on Surrey home projects."},{"page_url":"https://www.homebysimonbelcher.com/officemeetingrooms","title_tag":"Home Office Conversion & Meeting Rooms | Simon Belcher","meta_description":"Office refurbishment and home office conversion specialists delivering multifunctional workspaces with full design, installation and start to finish service."},{"page_url":"https://www.homebysimonbelcher.com/copy-of-office-meeting-rooms","title_tag":"Kitchen Remodeling & Utility Design | Home By Simon","meta_description":"Compact utility and kitchen remodeling with clever storage, custom design, turn key solutions and start to finish service for modern family homes."},{"page_url":"https://www.homebysimonbelcher.com/copy-of-kimpton-utility","title_tag":"Home Renovation Harpenden Area | Kimpton Project","meta_description":"Comprehensive home renovation near Harpenden with home design services, kitchen remodeling, home decoration services and full start to finish service."},{"page_url":"https://www.homebysimonbelcher.com/testimonials","title_tag":"Harpenden Builders Reviews | Home By Simon Belcher","meta_description":"Read client testimonials for Harpenden builders delivering home renovation Harpenden, property restoration and turn key solutions with start to finish service."}],"keywords":["Home Renovation Harpenden","Home Office Conversion","Kitchen Remodeling Harpenden","Bathroom Renovation Harpenden","Home Design Services","Custom Staircases Harpenden","Home Gym Installation","Property Restoration Harpenden","Home Decoration Services","turn key solutions","harpenden builders","start to finish service"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.homebysimonbelcher.com/#localbusiness",
  "name": "Home By Simon Belcher",
  "url": "https://www.homebysimonbelcher.com/",
  "description": "Home By Simon Belcher is a design-led renovation and interior design company in Harpenden, Hertfordshire, offering services from light-touch redesign to full home renovations, including kitchens, bathrooms, home offices, landscaping, and commercial refurbishment.",
  "image": [
    "https://static.wixstatic.com/media/346d40_4e6151212a1b42dba090b51605ca849a~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/346d40_4e6151212a1b42dba090b51605ca849a%7Emv2.png",
    "https://static.wixstatic.com/media/9e22c5_db9229a159e141f3bad7bc74439a2666~mv2.jpg/v1/fill/w_384,h_576,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMAGE%202.jpg",
    "https://static.wixstatic.com/media/9e22c5_fc9b3e8b71c44892bc0afae88f11b47a~mv2.jpg/v1/fill/w_473,h_473,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMAGE%201.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/346d40_4e6151212a1b42dba090b51605ca849a~mv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/346d40_4e6151212a1b42dba090b51605ca849a%7Emv2.png",
  "telephone": "+44-7973-829-437",
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Harpenden, Hertfordshire"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Harpenden",
    "addressRegion": "Hertfordshire",
    "addressCountry": "GB"
  },
  "priceRange": "£££",
  "founder": {
    "@type": "Person",
    "name": "Simon Belcher"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-7973-829-437",
    "contactType": "customer service",
    "areaServed": "GB",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com",
    "https://www.instagram.com"
  ],
  "serviceType": "Home renovation and interior design",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Home renovation and design services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home renovation",
          "description": "Complete renovation management from start to finish, including full home refurbishments and remastering of living spaces."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Interior design consultation",
          "description": "Design consultation, ideas and suggestions to create a final home design tailored to the client."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Kitchen and bathroom renovation",
          "description": "Design and renovation of kitchens, bathrooms and utility rooms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Home office and garden office conversions",
          "description": "Conversion of existing rooms, garages and garden spaces into functional home offices and meeting rooms."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Landscaping and outdoor spaces",
          "description": "Landscaping, outside kitchens, patios and garden remastering."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial design and refurbishment",
          "description": "Commercial office and meeting room design and refurbishment, including technical installations and bespoke finishes."
        }
      }
    ]
  }
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();

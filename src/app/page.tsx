"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import MediaAbout from "@/components/sections/about/MediaAbout";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FeatureCardSix from "@/components/sections/feature/FeatureCardSix";
import MetricCardEleven from "@/components/sections/metrics/MetricCardEleven";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterMedia from "@/components/sections/footer/FooterMedia";
import { Award, CheckCircle, Hammer, HelpCircle, ShoppingCart, Star, TrendingUp, Users } from "lucide-react";

export default function LandingPage() {
  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Features", id: "features" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="elastic-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="compact"
      sizing="largeSmallSizeMediumTitles"
      background="aurora"
      cardStyle="outline"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Navkar Building & Material" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Premium Flooring & Grouting Solutions"
          description="Navkar Building & Material delivers superior quality flooring, grouting, and construction materials for residential and commercial projects. Experience durability, precision, and excellence in every project."
          background={{ variant: "gradient-bars" }}
          tag="Quality Building Materials"
          tagIcon={Hammer}
          tagAnimation="slide-up"
          buttons={[
            { text: "Explore Products", href: "#products" },
            { text: "Contact Us", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/pickled-tomatoes-placed-stone-table_2831-8730.jpg"
          imageAlt="Professional flooring installation"
          mediaAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="About Navkar Building & Material"
          description="With over two decades of expertise, Navkar Building & Material has established itself as a trusted name in the construction and flooring industry. We provide premium-quality materials, professional grouting solutions, and exceptional customer service to builders, contractors, and homeowners across the region."
          tag="Industry Leaders"
          tagIcon={Award}
          tagAnimation="slide-up"
          buttons={[{ text: "Learn More", href: "#features" }]}
          buttonAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/two-people-working-warehouse_329181-12819.jpg"
          imageAlt="Navkar Building & Material facility"
          useInvertedBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Our Premium Products"
          description="Discover our comprehensive range of flooring and construction materials designed for durability and aesthetic appeal."
          tag="Product Range"
          tagIcon={ShoppingCart}
          tagAnimation="slide-up"
          buttons={[{ text: "View All Products", href: "#contact" }]}
          buttonAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "tiles",              name: "Premium Floor Tiles",              price: "Custom Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/crispbread-falling-from-overturned-yellow-bucket-marble-surface_114579-61251.jpg?_wi=1",              imageAlt: "Premium ceramic and porcelain floor tiles"
            },
            {
              id: "grout",              name: "Professional Grouting Material",              price: "Custom Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/crispbread-falling-from-overturned-yellow-bucket-marble-surface_114579-61251.jpg?_wi=2",              imageAlt: "High-quality grouting compounds"
            },
            {
              id: "adhesive",              name: "Tile Adhesive & Bonding",              price: "Custom Pricing",              imageSrc: "http://img.b2bpic.net/free-photo/repairing-tools_1417-1784.jpg",              imageAlt: "Professional tile adhesive products"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          title="Why Choose Navkar Building & Material"
          description="We combine premium materials with expert service to deliver exceptional results for every project."
          tag="Key Benefits"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          features={[
            {
              id: 1,
              title: "Unmatched Durability",              description: "Our flooring and grouting materials are engineered to withstand heavy use and maintain their quality for decades, ensuring long-term value for your investment.",              imageSrc: "http://img.b2bpic.net/free-photo/woman-playing-with-her-child-hardwood-floor_23-2147909440.jpg?_wi=1",              imageAlt: "Durable flooring materials"
            },
            {
              id: 2,
              title: "Expert Installation Support",              description: "We provide professional guidance and support throughout the installation process, ensuring perfect results and customer satisfaction on every project.",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-men-with-safety-vests_23-2148269349.jpg?_wi=1",              imageAlt: "Professional installation process"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Our Track Record"
          description="Trusted by thousands of satisfied clients across the region."
          tag="Proven Excellence"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "20+",              title: "Years of Experience",              description: "Serving the construction industry with excellence and reliability",              imageSrc: "http://img.b2bpic.net/free-photo/woman-playing-with-her-child-hardwood-floor_23-2147909440.jpg?_wi=2",              imageAlt: "Durable flooring materials"
            },
            {
              id: "2",              value: "5000+",              title: "Projects Completed",              description: "Residential and commercial projects delivered with precision",              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-men-with-safety-vests_23-2148269349.jpg?_wi=2",              imageAlt: "Professional installation process"
            },
            {
              id: "3",              value: "98%",              title: "Customer Satisfaction",              description: "Consistently exceeding client expectations",              imageSrc: "http://img.b2bpic.net/free-photo/woman-playing-with-her-child-hardwood-floor_23-2147909440.jpg?_wi=3",              imageAlt: "Customer satisfaction"
            },
            {
              id: "4",              value: "50+",              title: "Product Varieties",              description: "Comprehensive range of quality materials",              imageSrc: "http://img.b2bpic.net/free-photo/crispbread-falling-from-overturned-yellow-bucket-marble-surface_114579-61251.jpg?_wi=3",              imageAlt: "Product variety"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Our products and services are preferred by top builders and contractors in the industry."
          tag="Industry Partners"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          names={[
            "BuildPro Contractors",            "Elite Builders Group",            "Modern Construction Inc",            "Premium Homes Co",            "Urban Development Ltd",            "Quality Structures",            "Master Builders Alliance"
          ]}
          logos={[
            "http://img.b2bpic.net/free-vector/business-card-with-abstract-building_1057-4472.jpg",            "http://img.b2bpic.net/free-vector/corporate-identity-navy-blue-tone_23-2147509505.jpg",            "http://img.b2bpic.net/free-vector/business-flyer-design_1435-1121.jpg",            "http://img.b2bpic.net/free-vector/retro-design-logo-set_23-2148464165.jpg",            "http://img.b2bpic.net/free-photo/happy-smiling-female-entrepreneur-small-business-owner-working-with-client-orders-website-packing_1258-88415.jpg",            "http://img.b2bpic.net/free-vector/gradient-mountain-logo-design_23-2151257010.jpg",            "http://img.b2bpic.net/free-vector/abstract-business-card-template-with-photo_23-2148370828.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Customer Testimonials"
          description="Real feedback from satisfied clients about our products and services."
          tag="Client Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          showRating={true}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "Rajesh Kumar",              handle: "Founder, BuildPro Contractors",              testimonial: "Navkar Building & Material has been our trusted partner for over 10 years. Their flooring and grouting materials are consistently high quality, and their customer service is exceptional. Highly recommended!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-satisfied-bearded-guy-white-shirt-showing-thumbs-up-approval-like-agree-positiv_1258-113283.jpg",              imageAlt: "Rajesh Kumar"
            },
            {
              id: "2",              name: "Priya Sharma",              handle: "Project Manager, Elite Builders",              testimonial: "We've used Navkar's products on multiple large-scale projects. The durability and aesthetic appeal are unmatched. Their team's support during installation was invaluable.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/student-showing-ok-sign_1149-179.jpg",              imageAlt: "Priya Sharma"
            },
            {
              id: "3",              name: "Amit Patel",              handle: "Architect, Modern Designs Studio",              testimonial: "The variety and quality of tiles from Navkar elevate every project design. Their professional guidance helps us make the perfect material choices for each client.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-dress-code-posing-as-professional_114579-15939.jpg",              imageAlt: "Amit Patel"
            },
            {
              id: "4",              name: "Sneha Desai",              handle: "Interior Designer",              testimonial: "Navkar offers excellent quality at competitive prices. My clients love the aesthetic options available, and the installation support was top-notch.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing-studio_176474-36234.jpg",              imageAlt: "Sneha Desai"
            },
            {
              id: "5",              name: "Vikram Singh",              handle: "Construction Manager, Urban Development",              testimonial: "Working with Navkar has streamlined our supply chain. Their reliability and product quality have significantly improved our project timelines and client satisfaction.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-young-male-construction-worker-wearing-safety-helmet-uniform-safety-glasses-looking-camera-with-crossed-arms-isolated-white-background_141793-132492.jpg",              imageAlt: "Vikram Singh"
            },
            {
              id: "6",              name: "Anjali Mehta",              handle: "Home Owner",              testimonial: "We renovated our home using Navkar's flooring and materials. The results exceeded our expectations. Beautiful, durable, and the service was outstanding from start to finish.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-working-interior-design-project_23-2150346547.jpg",              imageAlt: "Anjali Mehta"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services."
          tag="Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "What types of flooring materials do you offer?",              content: "We offer a comprehensive range including ceramic tiles, porcelain tiles, natural stone, and specialized flooring solutions for both residential and commercial applications. All materials are selected for their durability and aesthetic appeal."
            },
            {
              id: "2",              title: "Do you provide installation support?",              content: "Yes, we provide expert guidance and professional support throughout the installation process. Our team is available to answer technical questions and ensure optimal results for your project."
            },
            {
              id: "3",              title: "What is your grouting product warranty?",              content: "Our grouting materials come with comprehensive warranties. We guarantee durability and resistance to moisture, staining, and cracking under normal conditions. Details are available upon purchase."
            },
            {
              id: "4",              title: "Can you handle large commercial orders?",              content: "Absolutely. We specialize in both residential and commercial projects of any scale. Our team can provide bulk pricing and customized solutions tailored to your project requirements."
            },
            {
              id: "5",              title: "Are your products eco-friendly?",              content: "We are committed to sustainability. Many of our products incorporate eco-friendly materials and manufacturing processes. Contact us to learn more about our green product options."
            },
            {
              id: "6",              title: "How do I place an order or get a quotation?",              content: "You can contact us directly through our website, phone, or email. Our sales team will provide detailed quotations and assist you with ordering based on your specific project needs."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions or ready to place an order? Contact Navkar Building & Material today. Our team is ready to assist with your flooring and construction material needs."
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/happy-smiling-woman-talking-mobile-phone_171337-12896.jpg?_wi=1"
          imageAlt="Contact our team"
          mediaPosition="right"
          inputs={[
            { name: "fullName", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your project or inquiry...", rows: 5, required: true }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/happy-smiling-woman-talking-mobile-phone_171337-12896.jpg?_wi=2"
          imageAlt="Navkar Building & Material"
          logoText="Navkar Building & Material"
          copyrightText="© 2025 Navkar Building & Material. All rights reserved."
          columns={[
            {
              title: "Products",              items: [
                { label: "Floor Tiles", href: "#products" },
                { label: "Grouting Materials", href: "#products" },
                { label: "Adhesives", href: "#products" },
                { label: "Sealers", href: "#products" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Projects", href: "#metrics" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Installation Guide", href: "#" },
                { label: "Warranty", href: "#" },
                { label: "Privacy Policy", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Phone", href: "tel:+91-XXXXXXXXXX" },
                { label: "Email", href: "mailto:info@navkarbuilding.com" },
                { label: "Address", href: "#" },
                { label: "Hours", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

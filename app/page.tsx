"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Star, ArrowRight, Check, Search, Shield, Users, BarChart3, ThumbsUp, Quote } from "lucide-react";


// Store review data
const storeReviews = [
  {
    id: "1",
    storeName: "FreshMart Grocery",
    location: "Downtown, New York",
    rating: 4.7,
    reviews: 284,
    category: "Grocery",
    description: "Best place for fresh produce and organic products. Their customer service is exceptional!",
    user: {
      name: "Sarah Johnson",
      role: "Regular Customer",
      avatar: "/avatar1.png"
    }
  },
  {
    id: "2",
    storeName: "TechGadgets",
    location: "Silicon Valley, CA",
    rating: 4.9,
    reviews: 512,
    category: "Electronics",
    description: "Amazing selection of tech products with competitive prices. Knowledgeable staff and great warranty options.",
    user: {
      name: "Mike Chen",
      role: "Tech Enthusiast",
      avatar: "/avatar2.png"
    }
  },
  {
    id: "3",
    storeName: "FashionHub Boutique",
    location: "Beverly Hills, CA",
    rating: 4.5,
    reviews: 187,
    category: "Clothing",
    description: "Trendy fashion with quality materials. Their seasonal sales are absolutely worth waiting for!",
    user: {
      name: "Emily Rodriguez",
      role: "Fashion Blogger",
      avatar: "/avatar3.png"
    }
  },
  {
    id: "4",
    storeName: "HomeEssentials",
    location: "Seattle, WA",
    rating: 4.8,
    reviews: 346,
    category: "Home Goods",
    description: "Everything you need for your home at reasonable prices. Their delivery service is fast and reliable.",
    user: {
      name: "David Kim",
      role: "Homeowner",
      avatar: "/avatar4.png"
    }
  }
];

// Platform stats
const platformStats = [
  { value: "50K+", label: "Active Users" },
  { value: "10K+", label: "Rated Stores" },
  { value: "100K+", label: "Reviews" },
  { value: "95%", label: "Satisfaction Rate" }
];

// Features data
const features = [
  {
    title: "Authentic Reviews",
    description: "Real customer experiences from verified purchases",
    icon: <ThumbsUp className="h-8 w-8" />
  },
  {
    title: "Detailed Ratings",
    description: "Rate stores on multiple criteria for comprehensive evaluation",
    icon: <BarChart3 className="h-8 w-8" />
  },
  {
    title: "Trustworthy Community",
    description: "Join a community of honest reviewers and store owners",
    icon: <Users className="h-8 w-8" />
  },
  {
    title: "Secure Platform",
    description: "Your data and privacy are our top priority",
    icon: <Shield className="h-8 w-8" />
  }
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

function AnimateWhenVisible({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
    >
      {children}
    </motion.div>
  );
}

function ReviewCard({ review }: { review: typeof storeReviews[0] }) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{review.storeName}</CardTitle>
            <CardDescription className="mt-1">{review.location} • {review.category}</CardDescription>
          </div>
          <div className="flex items-center bg-primary/10 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{review.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(review.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} 
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({review.reviews} reviews)</span>
        </div>
        <p className="text-muted-foreground mb-4 italic">"{review.description}"</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <span className="text-sm font-medium text-primary">
              {review.user.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium">{review.user.name}</p>
            <p className="text-xs text-muted-foreground">{review.user.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with DarkVeil */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
              StoreRate
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white mb-10">
              WHERE SHOPPERS AND STORES CONNECT
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center space-x-8 mb-12"
          >
            {["HOME", "FEATURES", "REVIEWS", "CONTACT"].map((item, index) => (
              <a 
                key={index} 
                href={index === 0 ? "#" : `#${item.toLowerCase()}`}
                className="text-white font-medium hover:text-blue-200 transition-colors"
              >
                {item}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <p className="text-xl text-white mb-10">
              DISCOVER HONEST STORE RATINGS AND REVIEWS FROM REAL CUSTOMERS. MAKE INFORMED SHOPPING DECISIONS AND SUPPORT BUSINESSES THAT EXCEL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className=" text-primary hover:bg-gray-100">
                <Link href="/register">GET STARTED</Link>
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToFeatures} className="border-white text-white hover:bg-white/10">
                LEARN MORE
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WHY CHOOSE STORERATE?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground">
                OUR PLATFORM OFFERS UNPARALLELED INSIGHTS INTO STORE PERFORMANCE AND CUSTOMER SATISFACTION.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-lg border"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Button size="lg" asChild>
              <Link href="/register">JOIN OUR COMMUNITY</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              REAL STORE REVIEWS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              SEE WHAT OUR COMMUNITY IS SAYING ABOUT THEIR SHOPPING EXPERIENCES
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {storeReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Button asChild>
              <Link href="/reviews">EXPLORE MORE REVIEWS</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              HOW STORERATE WORKS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "FIND STORES", 
                description: "SEARCH FOR STORES BY NAME, CATEGORY, OR LOCATION." 
              },
              { 
                title: "READ REVIEWS", 
                description: "SEE HONEST RATINGS AND REVIEWS FROM REAL CUSTOMERS." 
              },
              { 
                title: "SHARE EXPERIENCES", 
                description: "RATE STORES BASED ON YOUR OWN SHOPPING EXPERIENCES." 
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-xl text-center border"
              >
                <div className="text-3xl font-bold text-primary mb-4">{index + 1}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WHAT OUR USERS SAY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "RACHEL T.",
                role: "FREQUENT SHOPPER",
                quote: "StoreRate has completely changed how I choose where to shop. The detailed reviews save me time and money!",
                rating: 5
              },
              {
                name: "MARK S.",
                role: "STORE OWNER",
                quote: "As a business owner, StoreRate provides invaluable feedback that helps me improve my customer experience.",
                rating: 5
              },
              {
                name: "LISA M.",
                role: "BUDGET CONSCIOUS",
                quote: "I love being able to see which stores offer the best value before I even step foot inside.",
                rating: 4
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-foreground/10 p-8 rounded-xl"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-current" : "text-primary-foreground/30"}`} 
                    />
                  ))}
                </div>
                <Quote className="h-8 w-8 mb-4 opacity-50" />
                <p className="italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              READY TO JOIN OUR COMMUNITY?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              SIGN UP TODAY TO START EXPLORING AND REVIEWING STORES IN YOUR AREA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/register">CREATE ACCOUNT</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/login">SIGN IN</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
"use client";

import React, { useEffect, useState } from "react";
import { useLoading } from "../contexts/LoadingSpinnerProvider";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Filter,
  Eye,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt:
      "Learn how to structure large-scale React applications using modern patterns, state management, and performance optimization techniques.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "Performance", "JavaScript"],
    image: "/images/modern-web-design-dashboard.png",
    views: 1250,
    likes: 89,
    comments: 23,
    featured: true,
    slug: "building-scalable-react-applications",
  },
  {
    id: 2,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2024-01-10",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Web Development", "Trends", "AI", "Future"],
    image: "/images/e-commerce-website-layout.png",
    views: 980,
    likes: 67,
    comments: 15,
    featured: true,
    slug: "future-web-development-trends-2024",
  },
  {
    id: 3,
    title: "Mastering TypeScript: Advanced Patterns and Best Practices",
    excerpt:
      "Deep dive into advanced TypeScript patterns, generics, utility types, and how to write maintainable, type-safe code.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2024-01-05",
    readTime: "12 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Programming"],
    image: "/images/modern-design-system-interface-with-dark-theme.png",
    views: 756,
    likes: 45,
    comments: 12,
    featured: false,
    slug: "mastering-typescript-advanced-patterns",
  },
  {
    id: 4,
    title: "Design Systems: Creating Consistent User Experiences",
    excerpt:
      "A comprehensive guide to building and maintaining design systems that scale across teams and products.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2023-12-28",
    readTime: "10 min read",
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Figma", "Design"],
    image: "/images/portfolio-website-design.png",
    views: 634,
    likes: 38,
    comments: 8,
    featured: false,
    slug: "design-systems-consistent-user-experiences",
  },
  {
    id: 5,
    title: "Mobile App Development with React Native: A Complete Guide",
    excerpt:
      "Everything you need to know about building cross-platform mobile applications using React Native and modern development practices.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2023-12-20",
    readTime: "15 min read",
    category: "Mobile",
    tags: [
      "React Native",
      "Mobile Development",
      "Cross-platform",
      "JavaScript",
    ],
    image: "/images/mobile-app-interface.png",
    views: 892,
    likes: 56,
    comments: 19,
    featured: false,
    slug: "react-native-mobile-app-development-guide",
  },
  {
    id: 6,
    title: "Performance Optimization: Making Your Web Apps Lightning Fast",
    excerpt:
      "Learn essential techniques for optimizing web application performance, from code splitting to caching strategies.",
    content: "Full article content here...",
    author: "William Gyasi",
    publishedAt: "2023-12-15",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Development", "Speed"],
    image: "/images/modern-web-design-dashboard.png",
    views: 723,
    likes: 42,
    comments: 11,
    featured: false,
    slug: "web-app-performance-optimization",
  },
];

const categories = [
  { id: "all", label: "All Posts", count: blogPosts.length },
  {
    id: "React",
    label: "React",
    count: blogPosts.filter((post) => post.category === "React").length,
  },
  {
    id: "Web Development",
    label: "Web Development",
    count: blogPosts.filter((post) => post.category === "Web Development")
      .length,
  },
  {
    id: "TypeScript",
    label: "TypeScript",
    count: blogPosts.filter((post) => post.category === "TypeScript").length,
  },
  {
    id: "Design",
    label: "Design",
    count: blogPosts.filter((post) => post.category === "Design").length,
  },
  {
    id: "Mobile",
    label: "Mobile",
    count: blogPosts.filter((post) => post.category === "Mobile").length,
  },
  {
    id: "Performance",
    label: "Performance",
    count: blogPosts.filter((post) => post.category === "Performance").length,
  },
];

export default function BlogPage() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredPosts = blogPosts
    .filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        case "popular":
          return b.views - a.views;
        case "trending":
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isContentReady]);

  return (
    <div ref={containerRef} className="w-full">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 mb-4"
          initial={{ scale: 0 }}
          animate={startAnimation ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <BookOpen className="w-6 h-6 text-blue-400" />
          <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">
            Tech Blog
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Latest Articles
        </motion.h1>

        <motion.p
          className="text-lg text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Insights, tutorials, and thoughts on modern web development, design
          systems, and the latest in technology.
        </motion.p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-blue-400"
            />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-white/60" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/5 border border-white/20 text-white rounded-md px-3 py-2 text-sm focus:border-blue-400 focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Most Liked</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Featured Posts Section */}
      {selectedCategory === "all" && searchQuery === "" && (
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={
            startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <FeaturedPostCard
                key={post.id}
                post={post}
                index={index}
                startAnimation={startAnimation}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 1.4 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              startAnimation
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4, delay: 1.6 + index * 0.1 }}
          >
            <Button
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-transparent text-white/70 border-white/20 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {category.label}
              <span className="ml-1 text-xs opacity-70">
                ({category.count})
              </span>
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <BlogPostCard
            key={post.id}
            post={post}
            index={index}
            startAnimation={startAnimation}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No articles found
          </h3>
          <p className="text-white/60">
            Try adjusting your search or filter criteria.
          </p>
        </motion.div>
      )}
    </div>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
  startAnimation: boolean;
}

function BlogPostCard({ post, index, startAnimation }: BlogPostCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Post Image */}
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium">
                {post.category}
              </span>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full font-medium">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Post Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-4 text-xs text-white/60 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-3 line-clamp-2">
              {post.title}
            </h3>

            <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-white/10 text-white/60 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Stats and Read More */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {post.likes}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {post.comments}
                </div>
              </div>

              <Button
                size="sm"
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0 h-auto"
              >
                Read More
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

interface FeaturedPostCardProps {
  post: BlogPost;
  index: number;
  startAnimation: boolean;
}

function FeaturedPostCard({
  post,
  index,
  startAnimation,
}: FeaturedPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium">
                  {post.category}
                </span>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 text-xs rounded-full font-medium">
                  Featured
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-white/80 text-sm mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Read Article
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

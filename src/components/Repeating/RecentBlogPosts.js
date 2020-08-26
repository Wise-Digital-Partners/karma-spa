import React from "react";

import RecentPosts from '../Blog/BlogRecentPosts';

const Blog = () => {
        
    return (
        <section className={`wrapper`}>
            <div className="container">
                <header className="md-8 md:mb-16">
                    <h2>The Karma Blog</h2>
                    <p className="text-xl md:text-2xl font-heading text-gray-900 font-light">Discover what’s new and learn how to live a life of true relaxation.</p>
                </header>
                <RecentPosts />
            </div>
        </section>
    );
}

export default Blog;
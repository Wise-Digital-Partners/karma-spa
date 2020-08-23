import React from "react";

import RecentPosts from '../Blog/BlogRecentPosts';

const Blog = () => {
        
    return (
        <section className={`wrapper`}>
            <div className="container">
                <header className="md-8 md:mb-16">
                    <h2>The Karma Blog</h2>
                    <p className="text-2xlarge font-heading">Discover what’s new and learn how to live a life of true relaxation.</p>
                </header>
                <RecentPosts />
            </div>
        </section>
    );
}

export default Blog;
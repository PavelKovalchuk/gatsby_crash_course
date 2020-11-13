import React from "react";

import { Link, graphql } from "gatsby";

export default function Template({ data }) {
  const post = data.markdownRemark;

  console.log("Template data", data);

  if (!post) {
    return null;
  }

  return (
    <div>
      <Link to="/blog">Go back</Link>
      <hr />

      <h1>{post.frontmatter.title}</h1>
      <h3>
        Posted by {post.frontmatter.author} on <i>{post.frontmatter.date}</i>
      </h3>

      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPathQuery($slug: String) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        date
        author
      }
    }
  }
`;

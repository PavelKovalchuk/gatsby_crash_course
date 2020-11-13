import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  console.log("BlogPage data ", data)
  return (
    <Layout>
      <SEO title="Blog Page" />
      <h1>Latest posts</h1>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{" "}
              <i>{post.node.frontmatter.date}</i>
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read more</Link>
            <br />
            <br />
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage

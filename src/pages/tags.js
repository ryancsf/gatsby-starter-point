// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Tags = ({ data }) => {
  const allTags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <div>
        <SEO title="Tags" />
        <h2>Tags</h2>
        <ul>
          {allTags.map((tag) => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

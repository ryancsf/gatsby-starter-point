import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Headroom from "react-headroom"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    return (
      <header>
        <Headroom>
          <div className="navbar">
            <h2 className="site-title">
              <Link to="/">{siteTitle}</Link>
            </h2>

            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="tog">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  {theme === "dark" ? (
                    <div className="on"></div>
                  ) : (
                    <div className="off"></div>
                  )}
                </label>
              )}
            </ThemeToggler>
          </div>
        </Headroom>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

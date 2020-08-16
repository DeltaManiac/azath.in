import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRust } from '@fortawesome/free-brands-svg-icons';
import { rhythm, scale } from "../utils/typography";

const bioQuery = graphql`
    query BioQuery {
        avatar: file(absolutePath: { regex: "/avataaars.png/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        site {
            siteMetadata {
                author
            }
        }
    }
`;

const Container = styled.div`
    display: flex;
    margin-bottom: 30px;
`;

const Description = styled.span`
    font-size: 13px;
`;

function Bio() {
    return (
        <StaticQuery
            query={bioQuery}
            render={data => {
                const { author } = data.site.siteMetadata
                return (
                    <Container>
                        <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                                marginRight: rhythm(1 / 2),
                                marginBottom: 0,
                                minWidth: 50,
                                borderRadius: `100%`,
                            }}
                            imgStyle={{
                                borderRadius: `50%`,
                                marginBottom: 0,
                            }}
                        />
                        <div>
                            Written by <strong>{author}</strong>.<br />
                            <FontAwesomeIcon
                                icon={faRust}
                                style={{
                                    height: '20px',
                                    ...scale(0.3),
                                }}
                            /> <Description>An Aspiring Developer in India.</Description>
                        </div>
                    </Container>
                )
            }}
        />
    )
}

export default Bio

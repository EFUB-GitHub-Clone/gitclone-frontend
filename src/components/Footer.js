import React from "react";
import styled, {css} from "styled-components";
import GitHubIcon from '../assets/github-icon.png';

const Footer = () => {
    return (
        <Foot>
            <p>© 2021 GitHub, Inc.</p>
            <Link href="https://docs.github.com/en/github/site-policy/github-terms-of-service">Terms</Link>
            <Link href="https://docs.github.com/en/github/site-policy/github-privacy-statement">Privacy</Link>
            <Link href="https://github.com/security">Security</Link>
            <Link href="https://www.githubstatus.com/">Status</Link>
            <Link href="https://docs.github.com/en">Docs</Link>
            <Logo src={GitHubIcon}/>
            <Link href="https://support.github.com/?tags=dotcom-footer">Contact Github</Link>
            <Link href="https://github.com/pricing">Pricing</Link>
            <Link href="https://docs.github.com/en">API</Link>
            <Link href="https://services.github.com/">Training</Link>
            <Link href="https://github.blog/">Blog</Link>
            <Link href="https://github.com/about">About</Link>
        </Foot>
    );
};

const Foot = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%; 
    height: 20vh;
    color: gray;
    font-size: 0.8rem;
`;

const Logo = styled.img`
    height: 1.5rem;
    width: 1.5rem;
    padding: 0.5rem;
    &:hover {
    cursor: pointer;
}
`;

const Link = styled.a`
    text-decoration-line: none;
    color: #0969da;
    &:visited {
        text-decoration: none;
        color: #0969da;
    }
    &:hover {
        text-decoration: underline;
    }
`

export default Footer;
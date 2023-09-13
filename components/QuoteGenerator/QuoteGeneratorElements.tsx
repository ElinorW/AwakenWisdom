'use client'

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(to right, #ff2cdf, #0014ff);
    background-size: 400% 400%;
    animation: gradient 6s ease infinite;
    height: 100vh;
    width: 100vw;
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

export const FooterCon = styled.div`
    width: 100vw;
    height: 50px;
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    color: white;
    z-index: 999999;
`;

export const FooterLink = styled(Link)`
    color: white;
`;

export const QuoteGeneratorCon = styled.div`
    min-height: 350px;
    min-width: 350px;
    height: 70vh;
    width: 70vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;

    backdrop-filter: blur(5px); 
    background-color: rgba(255, 255, 255, 1); 
    border-radius: 26px; 
    box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5), 
    inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6), 
    inset 0px 11px 28px 0px rgb(255, 255, 255);
`;

export const QuoteGeneratorInnerCon = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-size: 50px;
    text-align: center;
    color: #000000;
    padding: 0px 20px 0px 20px;
    position: relative;
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export const QuoteGeneratorSubTitle = styled.div`
    color: white;
    font-family: 'Source Code Pro', monospace;
    font-size: 35px;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0px 20px 0px 20px;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`;

export const GenerateQuoteButton = styled.button`
    height: 100px;
    width: 300px;
    border:2px solid darkgrey;
    border-radius: 20px;
    margin-top: 20px;
    position: relative;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    top: 20px;
    margin: auto;
    transform-origin: center;

    backdrop-filter: blur(5px); 
    background-color: #91C0FF; 
    border-radius: 26px; 
    box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5), 
    inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6), 
    inset 0px 11px 28px 0px rgb(255, 255, 255);
    &:hover{
        filter: brightness(3);
        transition: 0.2s all ease-in-out;
        transform: scale(1.1);
        transform-origin: center;
    }
`;

export const GenerateQuoteButtonText = styled.div`
    color: white;
    font-family: 'Source Code Pro', monospace;
    font-size: 35px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 100%;
    text-align: center;
    `;
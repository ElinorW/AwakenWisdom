'use client'
import { 
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon, 
  FooterCon, 
  FooterLink,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorTitle, 
  QuoteGeneratorSubTitle, 
  GenerateQuoteButton, 
  GenerateQuoteButtonText 
} from '@/components/QuoteGenerator/QuoteGeneratorElements'
import Image from 'next/image'
import { useState } from 'react';

import Cloud1 from 'assets/cloud-and-thunder.png';
import plantspot2 from 'assets/plantspot2.webp';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);

    return (
    <GradientBackgroundCon>
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>
            Awaken Wisdom
          </QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
            Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by 
            <FooterLink href='https://zenquotes.io' target='_blank' rel='noopenenr noreferrer'> Zen Quotes API </FooterLink>
          </QuoteGeneratorSubTitle>
          <GenerateQuoteButton >
            <GenerateQuoteButtonText onClick={null}>
              Make a Quote
            </GenerateQuoteButtonText>
          </GenerateQuoteButton>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      <BackgroundImage1 
          src={Cloud1}
          height="300"
          alt="cloudybackground1"
        />

        <BackgroundImage2 
          src={plantspot2}
          height="300"
          alt="cloudybackground1"
        />
      <FooterCon>
        <>
        Quotes Generated: {numberOfQuotes}
        <br />
        Developed with 💟 by <FooterLink href="www.linkedin.com/in/elinor-kaguongo" 
        target="_blank" rel="noopener noreferrer">@Elinor Kaguongo</FooterLink>
        </>
      </FooterCon>
    </GradientBackgroundCon>
  )
}

// Import React
import React from 'react';
import web3 from './web3'

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Magic,
  Layout,
  Fill,
  Link,
  Image,
} from 'spectacle'

import Slide1 from './slide1'
import PriceComparison from './pricecomparison'

import daiLogo from './images/dai logo.png'
import makerLogo from './images/maker logo.png'
import maker from './images/maker logo with text.png'
import cdp1 from './images/cdp1.png'
// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide>
          <Image src={maker} height="600px" />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1} textColor="secondary">
            Live Free and Dai Hard
            </Heading>
          <Heading margin="100px 0 0" textColor="tertiary" size={4} bold>
            How Maker Built a More Stable Coin
            </Heading>
        </Slide>
        <Slide>
          <Heading textColor="tertiary" size={4} bold>
            Mariano Conti
          </Heading>
          <Heading margin="100px 0 0" textColor="tertiary" size={4} bold>
            Developer at MakerDAO
          </Heading>
          <Heading margin="100px 0 0" textColor="tertiary" size={4} bold>
            Proud Porteño
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            What is MakerDAO
          </Heading>
          <Image src={makerLogo} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            A platform for Stability
          </Heading>
          <Image src={makerLogo} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary" fit>
            1 DAI = 1 USD
          </Heading>
          <Image src={daiLogo} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary" fit>
            Why is Dai important?
          </Heading>
          <Appear>
            <div><PriceComparison /></div>
          </Appear>
        </Slide>
        <Slide>
          <Slide1 />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary" fit>
            How does Dai work?
          </Heading>
        </Slide>
        <Slide>
          <Image src={daiLogo} height="350px" />
          <Heading size={4} lineHeight={1.3} textColor="secondary">
            Imagine the gold standard but with any asset
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} lineHeight={1.3} textColor="secondary">
            Two types of users
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Stability Seekers
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="secondary">
            vs
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Risk Seekers
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary" fit>
            Collateralized Debt Position
          </Heading>
          <Heading size={3} lineHeight={1} textColor="tertiary">
            (CDP)
          </Heading>
          <List>
            <ListItem>Borrow Dai by locking up collateral</ListItem>
            <ListItem>Repay Dai + fee to retrieve collateral</ListItem>
          </List>
          <Image src={cdp1} height="420px" />
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1.3} textColor="secondary">
            Global Decentralized Credit System
          </Heading>
          <Image src={makerLogo} height="500px" />
        </Slide>
        <Slide>
          <Image src={daiLogo} height="250px" />
          <Heading size={2} lineHeight={1.3} textColor="secondary">
            Dai time Story #1
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Getting paid in Dai
          </Heading>
        </Slide>
        <Slide>
          <Image src={daiLogo} height="250px" />
          <Heading size={2} lineHeight={1.3} textColor="secondary">
            Dai time Story #2
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Buying a car
          </Heading>
        </Slide>
        <Slide>
          <Image src={daiLogo} height="250px" />
          <Heading size={2} lineHeight={1.3} textColor="secondary">
            Dai time Story #3
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Going full in on ETH
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} lineHeight={1.3} textColor="secondary" fit>
            Interacting with a CDP
          </Heading>
          <List>
            <ListItem>Join / Exit</ListItem>
            <ListItem>Open / Shut</ListItem>
            <ListItem>Lock / Free</ListItem>
            <ListItem>Draw / Wipe</ListItem>
          </List>
        </Slide>
        <Slide>
          <Image src={daiLogo} height="250px" />
          <Heading size={2} lineHeight={1.3} textColor="secondary">
            Multi-collateral Dai
          </Heading>
          <Heading size={3} lineHeight={1.8} textColor="tertiary">
            Coming soon!
          </Heading>
        </Slide>
        <Slide>
          <Heading textColor="secondary">
            Join our community
          </Heading>
          <Image src={makerLogo} width="200px" />
          <Text margin="20px 0 0" textColor="tertiary" bold>
            makerdao.com
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" bold>
            chat.makerdao.com
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" bold>
            /r/MakerDAO
          </Text>
          <Text margin="20px 0 0" textColor="tertiary" bold>
            @MakerDAO
          </Text>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            Buenos Aires office
          </Heading>
          <Heading size={1} lineHeight={1.5} textColor="tertiary">
            coming soon!
          </Heading>
        </Slide>
        <Slide>
          <Heading textColor="secondary">
            We are hiring!
          </Heading>
          <Image src={makerLogo} width="300px" />
          <Link href="https://makerdao.com/careers/">
            <Text textAlign="left" textColor="tertiary" bold>
              makerdao.com/careers/
                </Text>
          </Link>
          <Link href="https://angel.co/makerdao" margin={10}>
            <Text textAlign="left" textColor="tertiary" bold>
              angel.co/makerdao
                </Text>
          </Link>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            Thank you :)
          </Heading>
          <Heading size={1} lineHeight={1.5} textColor="tertiary">
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

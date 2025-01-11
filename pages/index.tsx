import Head from 'next/head'
import Image from 'next/image'
import NextLink from "next/link"
import { Mulish } from '@next/font/google'
import { Flex, Text } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'
import React from 'react'
import Signin from './signin';

const mulish = Mulish({ subsets: ['latin'], weight:'400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Payzaza</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <NextLink href="/signin" passHref>
            <p>
              Sign In
            </p>
          </NextLink>
          <div className={styles.qpsser}>
              By 
                <a href="https://github.com/NACOS-MTU" target="_blank" rel="noopener noreferrer">
                  NACOS MTU
                </a> | 
          </div>
        </div>
        <Flex className={styles.center} pointerEvents='none'>
          <div>
            <Text color="white" fontSize={80} mt={2} fontWeight={500} textAlign="center">
              Payzaza
              </Text>
            </div>
        </Flex>

        <div className={styles.grid}>
          <NextLink
            href="/audio"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Audio Query System <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              Find out how we leveraged a multilingual text-to-speech model to build an audio query system which determine actions
            </p>
          </NextLink>

          <NextLink
            href="/loans"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Loan Worthiness System <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              Learn more about our supervised learning model which we use to determine the optimal max loan amount.
            </p>
          </NextLink>

          <NextLink
            href="/social-banking"
            className={styles.card}
            passHref
          >
            <h2 className={mulish.className}>
              Social Banking as a Service <span>-&gt;</span>
            </h2>
            <p className={mulish.className}>
              See what makes social banking platform so much different as we take advantage of the advent of decentralized exchanges
            </p>
          </NextLink>

        </div>
      </main>
    </>
  )
}

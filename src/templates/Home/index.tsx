import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'
const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="Um simples projeto para mostrar os lugares por onde ja viajei."
        canonical="https://my-trips.luizfelipe.com.br"
        openGraph={{
          url: 'https://my-trips.luizfelipe.com.br',
          title: 'My Trips',
          description:
            'Um simples projeto para mostrar os lugares por onde ja viajei',
          images: [
            {
              url: 'https://my-trips.luizfelipe.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

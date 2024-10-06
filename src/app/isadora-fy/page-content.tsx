'use client'

import { Check, Images, Share2, Stars } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { AnimesList } from './animes-list'
import { GamesList } from './games-list'

export function PageContent() {
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    const currentUrl = window.location.href

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          console.log('Link copiado com sucesso!')
          setCopy(true)
          setTimeout(() => setCopy(false), 2000)
        })
        .catch((err) => {
          console.error('Erro ao copiar o link: ', err)
        })
    } else {
      const textArea = document.createElement('textarea')
      textArea.value = currentUrl
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopy(true)
      setTimeout(() => setCopy(false), 2000)
    }
  }

  const IsadoraImagens = [
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/456231523_1235160887664851_3916450229774209273_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=Kzt6v2cUncEQ7kNvgHxSlCb&_nc_gid=f8cee884e3694bc5a273690845ab8107&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzQ0MjU3MjMyMTYxMjA0OTkxOQ%3D%3D.3-ccb7-5&oh=00_AYCYRrvsUXYUvQu3JStRDIx8webQkTGDzegrcLXfUBwDAg&oe=6707BBBA&_nc_sid=7a9f4b',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/450801783_466384296319878_7024064247443769941_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=dt1D0Ot33QYQ7kNvgFVP0cC&_nc_gid=a989e0305e3a411a879b4f54a1a272ea&edm=ACpohRwBAAAA&ccb=7-5&ig_cache_key=MzQxMjczNjEzNzU3NDY3MzAwMw%3D%3D.3-ccb7-5&oh=00_AYAuiGAFMlolaviKoYI9g5_56EezU_NG9ZxX3tAcfaP-ug&oe=6707D33B&_nc_sid=2d3a3f',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/451058516_832701915146810_9177089114698044520_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0Mzkuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Funy655U3rsQ7kNvgGSZLt-&_nc_gid=a989e0305e3a411a879b4f54a1a272ea&edm=ACpohRwBAAAA&ccb=7-5&ig_cache_key=MzQxMjczNjEzNzU1NzkyMTM3Mg%3D%3D.3-ccb7-5&oh=00_AYAsjK4GGsX7oBKjZCD1aue2LGGIRUVsnhDcRqcoIW_Htg&oe=6707FE4E&_nc_sid=2d3a3f',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/363892701_284934607517974_6830873376410309034_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CnlLyrUopy4Q7kNvgHFmDxR&_nc_gid=f8cee884e3694bc5a273690845ab8107&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzE2NjM4NTE0MTM2NjUwMjczOA%3D%3D.3-ccb7-5&oh=00_AYAH0Z6trIo4t-5t6jccge-GMuZT0Xmd7ayAyOWgjnGmjg&oe=6707A8AD&_nc_sid=7a9f4b',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.2885-15/56422476_2347739575466117_7482399938019225796_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyODg1LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ffvHHkwdll8Q7kNvgHwj8EK&_nc_gid=f8cee884e3694bc5a273690845ab8107&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MjAyNTEzMTUxNDk5MzI3NjUyNA%3D%3D.3-ccb7-5&oh=00_AYD2k1HR-useURubDGH3my5_cfeR39TfhV6V8mrD0Tf1JA&oe=6707BBE1&_nc_sid=7a9f4b',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/366111130_823212952796495_5676151407091571404_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=tQcSl5MFPbEQ7kNvgG03r8b&_nc_gid=a989e0305e3a411a879b4f54a1a272ea&edm=ACpohRwBAAAA&ccb=7-5&ig_cache_key=MzE2NjM4NTE0MTM3NDg3NTkxOA%3D%3D.3-ccb7-5&oh=00_AYDjEcw9Yy_2iXWlX97o4-IKcsZi7JbizAG2y6UPDJEL5g&oe=6707DF52&_nc_sid=2d3a3f',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/366115513_2196643653858538_8780163510970637816_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=yRG5QcIJNboQ7kNvgEqWDdm&_nc_gid=a989e0305e3a411a879b4f54a1a272ea&edm=ACpohRwBAAAA&ccb=7-5&ig_cache_key=MzE2NjM4NTE0MTQ0MTk2OTU2MQ%3D%3D.3-ccb7-5&oh=00_AYBrO2qW_2w0oVLOlQQd3uV3iqfAJU3W-SQhMa0Pjm_MIA&oe=6707E38B&_nc_sid=2d3a3f',
    },
    {
      link: 'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.29350-15/366414397_811416517145856_8841354955791360250_n.jpg?se=7&stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=L3o41-maYwgQ7kNvgHllXWR&_nc_gid=a989e0305e3a411a879b4f54a1a272ea&edm=ACpohRwBAAAA&ccb=7-5&ig_cache_key=MzE2NjM4NTE0MTQzMzcxNjc4Mg%3D%3D.3-ccb7-5&oh=00_AYCrJF3Y7mQeJwApgjQQcKt4gARP6j3PJuccaK9rmV7NNw&oe=6707E072&_nc_sid=2d3a3f',
    },
  ]

  return (
    <div className="flex h-screen flex-col">
      <div className="mt-4 flex w-full gap-4 px-4">
        <div className="mt-2 flex flex-col">
          <div className="mask mask-heart flex size-28 items-center justify-center bg-red-700">
            <Image
              className="mask mask-heart"
              src={
                'https://instagram.fvag3-1.fna.fbcdn.net/v/t51.2885-19/457788123_888100643162735_603395883946660014_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fvag3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-rX3tQK92M0Q7kNvgHPa-v6&_nc_gid=f8cee884e3694bc5a273690845ab8107&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYALOM1ikVIEcwFX51J7ta5R9hIUwIiSEvm5JFu4rW-YKg&oe=6707D5D4&_nc_sid=7a9f4b'
              }
              alt="Isadora perfil picture"
              width={107}
              height={107}
            />
          </div>
        </div>

        <Separator orientation="vertical" />

        <div className="flex w-full flex-col">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <Link
                href={
                  'https://www.instagram.com/_isadorapinheiro_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                }
                className="cursor-pointer font-bold"
              >
                Isadora Pinheiro
              </Link>
              <span className="text-sm text-muted-foreground">
                @_isadorapinheiro_
              </span>
            </div>
            <button
              className="aboslute left-0 top-4 cursor-pointer"
              onClick={handleCopy}
            >
              {copy ? <Check /> : <Share2 />}
            </button>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <span className="text-sm font-bold">publicações: 4</span>

            <span className="text-sm font-bold">seguidores: 1.114</span>

            <span className="text-sm font-bold">seguindo: 769</span>
          </div>
        </div>
      </div>

      <Separator orientation="horizontal" className="my-4" />

      <Tabs defaultValue="pictures" className="mx-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pictures">
            <Images className="mr-2 size-4" /> Fotos
          </TabsTrigger>
          <TabsTrigger value="favs">
            <Stars className="mr-2 size-4" /> Favoritos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pictures">
          <div className="grid grid-cols-3">
            {IsadoraImagens.map((img) => {
              return (
                <Image
                  key={img.link}
                  src={img.link}
                  alt="pictures"
                  width={150}
                  height={150}
                  className="flex aspect-square items-center justify-center border"
                />
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="favs">
          <div className="mt-5 flex flex-col gap-5">
            <div>
              <span className="border-b-2">Animes favoritos:</span>
              <AnimesList />
            </div>

            <div>
              <span className="border-b-2">Jogos favoritos:</span>
              <GamesList />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

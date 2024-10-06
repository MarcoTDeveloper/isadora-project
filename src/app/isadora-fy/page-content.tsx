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

  const futureFetchFromInstagram = 'yes'

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

  return (
    <div className="h-screen flex flex-col">
      <div className="flex w-full px-4 gap-4 mt-4">
        <div className="flex flex-col mt-2">
          <div className="mask mask-heart flex items-center justify-center bg-red-700 size-28">
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

        <div className="flex flex-col w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <Link
                href={
                  'https://www.instagram.com/_isadorapinheiro_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                }
                className="font-bold cursor-pointer"
              >
                Isadora Pinheiro
              </Link>
              <span className="text-sm text-muted-foreground">
                @_isadorapinheiro_
              </span>
            </div>
            <button
              className="aboslute top-4 left-0 cursor-pointer"
              onClick={handleCopy}
            >
              {copy ? <Check /> : <Share2 />}
            </button>
          </div>

          <div className="flex flex-col gap-1 mt-4">
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
            <Images className="size-4 mr-2" /> Fotos
          </TabsTrigger>
          <TabsTrigger value="favs">
            <Stars className="size-4 mr-2" /> Favoritos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pictures">
          <div className="grid grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center border"
                >
                  {i}
                </div>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="favs">
          <div className="flex flex-col gap-5 mt-5">
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

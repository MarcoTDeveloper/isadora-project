import Marquee from '@/components/ui/marquee'
import { cn } from '@/lib/utils'

const reviews = [
  {
    name: 'Idantity V',
    body: 'PING MALDITO!!!!!!!!!!',
    img: 'https://play-lh.googleusercontent.com/8-SniYIRaeki791FyNlRggRuIjlxBpYM9k6F7q1UL75FW7IEUSWridDbrXmX5DkTokRq=w240-h480-rw',
  },
  {
    name: 'Dead by daylight',
    body: 'Divetidissimooo',
    img: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1727894560',
  },
  {
    name: 'Valorant',
    body: 'Extremamente dificil ficar bom em FPS...',
    img: 'https://store-images.s-microsoft.com/image/apps.21507.13898029070941789.16950a3e-f961-4170-bca4-c3e4fdceb979.cc7ade6f-6bf6-4323-8205-a11f502287d2?q=90&w=177&h=265',
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string
  name: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="size-8·rounded-full·object-cover"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export function GamesList() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  )
}

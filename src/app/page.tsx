import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center text-red-500">
      <p>Hello Build product fast</p>
      <Button size="sm" className="px-10 block">
        This is a button
      </Button>
    </main>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const blogPosts = [
  {
    title: 'The Future of Medicine: How AI is Changing Drug Discovery',
    summary: 'Explore how artificial intelligence is revolutionizing pharmaceutical research and development.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=60',
    date: '2024-03-15',
  },
  {
    title: 'Understanding the Importance of GMP Certification',
    summary: 'Learn why Good Manufacturing Practice certification is crucial in pharmaceutical production.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60',
    date: '2024-03-10',
  },
  {
    title: "DARIUS Limited's Latest Breakthrough in Healthcare",
    summary: 'Discover our recent innovations in chronic disease management and treatment.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60',
    date: '2024-03-05',
  },
]

export default function BlogSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                <Button variant="outline" asChild>
                  <Link href="/blog">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
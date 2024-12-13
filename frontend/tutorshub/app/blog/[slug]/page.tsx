import { Container, Typography, Box, Chip, IconButton } from '@mui/material';
import { CalendarToday, AccessTime } from '@mui/icons-material';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

interface PageParams {
  slug: string;
}

interface Props {
  params: Promise<PageParams>;
}

const BlogPost = async ({ params }: Props) => {
  const resolvedParams = await params;
  const post = blogPosts.find((post) => post.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-gray-100 to-white">
      <Container maxWidth="lg">
        <Box className="mb-8">
          <Link href="/blog">
            <IconButton 
              aria-label="back to blog"
              className="hover:bg-purple-50 transition-colors"
            >
              <ArrowBack className="text-purple-600" />
            </IconButton>
          </Link>
        </Box>
        <article className="bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-3xl mx-auto">
            <Chip 
              label={post.category}
              className="mb-4 bg-purple-100 text-purple-700"
            />
            
            <Typography 
              variant="h4" 
              className="text-xl md:text-2xl lg:text-3xl text-black font-bold mb-4"
            >
              {post.title}
            </Typography>
            
            <Box className="flex items-center gap-4 text-gray-600 mb-8">
              <Box className="flex items-center gap-1">
                <CalendarToday fontSize="small" />
                <Typography variant="body2">{post.date}</Typography>
              </Box>
              <Box className="flex items-center gap-1">
                <AccessTime fontSize="small" />
                <Typography variant="body2">{post.readTime}</Typography>
              </Box>
            </Box>

            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="prose max-w-none mx-auto px-4 md:px-6 lg:px-8">
                <Typography 
                    variant="body1" 
                    className="text-gray-800 leading-relaxed"
                    sx={{
                        textAlign: 'justify',
                        hyphens: 'auto',
                        wordSpacing: '0.05em',
                        lineHeight: '1.8',
                        '& > p': {
                            marginBottom: '1.5em',
                            textAlign: 'justify',
                            textJustify: 'inter-word'
                        }
                    }}
                >
                    {post.content}
                </Typography>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}

export default BlogPost;
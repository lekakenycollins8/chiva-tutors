import { Card, CardContent, CardMedia, Typography, Chip, Box } from '@mui/material';
import { AccessTime, CalendarToday } from '@mui/icons-material';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="no-underline block group" aria-label={`Read article: ${post.title}`}>
      <Card className="h-full bg-gradient-to-b from-white to-gray-50 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-100">
        <div className="relative">
          <CardMedia
            component="img"
            height="200"
            image={post.image}
            alt={post.title}
            className="h-52 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className="p-6 space-y-4">
          <Box className="flex justify-between items-center">
            <Chip 
              label={post.category}
              size="small"
              className="bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition-colors duration-200"
            />
          </Box>

          <div className="space-y-2">
            <Typography
              variant="h5"
              component="h2"
              className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors duration-200"
            >
              {post.title}
            </Typography>
            
            <Typography
              variant="body2"
              className="text-gray-600 line-clamp-2 leading-relaxed"
            >
              {post.description}
            </Typography>
          </div>

          <Box className="flex items-center gap-4 text-gray-500 pt-2 border-t border-gray-100">
            <Box className="flex items-center gap-1.5 text-sm">
              <CalendarToday className="w-4 h-4" />
              <Typography variant="caption" className="text-sm">
                {post.date}
              </Typography>
            </Box>
            <Box className="flex items-center gap-1.5 text-sm">
              <AccessTime className="w-4 h-4" />
              <Typography variant="caption" className="text-sm">
                {post.readTime}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
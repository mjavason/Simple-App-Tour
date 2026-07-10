import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/posts_/$postId')({
  component: RouteComponent,
});

function RouteComponent() {
  const params = Route.useParams();

  return (
    <PageContainer title={`Post ${params.postId}`}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel a vitae
        officiis ea distinctio aliquid magni eos commodi? Itaque sequi ut, ab
        totam eum facilis beatae nihil sapiente repudiandae. Architecto! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Vel a vitae officiis
        ea distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Vel a vitae officiis ea
        distinctio aliquid magni eos commodi? Itaque sequi ut, ab totam eum
        facilis beatae nihil sapiente repudiandae. Architecto!
      </p>
    </PageContainer>
  );
}

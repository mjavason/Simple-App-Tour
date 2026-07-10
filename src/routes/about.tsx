import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer title={'About'}>
      <div className="text-center">
        <h1>Hello "/about"!</h1>
      </div>
    </PageContainer>
  );
}

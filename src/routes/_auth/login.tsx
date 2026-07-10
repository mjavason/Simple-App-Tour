import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <PageContainer title={'Login'}>
      <div className="text-center">
        <h1>Hello "/_auth/login"!</h1>
      </div>
    </PageContainer>
  );
}

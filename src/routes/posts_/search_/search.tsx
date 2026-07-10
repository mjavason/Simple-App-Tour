import PageContainer from '@/components/PageContainer';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const searchSchema = z.object({
  page: z.number().catch(1),
  pageSize: z.number().catch(20),
  search: z.string().catch(''),
  sort: z.enum(['name', 'email']).catch('name'),
});

export const Route = createFileRoute('/posts_/search_/search')({
  validateSearch: searchSchema,
  component: RouteComponent,
});

function RouteComponent() {
  const search = Route.useSearch();

  return (
    <PageContainer title={'Search Params'}>
      {Object.entries(search).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {String(value)}
        </div>
      ))}
    </PageContainer>
  );
}

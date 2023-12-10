import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData, Form } from '@remix-run/react';
import { OverviewCard } from '~/components/dashboard/overview-card';
import { StandardShell } from '~/components/layout/shells';
import { authenticator } from '~/services/auth.server';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '~/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Overview } from '~/components/dashboard/overview';
import { ActiveUsersCard, DeliveryMealsServedCard, PickupMealsServedCard, TotalMealsServedCard } from '~/components/dashboard/small-info-cards';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return { message: 'You are logged in!' };
};

export default function DashboardRoute() {
  const { message } = useLoaderData<typeof loader>();
  return (
    <StandardShell>
      <div className="flex-1 space-y-4 p-8 pt-6 overflow-y-auto bg-secondary">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics" disabled>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" disabled>
              Reports
            </TabsTrigger>
            <TabsTrigger value="notifications" disabled>
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <TotalMealsServedCard />
              <ActiveUsersCard />
              <PickupMealsServedCard />
              <DeliveryMealsServedCard />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <OverviewCard />
            </div>
          </TabsContent>
        </Tabs>


        <h1>{message}</h1>
        <Form method='post' action='/logout'>
          <button type='submit'>Logout</button>
        </Form>
      </div>
    </StandardShell>
  );
}
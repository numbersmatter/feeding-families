import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";




const invoice = {
  subTotal: '$285.00',
  tax: '$0.00',
  total: '$285.00',
  items: [
    {
      id: 1,
      title: 'Box Food',
      description: 'Grains and canned goods.',
      hours: '20.0',
      rate: '$4.00',
      price: '$80.00',
    },
    {
      id: 2,
      title: 'Protiens',
      description: 'Meat and dairy products.',
      hours: '16.0',
      rate: '$10.00',
      price: '$160.00',
    },
    {
      id: 3,
      title: 'Specialty Items',
      description: 'Desert and other specialty items.',
      hours: '8.0',
      rate: '$5.00',
      price: '$40.00',
    },
    {
      id: 4,
      title: 'Doordash Delivery',
      description: 'Delivery of food to customer.',
      hours: '1.0',
      rate: '$5.00',
      price: '$5.00',
    },
  ],
};

const fromAddress = {
  name: 'Communities In Schools',
  address: '19 East Guilford Street',
  city: 'Thomasville',
  state: 'NC',
  postalCode: '27360',
};

const toAddress = {
  name: 'Jane Smith',
  address: '14 Randolph Street',
  city: 'Thomasville',
  state: 'NC',
  postalCode: '27360',
};




export function FoodRequestDetailsCard() {



  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Food Request Details
        </CardTitle>
        <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
          <div className="sm:pr-4">
            <dt className="inline text-muted-foreground">Requested</dt>{' '}
            <dd className="inline text-muted-foreground">
              <time dateTime="2023-23-10">October 23, 2023</time>
            </dd>
          </div>
          <div className="mt-2 sm:mt-0 sm:pl-4">
            <dt className="inline text-muted-foreground">Approved</dt>{' '}
            <dd className="inline text-muted-foreground">
              <time dateTime="2023-2-11">November 2, 2023</time>
            </dd>
          </div>
          <div className="mt-6 border-t border-gray-900/5 pt-6 sm:pr-4">
            <dt className="font-semibold text-muted-foreground">From</dt>
            <dd className="mt-2 text-muted-foreground">
              <span className="font-medium text-muted-foreground">
                {fromAddress.name}
              </span>
              <br />
              {fromAddress.address}
              <br />
              {fromAddress.city}, {fromAddress.state} {fromAddress.postalCode}
            </dd>
          </div>
          <div className="mt-8 sm:mt-6 sm:border-t sm:border-gray-900/5 sm:pl-4 sm:pt-6">
            <dt className="font-semibold text-muted-foreground">To</dt>
            <dd className="mt-2 text-muted-foreground">
              <span className="font-medium text-muted-foreground">
                {toAddress.name}
              </span>
              <br />
              {toAddress.address}
              <br />
              {toAddress.city}, {toAddress.state} {toAddress.postalCode}
            </dd>
          </div>
        </dl>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-primary-foreground text-base font-semibold">
              Name
            </p>
            <p className="text-muted-foreground text-sm">
              Description
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-muted-foreground">Received</p>
          </div>
        </div>
        <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
          <colgroup>
            <col className="w-full" />
            <col />
            <col />
            <col />
          </colgroup>
          <thead className="border-b border-gray-200 text-secondary-foreground">
            <tr>
              <th scope="col" className="px-0 py-3 font-semibold">
                Box Contents
              </th>
              <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                Units
              </th>
              <th scope="col" className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell">
                Unit Cost
              </th>
              <th scope="col" className="py-3 pl-8 pr-0 text-right font-semibold">
                Costs
              </th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id} className="border-b border-gray-100">
                <td className="max-w-0 px-0 py-5 align-top">
                  <div className="truncate font-medium text-muted-foreground">{item.title}</div>
                  <div className="truncate text-muted-foreground">{item.description}</div>
                </td>
                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-muted-foreground sm:table-cell">
                  {item.hours}
                </td>
                <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-secondary-foreground sm:table-cell">
                  {item.rate}
                </td>
                <td className="py-5 pl-8 pr-0 text-right align-top tabular-nums text-secondary-foreground">{item.price}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className="px-0 pb-0 pt-6 font-normal text-muted-foreground sm:hidden">
                Subtotal
              </th>
              <th
                scope="row"
                colSpan={3}
                className="hidden px-0 pb-0 pt-6 text-right font-normal text-muted-foreground sm:table-cell"
              >
                Subtotal
              </th>
              <td className="pb-0 pl-8 pr-0 pt-6 text-right tabular-nums text-secondary-foreground">invoice.subTotal</td>
            </tr>
            <tr>
              <th scope="row" className="pt-4 font-normal text-muted-foreground sm:hidden">
                Tax
              </th>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-4 text-right font-normal text-muted-foreground sm:table-cell"
              >
                Tax
              </th>
              <td className="pb-0 pl-8 pr-0 pt-4 text-right tabular-nums text-muted-foreground">invoice.tax</td>
            </tr>
            <tr>
              <th scope="row" className="pt-4 font-semibold text-muted-foreground sm:hidden">
                Total
              </th>
              <th
                scope="row"
                colSpan={3}
                className="hidden pt-4 text-right font-semibold text-muted-foreground sm:table-cell"
              >
                Total
              </th>
              <td className="pb-0 pl-8 pr-0 pt-4 text-right font-semibold tabular-nums text-muted-foreground">
                invoice.total
              </td>
            </tr>
          </tfoot>
        </table>
      </CardContent>
    </Card>
  )
}
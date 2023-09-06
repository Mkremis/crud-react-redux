import {
  Card,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  BadgeDelta,
  DeltaType,
} from '@tremor/react';

const users: {
  id: string;
  name: string;
  email: string;
  github: string;
}[] = [
  {
    name: 'Peter Doe',
    id: '1',
    email: 'peterDoe@mail.com',
    github: 'peterDoe',
  },
  {
    name: 'Lena Whitehouse',
    id: '2',
    email: 'lenaWhitehouse@mail.com',
    github: 'lenaWhitehouse',
  },
  {
    name: 'Phil Less',
    id: '3',
    email: 'philLess@mail.com',
    github: 'philLess',
  },
  {
    name: 'John Camper',
    id: '4',
    email: 'johnCamper@mail.com',
    github: 'johnCamper',
  },
  {
    name: 'Max Balmoore',
    id: '5',
    email: 'maxBalmoore@mail.com',
    github: 'maxBalmoore',
  },
  {
    name: 'Peter Moore',
    id: '6',
    email: 'peterMoore@mail.com',
    github: 'peterMoore',
  },
  {
    name: 'Joe Sachs',
    id: '7',
    email: 'joeSachs@mail.com',
    github: 'joeSachs',
  },
];

export function ListOfUsers() {
  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Id</TableHeaderCell>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Acciones</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

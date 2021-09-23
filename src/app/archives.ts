export interface Archive {
  id: number;
  title: string;
  location: string;
  description: string;
  storage: string;
  category: string;
  tag: Array<String>;
  creator: string;
  createdOn: string;
  url: string;
}

export const archives = [
  {
    id: 1,
    title: '2018 Sojourn',
    location: 'Main',
    description: '2018 Sojourn',
    storage: 'Box 21',
    category: 'Test',
    tag: ['Test 1', 'Test 2'],
    creator: 'HPHS Students',
    createdOn: '2018',
    url: 'http://google.com'
  },
  {
    id: 2,
    title: 'Item 2',
    location: 'HPHS Library',
    description: 'A large phone with one of the best screens',
    storage: 'Box 1',
    category: 'Test',
    tag: ['Test 1', 'Test 2'],
    creator: 'HPHS Student',
    createdOn: 'Test',
    url: ''
  },
  {
    id: 3,
    title: 'Item 3',
    location: 'HPHS Library',
    description: 'A large phone with one of the best screens',
    storage: 'Box 1',
    category: 'Test',
    tag: ['Test 1', 'Test 2'],
    creator: 'HPHS Student',
    createdOn: 'Test',
    url: ''
  },
];

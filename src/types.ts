export type Stufflist = {
  id: string;
  title: string;
  icon: string | null;
  authorId: string;
};

export type Stuff = {
  id: string;
  title: string;
  description: string | null;
  status: boolean;
  important: boolean;
  createdAt: Date;
  creatorId: string;
  listId: string;
};
